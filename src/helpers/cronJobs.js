import axios from 'axios';
import productsModel from '../models/products';
var CronJob = require('cron').CronJob;

function cron() {  
    // Track real-time CPU utilization of the node server and on 70% usage restart the server.  
    var jobOne = new CronJob(
        '* * * * * *',
        function () {            
            const previousUsage = process.cpuUsage();
            const startDate = Date.now();   
            while (Date.now() - startDate < 500);         
            const usage = process.cpuUsage(previousUsage);
            const result = 100 * (usage.user + usage.system) / ((Date.now() - startDate) * 1000)
            if (result > process.env.HIGH_CPU_USAGE_LIMIT) {
                //process.exit()
            }            
        },
        null,
        true,
        'Asia/Calcutta'
    );


    // Create a post-service that takes the message, day, and time in body parameters and it inserts that message into DB at that particular day and time.

    var jobTow = new CronJob (
        '* * 10 * * *',
        function () {         
            axios.get('https://dummyjson.com/products/1', { params: {}}).
            then(response => {
                const data = response.data
                var newProductData = {
                    title : data.title,
                    description : data.description,
                    price : data.price,
                    discountPercentage : data.discountPercentage,
                    rating : data.rating,
                    stock : data.stock,
                    brand : data.brand
                }

                var productData = new productsModel(newProductData)
                productData.save()
            }).catch(error => {
                console.log(error)
            })         
        },
        null,
        true,
        'Asia/Calcutta'
    ) 
}

export default cron