import HotComponent from './index.vue'

const hotCourse={
  install:function(Vue){
    Vue.component('hotCourse',HotComponent)
  }
}
export  default hotCourse
