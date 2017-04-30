import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store=new Vuex.Store({
	state:{
		num:0,
		user:'御坂美琴',
		content:['hello world'],
	},
	mutations:{
		add:function(state){
			state.num++
		},
		sub:function(state){
			if(state.num>0){
				state.num--
			}else{
				state.num=0
			}
		},
		texts:function(state,data){
			state.content.push(data)
		}
	}
})

export default store;