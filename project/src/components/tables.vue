<template>
	<div>
		<h1>总价：{{total}}</h1>
		<table>
			<thead>
				<th>价格</th>
				<th>单价</th>
				<th>数量</th>
				<th>总价</th>
			</thead>
			<tbody v-for='(friet,ind) in frietnow'>
				<tr>
					<td>{{friet.name}}</td>
					<td>{{friet.price}}</td>
					<td>
						<button v-on:click='add(ind)'>+</button>
						<span>{{friet.num}}</span>
						<button v-on:click='sub(ind)'>-</button>
					</td>
					<td>{{friet.pricenum}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		computed:{
			frietnow:function(){
				return this.$store.state.frietnow
			},
			total:function(){
				return this.$store.state.total
			}
		},
		methods:{
			add:function(i){
				this.$store.commit('add',i)
			},
			sub:function(i){
				this.$store.commit('sub',i)
			}
		}
	}
</script>

<style>
	
</style>