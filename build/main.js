require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony default export */ exports["default"] = {
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
};

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}
var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-');
};

/* harmony default export */ exports["a"] = formatTime;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatTime__ = __webpack_require__(3);



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var ObjectId = Schema.Types.ObjectId;

var ActivitySchema = new Schema({
    log: [{
        article_id: String,
        article_title: String,
        operationType: String,
        createAt: {
            type: Date,
            default: Date.now()
        }
    }],
    date: String,
    logLen: {
        type: Number,
        default: 0
    }
});

ActivitySchema.pre('save', function (next) {
    if (this.isNew) {
        this.date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_formatTime__["a" /* default */])(new Date());
    }
    console.log("logLen:", this.log.length);
    this.logLen = this.log.length || 0;

    next();
});

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Activity', ActivitySchema);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var ObjectId = Schema.Types.ObjectId;
var LabelSchema = new Schema({
  name: String,
  color: {
    default: '#000',
    type: String
  },
  article: [{
    type: ObjectId,
    ref: 'Article'
  }],
  artCount: {
    type: Number,
    default: 0
  }
});

LabelSchema.pre('save', function (next) {
  this.artCount = this.article.length;
  next();
});

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Label', LabelSchema);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(1);





var SALT_WORK_FACTOR = 10;
var UserSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
	username: String,
	token: String,
	password: String,
	avatar: String,
	lockUntil: Number,
	loginAttempts: {
		type: Number,
		required: true,
		default: 0
	},
	meta: {
		createdAt: {
			type: Date,
			default: Date.now()
		},
		updatedAt: {
			type: Date,
			default: Date.now()
		}
	}

});

UserSchema.virtual('isLocked').get(function () {
	return !!(this.lockUntil && this.lockUntil > Date.now());
});

UserSchema.pre('save', function (next) {
	if (this.isNew) {
		this.meta.createdAt = this.meta.updatedAt = Date.now();
	} else {
		this.meta.updatedAt = Date.now();
	}

	next();
});

UserSchema.pre('save', function (next) {
	var user = this;

	if (!user.isModified('password')) return next();

	__WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.genSalt(SALT_WORK_FACTOR, function (error, salt) {
		if (error) return next(error);
		__WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.hash(user.password, salt, function (error, hash) {
			if (error) return next(error);

			user.password = hash;
			next();
		});
	});
});

UserSchema.methods = {
	comparePassword: function comparePassword(_password, password) {
		return new Promise(function (resolve, reject) {
			__WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.compare(_password, password, function (err, isMatch) {
				if (!err) resolve(isMatch);else reject(err);
			});
		});
	},
	incLoginAttempts: function incLoginAttempts(user) {
		var that = this;

		return new Promise(function (resolve, reject) {
			if (that.lockUntil && that.lockUntil < Date.now()) {
				that.update({
					$set: {
						loginAttempts: 1
					},
					$unset: {
						lockUntil: 1
					}
				}, function (err) {
					if (!err) resolve(true);else reject(err);
				});
			} else {
				var updates = {
					$inc: {
						loginAttempts: 1
					}
				};

				if (that.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !that.isLocked) {
					updates.$set = {
						lockUntil: Date.now() + LOCK_TIME
					};
				}

				that.update(updates, function (err) {
					if (!err) resolve(true);else reject(err);
				});
			}
		});
	},
	getToken: function getToken() {
		var token = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.sign({ name: this.username }, __WEBPACK_IMPORTED_MODULE_3__config__["default"].secret, {
			expiresIn: 7200
		});

		return token;
	}
};

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema);

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("uuid");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Last Blog',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['./static/less/index.less', 'element-ui/lib/theme-default/index.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  plugins: ['~plugins/element-ui'],
  build: {
    analyze: false,
    vendor: ['element-ui']
  }
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_models_user__ = __webpack_require__(6);




/* harmony default export */ exports["a"] = function () {
    __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.set('debug', true);

    __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_1__config__["default"].db);

    __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.on('disconnected', function () {
        __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_1__config__["default"].db);
    });
    __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.on('error', function (err) {
        console.log(err);
    });

    __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.on('open', async function () {
        console.log('Connected to MongoDB Success');

        var user = await __WEBPACK_IMPORTED_MODULE_2__database_models_user__["a" /* default */].findOne({ username: __WEBPACK_IMPORTED_MODULE_1__config__["default"].user.username });

        if (!user) {
            new __WEBPACK_IMPORTED_MODULE_2__database_models_user__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__config__["default"].user).save();
            console.log("写入管理员数据");
        }
    });
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_session__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_session__);

