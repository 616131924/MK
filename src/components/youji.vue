<template>
  <div class="index">
    <div>
      <x-header >游记<a slot="right" @click="postyouji">发布游记</a></x-header>
      <group title='开始分享你的游记'>
        <x-input placeholder="输入游记标题" :max=30 v-model='youji_title'></x-input>
        <x-textarea :max=2500 placeholder="游记内容" :rows=18 :autosize='true' v-model='youji_content'></x-textarea>
      </group>  
        <input type="file" name="file" @change="getfile"/>   
      <toast v-model="warning" type='warn'>{{message}}</toast>
    </div>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'
import { decode } from 'punycode';
export default {
  data () {
    return {
      youji_title:'',
      youji_content:'',
      author_id:'',
      warning:false,
      message:'',
      file:''
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
    getfile(event){
      this.file=event.target.files[0]
      console.log(this.file)
    },
    postyouji(){
      let obj ={
        title: this.youji_title,
        content: this.youji_content,
        id:this.author_id,
        file:this.file
      }
      let title=this.youji_title
      let content=this.youji_content
      let id = this.author_id
      let form=new FormData();
      form.append('file',this.file)
      form.append('title',title)
      form.append('content',content)
      form.append('id',id)
      //console.log(form.get('file'))
      const result = this.$http.post('/api/youji',form,{headers:{'Content-Type':'multipart/form-data'}})
      result.then((res)=>{
        if(res.data.success){
          console.log('发布成功')
          this.$router.push('/')
        }else{
          if(res.data.success==false){
          console.log(res.data.info)
          }else{
            console.log('发布失败')
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
.index{
  max-height: 647px;
  overflow: scroll;
}
</style>
