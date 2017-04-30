<template>
	<div>
		<titles></titles>
		<tables></tables>
	</div>
</template>

<script>
	import titles from './titles.vue'
	import tables from './tables.vue'
	export default {
		data:function(){
			return {
				title:''
			}
		},
		components:{
			titles,
			tables
		},
		methods:{
			
		}
	}
</script>