var addSession = function addSession(app) {
  app.keys = ['ice'];

  var CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    signed: true,
    rolling: false
  };
  app.use(__WEBPACK_IMPORTED_MODULE_0_koa_session___default()(CONFIG, app));
};

/* harmony default export */ exports["a"] = addSession;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var one = function one(ctx, next) {
  console.log('>> one');
  // next();
  console.log('<< one');
};

/* unused harmony default export */ var _unused_webpack_default_export = one;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var jwt = __webpack_require__(2);
var config = __webpack_require__(1);

var verifyToken = function verifyToken(ctx, next) {
    var token = ctx.request.headers["x-access-token"]; // 从body或query或者header中获取token
    jwt.verify(token, config.secret, function (err, decode) {
        if (err) {
            //  时间失效的时候/ 伪造的token          
            ctx.body = { err: err };
        } else {
            // rq.decode = decode; 
            console.log(decode.name); // today  is  a  good  day
            next();
        }
    });
};
/* unused harmony default export */ var _unused_webpack_default_export = verifyToken;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_controllers_article__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_controllers_label__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_controllers_activity__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_controllers_user__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_user__ = __webpack_require__(20);







/* harmony default export */ exports["a"] = function () {
    var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({ prefix: '/api' });

    // article
    router.post('/article/save', __WEBPACK_IMPORTED_MODULE_5__api_user__["a" /* verifyToken */], __WEBPACK_IMPORTED_MODULE_1__database_controllers_article__["a" /* default */].new);
    router.get('/article/list', __WEBPACK_IMPORTED_MODULE_1__database_controllers_article__["a" /* default */].list);
    router.post('/article/update', __WEBPACK_IMPORTED_MODULE_5__api_user__["a" /* verifyToken */], __WEBPACK_IMPORTED_MODULE_1__database_controllers_article__["a" /* default */].update);
    router.post('/article/delete', __WEBPACK_IMPORTED_MODULE_5__api_user__["a" /* verifyToken */], __WEBPACK_IMPORTED_MODULE_1__database_controllers_article__["a" /* default */].delete);
    router.get('/article/read', __WEBPACK_IMPORTED_MODULE_1__database_controllers_article__["a" /* default */].findOne);
    router.post('/article/addLabel', __WEBPACK_IMPORTED_MODULE_1__database_controllers_article__["a" /* default */].addLabel);
    router.post('/article/delLabel', __WEBPACK_IMPORTED_MODULE_1__database_controllers_article__["a" /* default */].delLabel);
    // label
    router.get('/labels', __WEBPACK_IMPORTED_MODULE_2__database_controllers_label__["a" /* default */].allLabels);
    router.post('/label/new', __WEBPACK_IMPORTED_MODULE_2__database_controllers_label__["a" /* default */].new);
    router.post('/label/update', __WEBPACK_IMPORTED_MODULE_2__database_controllers_label__["a" /* default */].update);
    router.post('/label/delete', __WEBPACK_IMPORTED_MODULE_2__database_controllers_label__["a" /* default */].delete);

    // activity
    router.get('/activity/all', __WEBPACK_IMPORTED_MODULE_3__database_controllers_activity__["a" /* default */].all);
    router.get('/activity/oneday', __WEBPACK_IMPORTED_MODULE_3__database_controllers_activity__["a" /* default */].oneDay);

    // user
    router.post('/login', __WEBPACK_IMPORTED_MODULE_4__database_controllers_user__["a" /* default */].login);
    router.post('/logout', __WEBPACK_IMPORTED_MODULE_5__api_user__["a" /* verifyToken */], __WEBPACK_IMPORTED_MODULE_4__database_controllers_user__["a" /* default */].logout);

    return router;
};

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("koa-cors");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("koa-logger");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("passport");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return verifyToken; });



