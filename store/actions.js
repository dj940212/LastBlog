import axios from 'axios'
import Service from './service'
export default {
	async getPopularArts({state}) {
		const res = await Service.getPopularArts()
		state.popularArts = res.data.data
		console.log("popularArts", res.data.data)

		return res
	},

	async getActivitys({state}) {
		const res = await Service.getActivitys()
		state.activitys = res.data.data
		console.log("Activitys", res.data.data)

		return res
	}
}
