<template>
  <div>
   <panel button v-for="youji in data" :key="youji.id" :list='youji' ></panel>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'
export default {
  data () {
    return {
      data:''
    }
  },
  created(){
      const userinfo=this.getuserinfo()
    let obj ={
        id:userinfo.id
    }
    const result = this.$http.post('/api/myyoujilist',obj)
    result.then((res)=>{
      this.data=res.data
      console.log(res.data)
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
