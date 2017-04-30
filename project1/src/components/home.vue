<template>
	<div>
		<home-info></home-info>
		<home-detail></home-detail>
		<home-list></home-list>
	</div>
</template>
<script>
	import homeList from './homeList.vue';
	import homeInfo from './homeInfo.vue';
	import homeDetail from './homeDetail.vue';
	export default{
		components:{
			homeList,
			homeDetail,
			homeInfo
		}
	}
</script>