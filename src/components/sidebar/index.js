import SideComponent from './index.vue'

const sideBar={
  install:function(Vue){
    Vue.component('sideBar',SideComponent)
  }
}
export  default sideBar
