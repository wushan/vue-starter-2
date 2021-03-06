// const posts = {
//   '1': {
//     id: 1,
//     title: 'HOT',
//     body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
//   },
//   '2': {
//     id: 2,
//     title: 'qui est esse',
//     body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
//   }
// }
import Vue from 'vue'

export default {
	getPost (id, cb) {
		//Mount some real ajax calls
		Vue.http.get('https://jsonplaceholder.typicode.com/posts/' + id).then((response) => {
			// success callback
			if (response.data) {
				cb(null, response.data)
			}
		}, (response) => {
			// error callback
			cb(new Error(response.data));
		});
	  // // fake an API request
	  // setTimeout(() => {
	  //   if (posts[id]) {
	  //     cb(null, posts[id])
	  //   } else {
	  //     cb(new Error('Post not found.'))
	  //   }
	  // }, 100)
	}
}