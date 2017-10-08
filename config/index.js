export default {
	db: 'mongodb://blog_runner:dj15155620677@59.110.164.55:27017/blog',
	api: {
    // article
    'addArticleUrl': 'http://59.110.164.55:8086/api/article/save',
    'articleListUrl': 'http://59.110.164.55:8086/api/article/list',
    'articleUpdateUrl': 'http://59.110.164.55:8086/api/article/update',
    'articleDeleteUrl': 'http://59.110.164.55:8086/api/article/delete',
    'readArticleUrl': 'http://59.110.164.55:8086/api/article/read',

    // activity
    'getAllActivityUrl': 'http://59.110.164.55:8086/api/activity/all',
    'getOneDayActivityUrl': 'http://59.110.164.55:8086/api/activity/oneDay'

}
}