import multer from "multer"
const upload = multer({
    limits :{
        fileSize : 10000000000
    },
}).array('upload',50)

export { upload }