
const user = require('../models/user.js')
const youji = require('../models/youji.js')
const jwt = require('jsonwebtoken')

const getuserinfo = async function (ctx) {
  const id = ctx.params.id 
  const result = await user.getuserbyid(id) 
  ctx.body = result
}
  const postuserauth=async function (ctx){
    const data = ctx.request.body;
    const result = await user.getuserbyname(data.name);
    if(result !=null){
      if(result.password != data.password){
        ctx.body={
          success:false,
          info:'密码错误'
        }
      }else{
        const userToken ={
          name: result.user_name,
          id:result.id
        }
      
      const secret='yiyouji';
      const token = jwt.sign(userToken,secret)
      ctx.body={
        success:true,
        token:token
      }}
    }else{
      ctx.body={
        success:false,
        info:'用户不存在'
      }
    }
  }
  const createuser = async function(ctx){
    const data = ctx.request.body
    const checkresult = await user.checkuser(data);
    if(checkresult != null){
      ctx.body={
        success:false,
        info:'用户名已被占用'
      }
    }else{
      const result= await user.createuser(data);
      ctx.body={
        success:true,
        info:'用户注册成功'
      }
    }
  }
  const getusercount = async function (ctx){
    const data=ctx.request.body
    const likecount=await youji.countlike(data.id);
    const commentcount= await youji.countcomment(data.id);
    ctx.body={
      likecount:likecount,
      commentcount:commentcount
    }
  }
  const modified = async function(ctx){
    const data = ctx.request.body
    const result= await user.modified(data)
    if(result){
      ctx.body={
        success:true
      }
    }else{
      ctx.body={
        success:false
      }
    }
  }
module.exports={getuserinfo,postuserauth,createuser,getusercount,modified}