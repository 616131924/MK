<template>
  <div>
   <div>
     <x-header >主页<a slot="right" @click="out()">退出登录</a></x-header>
    <router-link to="/modified">
      <div class="touxiang" >
          <p class="center"><img :src="url"></p>
      <p class="nicheng">{{name}}</p>
      <p class="jieshao">生活就像海洋，只有意志坚强的人才能到达彼岸</p>
      </div>
    </router-link>
    <group>
      <cell :title="'我的游记'" is-link link='/myyouji'>
        <div class="badge-value">
          <span class="vertical-middle"></span>
          <badge></badge>
        </div>
      </cell>
      <cell :title="'我的评论'" is-link link='/mycommentlist'>
        <div class="badge-value">
          <span class="vertical-middle">{{commentcount}}</span>
        </div>
      </cell>
      <cell :title="'我的点赞'" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{likecount}}</span>
        </div>
      </cell>
      <cell :title="'意见和反馈'" is-link>
        <div class="badge-value">
        </div>
      </cell>
      <cell :title="'设置'" is-link>
        <div class="badge-value">
        </div>
      </cell>
    </group>
  </div>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken'
import { decode } from 'punycode';
export default {
  data () {
    return {
      id:'',
      name:'',
      likecount:'',
      commentcount:'',
      url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527517808518&di=e3f893085abd509a0e65cb89dc53257b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0b46f21fbe096b639324bc7506338744ebf8acd2.jpg'
    }
  },
  created(){
    const userinfo = this.getuserinfo();
    if (userinfo != null){
      this.id=userinfo.id;
      this.name=userinfo.name;
    }else{
      this.id='';
      this.name='';
    };
    let obj={
      id:userinfo.id
    }
    const count = this.$http.post('/auth/usercount',obj)
    count.then((res)=>{
      this.likecount=res.data.likecount,
      this.commentcount=res.data.commentcount
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
    },
    out(){
      sessionStorage.setItem('demo-token','null')
      this.$router.push('/')
    }
  }
}
</script>

<style>
.touxiang{
  height: 210px;
  background-color: aqua;
}
.nicheng{
  text-align: center;
  font-size: 20px;
  color: black;
}
.jieshao{
  text-align: center;
  font-size: 16px;
  color: rgb(37, 37, 37);
}
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>
