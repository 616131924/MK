// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import index from './components/index'
import { Tabbar, TabbarItem ,XInput,XButton,Toast,XTextarea,Group,XImg,Blur, Cell, Badge,XHeader} from 'vux'
import Axios from 'axios'
import panel from './components/panel.vue'
import commentpanel from './components/commentpanel.vue'

Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('x-input',XInput)
Vue.component('x-button',XButton)
Vue.component('toast',Toast)
Vue.component('x-textarea',XTextarea)
Vue.component('group',Group)
Vue.component('panel',panel)
Vue.component('x-img',XImg)
Vue.component('commentpanel',commentpanel)
Vue.component('blur',Blur)
Vue.component('cell',Cell)
Vue.component('badge',Badge)
Vue.component('x-header',XHeader)

Vue.prototype.$http=Axios

FastClick.attach(document.body)

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  const token = sessionStorage.getItem('demo-token');
  if(to.path=='/user' || to.path=='/modified'){
    if(token ==null || token =='null'){
      next('/login')
    }else{11
      next()
    }
  }else{
    if(token !=null && token != 'null'){
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      next()
    }else{
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
