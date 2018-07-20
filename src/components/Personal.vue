<template>
  <div>
    <router-link to="/PersonalInformation">
      <div class="touxiang" >
       <bler :url="url">
          <p class="center"><img :src="url"></p>
        </bler>
      <p class="nicheng">Chen</p>
      <p class="jieshao">生活就像海洋，只有意志坚强的人才能到达彼岸</p>
      </div>
    </router-link>
    <group>
      <cell :title="'我的消息'" is-link>
        <div class="badge-value">
          <span class="vertical-middle">新消息 &nbsp;</span>
          <badge></badge>
        </div>
      </cell>
      <cell :title="'我的游记'" is-link>
        <div class="badge-value">
          <span class="vertical-middle">0 &nbsp;</span>
        </div>
      </cell>
      <cell :title="'我的收藏'" is-link>
        <div class="badge-value">
          <span class="vertical-middle">16 &nbsp;</span>
        </div>
      </cell>
      <cell :title="'浏览记录'" is-link>
        <div class="badge-value">
          <span class="vertical-middle">30 &nbsp;</span>
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
  
</template>

<script>
import { Blur, Cell, Badge, Group } from 'vux'

export default {
  components: {
    Blur,
    Cell,
    Badge,
    Group
  },
  data () {
    return {
      url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527517808518&di=e3f893085abd509a0e65cb89dc53257b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0b46f21fbe096b639324bc7506338744ebf8acd2.jpg',
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
