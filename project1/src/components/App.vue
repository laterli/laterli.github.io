<template>
	<div>
	<ul>
		<li><router-link to='/' class='a'>主页</router-link></li>
		<li><router-link to='/comment' class='a'>评论</router-link></li>
		<li><router-link to='/userinfo' class='a b'>个人信息</router-link></li>
	</ul>
		<router-view></router-view>
	</div>
</template>
<script src="../script/fontsizeset.js"></script>
<style scoped>
	*{
		margin:0;
		padding:0;
	}
	ul li{
		list-style: none;
		float:left;
		margin-left: 0.5rem;
	}
	.a{
		text-decoration: none;
		color:#000;
		display: block;
		font-size: 0.5rem;
		margin-left: 0.25rem;
	}
	.b{
		
	}
	ul{
		clear:both;
		border:0;
		position: fixed;
		width:7.36rem;
		bottom:0rem;
		display: block;
		background-color: #0f0;
		margin:0 auto;
	}
</style>