import Vuex from 'vuex'
// import actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'
import createLogger from 'vuex/dist/logger'

const createStore = () => {
	return new Vuex.Store({
		state,
		getters,
		// actions,
		mutations,
		// strict: debug,
    	// plugins: debug ? [createLogger()] : []
	})
}

export default createStore