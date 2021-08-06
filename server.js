
//Installed express,multer,cors,nodeman
//Concurrently for starting the nodemon server.js and react-scripts 
//npm i express multer cors nodemon concurrently –save

//react-toastify
//reactstrap

import express from 'express';
import multer, { diskStorage, MulterError } from 'multer';
import cors from 'cors';
import { unlinkSync } from 'fs';



var app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false})); 


var storage = diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'src/Pictures')
  },
  filename: function (req, file, cb) {
    //   cb(null, Date.now() + '-' +file.originalname )
    cb(null,file.originalname)
  }
})

var upload = multer({ storage: storage }).single('file')


//Upload File-------------------------------------
app.post('/uploadFile',function(req, res) {
    console.log(req.file)
    upload(req, res, function (err) {
           if (err instanceof MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)
    })
});


//Delete File--------------------------------------
app.post('/deleteFile',function(req , res) {
    console.log(req.body.file)
        const path = 'src/Pictures/'+req.body.file;
                try {
                unlinkSync(path)
                res.send({
                    deleted:true,
                });
                //file removed
                } catch(err) {
                console.error(err)
                res.send({
                    deleted:false,
                });
                }
   
});



app.get("/home",(req,res)=>{
    console.log("Calling")
    res.send({
        received:false,
        data:"this is Home page",
    });
});


app.listen(8000, function() {
    console.log('App running on port 8000');
});