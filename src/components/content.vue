<template>
     <div>
         <x-header >游记</x-header>
         <group>
         <div>
      <div v-if="header">
          <span>
              <x-img src=""></x-img>
          </span>
          <span>
              {{list.user.user_name}}
          </span>
          <span v-if="button"></span>
      </div>
      <div>
          {{list.title}}
      </div>
      <div>
          <p :style="{WebkitLineClamp: 3}">{{list.content}}</p>
      </div>
      <div>
          <span @click="goto"><i slot='icon' class="iconfont icon-pinglun"></i></span>
          <span @click="like()"><i slot='icon' :class="zan"></i></span>
          <span>时间{{list.create_time}}</span>
      </div>
  </div>
     </group>
     <group title="图片" v-if="this.image_show">
        <x-img :src='this.image_src'></x-img>
     </group>
     <group title='评论'>
         <commentpanel v-for="comment in commentlist" :key="comment.id" :list='comment'></commentpanel>
     </group>
     <toast v-model="warning" type='warn'>{{message}}</toast>
     </div>
</template>

<script>
import jwt from 'jsonwebtoken'
export default {
  data () {
    return {
        list:{
            user:{
                
            }
        },
        commentlist:{},
        viewer_id:'',
        viewer_name:'',
        zan:'iconfont icon-zan1',
        warning:false,
        message:'',
        image_src:'',
        image_show:true
    }
  },
  created(){
      const result = this.$http.get('/auth/youji/'+this.id)
    result.then((res)=>{
      this.list=res.data
      //console.log(res.data.title)
      this.$http.post('/auth/getimage',{title:res.data.title})
      .then((res)=>{
          if(res.data.image_name=='null'||res.data.image_name==null){
              this.image_show=false
          }else{
              this.image_src='http://localhost:8889/'+res.data.image_name.imagename;
              this.image_show=true;
          }
      })
    })
    const commentlist=this.$http.get('auth/comment/'+this.id)
    commentlist.then((res)=>{
        this.commentlist=res.data
    })
    const userinfo = this.getuserinfo()
    if(userinfo !=null){
        this.viewer_id=userinfo.id,
        this.viewer_name=userinfo.name
    }else{
        this.viewer_id='',
        this.viewer_name=''
    }
  },
  props:{
      id:String,
      header:{
          type:Boolean,
          default:true
      },
      button:{
          type:Boolean,
          default:false
      }
  },
  methods:{
      goto(){
          this.$router.push('/comment/'+this.id)
      },
      getuserinfo(){
          const token = sessionStorage.getItem('demo-token');
      if(token !=null && token != 'null'){
        let decode = jwt.decode(token);
        return decode
      }else{
        return null
      }
      },
      like(){
          let obj ={
              id:this.viewer_id,
              youji_id:this.id
          }
          const result = this.$http.post('/api/like',obj)
      result.then((res)=>{
        if(res.data.success){
          console.log('点赞')
          this.zan='iconfont icon-zan'
        }else{
          if(res.data.success==false){
              console.log('gg')
              this.warning=true;
              this.message=res.data.info
          }else{
            console.log('点赞失败')
          }
        }
      },(err)=>{
          console.log('请求错误')
          //console.log(err.response.data)
          this.warning=true;
          this.message=err.response.data.info
      })
      }
  }
}
</script>

<style>
@import '//at.alicdn.com/t/font_656419_91t68cf7fp03haor.css';
.icon{
    font-size: 20px;
}
</style>
