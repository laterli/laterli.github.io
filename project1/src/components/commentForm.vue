<template>
	<div>
		<form action="" v-on:submit.prevent='texts'>
			<input type="text" v-model='texta'>
			<input type="submit">
		</form>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				texta:''
			}
		},
		methods:{
			texts:function(){
				this.$store.commit('texts',this.texta)
			}
		}
	}
</script>
<style>
	form{
		position: fixed;
		bottom:1rem;
		margin-left: 0.5rem;
	}
</style>