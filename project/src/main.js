import Vue from 'vue';

import Cart from './components/App.vue';
import store from './store/index.js';

const app=new Vue({
	el:'#app',
	components:{
		Cart
	},
	store:store,
})
