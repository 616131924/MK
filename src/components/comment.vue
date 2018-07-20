<template>
  <div>
    <div>
      <group title='开始撰写你对本文章的评论吧'>
        <x-textarea :max=200 placeholder="评论内容" :rows=18 v-model='comment_content'></x-textarea>
      </group>
      <toast v-model="warning" type='warn'>{{message}}</toast>
      <x-button @click.native="postcomment()">发布</x-button>
    </div>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'
import { decode } from 'punycode';
export default {
  data () {
    return {
      comment_content:'',
      author_id:'',
      youji_id:this.$route.params.id,
      warning:false,
      message:''
    }
  },
  created(){
        const userinfo = this.getuserid();
        if(userinfo !=null && userinfo !='null'){
          this.author_id=userinfo.id
        }else{
          this.author_id=''
        }
  },
  methods:{
    postcomment(){
      let obj ={
        content: this.comment_content,
        id:this.author_id,
        youji_id:this.youji_id
      }
      const result = this.$http.post('/api/comment',obj)
      result.then((res)=>{
        if(res.data.success){
          console.log('评论成功')
          this.$router.push('/content/'+this.youji_id)
        }else{
          if(res.data.success==false){
            this.warning=true;
            this.message=res.data.info
          }else{
            console.log('评论失败')
          }
        }
      },(err)=>{
        console.log('请求错误')
        this.warning=true;
          this.message=err.response.data.info
      })
    },
    getuserid(){
       const token = sessionStorage.getItem('demo-token');
      if(token !=null && token != 'null'){
        let decode = jwt.decode(token);
        return decode
      }else{
        return null
      }
    }
  }
}
</script>

<style>

</style>