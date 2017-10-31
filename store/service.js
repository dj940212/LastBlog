import axios from 'axios'
import config from '../config'

class Service {
	// 获取浏览量最高的6篇文章
	getPopularArts() {
		return axios.get(config.api.articleListUrl,{params: {count: 6}})
	}
	//  获取活跃度数据
	async getActivitys() {
		const dayNum = new Date().getDay() + 364
		return axios.get(config.api.getAllActivityUrl,{params:{
			count: dayNum
		}})
	}
}

export default new Service()