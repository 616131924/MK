<template>
  <div>
     <commentpanel button v-for="comment in commentlist" :key="comment.id" :list='comment'></commentpanel>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'
export default {
  data () {
    return {
        commentlist:{}
    }
  },
  created(){
    const userinfo=this.getuserinfo()
    let obj ={
        id:userinfo.id
    }
    const result=this.$http.post('/api/commentlist',obj)
    result.then((res)=>{
        this.commentlist=res.data
    })
  },
  methods:{
      getuserinfo(){
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
