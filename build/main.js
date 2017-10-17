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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatTime__ = __webpack_require__(2);



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
/* 4 */
/***/ function(module, exports) {

module.exports = require("uuid");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['./static/less/index.less'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' }
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_controllers_article__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_controllers_babel__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_controllers_activity__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_controllers_user__ = __webpack_require__(16);






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
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-cors");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-logger");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_activity_js__ = __webpack_require__(3);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Activity = function () {
    function Activity() {
        _classCallCheck(this, Activity);
    }

    _createClass(Activity, [{
        key: 'all',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
                var count, skipNum, sort, data;
                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                count = ctx.request.query.count || 360;
                                skipNum = ctx.request.query.skipNum || 0;
                                sort = ctx.request.query.sort || -1;
                                _context.next = 5;
                                return __WEBPACK_IMPORTED_MODULE_2__models_activity_js__["a" /* default */].find({}, 'date logLen').sort({ 'date': sort }).skip(parseInt(skipNum)).limit(parseInt(count));

                            case 5:
                                data = _context.sent;


                                ctx.body = {
                                    message: 'success',
                                    data: data
                                };

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function all(_x) {
                return _ref.apply(this, arguments);
            }

            return all;
        }()
        // 一天的操作记录

    }, {
        key: 'oneDay',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
                var date, sort, data;
                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                date = ctx.request.query.date;
                                sort = ctx.request.query.sort || -1;
                                _context2.next = 4;
                                return __WEBPACK_IMPORTED_MODULE_2__models_activity_js__["a" /* default */].find({ date: date }).sort({ 'date': sort });

                            case 4:
                                data = _context2.sent;

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function oneDay(_x2) {
                return _ref2.apply(this, arguments);
            }

            return oneDay;
        }()
    }]);

    return Activity;
}();

