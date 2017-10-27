import axios from 'axios'

export default function ({store}) {
	axios.interceptors.request.use(function (config) {    // 这里的config包含每次请求的内容
	    if (store.getters.token) {
	        config.headers['x-access-token'] = `${store.getters.token}`;
	    }
	    console.log("Authorization",config.headers['x-access-token'])
	    return config;
	}, function (err) {
	    return Promise.reject(err);
	})
}