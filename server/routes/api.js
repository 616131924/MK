const youjilist = require('../controllers/youji.js')
const user = require('../controllers/user.js')
const koaRouter =require('koa-router')
const router=koaRouter()
const multermodel=require('koa-multer')
const fs= require('fs')
const path=require('path')

const multer=multermodel({dest:'./server/public'})

// var storage = multermodel.diskStorage({  
//     //文件保存路径  
//     destination: function (req, file, cb) {  
//       cb(null, '../public')  
//     },  
//     //修改文件名称  
//     filename: function (req, file, cb) {  
//       var fileFormat = (file.originalname).split(".");  
//       cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
//     }  
//   })
// const multer=multermodel({storage:storage})
//router.post('/youji',youjilist.createyouji)
router.post('/youji',multer.single('file'),youjilist.createyouji)
router.get('/youji',youjilist.getlist)
router.post('/comment',youjilist.createcomment)
router.post('/like',youjilist.createlike)
router.post('/commentlist',youjilist.getcommentlistbyuser)
router.post('/deletecomment',youjilist.deletecommentbyid)
router.post('/myyoujilist',youjilist.getyoujibyuserid)
router.post('/deleteyouji',youjilist.deleteyoujibyid)

module.exports = router;