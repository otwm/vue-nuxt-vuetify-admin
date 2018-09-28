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
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock__ = __webpack_require__(7);






const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);
app.use('/mock', __WEBPACK_IMPORTED_MODULE_3__mock__["a" /* default */]);
app.use('/api', __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */]);

let config = __webpack_require__(9);
config.dev = "development" !== 'production';

const nuxt = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Nuxt"](config);

if (config.dev) {
  const builder = new __WEBPACK_IMPORTED_MODULE_1_nuxt__["Builder"](nuxt);
  builder.build();
}

app.use(nuxt.render);

app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_sendOption__ = __webpack_require__(6);





const router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
const { error: logError } = console;

async function proxyRouter(req, res, next) {
  const { method = 'get', url, query, body } = req;
  try {
    const response = await __WEBPACK_IMPORTED_MODULE_1_axios___default()(Object.assign({}, __WEBPACK_IMPORTED_MODULE_3__common_sendOption__["a" /* serverMockOption */], {
      method,
      url: `${url}?${__WEBPACK_IMPORTED_MODULE_2_qs___default.a.stringify(query)}`,
      data: body
    }));
    res.status(response.status).json(response.data);
  } catch (error) {
    logError(error);
    next(error);
  }
}

router.use(proxyRouter);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export swaggerOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serverMockOption; });
const sendOption = {
  timeout: 2500,
  baseURL: '',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
  maxContentLength: 2000,
  // validateStatus: function (status) {
  //   return status >= 200 && status < 300; // default
  // },
  maxRedirects: 0

};

const swaggerOption = Object.assign({}, sendOption, {
  baseURL: '/mock'
});

const serverMockOption = Object.assign({}, sendOption, {
  baseURL: 'http://localhost:3000/mock'
});

/* unused harmony default export */ var _unused_webpack_default_export = (sendOption);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mock_users__ = __webpack_require__(8);



const router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
const { log } = console;

router.use('/users', function (req, res) {
  log(JSON.stringify(req.query));
  res.status(200).json({ users: __WEBPACK_IMPORTED_MODULE_1__common_mock_users__["a" /* default */], count: 7 });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const users = [{
  id: 1,
  no: 7,
  accountId: 'kdo',
  name: 'kdo',
  email: 'kdo@gmail.com',
  auth: 'admin',
  status: 'ok',
  createDate: '2015-01-12'
}, {
  id: 2,
  no: 6,
  accountId: 'bbq',
  name: 'bbq',
  email: 'kdo@gmail.com',
  auth: 'owner',
  status: 'ok',
  createDate: '2016-01-12'
}, {
  id: 3,
  no: 5,
  accountId: 'hjh',
  name: 'hjh',
  email: 'kdo@gmail.com',
  auth: 'user',
  status: 'ok',
  createDate: '2017-01-12'
}, {
  id: 4,
  no: 4,
  accountId: 'gom',
  name: 'gom',
  email: 'kdo@gmail.com',
  auth: 'hospital',
  status: 'ok',
  createDate: '2018-01-12'
}, {
  id: 5,
  no: 3,
  accountId: 'lyh',
  name: 'lyh',
  email: 'kdo@gmail.com',
  auth: 'owner',
  status: 'ok',
  createDate: '2015-10-12'
}, {
  id: 6,
  no: 2,
  accountId: 'jwt',
  name: 'jwt',
  email: 'kdo@gmail.com',
  auth: 'hospital',
  status: 'ok',
  createDate: '2015-10-12'
}, {
  id: 7,
  no: 1,
  accountId: 'iu',
  name: 'iu',
  email: 'kdo@gmail.com',
  auth: 'user',
  status: 'ok',
  createDate: '2015-11-12'
}];

/* harmony default export */ __webpack_exports__["a"] = (users);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const dev = "development" !== 'production';
// let middlewares = [];
//
// if (dev) {
//     const proxy = require('http-proxy-middleware')
//     const port = process.env.PORT || 8008
//     middlewares = [proxy('/api', {target: `http://localhost:${port}`})]
// }

module.exports = {
  /*
    ** Headers of the page
    */
  dev: dev,
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  plugins: [{ src: '~/plugins/components' }],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
    ** Global CSS
    */
  css: ['~/assets/css/main.css'],
  /*
    ** Add proxy
    */
  // serverMiddleware: middlewares,
  /*
    ** Add axios globally
    */
  build: {
    vendor: ['axios'],
    /*
        ** Run ESLINT on save
        */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map