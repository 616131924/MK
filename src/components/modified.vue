<template>
    <div class="a">
        <x-header>编辑个人资料</x-header>
            <x-input title="用户名" required v-model="user"></x-input>
            <x-input title="密码" required v-model="password"></x-input>
            <x-input title="电话" required v-model="phone"></x-input>
            <x-input title="邮箱" required v-model="email"></x-input>
            <x-button @click.native='modified()'>修改</x-button>
            <toast v-model="show" type='warn'>{{message}}</toast>
    </div>
</template>

<script>
import jwt from 'jsonwebtoken'
    export default {
  data () {
    return {
        id:'',
      user:'',
      password:'',
      phone:'',
      email:'',
      message:'',
      show:false
    }
  },
  created(){
      const userinfo=this.getuserinfo();
      this.id=userinfo.id
  },
  methods:{
    modified(){
      let obj ={
          id:this.id,
        name: this.user,
        password: this.password,
        phone:this.phone,
        email:this.email
      }
      const result=this.$http.post('/auth/modified',obj)
        result.then((res)=>{
          if(res.data.success){
            sessionStorage.setItem('demo-token','null')
          console.log('修改成功')
          }else{
          }
        },(err)=>{
          console.log('请求错误'),
           this.message='请求错误'
            this.show=true
        })
    },
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

<style scoped>
.sub-item {
  color: #888;
  text-align: center;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>
