import Router from 'koa-router'
import Article from '../app/controllers/article'
import Babel from '../app/controllers/babel'
import Activity from '../app/controllers/activity'
import User from '../app/controllers/user'

export default () => {
	const router = new Router({ prefix: '/api' })

    // article
	router.post('/article/save', Article.add)
    router.get('/article/list', Article.list)
    router.post('/article/update', Article.update)
    router.post('/article/delete', Article.delete)
    router.get('/article/read', Article.findOne)
    router.post('/article/update/title', Article.updateTitle)
    router.post('/article/update/desc', Article.updateDesc)

    // babel
    router.get('/babel/list', Babel.list)
    router.post('/babel/add', Babel.add)
    router.post('/babel/delete', Babel.delete)

    // activity
    router.get('/activity/all', Activity.all)
    router.get('/activity/oneday', Activity.oneDay)

    // user
    router.post('/user/register', User.register)
    router.post('/user/login', User.login)

	return router
}
