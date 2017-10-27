import * as types from './types'

const mutations = {
    [types.SET_ARTICLE_MODE](state, mode) {
        state.mode = mode
    },
    [types.SET_ARTICLE_LIST](state, list) {
        state.articleList = state.articleList.concat(list)
    },
    [types.SET_CURRENT_INDEX](state, index) {
        state.currentIndex = index
    },
    [types.SET_ARTICLE_ID](state, _id) {
        state._id = _id
    },
    [types.SET_IS_LOGIN](state, isLogin) {
        state.isLogin = isLogin
    },
    [types.SET_TOKEN](state, token) {
        state.token = token
    },
    [types.SET_CUR_ROUTE](state, curRoute) {
        state.curRoute = curRoute
    }
}

export default mutations

