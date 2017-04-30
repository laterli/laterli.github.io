<template>
	<div>
		<comment-list></comment-list>
		<comment-form></comment-form>
	</div>
</template>
<script>
	import commentForm from './commentForm.vue'
	import commentList from './commentList.vue'
	export default{
		components:{
			commentList,
			commentForm
		}
	}
</script>