export default {
	db: 'mongodb://blog_runner:dj15155620677@59.110.164.55:27017/blog',
    user: {
        username: '2902273280@qq.com',
        password: '2902273280',
        avatar: 'http://ovs5x36k4.bkt.clouddn.com/06.jpg'
    },
    secret: 'dingjianblog', // used when we create and verify JSON Web Tokens
	api: {
        // article
        'addArticleUrl': '/api/article/save',
        'articleListUrl': '/api/article/list',
        'articleUpdateUrl': '/api/article/update',
        'articleDeleteUrl': '/api/article/delete',
        'readArticleUrl': '/api/article/read',
				'addLabelUrl': '/api/article/addLabel',
				'delLabelUrl': '/api/article/delLabel',

        // activity
        'getAllActivityUrl': '/api/activity/all',
        'getOneDayActivityUrl': '/api/activity/oneDay',
        // user
        'loginUrl': '/api/login',
				// label
        'newLabelUrl': '/api/label/new',
        'changeLabelUrl': '/api/label/update',
        'getLabelsUrl': '/api/labels',
        'deleteLabelUrl': '/api/label/delete'
    }
}
