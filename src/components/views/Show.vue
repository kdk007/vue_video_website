<template>
<video :src="vurl" controls="controls">
您的浏览器不支持 video 标签。
</video>
</template>

<script>
export default{
    // el : '#main',
    data () {
    	return {
        	// movie_src : '',
        	vurl:''
    	}
    },
    created(){
    	  this.vid=this.$route.query.vid;
    	  this.$axios.get(' http://192.168.0.171:8080/getvideo/'+this.vid)
          .then(res => {
          var jsonObj = JSON.parse(JSON.stringify(res.data.data));
          console.log(res);
          // this.videolist=jsonObj;
          // console.log(this.videolist);
 		  this.vurl=res.data.data.vurl;
 		  
 		  console.log('--------------------');

        // this.$forceUpdate(); //数据层次太多，强制刷新，解决v-for无法渲染

        }).catch(err => {
          console.log(err)
        })
    },
    mounted : function() {
    	// console.log(this.vurl);

        // this.movie_src = this.vurl ;

    
    },
    methods : {
        next : function(){

        }
    }
}
</script>