
const auth = require('../controllers/user.js')
const youji = require('../controllers/youji.js')
const koaRouter =require('koa-router')
const router=koaRouter()

router.get('/user/:id',auth.getuserinfo)
router.post('/user',auth.postuserauth)
router.get('/youji',youji.getlist)
router.get('/youji/:id',youji.getyoujilist)
router.get('/comment/:id',youji.getcommentlist)
router.post('/regsiter',auth.createuser)
router.post('/usercount',auth.getusercount)
router.post('/modified',auth.modified)
router.post('/getimage',youji.getimage_name)

module.exports=router