var verifyToken = function verifyToken(ctx, next) {
    return new Promise(function (resolve, reject) {
        var token = ctx.request.headers["x-access-token"]; // 从body或query或者header中获取token
        console.log("获取签名", token);
        __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_1__config__["default"].secret, function (err, decode) {
            if (err) {
                //  时间失效/伪造token
                console.log(err.message);
                ctx.body = {
                    success: false,
                    message: err.message
                };
            } else {
                console.log(decode.name);
                resolve(next());
            }
        });
    });
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_activity_js__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Activity = function () {
    function Activity() {
        _classCallCheck(this, Activity);
    }

    _createClass(Activity, [{
        key: 'all',
        value: async function all(ctx) {
            var count = ctx.request.query.count || 360;
            var skipNum = ctx.request.query.skipNum || 0;
            var sort = ctx.request.query.sort || -1;

            var data = await __WEBPACK_IMPORTED_MODULE_1__models_activity_js__["a" /* default */].find({}, 'date logLen').sort({ 'date': sort }).skip(parseInt(skipNum)).limit(parseInt(count));

            ctx.body = {
                message: 'success',
                data: data
            };
        }
        // 一天的操作记录

    }, {
        key: 'oneDay',
        value: async function oneDay(ctx) {
            var date = ctx.request.query.date;
            var sort = ctx.request.query.sort || -1;

            var data = await __WEBPACK_IMPORTED_MODULE_1__models_activity_js__["a" /* default */].find({ date: date }).sort({ 'date': sort });
        }
    }]);

    return Activity;
}();

/* harmony default export */ exports["a"] = new Activity();

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_article__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_activity__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_formatTime__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_labelMap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_label__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var Article = function () {
    function Article() {
        _classCallCheck(this, Article);
    }

    _createClass(Article, [{
        key: 'new',
        value: async function _new(ctx) {
            var key = __WEBPACK_IMPORTED_MODULE_3_uuid___default.a.v4();
            var _ctx$request$body = ctx.request.body,
                title = _ctx$request$body.title,
                content = _ctx$request$body.content,
                description = _ctx$request$body.description;

            var article = void 0;

            try {
                article = new __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */]({
                    title: title,
                    content: content,
                    description: description
                });
                article = await article.save();

                var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_formatTime__["a" /* default */])(new Date());
                var activity = await __WEBPACK_IMPORTED_MODULE_2__models_activity__["a" /* default */].findOne({ date: date });

                if (activity) {
                    var log = {
                        article_id: article._id,
                        article_title: article.title,
                        operationType: 'created'
                    };

                    activity.log.push(log);
                    await activity.save();
                } else {
                    var newActivity = new __WEBPACK_IMPORTED_MODULE_2__models_activity__["a" /* default */]({
                        log: [{
                            article_id: article._id,
                            article_title: article.title,
                            operationType: 'created'
                        }]
                    });
                    await newActivity.save();
                }
            } catch (e) {
                ctx.body = {
                    message: '保存失败'
                };
            }

            ctx.body = {
                success: 'true',
                message: '保存成功',
                data: {
                    _id: article._id,
                    title: article.title,
                    desc: article.description
                }
            };
        }
    }, {
        key: 'list',
        value: async function list(ctx) {
            var count = ctx.request.query.count || 100;
            var skipNum = ctx.request.query.skipNum || 0;
            var sort = ctx.request.query.sort || -1;

            var data = await __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */].find({}, ['title', 'description', 'meta', 'label']).populate({ path: 'label', select: 'name color artCount' }).sort({ 'meta.updateAt': sort }).skip(parseInt(skipNum)).limit(parseInt(count));

            ctx.body = {
                message: 'success',
                data: data
            };
        }
    }, {
        key: 'update',
        value: async function update(ctx) {
            var _ctx$request$body2 = ctx.request.body,
                content = _ctx$request$body2.content,
                description = _ctx$request$body2.description,
                title = _ctx$request$body2.title,
                _id = _ctx$request$body2._id,
                babel = _ctx$request$body2.babel;


            var article = await __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */].findOne({ _id: _id });
            if (title && content && description) {
                article.title = title;
                article.content = content;
                article.description = description;
                await article.save();
            }
            // 保存操作日志
            try {
                var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_formatTime__["a" /* default */])(new Date());
                var activity = await __WEBPACK_IMPORTED_MODULE_2__models_activity__["a" /* default */].findOne({ date: date });

                if (activity) {
                    console.log("当天有日志");
                    var log = {
                        article_id: article._id,
                        article_title: article.title,
                        operationType: 'updated'
                    };
                    activity.log.push(log);
                    await activity.save();
                } else {
                    console.log("当天没有日志");
                    var newActivity = new __WEBPACK_IMPORTED_MODULE_2__models_activity__["a" /* default */]({
                        log: [{
                            article_id: article._id,
                            article_title: article.title,
                            operationType: 'updated'
                        }]
                    });
                    await newActivity.save();
                }
            } catch (e) {
                ctx.body = {
                    message: '更新失败'
                };
            }

            ctx.body = {
                message: '保存成功',
                data: article
            };
        }
    }, {
        key: 'delete',
        value: async function _delete(ctx) {
            var _id = ctx.request.body._id;
            try {
                // 保存日志
                var article = await __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */].findOne({ _id: _id });
                var date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_formatTime__["a" /* default */])(new Date());
                var activity = await __WEBPACK_IMPORTED_MODULE_2__models_activity__["a" /* default */].findOne({ date: date });

                if (activity) {
                    var log = {
                        article_id: article._id,
                        article_title: article.title,
                        operationType: 'deleted'
                    };
                    activity.log.push(log);
                    await activity.save();
                } else {
                    var newActivity = new __WEBPACK_IMPORTED_MODULE_2__models_activity__["a" /* default */]({
                        article_id: article._id,
                        article_title: article.title,
                        operationType: 'deleted'
                    });
                    await newActivity.save();
                }
                // 删除文章
                await __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */].remove({ _id: _id });
            } catch (e) {
                ctx.body = {
                    message: 'failed'
                };
            }

            ctx.body = {
                message: 'success'
            };
        }
    }, {
        key: 'findOne',
        value: async function findOne(ctx) {
            var _id = ctx.request.query._id;

            if (_id) {
                var data = await __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */].findOne({ _id: _id }).populate({ path: 'label', select: 'name color artCount' });
                ctx.body = {
                    message: 'success',
                    data: data
                };
            }
        }
    }, {
        key: 'addLabel',
        value: async function addLabel(ctx) {
            var _ctx$request$body3 = ctx.request.body,
                label_id = _ctx$request$body3.label_id,
                article_id = _ctx$request$body3.article_id;

            var article = await __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */].findOne({ _id: article_id, label: { $in: [label_id] } });
            if (article) {
                ctx.body = {
                    success: false,
                    message: '该标签已存在'
                };
                return;
            }

            article = await __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */].findOne({ _id: article_id });
            var label = await __WEBPACK_IMPORTED_MODULE_6__models_label__["a" /* default */].findOne({ _id: label_id });

            article.label.push(label);
            label.article.push(article);
            article = await article.save();
            label = await label.save();

            ctx.body = {
                success: true,
                message: '添加标签成功',
                data: article.label
            };
        }
    }, {
        key: 'delLabel',
        value: async function delLabel(ctx) {
            var _ctx$request$body4 = ctx.request.body,
                article_id = _ctx$request$body4.article_id,
                label_id = _ctx$request$body4.label_id;

            var article = await __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */].findOne({ _id: article_id });

            console.log(article.label);
            var index = article.label.indexOf(label_id);
            article.label.splice(index, 1);

            article = await article.save();

            ctx.body = {
                success: true,
                data: article.label
            };
        }
    }]);

    return Article;
}();

