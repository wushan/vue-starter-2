import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Post from './components/Post.vue'
import Api from './components/Api.vue'

Vue.use(VueResource);
Vue.use(VueRouter)

const WithParams = { template: '<div>{{ $route.params.id }}</div>' }

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: App },
		{ path: '/post', component: Post },
		{ path: '/post/:id', component: Post},
		{ path: '/api', component: Api },
		{ path: '/with-params/:id', component: WithParams }
	]
})

new Vue({
	router: router,
	created: function() {
		console.log(this);
	}
}).$mount('#app')
