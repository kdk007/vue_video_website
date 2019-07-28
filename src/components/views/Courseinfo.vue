<template>
<div>
	<ron-header></ron-header>	
<!-- 课程详情卡片 -->
  <b-card no-body class="overflow-hidden" style="max-width: 75rem;margin: 5% auto 0 auto;padding:1rem;overflow-y:hidden">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="course.cpic" class="rounded-4"></b-card-img>
      </b-col>
      <b-col md="6">

        <b-card-body :title="course.cname">
          <b-card-text class="cou_title">
          {{course.cdesc}}
          </b-card-text>
        <span class="cou_title">价格：</span>
        <h5 style="color:#147BFF;overflow-y:hidden">{{course.price !=0 ? '￥'+course.price : '免费'}}</h5>
      
        <span class="cou_title">学习有效期：</span>永久有效

        <div class="icon">
          <i class="iconfont icon-saoyisao"></i>
          <i class="iconfont icon-shoucang"></i>
          <i class="iconfont icon-fenxiang"></i>
        </div>
         <b-button pill variant="primary" style="margin:-3rem auto auto 10rem">加入学习</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

 
  <!-- 课程介绍卡片 -->
 
  <b-card no-body style="max-width: 75rem;margin: 3% auto 3% auto;padding:1rem;overflow-y:hidden">
    <!-- <b-row no-gutters > -->
    <b-tabs content-class="mt-4" card pills fill>
      <b-tab title="介绍" active>
        <h3 style="overflow-y:hidden">| 课程介绍</h3><br>
        {{course.jieshao}}
      </b-tab>
      <b-tab title="目录" @click="videolist">
        <b-card-text v-show="isok">
          <h3 style="overflow-y:hidden">| 课程大纲</h3><br>
          <div v-for="video in videolist" :key="video.vid">
            <li> 第{{video.partnum}}讲 &nbsp;&nbsp; <router-link :to="{path:'/show',query:{vid:video.vid}}"> 
            {{video.vname}}</router-link></li><br>
          </div>
        </b-card-text>
      </b-tab>
    </b-tabs>
    <!-- </b-row> -->
  </b-card>



<!-- 底部栏 -->
<ron-footer></ron-footer>

</div>
</template>


<script>

export default {
    data (){  	
      return{
        isok: false,
        course: [],
        cid: '',
        viedolist:[]
      }
    },

    created() {
    	
      this.cid=this.$route.query.cid;
      console.log(this.$route.query.cid);
      console.log('------');
      console.log(this.cid);
       this.$axios.get(' http://192.168.0.171:8080/courseinfo/'+this.cid)
       .then(res => {
          var jsonObj = JSON.parse(JSON.stringify(res.data.data));
          this.course=jsonObj;
          console.log(this.course);
         

        }).catch(err => {
          console.log(err)
        })
      
    },

    methods:{
      videolist(){
        if(localStorage.token){
          this.isok=true;
          this.cid2=this.cid;
          console.log(this.cid2);

          this.$axios.get(' http://192.168.0.171:8080/getvideolist/'+this.cid2)
          .then(res => {
          var jsonObj = JSON.parse(JSON.stringify(res.data.data));
          this.videolist=jsonObj;
          console.log(this.videolist);
          this.$forceUpdate(); //数据层次太多，强制刷新，解决v-for无法渲染

        }).catch(err => {
          console.log(err)
        })
        }else{
          this.isok=false;
          alert("请先登录")
        }
      },

      // onshow(vurl){
      //     window.localStorage["vurl"]=vurl;
      //     this.$forceUpdate();
      //     console.log(vurl);
      // }
    }
 }
</script>
.overflow-hidden{
	overflow-y:hidden;
}

<style>
.card-title{
  overflow-y:hidden;
}
.cou_title{
  color:#9A9A9A;
}
.icon{
  margin:3rem 0 0 0;
}
.iconfont{
  margin-left:1rem;
}


</style>