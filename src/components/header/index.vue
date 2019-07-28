<template>
  <div >
    <b-navbar toggleable="lg" type="light"  style="background-color: lightgray">
      <b-navbar-brand>
        <img src="http://www.gulixueyuan.com/themes/june/img/logo-green1.png?version=8.3.2" class="d-inline-block align-top" alt="Kitten">
       <!--  <router-link to="/index" >WFU</router-link> -->
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/index" >首页</router-link></b-nav-item>
          <b-nav-item><router-link to="/allcourse" >课程中心</router-link></b-nav-item>
          
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown  dark right>
            <template slot="button-content" ><em>{{state}}</em></template>
            <b-dropdown-item @click="m1">{{g1}}</b-dropdown-item>
            <b-dropdown-item @click="m2">{{g2}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  export default {
    // 将APP.vue中的reload()方法注入
    inject:['reload'],   
    data() {
      return{
        // 三元表达式切换下拉菜单
       state:localStorage.token ? localStorage.username : '登录',
       g1: localStorage.token ? '个人中心' : '登录',
       // path1: localStorage.token ? '' : '/login',
       g2: localStorage.token ? '退出' : '注册',
       // path2: localStorage.token ? '' : '/registe',
      }
    },
    methods:{
      m1: function(){
         if (localStorage.token) {
            
            this.$router.push('/userinfo');
         }else{
            this.$router.push('/login');
         }
          
      },
      m2: function(){
        if(localStorage.token){
          localStorage.clear();
          this.reload();        //reload()方法刷新 
        }else{
          this.$router.push('/registe');
        }
      },
      
    },
   


  }

</script>
<style>

</style>

