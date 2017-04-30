<template>
	<div>
		<h3>评论</h3>
		<ul>
			<li v-for="contents in content">
				{{contents}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		computed:{
			content:function(){
				return this.$store.state.content
			}
		}
	}
</script>
<style>
	h3{
		margin:0;
		padding:0;
		font-size: 0.5rem;
	}
	li{
		font-size: 0.5rem;
	}
</style>