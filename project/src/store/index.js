import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const vuex=new Vuex.Store({
	state:{
		total:0,
		frietnow:[],
		frietlost:[
			{name:'香蕉',price:2,num:0,pricenum:0},
			{name:'苹果',price:3,num:0,pricenum:0},
			{name:'鸭梨',price:4,num:0,pricenum:0},
			{name:'菠萝',price:5,num:0,pricenum:0},
			{name:'地瓜',price:6,num:0,pricenum:0},
			{name:'萝卜',price:7,num:0,pricenum:0}
		]
	},
	mutations:{
		add:function(state,i){
			state.frietnow[i].num++;
			state.frietnow[i].pricenum=state.frietnow[i].price*state.frietnow[i].num
			var number=0;
			for(var i=0;i<state.frietnow.length;i++){
				number=state.frietnow[i].pricenum+number;
			}
			state.total=number;
		},
		sub:function(state,i){
			if(state.frietnow[i].num>0){
				state.frietnow[i].num--;
				state.frietnow[i].pricenum=state.frietnow[i].price*state.frietnow[i].num
			}else{
				state.frietnow[i].num===0
			}
			var number=0;
			for(var i=0;i<state.frietnow.length;i++){
				number=state.frietnow[i].pricenum+number;
			}
			state.total=number;
		},
		btn:function(state,ind){
			var bool=false;
			var n=0;
			for(var i=0;i<state.frietnow.length;i++){
				if(state.frietnow[i]===state.frietlost[ind]){
					bool=true;
					n=i
				}
			}
			if(bool){
				state.frietnow[n].num++;
				state.frietnow[n].pricenum=state.frietnow[n].price*state.frietnow[n].num
				var number=0;
				for(var i=0;i<state.frietnow.length;i++){
					number=state.frietnow[i].pricenum+number;
				}
				state.total=number;
			}else{
				state.frietnow.push(state.frietlost[ind])
			}
		}
	}

})

export default vuex