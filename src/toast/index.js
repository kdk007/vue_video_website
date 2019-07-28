import vue from 'vue'
import toastComponent from './toast.vue'

// 组件构造器，构造出一个 vue组件实例
const ToastConstructor = vue.extend(toastComponent)

function showToast ({ text, type, duration = 2000 }) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data () {
      return {
        isShow: true, // 是否显示
        text: text, // 文本内容
        type: type // 类型
      }
    }
  })
  // 添加节点
  document.body.appendChild(toastDom.$el)
  // 过渡时间
  setTimeout(() => {
    toastDom.isShow = false
  }, duration)
}
// 全局注册
function registryToast () {
  vue.prototype.$toast = showToast
}

export default registryToast
