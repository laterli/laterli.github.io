<template>
	<div>
		<button v-on:click='btn(ind)' v-for='(friet,ind) in frietlost'>{{friet.name}}</button>
	</div>
</template>

<script>
	export default {
		computed:{
			frietlost:function(){
				return this.$store.state.frietlost
			}
		},
		methods:{
			btn:function(i){
				this.$store.commit('btn',i)
			}
		}
	}
</script>
<style>
	
</style>