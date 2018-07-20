<template>
  <div v-if ='show' class="panel">
      <div v-if="header" class="panel-header">
          <span>
              <x-img src=""></x-img>
          </span>
          <span class="panel-header-name">
              {{list.user.user_name}}
          </span>
          <span v-if="button" @click="deleteyouji" class="panel-button">x</span>
      </div>
      <div @click="goto" class="panel-title">
          {{list.title}}
      </div>
      <div @click="goto" class="panel-desc">
          <p :style="{WebkitLineClamp: 3}">{{list.content}}</p>
      </div>
      <div>
          <span>评论{{list.commentcount}}</span>
          <span>点赞{{list.likecount}}</span>
          <span>时间{{list.create_time}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        show:true
    }
  },
  props:{
      list:Object,
      header:{
          type:Boolean,
          default:true
      },
      button:{
          type:Boolean,
          default:false
      },
      link:{
          type:String
      }
  },
  methods:{
      goto(){
          this.$router.push('/content/'+this.list.youji_id)
      },
      deleteyouji(){
          let obj ={
              id:this.list.youji_id
          }
          const result=this.$http.post('/api/deleteyouji',obj)
          result.then((res)=>{
              if(res.data.success){
                  console.log('删除成功')
                  this.show=false
              }else{
                  console.log('删除失败')
              }
          })
      }
  }
}
</script>

<style>
.panel{
    width: 100%;
	margin-bottom: 12px;
    padding: 14px 12px;
    background: #FFF;
    box-shadow:7px 6px 11px #B8B8B8;
}
.panel:active{
     background: darken(#FFF,5%);
}
.panel-header{
    height: 24px;
    font-size: 14px;
}
.panel-header-name{
    vertical-align: text-top;
        line-height: 0.7em;
}
.panel-title{
    padding-top: 6px;
    font-size: 16px;
    font-weight: bold;
}
.panel-desc{
    padding: 8px 0;
    line-height: 1.4em;
    font-size: 13px;
}
 .panel-desc p{
        display: -webkit-box;    
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .panel-desc span{
        line-height: 1.8em;
    }
    .panel-button{
    position: relative;
    left: 350px;
    vertical-align: text-top;
        line-height: 0.7em;
}
</style>
