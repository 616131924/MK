<template>
  <div id="app" class="index">
    <router-view></router-view>
   <tabbar class="tabber">
     <tabbar-item selected link='/'>
       <i slot='icon' class="iconfont icon-neirong2"></i>
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item link='/youji'>
       <i slot='icon' class="iconfont icon-youji"></i>
        <span slot="label">游记</span>
      </tabbar-item>
      <tabbar-item link='/user'>
       <i slot='icon' class="iconfont icon-wode" ></i>
        <span slot="label">个人中心</span>
      </tabbar-item>
   </tabbar>  
  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '//at.alicdn.com/t/font_656419_91t68cf7fp03haor.css';

body {
  background-color: #fbf9fe;
}
.icon{
  font-size: 20px;
}
.tabber{
  position: absolute;
  bottom: 5px;
  float: right;
}
.index{
  max-height: 647px;
  overflow: auto;
  width: 100%;
}
</style>
