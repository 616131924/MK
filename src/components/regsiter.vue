<template>
  <div>
    <x-header >注册</x-header>
    <x-input title="用户名" required v-model="user"></x-input>
    <x-input title="密码" required v-model="password"></x-input>
     <x-input title="电话" required v-model="phone"></x-input>
    <x-input title="邮箱" required v-model="email"></x-input>
    <x-button @click.native='logintodo()'>注册</x-button>
    <toast v-model="show" type='warn'>{{message}}</toast>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user:'',
      password:'',
      phone:'',
      email:'',
      message:'',
      show:false
    }
  },
  methods:{
    logintodo(){
      let obj ={
        name: this.user,
        password: this.password,
        phone:this.phone,
        email:this.email
      }
      const result=this.$http.post('/auth/regsiter',obj)
        result.then((res)=>{
          if(res.data.success){
            this.$router.push('/user')
          console.log('注册成功')
          }else{
            this.message=res.data.info
            this.show=true
          }
        },(err)=>{
          console.log('请求错误'),
           this.message='请求错误'
            this.show=true
        })
    }
  }
}
</script>

<style>

</style>