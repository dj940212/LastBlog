export default {
	db: 'mongodb://blog_runner:dj15155620677@59.110.164.55:27017/blog',
	api: {
        // article
        'addArticleUrl': '/api/article/save',
        'articleListUrl': '/api/article/list',
        'articleUpdateUrl': '/api/article/update',
        'articleDeleteUrl': '/api/article/delete',
        'readArticleUrl': '/api/article/read',

        // activity
        'getAllActivityUrl': '/api/activity/all',
        'getOneDayActivityUrl': '/api/activity/oneDay'
    }
}