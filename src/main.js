import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Post from './components/Post.vue'
import Api from './components/Api.vue'

Vue.use(VueResource);
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: App },
		{ path: '/post', component: Post },
		{ path: '/post/:id', component: Post },
		{ path: '/api', component: Api }
	]
})

new Vue({
	router: router,
	methods: {
		getData: function(){
			this.$http.get('http://jsonplaceholder.typicode.com/posts/1').then((response) => {
		    // success callback
		    	console.log(response.data)
			}, (response) => {
			    // error callback
			});
		}
	},
	created: function() {
		this.getData();
		console.log(this);
	}
}).$mount('#app')
