<template>
  <div class="row">

    <div v-for="course in hotlist" :key="course.cid" class="col-6 col-md-3 col-lg-3 ">
      <router-link :to="{path:'/courseinfo',query:{cid:course.cid}}">
      <b-card
        :id="course.cid"
        title=""
        :img-src="course.cpic"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="m-2"
      >
        <b-card-text>
          {{course.cname}}
        </b-card-text>
      <b-card-text style="color: red">
        {{course.price !=0 ? '￥'+course.price : '免费'}}
      </b-card-text>
<!--        <div slot="footer"><small class="text-muted"></small></div>-->
    </b-card>
    </router-link>
    </div>
  </div>


<!-- 热门课程组件 -->
</template>
<script>
  var self;
  export default {
    data() {
      self = this
      return {
        hotlist: [] ,  //2 热门


      }
    },
    created() {

      this.findhotlist();

    },

    methods:{

      findhotlist() {
        let params = {ishot:2}
        this.$axios.get(' http://192.168.0.171:8080/getishot', {params:params}).then(res => {
          // var jsonObj = JSON.parse(JSON.stringify(res.data.data));
          // console.log(res.data.data);
          var jsonObj2 = JSON.parse(JSON.stringify(res.data.data));
          self.hotlist=jsonObj2;
          console.log(this.hotlist);
          self.isHot=hotlist[0].ishot;
        }).catch(err => {
          console.log(err);

        })
      },


    }
  }
</script>

<style>
title{
  /*color: red !important;*/

}
</style>
