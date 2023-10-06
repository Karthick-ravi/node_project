import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import common from "../src/routes/common"
const useragent = require('express-useragent');

const server = express()
const port = process.env.PORT

mongoose.connect('mongodb://localhost:27017/myMongodb', { useNewUrlParser: true, useUnifiedTopology: true });
server.use(useragent.express());
server.use(cors())
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
server.use(bodyParser.json({ limit: '50mb' }));


server.use("/common", common)

server.listen(port, () => { 
    console.log(`server running at port ${port}`)
})