/* harmony default export */ exports["a"] = new Article();

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_label__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Label = function () {
    function Label() {
        _classCallCheck(this, Label);
    }

    _createClass(Label, [{
        key: 'new',
        value: async function _new(ctx) {
            var _ctx$request$body = ctx.request.body,
                name = _ctx$request$body.name,
                color = _ctx$request$body.color;

            var label = await __WEBPACK_IMPORTED_MODULE_1__models_label__["a" /* default */].findOne({ name: name });

            if (!label) {
                var newLabel = await new __WEBPACK_IMPORTED_MODULE_1__models_label__["a" /* default */]({ name: name, color: color }).save();
                ctx.body = {
                    success: true,
                    message: "添加Label成功",
                    data: newLabel
                };

                return;
            }

            ctx.body = {
                success: false,
                message: 'Label已存在'
            };
        }
    }, {
        key: 'delete',
        value: async function _delete(ctx) {
            var _id = ctx.request.body._id;

            try {
                await __WEBPACK_IMPORTED_MODULE_1__models_label__["a" /* default */].remove({ _id: _id });
            } catch (e) {
                ctx.body = {
                    success: false,
                    message: e
                };
            }

            ctx.body = {
                success: true,
                message: '删除成功'
            };
        }
    }, {
        key: 'allLabels',
        value: async function allLabels(ctx) {
            var _ctx$request$query = ctx.request.query,
                _ctx$request$query$li = _ctx$request$query.limit,
                limit = _ctx$request$query$li === undefined ? 100 : _ctx$request$query$li,
                _ctx$request$query$sk = _ctx$request$query.skip,
                skip = _ctx$request$query$sk === undefined ? 0 : _ctx$request$query$sk,
                _ctx$request$query$so = _ctx$request$query.sort,
                sort = _ctx$request$query$so === undefined ? -1 : _ctx$request$query$so;

            var labels = await __WEBPACK_IMPORTED_MODULE_1__models_label__["a" /* default */].find({}, ['name', 'color', 'artCount']).populate({ path: 'article', select: 'title description meta' }).limit(parseInt(limit)).skip(parseInt(skip)).sort({ 'artCount': sort });

            ctx.body = {
                success: true,
                data: labels
            };
        }
    }, {
        key: 'update',
        value: async function update(ctx) {
            var _ctx$request$body2 = ctx.request.body,
                name = _ctx$request$body2.name,
                color = _ctx$request$body2.color,
                _id = _ctx$request$body2._id;


            var label = await __WEBPACK_IMPORTED_MODULE_1__models_label__["a" /* default */].findOne({ _id: _id });
            label.name = name;
            label.color = color;
            label = await label.save();

            ctx.body = {
                success: true,
                message: '修盖label成功',
                data: label
            };
        }
    }]);

    return Label;
}();

