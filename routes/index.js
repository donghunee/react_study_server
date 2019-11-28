var express = require('express');
var router = express.Router();
var post = require('../model/post')
var upload = require('../config/multer')

/* GET home page. */
router.get('/', function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    
    res.status(200).json({
        message:"success",
        data:{
            reactMessage:"여러분 get 성공하셨어요!!!"
        }
    })
});

router.get('/all', function(req, res, next) {
    post.find()
        .then((result) => {
            res.status(200).json({
                message:"success",
                data:{
                    result: result
                }
            })
        })

  });

router.post('/', function(req, res, next) {
    
    const { title, content } = req.body
    console.log(req.body)
    var po = new post()

    po.title = title
    po.content = content

    po.save()
        .then((result) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
           res.status(200).json({
               message: "succecss",
               data:{
                   result: result
               }
           }) 
        })
        .catch((err) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.status(500).json({
                message: "server err",
                data:{
                   error : err 
                }
            })
        })
  });

router.post('/image',upload.single('image'),function(req, res, next) {
    
    const images = req.file
    const { title, content } = req.body
    console.log(images)
    let po = new post()

    po.images = images.location
    po.title = title
    po.content = content

    po.save()
        .then((result) => {
           res.status(200).json({
               message: "succecss",
               data:{
                   result: result
               }
           }) 
        })
        .catch((err) => {
            res.status(500).json({
                message: "server err",
                data:{
                   error : err 
                }
            })
        })

})

module.exports = router;
