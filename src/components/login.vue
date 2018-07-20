<template>
  <div>
    <x-header >login<a slot="right" @click="goto">注册</a></x-header>
    <x-input title="用户名" required v-model="user"></x-input>
    <x-input title="密码" required v-model="password"></x-input>
    <x-button @click.native='logintodo()'>login</x-button>
    <toast v-model="show" type='warn'>{{message}}</toast>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user:'',
      password:'',
      message:'',
      show:false
    }
  },
  methods:{
    logintodo(){
      console.log('hell')
      let obj ={
        name: this.user,
        password: this.password
      }
      const result=this.$http.post('/auth/user',obj)
        result.then((res)=>{
          if(res.data.success){
            sessionStorage.setItem('demo-token',res.data.token);
          console.log('登陆成功')
          this.$router.push('/user')
          }else{
            console.log(res.data.info)
            sessionStorage.setItem('demo-tokne',null)
            this.message=res.data.info
            this.show=true
          }
        },(err)=>{
          console.log('请求错误'),
          sessionStorage.setItem('demo-token',null)
           this.message='请求错误'
            this.show=true
        })
    },
    goto(){
      this.$router.push('/regsiter')
    }
  }
}
</script>

<style>

</style>