/* harmony default export */ exports["a"] = new Label();

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    _createClass(User, [{
        key: 'login',
        value: async function login(ctx) {
            var _ctx$request$body = ctx.request.body,
                username = _ctx$request$body.username,
                password = _ctx$request$body.password;

            var user = await __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */].findOne({ username: username });

            var match = false;
            if (user) match = await user.comparePassword(password, user.password);
            if (match) {
                ctx.session.user = {
                    username: user.username,
                    _id: user._id
                };

                var token = user.getToken();
                user.token = token;
                await user.save();

                return ctx.body = {
                    success: true,
                    data: {
                        username: user.username,
                        token: token
                    }
                };
            }

            return ctx.body = {
                success: false,
                message: '密码错误'
            };
        }
    }, {
        key: 'logout',
        value: async function logout(ctx) {
            ctx.body = {
                success: true,
                message: "登出"
            };
        }
    }]);

    return User;
}();

/* harmony default export */ exports["a"] = new User();

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatTime__ = __webpack_require__(3);



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var ObjectId = Schema.Types.ObjectId;

var ArticleSchema = new Schema({
  title: String,
  content: String,
  comment: String,
  description: String,
  label: [{
    type: ObjectId,
    ref: 'Label'
  }],
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

ArticleSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = new Date();
    console.log("创建时间", this.meta.createAt);
  } else {
    this.meta.updateAt = new Date();
  }

  next();
});

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Article', ArticleSchema);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var ObjectId = Schema.Types.ObjectId;

var LabelMapSchema = new Schema({
    label: {
        type: ObjectId,
        ref: 'Label'
    },
    article: {
        type: ObjectId,
        ref: 'Article'
    }
});

/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('LabelMap', LabelMapSchema);

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("bcrypt");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_routes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_logger__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_bodyparser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_cors__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__middlewares_database__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__middlewares_verifyToken__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__middlewares_test__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__middlewares_session__ = __webpack_require__(10);














var app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;
var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_routes__["a" /* default */])();

// 数据库
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__middlewares_database__["a" /* default */])();

app.use(__WEBPACK_IMPORTED_MODULE_5_koa_bodyparser___default()());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(__WEBPACK_IMPORTED_MODULE_4_koa_logger___default()());
app.use(__WEBPACK_IMPORTED_MODULE_7_koa_cors___default()());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__middlewares_session__["a" /* default */])(app);

// Import and Set Nuxt.js options
var config = __webpack_require__(8);
config.dev = !(app.env === 'production');

// Instantiate nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

// Build in development
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build().catch(function (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}

app.use(function (ctx) {
  ctx.status = 200; // koa defaults to 404 when it sees that status is unset

  return new Promise(function (resolve, reject) {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, function (promise) {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject);
    });
  });
});

app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }
/******/ ]);
//# sourceMappingURL=main.map