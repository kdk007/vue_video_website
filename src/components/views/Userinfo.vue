<template>
<div>
  <ron-header></ron-header>
  <b-card no-body>
    <b-tabs  card vertical style="height:40rem">
      <b-tab title="个人信息" active><b-card-text><h5>个人信息</h5>
  	<div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="我们保证，不会把你的电子邮件和别人分享"
      >
        <b-form-input
          id="input-1"
          v-model="user.eml"
          type="email"
          required
          :placeholder="user.eml"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2"
      description="在我们未完善之前，不建议您修改用户名">
        <b-form-input
          id="input-2"
          v-model="user.username"
          required
          :placeholder="user.username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="user.age"
          required
          :placeholder="user.age"
        ></b-form-input>
      </b-form-group>
    

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="s" id="checkboxes-4">
          <b-form-checkbox value='man'>男</b-form-checkbox>
          <b-form-checkbox value='woman'>女</b-form-checkbox>
          <span>{{user.sex}}</span>
        </b-form-checkbox-group>
      </b-form-group>


      <b-button type="submit" variant="primary" @click="onSubmit">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
   <!--  <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>

      </b-card-text>
  </b-tab>
      <b-tab title="学习记录"><b-card-text>学习记录</b-card-text></b-tab>
      <b-tab title="安全设置"><b-card-text>安全设置</b-card-text></b-tab>
    </b-tabs>
  </b-card>
  <ron-footer></ron-footer>
</div>
	
</template>

<script>
export default {
    data() {
      return {
      
        s:[],
        user:{
				username:'',
				// password:localStorage.password,
				eml:'',
				sex:'',
				age:''
		},
        show: true
      }
    },
    created(){
    	this.getuserinfo();
    },
    methods: {
      getuserinfo:function(){
        this.$axios.get(' http://192.168.0.171:8080/getuserinfo/'+localStorage.username).then(res => {
         
           console.log(res);
           this.user.username=res.data.data.username;
   			this.user.age=res.data.data.age;
   			this.user.sex=res.data.data.sex;
   			this.user.eml=res.data.data.eml
	       // window.localStorage["sex"]=res.data.data.sex;
	       // window.localStorage["age"]=res.data.data.age;
	       // window.localStorage["password"]=_this.user.password;

	       // window.localStorage["eml"]=res.data.data.eml;

        }).catch(err => {
          console.log(err)
        })
      },	
      onSubmit: function() {
        // evt.preventDefault()
        this.user.sex=this.s[0];
        alert(JSON.stringify(this.user))
        // alert(JSON.stringify(this.user.sex[0]))
        let _this=this;
				  this.$axios.put('http://192.168.0.171:8080/updateUser',_this.user)

			         .then(res => {		            
		                  //全局存储token
		               window.localStorage["token"] = JSON.stringify(res.data.data.token);
		               //全局存储用户名username
		               window.localStorage["username"]=_this.user.username;
		               window.localStorage["sex"]=_this.user.sex;
		               window.localStorage["age"]=_this.user.age;
		               // window.localStorage["password"]=_this.user.password;

		               window.localStorage["eml"]=_this.user.eml;

		               console.log(res);
		                // this.showToast();
		               // this.$router.go(-1);           
		               
		          }).catch(err => {
		          	console.log(err);
		          console.log("注册失败2");
		        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.user.eml = ''
        this.user.username = ''
        this.user.age = ''
        this.s = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
        this.show = true
        })
      }
    }
  }
</script>

<style>
	
</style>