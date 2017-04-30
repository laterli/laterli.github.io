import Vue from 'vue';
import router from 'vue-router';

import home from '../components/home.vue';
import comment from '../components/comment.vue';
import userinfo from '../components/userinfo.vue';
Vue.use(router);

const Router=new router({
	routes:[
		{path:'/',component:home},
		{path:'/comment',component:comment},
		{path:'/userinfo',component:userinfo}
	]
})
export default Router