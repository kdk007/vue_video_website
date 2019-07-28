<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback"
         >
    <!-- slides -->
    <swiper-slide><img src="http://www.gulixueyuan.com/files/system/2019/05-28/11185826fa62661576.jpg?version=8.3.2"></swiper-slide>
    <swiper-slide><img src="http://www.gulixueyuan.com/files/system/2019/06-04/1746262d5b53381492.jpg?version=8.3.2"></swiper-slide>
    <swiper-slide><img src="http://www.gulixueyuan.com/files/system/2019/07-05/1459015ee240971076.jpg?version=8.3.2"></swiper-slide>
    <swiper-slide><img src="http://www.gulixueyuan.com/files/system/2019/06-18/140637dc7a0b403270.jpg?version=8.3.2"></swiper-slide>
    <swiper-slide><img src="http://www.gulixueyuan.com/files/system/2018/06-15/102819349865379843.jpg?version=8.2.14"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
  export default {
    // name: 'carrousel',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          pagination: '.swiper-pagination',
          effect: 'flip',
          grabCursor: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',

        }
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },


  }
</script>
<style>
img{ 
  width:100%;max-width:100%;display:block;
}

*{
  min-height: 30%;
  max-width:103%;
}

</style>
