<template>
  <div style="overflow-x:hidden">
    <ron-header></ron-header>
    <ron-swiper></ron-swiper>
    <side-bar></side-bar>
    <span style="font-weight: bold"> | 热门课程</span>
    <br>
    <hot-course></hot-course>

    <span style="font-weight: bold"> | 精品课程</span>
    <br>
    <nice-course> </nice-course>

    <ron-footer></ron-footer>

  </div>
</template>

<script>
  export default {

    data(){
        return{

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


    }

  }
</script>

<style>
 *{
  max-width:100%;

 }

</style>
