import Router from 'koa-router'
import Article from '../database/controllers/article'
import Label from '../database/controllers/label'
import Activity from '../database/controllers/activity'
import User from '../database/controllers/user'
import { verifyToken } from '../api/user'

export default () => {
	const router = new Router({ prefix: '/api' })

    // article
	router.post('/article/save', verifyToken, Article.add)
    router.get('/article/list', Article.list)
    router.post('/article/update',verifyToken, Article.update)
    router.post('/article/delete',verifyToken, Article.delete)
    router.get('/article/read', Article.findOne)

    // label
    // router.get('/label/list', Babel.list)
    // router.post('/label/add', Babel.add)
    // router.post('/label/delete', Babel.delete)

    // activity
    router.get('/activity/all', Activity.all)
    router.get('/activity/oneday', Activity.oneDay)

    // user
    router.post('/login', User.login)
    router.post('/logout', verifyToken, User.logout)

	return router
}
