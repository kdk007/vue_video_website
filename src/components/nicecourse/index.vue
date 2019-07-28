<!-- 精品课程组件  -->
<template>
  <div class="row">

    <div v-for="course in nicelist" :key="course.cid" class="col-6 col-md-3 col-lg-3 ">
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
      </b-card>
      </router-link>
    </div>
  </div>
</template>
<script>
  var self;
  export default {

    data (){
      self = this
      return{

        nicelist: [],  //1 精品
        // price: price!=0 ? self.nicelist.price : '免费'

      }
    },

    created() {
      this.findnicelist();
    },

    methods:{
      findnicelist(){
        let params = {ishot:1}
        this.$axios.get(' http://192.168.0.171:8080/getishot', {params:params}).then(res => {
          // var jsonObj = JSON.parse(JSON.stringify(res.data.data));
          // console.log(res.data.data);
          var jsonObj1 = JSON.parse(JSON.stringify(res.data.data));
          this.nicelist=jsonObj1;
          console.log(this.nicelist);
          // self.price = this.nicelist[1].price;

        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
<style>


</style>
