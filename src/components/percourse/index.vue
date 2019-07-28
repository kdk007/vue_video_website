<!-- 课程组件 -->

<template>
	<div>
	
	<!-- 课程分类栏 -->
  <br>
   <div>
    <b-tabs
      active-nav-item-class="font-weight-bold text-uppercase text-danger"
      active-tab-class="font-weight-bold text-success"
      content-class="mt-3"
      pills >
      <b-tab title="分类：" class="list_title" disabled ></b-tab>
      <b-tab title="全部" value="" active v-on:click="send(alllist)"></b-tab>
      <b-tab title="Java" v-on:click="send(javalist)"></b-tab>
      <b-tab title="Html" v-on:click="send(htmllist)"></b-tab>
      <b-tab title="Spring" v-on:click="send(springlist)"></b-tab>
      <b-tab title="Mysql" v-on:click="send(mysqllist)"></b-tab>
      
    </b-tabs>
  </div>
  <hr>

	<div class="row">

    <div v-for="course in list" :key="course.cid" class="col-6 col-md-3 col-lg-3 ">
      <router-link :to="{path:'/courseinfo',query:{cid:course.cid}}">
      <b-card
        :id="course.cid"
        title=""
        :img-src="course.cpic"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="m-2">

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
  </div>
</template>



<script >
var self;
  export default {
  
    data (){
      self = this
      return{
        list: [],     // 展示数组
        alllist: [],  // 全部课程
        javalist: [],  // java课程
        htmllist: [],  // html课程
        springlist: [], // spring 课程
        mysqllist: []  // mysql 课程

      }
    },

    created() {
      this.findAll();
      
    },

    methods:{
      findAll: function(){
        this.$axios.get(' http://192.168.0.171:8080/findAll').then(res => {
         
          var jsonObj = JSON.parse(JSON.stringify(res.data.data));
          // console.log(jsonObj);
          // self.list=jsonObj;
          // console.log(list);
          var n1=0,n2=0,n3=0,n4=0;
          this.alllist=jsonObj;
          this.list=jsonObj;
          for(var i=0;i<jsonObj.length;i++){
          		if(jsonObj[i].nature=='Java'){
          			this.javalist[n1]=jsonObj[i];
                n1++;
              }
              if(jsonObj[i].nature=='Html'){
                this.htmllist[n2]=jsonObj[i];
                n2++;
              }

              if(jsonObj[i].nature=='Spring'){
                this.springlist[n3]=jsonObj[i];
                n3++;
              }

              if(jsonObj[i].nature=='Mysql'){
                this.mysqllist[n4]=jsonObj[i];
                n4++;
              }

          }
        
        
          self.javalist=this.javalist;
          self.htmllist=this.htmllist;
          self.springlist=this.springlist;
          self.mysqllist=this.mysqllist;
          console.log(this.alllist);
          console.log(self.springlist);
          console.log(self.mysqllist);
        

        }).catch(err => {
          console.log(err)
        })
      },

      send: function(res){
        self.list=res;       //根据按钮传来的数组赋值给展示数组
      },

      // sendall: function(){
      //   self.list=self.alllist;
      // },

    }
  }
</script>

<style ></style>