import PerComponent from './index.vue'

const perCourse={
  install:function(Vue){
    Vue.component('perCourse',PerComponent)
  }
}
export  default perCourse