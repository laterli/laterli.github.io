import Vue from 'vue';
import App from './components/App.vue';
import store from './store/index.js';
import router from './router/index.js';




new Vue({
	el:'#app',
	components:{App},
	store:store,
	router:router
})