/* harmony default export */ exports["a"] = new Activity();

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_article__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_activity__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_formatTime__ = __webpack_require__(2);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var Article = function () {
    function Article() {
        _classCallCheck(this, Article);
    }

    _createClass(Article, [{
        key: 'add',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
                var key, _ctx$request$body, title, content, description, babel, article, date, activity, log, newActivity;

                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                key = __WEBPACK_IMPORTED_MODULE_4_uuid___default.a.v4();
                                _ctx$request$body = ctx.request.body, title = _ctx$request$body.title, content = _ctx$request$body.content, description = _ctx$request$body.description;
                                babel = ctx.request.body.babel.split(',');
                                article = void 0;
                                _context.prev = 4;

                                article = new __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */]({
                                    title: title,
                                    content: content,
                                    babel: babel,
                                    description: description
                                });
                                _context.next = 8;
                                return article.save();

                            case 8:
                                article = _context.sent;
                                date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_formatTime__["a" /* default */])(new Date());
                                _context.next = 12;
                                return __WEBPACK_IMPORTED_MODULE_3__models_activity__["a" /* default */].findOne({ date: date });

                            case 12:
                                activity = _context.sent;

                                if (!activity) {
                                    _context.next = 20;
                                    break;
                                }

                                log = {
                                    article_id: article._id,
                                    article_title: article.title,
                                    operationType: 'created'
                                };


                                activity.log.push(log);
                                _context.next = 18;
                                return activity.save();

                            case 18:
                                _context.next = 23;
                                break;

                            case 20:
                                newActivity = new __WEBPACK_IMPORTED_MODULE_3__models_activity__["a" /* default */]({
                                    log: [{
                                        article_id: article._id,
                                        article_title: article.title,
                                        operationType: 'created'
                                    }]
                                });
                                _context.next = 23;
                                return newActivity.save();

                            case 23:
                                _context.next = 28;
                                break;

                            case 25:
                                _context.prev = 25;
                                _context.t0 = _context['catch'](4);

                                ctx.body = {
                                    message: '保存失败'
                                };

                            case 28:

                                ctx.body = {
                                    success: 'true',
                                    message: '保存成功',
                                    data: {
                                        _id: article._id,
                                        title: article.title,
                                        desc: article.description
                                    }
                                };

                            case 29:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[4, 25]]);
            }));

            function add(_x) {
                return _ref.apply(this, arguments);
            }

            return add;
        }()
    }, {
        key: 'list',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
                var count, skipNum, sort, data;
                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                count = ctx.request.query.count || 10;
                                skipNum = ctx.request.query.skipNum || 0;
                                sort = ctx.request.query.sort || -1;
                                _context2.next = 5;
                                return __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */].find({}, ['title', 'description', 'babel', 'meta', 'comment']).sort({ 'meta.updateAt': sort }).skip(parseInt(skipNum)).limit(parseInt(count));

                            case 5:
                                data = _context2.sent;


                                ctx.body = {
                                    message: 'success',
                                    data: data
                                };

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function list(_x2) {
                return _ref2.apply(this, arguments);
            }

            return list;
        }()
    }, {
        key: 'update',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(ctx) {
                var _ctx$request$body2, content, description, title, _id, babel, article, date, activity, log, newActivity;

                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _ctx$request$body2 = ctx.request.body, content = _ctx$request$body2.content, description = _ctx$request$body2.description, title = _ctx$request$body2.title, _id = _ctx$request$body2._id, babel = _ctx$request$body2.babel;
                                _context3.next = 3;
                                return __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */].findOne({ _id: _id });

                            case 3:
                                article = _context3.sent;

                                if (!(title && content && description)) {
                                    _context3.next = 10;
                                    break;
                                }

                                article.title = title;
                                article.content = content;
                                article.description = description;
                                _context3.next = 10;
                                return article.save();

                            case 10:
                                _context3.prev = 10;
                                date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_formatTime__["a" /* default */])(new Date());
                                _context3.next = 14;
                                return __WEBPACK_IMPORTED_MODULE_3__models_activity__["a" /* default */].findOne({ date: date });

                            case 14:
                                activity = _context3.sent;

                                if (!activity) {
                                    _context3.next = 23;
                                    break;
                                }

                                console.log("当天有日志");
                                log = {
                                    article_id: article._id,
                                    article_title: article.title,
                                    operationType: 'updated'
                                };

                                activity.log.push(log);
                                _context3.next = 21;
                                return activity.save();

                            case 21:
                                _context3.next = 27;
                                break;

                            case 23:
                                console.log("当天没有日志");
                                newActivity = new __WEBPACK_IMPORTED_MODULE_3__models_activity__["a" /* default */]({
                                    log: [{
                                        article_id: article._id,
                                        article_title: article.title,
                                        operationType: 'updated'
                                    }]
                                });
                                _context3.next = 27;
                                return newActivity.save();

                            case 27:
                                _context3.next = 32;
                                break;

                            case 29:
                                _context3.prev = 29;
                                _context3.t0 = _context3['catch'](10);

                                ctx.body = {
                                    message: '更新失败'
                                };

                            case 32:

                                ctx.body = {
                                    message: '保存成功',
                                    data: article
                                };

                            case 33:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[10, 29]]);
            }));

            function update(_x3) {
                return _ref3.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: 'delete',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee4(ctx) {
                var _id, article, date, activity, log, newActivity;

                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _id = ctx.request.body._id;
                                _context4.prev = 1;
                                _context4.next = 4;
                                return __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */].findOne({ _id: _id });

                            case 4:
                                article = _context4.sent;
                                date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_formatTime__["a" /* default */])(new Date());
                                _context4.next = 8;
                                return __WEBPACK_IMPORTED_MODULE_3__models_activity__["a" /* default */].findOne({ date: date });

                            case 8:
                                activity = _context4.sent;

                                if (!activity) {
                                    _context4.next = 16;
                                    break;
                                }

                                log = {
                                    article_id: article._id,
                                    article_title: article.title,
                                    operationType: 'deleted'
                                };

                                activity.log.push(log);
                                _context4.next = 14;
                                return activity.save();

                            case 14:
                                _context4.next = 19;
                                break;

                            case 16:
                                newActivity = new __WEBPACK_IMPORTED_MODULE_3__models_activity__["a" /* default */]({
                                    article_id: article._id,
                                    article_title: article.title,
                                    operationType: 'deleted'
                                });
                                _context4.next = 19;
                                return newActivity.save();

                            case 19:
                                _context4.next = 21;
                                return __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */].remove({ _id: _id });

                            case 21:
                                _context4.next = 26;
                                break;

                            case 23:
                                _context4.prev = 23;
                                _context4.t0 = _context4['catch'](1);

                                ctx.body = {
                                    message: 'failed'
                                };

                            case 26:

                                ctx.body = {
                                    message: 'success'
                                };

                            case 27:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[1, 23]]);
            }));

            function _delete(_x4) {
                return _ref4.apply(this, arguments);
            }

            return _delete;
        }()
    }, {
        key: 'findOne',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee5(ctx) {
                var _id, data;

                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _id = ctx.request.query._id;

                                if (!_id) {
                                    _context5.next = 6;
                                    break;
                                }

                                _context5.next = 4;
                                return __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */].findOne({ _id: _id });

                            case 4:
                                data = _context5.sent;


                                ctx.body = {
                                    message: 'success',
                                    data: data
                                };

                            case 6:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function findOne(_x5) {
                return _ref5.apply(this, arguments);
            }

            return findOne;
        }()
    }]);

    return Article;
}();

