
const db = require('../config/db.js')
const youjimodel='../schema/youji.js'
const usermodel='../schema/user.js'
const likemodel='../schema/like0.js'
const commentmodel='../schema/comment.js'
const imagemodel='../schema/images.js'
const youjilist = db.yiyouji

const image=youjilist.import(imagemodel)
const user = youjilist.import(usermodel)
const like0 = youjilist.import(likemodel)
const youji=youjilist.import(youjimodel)
const comment=youjilist.import(commentmodel)

youji.belongsTo(user,{foreignKey:'author_id'})
youji.hasMany(like0,{foreignKey:'youji_id'})
like0.belongsTo(youji,{foreignKey:'youji_id'})
comment.belongsTo(user,{foreignKey:'user_id'})

const getyoujilistbyid  =async function (id){
    const youjilist=await youji.findOne({
        where:{
            youji_id : id
        },
        include:{
            model:user,
            attributes:['id','user_name']
        },
        attributes:['youji_id','title','content','create_time']
    })
    return youjilist
}

const createyouji =async function (data){
    await youji.create({
        author_id:data.id,
        content:data.content,
        title:data.title,
        create_time:data.time
    })
    return true
}

const getyoujibyuserid =async function (id){
    const youjilist=await youji.findAll({
        where:{
            author_id : id
        },
        include:{
            model:user,
            attributes:['id','user_name']
        },
        attributes:['youji_id','title','content','create_time','likecount','commentcount']
    })
    return youjilist
}

const getyoujilist = async function (){
    const youjilist=await youji.findAll({
        include:{
            model:user,
            attributes:['id','user_name']
        },
        attributes:['youji_id','title','content','create_time','likecount','commentcount'],
        order:[['youji_id','DESC']]
    })
    return youjilist
}
const getlikecount = async function(){
    const likecount = await like0.count({
        include:{
            model:youji
        },
        group:'like.youji_id',
        attributes:['youji_id']
    })
    return likecount
}
const getcomment = async function(id){
    const commentlist= await comment.findAll({
        where:{
            youji_id:id
        },
        include:{
            model:user,
            attributes:['id','user_name']
        },
        attributes:['comment_id','content','create_time']
    })
    return commentlist
}
const createcomment = async function(data){
    await comment.create({
        user_id:data.id,
        content:data.content,
        youji_id:data.youji_id,
        create_time:data.time
    })
    return true
}
const createlike = async function(data){
    await like0.create({
        youji_id:data.youji_id,
        user_id:data.id
    })
    return true
}
const countcomment = async function(id){
    const commentcount = await comment.count({
        where:{
            user_id:id
        }
    })
    return commentcount
}
const countlike = async function(id){
    const likecount= await like0.count({
        where:{
            user_id:id
        }
    })
    return likecount
}
const getcommentbyuser = async function(id){
    const usercommentlist= await comment.findAll({
        where:{
            user_id:id
        },
        include:{
            model:user,
            attributes:['id','user_name']
        },
        attributes:['comment_id','content','create_time']
    })
    return usercommentlist
}
const deletecommentbyid = async function(id){
    await comment.destroy({
        where:{
            comment_id:id
        }
    })
    return true
}
const deleteyouji = async function(id){
    await like0.destroy({
        where:{youji_id:id}
    })
    await comment.destroy({
        where:{
            youji_id:id
        }
    })
    await youji.destroy({
        where:{
            youji_id:id
        }
    })
    return true
}
const createimage=async function(youji_title,imagename){
    await image.create({
        youji_title:youji_title,
        imagename:imagename
    })
}
const getimage=async function(title){
    const image_name=await image.findOne({
        where:{
            youji_title:title
        },
        attributes:['imagename']
    })
    return image_name
}
module.exports={
    getyoujilistbyid,
    createyouji,
    getyoujibyuserid,
    getyoujilist,
    getlikecount,
    getcomment,
    createcomment,
    createlike,
    countlike,
    countcomment,
    getcommentbyuser,
    deletecommentbyid,
    deleteyouji,
    createimage,
    getimage
}