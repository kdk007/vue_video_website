<template>
  <div>
  	<ron-header></ron-header>

      <div class="login_warp">
		<div class="loginbox fl">
            <!-- 三个选项卡按钮 -->
			<div class="login_header">
				<span @click="cur=0" :class="{active:cur==0}">账号登录</span>
				<span @click="cur=1" :class="{active:cur==1}">快捷登录</span>
				<span @click="cur=2" :class="{active:cur==2}">扫码登录</span>
			</div>
			<div class="login_content">
                <!-- 在cur==0时此板块显示 其他时候此板块不显示 -->
				<div v-show="cur==0" class="Cbody_item">
					<div class="form_item"><input type="text" name="fname" placeholder="用户名" v-model="user.username"></div>
					<div class="form_item"><input type="password" name="fpassword" placeholder="密码" v-model="user.password"></div>
					<div class="form_item">
						<div class="fl"><input type="checkbox">记住密码</div>
						<div class="fr"><router-link to="/registe">点击注册</router-link></div>

						<div class="fr"><a href="">找回密码</a><span style="font-weight:900">||</span></div>
							
					</div>
					<div class="clear"></div>
					<div class="form_item">
						<input type="submit" name="" @click="login" value="登录">
					</div>
				</div>
                <!-- 在cur==1时此板块显示 其他时候此板块不显示 -->
				<div v-show="cur==1" class="Cbody_item">
					<div class="form_item"><input type="text" name="fname" placeholder="手机号"></div>
					<div class="form_item"><input type="password" name="fpassword" placeholder="验证码"></div>
					<div class="form_item">
						<!-- <div class="fl"><input type="checkbox">记住密码</div>
						<div class="fr"><a href="javascript:;">找回密码</a></div> -->
					</div>
					<div class="clear"></div>
					<div class="form_item">
						<input type="submit" name="" value="登录">
					</div>
 
				</div>
                <!-- 在cur==2时此板块显示 其他时候此板块不显示 -->
				<div v-show="cur==2" class="Cbody_item">
					<div class="qcode"><img src="../../assets/logo.png" width="160" height="160" alt="二维码" /></div>
					<div class="beizhu">打开手机客户端扫码注册</div>
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
				password: ''
			}
    }
  },
  mounted () {
     
  },
  methods:{
  	login:function(){
				 let _this=this;
				  this.$axios.post('http://192.168.0.171:8080/login',_this.user)

			         .then(res => {
		            
		                  //全局存储token
		               window.localStorage["token"] = JSON.stringify(res.data.data.token);
		               //全局存储
		               window.localStorage["username"]=_this.user.username;

		               
	                 console.log(_this.user.username);
	                 console.log(res);
		             alert("登录成功");    
		              this.$router.go(-1);         
		           
		          }).catch(err => {
		          	console.log(err);
		          console.log("登录失败2");
		        })
        },
       

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
	height: 322px;
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
    margin-top: 10rem;
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
