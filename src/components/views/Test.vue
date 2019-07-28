<template>
<video :src="movie_src" controls="controls">
您的浏览器不支持 video 标签。
</video>
</template>

<script>
export default{
    // el : '#main',
    data () {
    	return {
        	movie_src : ''
    	}
    },
    mounted : function() {
        this.movie_src = 'http://172.20.10.2:8080/file/uptown-6c666d13f4644f3db20796f811bfc8ff.mp4';
    },
    methods : {
        next : function(){

        }
    }
}
</script>