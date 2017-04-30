<template>
	<div class='header'>
		<img src="../style/1.jpg" alt="">
		<div class="btn">
			<span class='user'>{{user}}</span>
			<span class='num'>{{num}}</span>
			<button v-on:click='add'>赞</button>
			<button v-on:click='sub'>取消</button>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			add:function(){
				this.$store.commit('add')
			},
			sub:function(){
				this.$store.commit('sub')
			}
		},
		computed:{
			num:function(){
				return this.$store.state.num
			},
			user:function(){
				return this.$store.state.user
			}
		}
	}
</script>
<style scoped>
	*{
		margin:0;
		padding:0;
	}
	.header{
		clear:both;
	}
	img{
		width: 2rem;
		height:2rem;
		float: left;
	}
	.btn{
		margin-top:0.25rem;
	}
	.btn button{
		font-size: 0.25rem;
	}
	.user{
		font-size: 0.25rem;
		display: block;
	}
	.num{
		font-size: 0.25rem;
	}
</style>