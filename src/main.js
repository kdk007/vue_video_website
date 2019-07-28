// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import $ from 'jquery' ;
import BootstrapVue from 'bootstrap-vue'
import toastRegistry from './toast/index'

import "./assets/public/font/iconfont.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import ronHeader from './components/header/index'
import sideBar   from './components/sidebar/index'
import ronSwiper from './components/swiper/index'
import hotCourse from './components/hotcourse'
import niceCourse from './components/nicecourse/index'
import VueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import perCourse from './components/percourse/index'
import ronFooter from './components/footer/index'

Vue.use(VueSwiper, /* { default global options } */)
Vue.use(BootstrapVue);
Vue.use(toastRegistry)

Vue.use(ronHeader);
Vue.use(sideBar);
Vue.use(ronSwiper);
Vue.use(hotCourse);
Vue.use(niceCourse);
Vue.use(perCourse);
Vue.use(ronFooter);



Vue.config.productionTip = false

Axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$axios = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount("#app")


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (localStorage.token) {  // 获取当前的token是否存在
      console.log("token存在");
      next();
    } else {
      console.log("token不存在");
      next({
        path: '/login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: {redirect: to.fullPath}
      })
    }
  }
  else { // 如果不需要权限校验，直接进入路由界面
    next();
  }
});
