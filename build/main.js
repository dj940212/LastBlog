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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatTime__ = __webpack_require__(1);



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
/* 3 */
/***/ function(module, exports) {

module.exports = require("uuid");

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_controllers_article__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_controllers_babel__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_controllers_activity__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_controllers_user__ = __webpack_require__(15);






/* harmony default export */ exports["a"] = function () {
   var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({ prefix: '/api' });

   // article
   router.post('/article/save', __WEBPACK_IMPORTED_MODULE_1__app_controllers_article__["a" /* default */].add);
   router.get('/article/list', __WEBPACK_IMPORTED_MODULE_1__app_controllers_article__["a" /* default */].list);
   router.post('/article/update', __WEBPACK_IMPORTED_MODULE_1__app_controllers_article__["a" /* default */].update);
   router.post('/article/delete', __WEBPACK_IMPORTED_MODULE_1__app_controllers_article__["a" /* default */].delete);
   router.get('/article/read', __WEBPACK_IMPORTED_MODULE_1__app_controllers_article__["a" /* default */].findOne);

   // babel
   router.get('/babel/list', __WEBPACK_IMPORTED_MODULE_2__app_controllers_babel__["a" /* default */].list);
   router.post('/babel/add', __WEBPACK_IMPORTED_MODULE_2__app_controllers_babel__["a" /* default */].add);
   router.post('/babel/delete', __WEBPACK_IMPORTED_MODULE_2__app_controllers_babel__["a" /* default */].delete);

   // activity
   router.get('/activity/all', __WEBPACK_IMPORTED_MODULE_3__app_controllers_activity__["a" /* default */].all);
   router.get('/activity/oneday', __WEBPACK_IMPORTED_MODULE_3__app_controllers_activity__["a" /* default */].oneDay);

   // user
   router.post('/user/register', __WEBPACK_IMPORTED_MODULE_4__app_controllers_user__["a" /* default */].register);
   router.post('/user/login', __WEBPACK_IMPORTED_MODULE_4__app_controllers_user__["a" /* default */].login);

   return router;
};

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-cors");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-logger");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_activity_js__ = __webpack_require__(2);
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_article__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_activity__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_formatTime__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var Article = function () {
    function Article() {
        _classCallCheck(this, Article);
    }

    _createClass(Article, [{
        key: 'add',
        value: async function add(ctx) {
            var key = __WEBPACK_IMPORTED_MODULE_3_uuid___default.a.v4();
            var _ctx$request$body = ctx.request.body,
                title = _ctx$request$body.title,
                content = _ctx$request$body.content,
                description = _ctx$request$body.description;

            var babel = ctx.request.body.babel.split(',');
            var article = void 0;

            try {
                article = new __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */]({
                    title: title,
                    content: content,
                    babel: babel,
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
            var count = ctx.request.query.count || 10;
            var skipNum = ctx.request.query.skipNum || 0;
            var sort = ctx.request.query.sort || -1;

            var data = await __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */].find({}, ['title', 'description', 'babel', 'meta', 'comment']).sort({ 'meta.updateAt': sort }).skip(parseInt(skipNum)).limit(parseInt(count));

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
                var data = await __WEBPACK_IMPORTED_MODULE_1__models_article__["a" /* default */].findOne({ _id: _id });

                ctx.body = {
                    message: 'success',
                    data: data
                };
            }
        }
    }]);

    return Article;
}();

/* harmony default export */ exports["a"] = new Article();

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_babel__ = __webpack_require__(17);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Babel = function () {
    function Babel() {
        _classCallCheck(this, Babel);
    }

    _createClass(Babel, [{
        key: 'add',
        value: async function add(ctx) {
            var newBabel = ctx.request.body.babel;
            var babel = await __WEBPACK_IMPORTED_MODULE_1__models_babel__["a" /* default */].find({ babel: newBabel });
            console.log(babel.length);
            if (!babel.length) {
                new __WEBPACK_IMPORTED_MODULE_1__models_babel__["a" /* default */]({ babel: newBabel }).save();
                // const allBabel = await BabelMod().find({})
                ctx.body = {
                    message: 'success'
                    // data: allBabel
                };
            } else {
                ctx.body = {
                    message: 'babel已存在'
                };
            }
        }
    }, {
        key: 'delete',
        value: async function _delete(ctx) {
            var _id = ctx.request.body._id;

            try {
                await __WEBPACK_IMPORTED_MODULE_1__models_babel__["a" /* default */].remove({ _id: _id });
            } catch (e) {
                ctx.body = {
                    message: 'fail',
                    data: e
                };
            }

            ctx.body = {
                message: 'success'
            };
        }
    }, {
        key: 'list',
        value: async function list(ctx) {
            var allBabel = void 0;
            try {
                allBabel = await __WEBPACK_IMPORTED_MODULE_1__models_babel__["a" /* default */].find({});
            } catch (e) {
                ctx.body = {
                    message: 'fail',
                    data: e
                };
            }

            ctx.body = {
                message: 'success',
                data: allBabel
            };
        }
    }]);

    return Babel;
}();

/* harmony default export */ exports["a"] = new Babel();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    _createClass(User, [{
        key: 'register',
        value: async function register(ctx) {
            var username = ctx.request.body.username;
            var password = ctx.request.body.password;

            var user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */]({
                username: username,
                password: password
            });

            user.save();

            ctx.body = {
                message: 'success',
                username: username
            };
        }
    }, {
        key: 'login',
        value: async function login(ctx) {
            var username = ctx.request.body.username;
            var password = ctx.request.body.password;

            var user = await __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */].findOne({ username: username, password: password });
            console.log(user);
            if (user) {
                ctx.cookies.set('userId', "2222222", {
                    path: '/#/login',
                    httpOnly: false,
                    sameSite: 'strict',
                    maxAge: 10 * 60 * 1000, // cookie有效时长
                    expires: new Date('2017-11-15')
                });

                console.log(ctx.cookies.get('userId'));

                ctx.body = {
                    message: 'success'
                };
            } else {
                ctx.body = {
                    message: 'fail'
                };
            }
        }
    }]);

    return User;
}();

/* harmony default export */ exports["a"] = new User();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatTime__ = __webpack_require__(1);



var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var ObjectId = Schema.Types.ObjectId;

var ArticleSchema = new Schema({
  title: String,
  babel: [String],
  content: String,
  comment: String,
  description: String,
  meta: {
    createAt: String,
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

var BabelSchema = new Schema({
    babel: String,
    num: {
        default: 0,
        type: Number
    }

});

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Babel', BabelSchema);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var UserSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    username: String,
    password: String
});

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', UserSchema);

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_routes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_logger__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_session__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_bodyparser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_cors__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_koa_cors__);









var app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;
var router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_routes__["a" /* default */])();

app.use(__WEBPACK_IMPORTED_MODULE_6_koa_bodyparser___default()());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(__WEBPACK_IMPORTED_MODULE_4_koa_logger___default()());
app.use(__WEBPACK_IMPORTED_MODULE_7_koa_cors___default()({ "Access-Control-Allow-Credentials": true }));
app.use(__WEBPACK_IMPORTED_MODULE_5_koa_session___default()(app));

// Import and Set Nuxt.js options
var config = __webpack_require__(4);
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

__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connect('mongodb://blog_runner:dj15155620677@59.110.164.55:27017/blog');
__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connection.on("connected", function () {
  console.log('连接数据库成功');
});

app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }
/******/ ]);
//# sourceMappingURL=main.map