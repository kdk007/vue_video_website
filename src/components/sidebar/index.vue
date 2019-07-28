<!-- 首页 -->
<template>
  <div class="sidebar">
    <div class="home" @click="hideMenu">
      ---->>
    </div>
    <div class="menu" v-show="isShows" @click="hideMenu"></div>

    <transition name="slide-fade">
      <div class="sss" v-show="isShow">
        2222
      </div>
    </transition>
  </div>
</template>
<script>
  // var _self;
  export default {

    data(){

      // _self= this
      return {
        isShow: false,
        isShows: false,
      }
    },
    created() {

      // this.$axios.get('http://192.168.30.17:8080/get')
      //   .then(res => {
      //     this.username = res.data.data.username;
      //     this.password = res.data.data.password;
      //     console.log(res);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })


    },
    methods: {
      hideMenu () {
        if (this.isShow) {
          this.isShow = false
          this.isShows = false
        } else {
          this.isShow = true
          this.isShows = true
        }

      },




    }

  }
</script>
<style>
 .sss{
    color: #fff;
    position: fixed;
    width: 286px;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 11;
    overflow-y: auto;
    background: #000;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-to,.slide-fade-enter{
    transform: translateX(-286px);
    opacity: 0;
  }
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10;
    background: rgba(0,0,0,0.5);
  }
</style>
