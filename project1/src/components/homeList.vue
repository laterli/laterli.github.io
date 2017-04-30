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
	export default{
		computed:{
			content:function(){
				return this.$store.state.content
			}
		}
	}
</script>
<style scoped>
	*{
		margin:0;
		padding:0;
	}
	div{
		clear:both;
		border:0.1rem solid #00f;
		height:10rem;
	}
	div li{
		font-size: 0.5rem;
	}
	h3{
		font-size: 0.5rem;
	}
</style>