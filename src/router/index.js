import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import youji from '@/components/youji.vue'
import user from '@/components/user.vue'
import login from '@/components/login.vue'
import content from '@/components/content.vue'
import comment from '@/components/comment.vue'
import register from '@/components/regsiter.vue'
import mycommentlist from '@/components/mycomment.vue'
import myyouji from '@/components/myyouji.vue'
import modified from '@/components/modified.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/youji',
      name:'youji',
      component:youji
    },
    {
      path:'/user',
      name:'user',
      component:user
    },{
      path:'/login',
      name:'login',
      component:login
    },{
      path:'/content/:id',
      name:'content',
      component:content,
      props:true
    },{
      path:'/comment/:id',
      name:'comment',
      component:comment,
      props:true
    },{
      path:'/regsiter',
      name:'regsiter',
      component:register
    },{
      path:'/mycommentlist',
      name:'mycommentlist',
      component:mycommentlist
    },{
      path:'/myyouji',
      name:myyouji,
      component:myyouji
    },{
      path:'/modified',
      name:'modified',
      component:modified
    }
  ]
})