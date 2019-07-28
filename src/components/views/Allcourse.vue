<!-- 课程中心 -->
<template>
<div style="overflow-x:hidden">
 	<ron-header></ron-header>
	<per-course></per-course>
  <ron-footer></ron-footer>
</div>
</template>

<script>
export default {
  data() {
    return{
    	list:[]

    }
  },
  methods:{
  	// show_javanature:function(data){
  	// 	this.list=data.
  	// 	console.log(list);
  	// }
  }
}
</script>

<style>
 *{
  max-width:100%;
 }
.list_title{
	color:red;
}
</style>
