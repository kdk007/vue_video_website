<template>
  <div>
  	<ron-header></ron-header>
      <div class="login_warp">
		<div class="loginbox fl">
            <!-- 三个选项卡按钮 -->
			<div class="login_header">
				<span @click="cur=0" :class="{active:cur==0}">账号注册</span>
				
			</div>
			<div class="login_content">
                <!-- 在cur==0时此板块显示 其他时候此板块不显示 -->
				<div v-show="cur==0" class="Cbody_item">
					<div class="form_item"><input type="text" name="fname" placeholder="用户名" v-model="user.username">
					</div>
					<div class="form_item"><input type="password" name="fpassword" placeholder="密码" v-model="user.password">
					</div>
					<div class="form_item"><input type="password" name="fpassword" placeholder="确认密码" v-model="password_check">
					</div>
					<div class="form_item"><input type="text" name="fname" placeholder="邮箱" v-model="user.eml">
					</div>
					<div class="form_item">
						<div class="fl"><input type="checkbox">同意
							<router-link to="">用户协议</router-link>
						</div>
						<div class="fr"><router-link to="/login">已有账号，前往登录</router-link></div>
					</div>
					<div class="clear"></div>
					<div class="form_item">
						<input type="submit" name="" @click="registe" value="注册">
					</div>
				</div>
               
			</div>
		</div>
        <!-- 右边蓝色板块 -->
		<div class="loginrslider"></div>
	</div>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
        cur:0, //默认选中第一个tab
        token:'',
		user:{
				username:'',
				password: '',
				eml:'',
			},
		password_check:''
    }
  },
  mounted () {
     
  },
  methods:{
  	registe: function(){
				  let _this=this;
				  this.$axios.post('http://192.168.0.171:8080/registe',_this.user)

			         .then(res => {		            
		                  //全局存储token
		               window.localStorage["token"] = JSON.stringify(res.data.data.token);
		               //全局存储用户名username
		               window.localStorage["username"]=_this.user.username;

		               window.localStorage["password"]=_this.user.password;

		               window.localStorage["eml"]=_this.user.eml;

		               console.log(res);
		                this.showToast();
		               this.$router.go(-1);           
		           
		          }).catch(err => {
		          	console.log(err);
		          console.log("注册失败2");
		        })
		},
		showToast () {
	      this.$toast({
	        text: '注册成功',
	         type: 'success',
	         duration: 3000
	      })
    	}


  }
}
 
</script>
 
<style scoped>
.fl{
	float: left;
}
.fr{
	float: right;
}
.clear{
	clear: both;
}
a{
	text-decoration: none;
	color: #333;
	transition: ease all 0.5s;
}
a{
	color: #1c65ff
}
.login_header{
	margin-bottom: 40px;
}
.login_header span{
	margin-right: 20px;
	cursor: pointer;
}
.loginbox{
	width: 300px;
	overflow: hidden;
	padding: 20px;
	padding-top: 15px;
}
.Cbody_item{
	border: 0px solid #999;
	overflow: hidden;
}
.form_item{
	font-size: 13px;
}
.form_item input[type="text"],.form_item input[type="password"]{
	display: block;
	width: calc(100% - 18px);
	height: 36px;
	margin:0 auto; 
	padding-left: 16px;
	outline: none;
	border: 1px solid #999;
	transition: ease all 0.5s;
	margin-bottom: 20px;
}
.form_item input[type="text"]:focus,.form_item input[type="password"]:focus{
	border: 1px solid #1c65ff
}
.form_item input[type="submit"]{
	display: block;
	width: calc(100% - 0px);
	height: 40px;
	margin:0 auto; 
	padding-left: 16px;
	outline: none;
	border: 1px solid #1c65ff;
	transition: ease all 0.5s;
	margin-top: 20px;
	margin-bottom: 20px;
	background-color: #1c65ff;
	color: #fff;
	cursor: pointer;
}
.form_item input[type="submit"]:hover{
	background-color: #3f7dff;
	border: 1px solid #3f7dff;
}
.active{
    color: #3f7dff;
    padding-bottom: 10px;
    border-bottom: 3px solid #3f7dff;
}
.loginrslider{
	width: 7rem;
	height: 27rem;
	background-color: #1c65ff;
	margin-left:19rem;


}
.login_warp{
	width: 23rem;
    margin:  auto;
    border-radius: 10px;
    box-shadow: 0 0px 0px #ccc;
    overflow: hidden;
    border:1px solid #3f7dff;
    margin-top: 5rem;
    transition: ease all 0.5s;
    position: relative;
	top: 0px;
	cursor: pointer;
}
.login_warp:hover{
	top: -30px;
	box-shadow: 0 15px 21px #ccc;
}
.loginrslider{
	color: #fff;
 
}
.qcode{
	width: 160px;
	height: 160px;
	background-color: #ccc;
	margin: 0 auto;
	margin-top: 2px;
}
.beizhu{
	text-align: center;
	font-size: 13px;
	margin-top: 10px;
	color: #999
}
</style>
