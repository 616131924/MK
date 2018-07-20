
const db = require('../config/db.js')
const usermodel='../schema/user.js'
const userlist = db.yiyouji

const user=userlist.import(usermodel)

const getuserbyid = async function (id) {
  const userInfo = await user.findOne({ 
    where: {
      id: id
    }
  })

  return userInfo
}

  const getuserbyname= async function (name){
    const userinfo = await user.findOne({
      where:{
        user_name: name
      }
    });
     return userinfo
  }

  const checkuser = async function(data){
    const info = await user.findOne({
      where:{
        user_name:data.name
      }
    })
    return info
  }

  const createuser = async function(data){
    await user.create({
      user_name:data.name,
      password:data.password,
      email:data.email,
      phone:data.phone
    })
    return true
  }
const modified = async function(data){
  await user.update({
      user_name:data.name,
    password:data.password,
    email:data.email,
    phone:data.phone,
  },{
    where:{
      id:data.id
    }
  })
  return true
}
module.exports={getuserbyid,getuserbyname,createuser,checkuser,modified}