/* harmony default export */ exports["a"] = new Article();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_babel__ = __webpack_require__(18);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var Babel = function () {
    function Babel() {
        _classCallCheck(this, Babel);
    }

    _createClass(Babel, [{
        key: 'add',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
                var newBabel, babel;
                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                newBabel = ctx.request.body.babel;
                                _context.next = 3;
                                return __WEBPACK_IMPORTED_MODULE_2__models_babel__["a" /* default */].find({ babel: newBabel });

                            case 3:
                                babel = _context.sent;

                                console.log(babel.length);
                                if (!babel.length) {
                                    new __WEBPACK_IMPORTED_MODULE_2__models_babel__["a" /* default */]({ babel: newBabel }).save();
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

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function add(_x) {
                return _ref.apply(this, arguments);
            }

            return add;
        }()
    }, {
        key: 'delete',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
                var _id;

                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _id = ctx.request.body._id;
                                _context2.prev = 1;
                                _context2.next = 4;
                                return __WEBPACK_IMPORTED_MODULE_2__models_babel__["a" /* default */].remove({ _id: _id });

                            case 4:
                                _context2.next = 9;
                                break;

                            case 6:
                                _context2.prev = 6;
                                _context2.t0 = _context2['catch'](1);

                                ctx.body = {
                                    message: 'fail',
                                    data: _context2.t0
                                };

                            case 9:

                                ctx.body = {
                                    message: 'success'
                                };

                            case 10:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1, 6]]);
            }));

            function _delete(_x2) {
                return _ref2.apply(this, arguments);
            }

            return _delete;
        }()
    }, {
        key: 'list',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(ctx) {
                var allBabel;
                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                allBabel = void 0;
                                _context3.prev = 1;
                                _context3.next = 4;
                                return __WEBPACK_IMPORTED_MODULE_2__models_babel__["a" /* default */].find({});

                            case 4:
                                allBabel = _context3.sent;
                                _context3.next = 10;
                                break;

                            case 7:
                                _context3.prev = 7;
                                _context3.t0 = _context3['catch'](1);

                                ctx.body = {
                                    message: 'fail',
                                    data: _context3.t0
                                };

                            case 10:

                                ctx.body = {
                                    message: 'success',
                                    data: allBabel
                                };

                            case 11:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[1, 7]]);
            }));

            function list(_x3) {
                return _ref3.apply(this, arguments);
            }

            return list;
        }()
    }]);

    return Babel;
}();

/* harmony default export */ exports["a"] = new Babel();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var User = function () {
    function User() {
        _classCallCheck(this, User);
    }

    _createClass(User, [{
        key: 'register',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
                var username, password, user;
                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                username = ctx.request.body.username;
                                password = ctx.request.body.password;
                                user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */]({
                                    username: username,
                                    password: password
                                });


                                user.save();

                                ctx.body = {
                                    message: 'success',
                                    username: username
                                };

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function register(_x) {
                return _ref.apply(this, arguments);
            }

            return register;
        }()
    }, {
        key: 'login',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
                var username, password, user;
                return __WEBPACK_IMPORTED_MODULE_0__Users_ding_Projects_gitnote_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                username = ctx.request.body.username;
                                password = ctx.request.body.password;
                                _context2.next = 4;
                                return __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* default */].findOne({ username: username, password: password });

                            case 4:
                                user = _context2.sent;

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

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function login(_x2) {
                return _ref2.apply(this, arguments);
            }

            return login;
        }()
    }]);

    return User;
}();

/* harmony default export */ exports["a"] = new User();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatTime__ = __webpack_require__(2);



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
    this.meta.createAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_formatTime__["a" /* default */])(new Date());
    console.log("创建时间", this.meta.createAt);
  } else {
    this.meta.updateAt = new Date();
  }

  next();
});

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Article', ArticleSchema);

/***/ },
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_routes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_logger__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_session__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_bodyparser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_cors__ = __webpack_require__(9);
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
var config = __webpack_require__(5);
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