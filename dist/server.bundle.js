/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/PublicController.js":
/*!*************************************!*\
  !*** ./src/api/PublicController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-captcha */ \"svg-captcha\");\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_captcha__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/RedisConfig */ \"./src/config/RedisConfig.js\");\n// captcha 图形验证码\n\n\n\nclass PublicController {\n  constructor() {}\n\n  async demo(ctx) {\n    ctx.body = {\n      msg: 'body message !!!!'\n    };\n  }\n\n  async getCaptcha(ctx) {\n    const {\n      sid\n    } = ctx.request.query;\n    const newCaptcha = svg_captcha__WEBPACK_IMPORTED_MODULE_0___default().create({\n      size: 4,\n      ignoreChars: '0o1il',\n      color: true,\n      noise: Math.floor(Math.random() * 5),\n      width: 120,\n      height: 38\n    }); // console.log(newCaptcha);\n    // 设置图片验证码超时时间未10分钟\n\n    (0,_config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__.setValue)(sid, newCaptcha.text, 10 * 60);\n    ctx.body = {\n      code: 200,\n      data: newCaptcha.data\n    };\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PublicController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL1B1YmxpY0NvbnRyb2xsZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxnQkFBTixDQUF1QjtBQUNuQkMsRUFBQUEsV0FBVyxHQUFJLENBQUU7O0FBQ1AsUUFBSkMsSUFBSSxDQUFDQyxHQUFELEVBQU07QUFDWkEsSUFBQUEsR0FBRyxDQUFDQyxJQUFKLEdBQVc7QUFDUEMsTUFBQUEsR0FBRyxFQUFFO0FBREUsS0FBWDtBQUdIOztBQUVlLFFBQVZDLFVBQVUsQ0FBQ0gsR0FBRCxFQUFNO0FBQ2xCLFVBQU07QUFBRUksTUFBQUE7QUFBRixRQUFVSixHQUFHLENBQUNLLE9BQUosQ0FBWUMsS0FBNUI7QUFDQSxVQUFNQyxVQUFVLEdBQUdaLHlEQUFBLENBQWtCO0FBQ2pDYyxNQUFBQSxJQUFJLEVBQUUsQ0FEMkI7QUFFakNDLE1BQUFBLFdBQVcsRUFBRSxPQUZvQjtBQUdqQ0MsTUFBQUEsS0FBSyxFQUFFLElBSDBCO0FBSWpDQyxNQUFBQSxLQUFLLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsQ0FKMEI7QUFLakNDLE1BQUFBLEtBQUssRUFBRSxHQUwwQjtBQU1qQ0MsTUFBQUEsTUFBTSxFQUFFO0FBTnlCLEtBQWxCLENBQW5CLENBRmtCLENBVWxCO0FBQ0E7O0FBQ0FyQixJQUFBQSw2REFBUSxDQUFDUSxHQUFELEVBQU1HLFVBQVUsQ0FBQ1csSUFBakIsRUFBdUIsS0FBSyxFQUE1QixDQUFSO0FBQ0FsQixJQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNQa0IsTUFBQUEsSUFBSSxFQUFFLEdBREM7QUFFUEMsTUFBQUEsSUFBSSxFQUFFYixVQUFVLENBQUNhO0FBRlYsS0FBWDtBQUlIOztBQXpCa0I7O0FBNEJ2QixpRUFBZSxJQUFJdkIsZ0JBQUosRUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovLzgtNC8uL3NyYy9hcGkvUHVibGljQ29udHJvbGxlci5qcz82OGFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNhcHRjaGEg5Zu+5b2i6aqM6K+B56CBXHJcbmltcG9ydCBzdmdDYXB0Y2hhIGZyb20gJ3N2Zy1jYXB0Y2hhJ1xyXG5pbXBvcnQgeyBzZXRWYWx1ZSB9IGZyb20gJ0AvY29uZmlnL1JlZGlzQ29uZmlnJ1xyXG5cclxuY2xhc3MgUHVibGljQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxyXG4gICAgYXN5bmMgZGVtbyhjdHgpIHtcclxuICAgICAgICBjdHguYm9keSA9IHtcclxuICAgICAgICAgICAgbXNnOiAnYm9keSBtZXNzYWdlICEhISEnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldENhcHRjaGEoY3R4KSB7XHJcbiAgICAgICAgY29uc3QgeyBzaWQgfSA9IGN0eC5yZXF1ZXN0LnF1ZXJ5XHJcbiAgICAgICAgY29uc3QgbmV3Q2FwdGNoYSA9IHN2Z0NhcHRjaGEuY3JlYXRlKHtcclxuICAgICAgICAgICAgc2l6ZTogNCxcclxuICAgICAgICAgICAgaWdub3JlQ2hhcnM6ICcwbzFpbCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0cnVlLFxyXG4gICAgICAgICAgICBub2lzZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSksXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzhcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdDYXB0Y2hhKTtcclxuICAgICAgICAvLyDorr7nva7lm77niYfpqozor4HnoIHotoXml7bml7bpl7TmnKoxMOWIhumSn1xyXG4gICAgICAgIHNldFZhbHVlKHNpZCwgbmV3Q2FwdGNoYS50ZXh0LCAxMCAqIDYwKVxyXG4gICAgICAgIGN0eC5ib2R5ID0ge1xyXG4gICAgICAgICAgICBjb2RlOiAyMDAsXHJcbiAgICAgICAgICAgIGRhdGE6IG5ld0NhcHRjaGEuZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFB1YmxpY0NvbnRyb2xsZXIoKSJdLCJuYW1lcyI6WyJzdmdDYXB0Y2hhIiwic2V0VmFsdWUiLCJQdWJsaWNDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJkZW1vIiwiY3R4IiwiYm9keSIsIm1zZyIsImdldENhcHRjaGEiLCJzaWQiLCJyZXF1ZXN0IiwicXVlcnkiLCJuZXdDYXB0Y2hhIiwiY3JlYXRlIiwic2l6ZSIsImlnbm9yZUNoYXJzIiwiY29sb3IiLCJub2lzZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dCIsImNvZGUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/PublicController.js\n");

/***/ }),

/***/ "./src/api/loginController.js":
/*!************************************!*\
  !*** ./src/api/loginController.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_MailConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/MailConfig */ \"./src/config/MailConfig.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n/* harmony import */ var _common_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/Utils */ \"./src/common/Utils.js\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/model/User */ \"./src/model/User.js\");\n\n\n\n\n\n\n\n\nclass LoginController {\n  constructor() {}\n\n  async forget(ctx) {\n    // post,如果是get请求，使用ctx.request.query获取get参数\n    const {\n      body\n    } = ctx.request;\n\n    try {\n      let sid = body.sid;\n      let code = body.code; // 验证验证码的时效性、正确性\n\n      let codeVerify = await (0,_common_Utils__WEBPACK_IMPORTED_MODULE_5__.checkCode)(sid, code);\n\n      if (codeVerify) {\n        // TODO 查询用户信息\n        let result = await (0,_config_MailConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n          code: Math.floor(Math.random() * (9999 - 1000)) + 1000,\n          expire: moment__WEBPACK_IMPORTED_MODULE_0___default()().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),\n          email: body.username,\n          user: 'Simu'\n        });\n        ctx.body = {\n          code: 200,\n          data: result,\n          msg: '邮件发送成功'\n        };\n      } else {\n        ctx.body = {\n          code: 401,\n          msg: '图形验证码不正确！'\n        };\n      }\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  async login(ctx) {\n    // 接收登录参数\n    const {\n      body\n    } = ctx.request;\n    let sid = body.sid;\n    let code = body.code; // 验证验证码的时效性、正确性\n\n    let result = await (0,_common_Utils__WEBPACK_IMPORTED_MODULE_5__.checkCode)(sid, code);\n\n    if (result) {\n      // 验证账号密码是否正确\n      let user = await _model_User__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n        username: body.username\n      }); // 此处将空用户错误放到errorHandle中统一处理了，前端监听错误信息判断500错误\n      // if (user !== null) {\n      // console.log(await bcrypt.compare(body.password, user.password))\n\n      if (await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(body.password, user.password)) {\n        // 登录成功，返回token\n        // console.log('hello login')\n        let token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n          _id: '1000215',\n          sex: 'F'\n        }, _config__WEBPACK_IMPORTED_MODULE_4__.JWT_SECRET, {\n          expiresIn: '1d'\n        });\n        ctx.body = {\n          code: 200,\n          token: token\n        };\n      } else {\n        ctx.body = {\n          code: 404,\n          msg: '用户密码错误！'\n        };\n      } // } else {\n      //     ctx.body = {\n      //         code: 404,\n      //         msg: '非法用户登录!'\n      //     }\n      // }\n\n    } else {\n      ctx.body = {\n        code: 401,\n        msg: '图形验证码不正确！'\n      };\n    }\n  }\n\n  async register(ctx) {\n    // 接收登录参数\n    const {\n      body\n    } = ctx.request; // 验证验证码的时效性和有效性\n\n    let sid = body.sid;\n    let code = body.code;\n    let msg = {}; // 验证验证码的时效性、正确性\n\n    let codeVerify = await (0,_common_Utils__WEBPACK_IMPORTED_MODULE_5__.checkCode)(sid, code);\n\n    if (codeVerify) {\n      let check = true; // 检测判断邮箱是否被注册\n\n      let userInfo = await _model_User__WEBPACK_IMPORTED_MODULE_6__[\"default\"].findOne({\n        username: body.username\n      });\n\n      if (userInfo !== null) {\n        //已被注册\n        msg.username = ['邮箱已经注册，如果您忘记了密码，请点击忘记密码修改。'];\n        check = false;\n      }\n\n      if (check) {\n        // 密码加密\n        let password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(body.password, 5);\n        console.log(password);\n        let user = new _model_User__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n          username: body.username,\n          password: password,\n          nickname: body.nickname,\n          created: moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD HH:mm:ss')\n        });\n        let result = await user.save();\n        ctx.body = {\n          code: 200,\n          data: result,\n          msg: '注册成功，去登录吧'\n        };\n        return;\n      }\n    } else {\n      msg.code = ['图形验证码不正确！'];\n    }\n\n    ctx.body = {\n      code: 500,\n      msg: msg\n    };\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LoginController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2xvZ2luQ29udHJvbGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1PLGVBQU4sQ0FBc0I7QUFDbEJDLEVBQUFBLFdBQVcsR0FBSSxDQUFFOztBQUNMLFFBQU5DLE1BQU0sQ0FBRUMsR0FBRixFQUFPO0FBQ2Y7QUFDQSxVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBV0QsR0FBRyxDQUFDRSxPQUFyQjs7QUFDQSxRQUFJO0FBQ0EsVUFBSUMsR0FBRyxHQUFHRixJQUFJLENBQUNFLEdBQWY7QUFDQSxVQUFJQyxJQUFJLEdBQUdILElBQUksQ0FBQ0csSUFBaEIsQ0FGQSxDQUdBOztBQUNBLFVBQUlDLFVBQVUsR0FBRyxNQUFNVix3REFBUyxDQUFDUSxHQUFELEVBQU1DLElBQU4sQ0FBaEM7O0FBQ0EsVUFBSUMsVUFBSixFQUFnQjtBQUNaO0FBQ0EsWUFBSUMsTUFBTSxHQUFHLE1BQU1kLDhEQUFJLENBQUM7QUFDcEJZLFVBQUFBLElBQUksRUFBRUcsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixPQUFLLElBQXRCLENBQVgsSUFBMEMsSUFENUI7QUFFcEJDLFVBQUFBLE1BQU0sRUFBRXBCLDZDQUFNLEdBQUdxQixHQUFULENBQWEsRUFBYixFQUFpQixTQUFqQixFQUE0QkMsTUFBNUIsQ0FBbUMscUJBQW5DLENBRlk7QUFHcEJDLFVBQUFBLEtBQUssRUFBRVosSUFBSSxDQUFDYSxRQUhRO0FBSXBCQyxVQUFBQSxJQUFJLEVBQUU7QUFKYyxTQUFELENBQXZCO0FBTUFmLFFBQUFBLEdBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1BHLFVBQUFBLElBQUksRUFBRSxHQURDO0FBRVBZLFVBQUFBLElBQUksRUFBRVYsTUFGQztBQUdQVyxVQUFBQSxHQUFHLEVBQUU7QUFIRSxTQUFYO0FBS0gsT0FiRCxNQWFPO0FBQ0hqQixRQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNQRyxVQUFBQSxJQUFJLEVBQUUsR0FEQztBQUVQYSxVQUFBQSxHQUFHLEVBQUU7QUFGRSxTQUFYO0FBSUg7QUFDSixLQXhCRCxDQXdCRSxPQUFPQyxDQUFQLEVBQVU7QUFDUkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDSDtBQUNKOztBQUVVLFFBQUxHLEtBQUssQ0FBRXJCLEdBQUYsRUFBTztBQUNkO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQTtBQUFGLFFBQVdELEdBQUcsQ0FBQ0UsT0FBckI7QUFDQSxRQUFJQyxHQUFHLEdBQUdGLElBQUksQ0FBQ0UsR0FBZjtBQUNBLFFBQUlDLElBQUksR0FBR0gsSUFBSSxDQUFDRyxJQUFoQixDQUpjLENBS2Q7O0FBQ0EsUUFBSUUsTUFBTSxHQUFHLE1BQU1YLHdEQUFTLENBQUNRLEdBQUQsRUFBTUMsSUFBTixDQUE1Qjs7QUFDQSxRQUFJRSxNQUFKLEVBQVk7QUFDUjtBQUNBLFVBQUlTLElBQUksR0FBRyxNQUFNbkIsMkRBQUEsQ0FBYTtBQUFFa0IsUUFBQUEsUUFBUSxFQUFFYixJQUFJLENBQUNhO0FBQWpCLE9BQWIsQ0FBakIsQ0FGUSxDQUdSO0FBQ0E7QUFDSTs7QUFDQSxVQUFJLE1BQU12Qix1REFBQSxDQUFlVSxJQUFJLENBQUN1QixRQUFwQixFQUE4QlQsSUFBSSxDQUFDUyxRQUFuQyxDQUFWLEVBQXdEO0FBQ3BEO0FBQ0E7QUFDQSxZQUFJQyxLQUFLLEdBQUdoQyx3REFBQSxDQUFrQjtBQUFDa0MsVUFBQUEsR0FBRyxFQUFFLFNBQU47QUFBaUJDLFVBQUFBLEdBQUcsRUFBRTtBQUF0QixTQUFsQixFQUE4Q2xDLCtDQUE5QyxFQUEwRDtBQUNsRW1DLFVBQUFBLFNBQVMsRUFBRTtBQUR1RCxTQUExRCxDQUFaO0FBR0E3QixRQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNQRyxVQUFBQSxJQUFJLEVBQUUsR0FEQztBQUVQcUIsVUFBQUEsS0FBSyxFQUFFQTtBQUZBLFNBQVg7QUFJSCxPQVZELE1BVU87QUFDSHpCLFFBQUFBLEdBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1BHLFVBQUFBLElBQUksRUFBRSxHQURDO0FBRVBhLFVBQUFBLEdBQUcsRUFBRTtBQUZFLFNBQVg7QUFJSCxPQXJCRyxDQXNCUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0gsS0E1QkQsTUE0Qk87QUFDSGpCLE1BQUFBLEdBQUcsQ0FBQ0MsSUFBSixHQUFXO0FBQ1BHLFFBQUFBLElBQUksRUFBRSxHQURDO0FBRVBhLFFBQUFBLEdBQUcsRUFBRTtBQUZFLE9BQVg7QUFJSDtBQUNKOztBQUVhLFFBQVJhLFFBQVEsQ0FBRTlCLEdBQUYsRUFBTztBQUNqQjtBQUNBLFVBQU07QUFBRUMsTUFBQUE7QUFBRixRQUFXRCxHQUFHLENBQUNFLE9BQXJCLENBRmlCLENBR2pCOztBQUNBLFFBQUlDLEdBQUcsR0FBR0YsSUFBSSxDQUFDRSxHQUFmO0FBQ0EsUUFBSUMsSUFBSSxHQUFHSCxJQUFJLENBQUNHLElBQWhCO0FBQ0EsUUFBSWEsR0FBRyxHQUFHLEVBQVYsQ0FOaUIsQ0FPakI7O0FBQ0EsUUFBSVosVUFBVSxHQUFHLE1BQU1WLHdEQUFTLENBQUNRLEdBQUQsRUFBTUMsSUFBTixDQUFoQzs7QUFDQSxRQUFJQyxVQUFKLEVBQWdCO0FBQ1osVUFBSTBCLEtBQUssR0FBRyxJQUFaLENBRFksQ0FFWjs7QUFDQSxVQUFJQyxRQUFRLEdBQUcsTUFBTXBDLDJEQUFBLENBQWE7QUFBRWtCLFFBQUFBLFFBQVEsRUFBRWIsSUFBSSxDQUFDYTtBQUFqQixPQUFiLENBQXJCOztBQUNBLFVBQUlrQixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFBSztBQUN4QmYsUUFBQUEsR0FBRyxDQUFDSCxRQUFKLEdBQWUsQ0FBQyw0QkFBRCxDQUFmO0FBQ0FpQixRQUFBQSxLQUFLLEdBQUcsS0FBUjtBQUNIOztBQUNELFVBQUlBLEtBQUosRUFBVztBQUNQO0FBQ0EsWUFBSVAsUUFBUSxHQUFHLE1BQU1qQyxvREFBQSxDQUFZVSxJQUFJLENBQUN1QixRQUFqQixFQUEyQixDQUEzQixDQUFyQjtBQUNBTCxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWjtBQUNBLFlBQUlULElBQUksR0FBRyxJQUFJbkIsbURBQUosQ0FBUztBQUNoQmtCLFVBQUFBLFFBQVEsRUFBRWIsSUFBSSxDQUFDYSxRQURDO0FBRWhCVSxVQUFBQSxRQUFRLEVBQUVBLFFBRk07QUFHaEJVLFVBQUFBLFFBQVEsRUFBRWpDLElBQUksQ0FBQ2lDLFFBSEM7QUFJaEJDLFVBQUFBLE9BQU8sRUFBRTdDLDZDQUFNLEdBQUdzQixNQUFULENBQWdCLHFCQUFoQjtBQUpPLFNBQVQsQ0FBWDtBQU1BLFlBQUlOLE1BQU0sR0FBRyxNQUFNUyxJQUFJLENBQUNxQixJQUFMLEVBQW5CO0FBQ0FwQyxRQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNQRyxVQUFBQSxJQUFJLEVBQUUsR0FEQztBQUVQWSxVQUFBQSxJQUFJLEVBQUVWLE1BRkM7QUFHUFcsVUFBQUEsR0FBRyxFQUFFO0FBSEUsU0FBWDtBQUtBO0FBQ0g7QUFDSixLQTFCRCxNQTBCTztBQUNIQSxNQUFBQSxHQUFHLENBQUNiLElBQUosR0FBVyxDQUFDLFdBQUQsQ0FBWDtBQUNIOztBQUNESixJQUFBQSxHQUFHLENBQUNDLElBQUosR0FBVztBQUNQRyxNQUFBQSxJQUFJLEVBQUUsR0FEQztBQUVQYSxNQUFBQSxHQUFHLEVBQUVBO0FBRkUsS0FBWDtBQUlIOztBQXZIaUI7O0FBMEh0QixpRUFBZSxJQUFJcEIsZUFBSixFQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOC00Ly4vc3JjL2FwaS9sb2dpbkNvbnRyb2xsZXIuanM/MmE5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJ1xyXG5pbXBvcnQgc2VuZCBmcm9tIFwiLi4vY29uZmlnL01haWxDb25maWdcIlxyXG5pbXBvcnQganNvbndlYnRva2VuIGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IHsgSldUX1NFQ1JFVCB9IGZyb20gXCIuLi9jb25maWdcIlxyXG5pbXBvcnQgeyBjaGVja0NvZGUgfSBmcm9tICdAL2NvbW1vbi9VdGlscydcclxuaW1wb3J0IFVzZXIgZnJvbSAnQC9tb2RlbC9Vc2VyJ1xyXG5cclxuY2xhc3MgTG9naW5Db250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHt9XHJcbiAgICBhc3luYyBmb3JnZXQgKGN0eCkge1xyXG4gICAgICAgIC8vIHBvc3Qs5aaC5p6c5pivZ2V06K+35rGC77yM5L2/55SoY3R4LnJlcXVlc3QucXVlcnnojrflj5ZnZXTlj4LmlbBcclxuICAgICAgICBjb25zdCB7IGJvZHkgfSA9IGN0eC5yZXF1ZXN0XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHNpZCA9IGJvZHkuc2lkXHJcbiAgICAgICAgICAgIGxldCBjb2RlID0gYm9keS5jb2RlXHJcbiAgICAgICAgICAgIC8vIOmqjOivgemqjOivgeeggeeahOaXtuaViOaAp+OAgeato+ehruaAp1xyXG4gICAgICAgICAgICBsZXQgY29kZVZlcmlmeSA9IGF3YWl0IGNoZWNrQ29kZShzaWQsIGNvZGUpXHJcbiAgICAgICAgICAgIGlmIChjb2RlVmVyaWZ5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIOafpeivoueUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5OTk5LTEwMDApKSArIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlOiBtb21lbnQoKS5hZGQoMzAsICdtaW51dGVzJykuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGJvZHkudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogJ1NpbXUnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY3R4LmJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6ICfpgq7ku7blj5HpgIHmiJDlip8nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHguYm9keSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2RlOiA0MDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbXNnOiAn5Zu+5b2i6aqM6K+B56CB5LiN5q2j56Gu77yBJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2dpbiAoY3R4KSB7XHJcbiAgICAgICAgLy8g5o6l5pS255m75b2V5Y+C5pWwXHJcbiAgICAgICAgY29uc3QgeyBib2R5IH0gPSBjdHgucmVxdWVzdFxyXG4gICAgICAgIGxldCBzaWQgPSBib2R5LnNpZFxyXG4gICAgICAgIGxldCBjb2RlID0gYm9keS5jb2RlXHJcbiAgICAgICAgLy8g6aqM6K+B6aqM6K+B56CB55qE5pe25pWI5oCn44CB5q2j56Gu5oCnXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNoZWNrQ29kZShzaWQsIGNvZGUpXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAvLyDpqozor4HotKblj7flr4bnoIHmmK/lkKbmraPnoa5cclxuICAgICAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyB1c2VybmFtZTogYm9keS51c2VybmFtZSB9KVxyXG4gICAgICAgICAgICAvLyDmraTlpITlsIbnqbrnlKjmiLfplJnor6/mlL7liLBlcnJvckhhbmRsZeS4ree7n+S4gOWkhOeQhuS6hu+8jOWJjeerr+ebkeWQrOmUmeivr+S/oeaBr+WIpOaWrTUwMOmUmeivr1xyXG4gICAgICAgICAgICAvLyBpZiAodXNlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXdhaXQgYmNyeXB0LmNvbXBhcmUoYm9keS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCkpXHJcbiAgICAgICAgICAgICAgICBpZiAoYXdhaXQgYmNyeXB0LmNvbXBhcmUoYm9keS5wYXNzd29yZCwgdXNlci5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDnmbvlvZXmiJDlip/vvIzov5Tlm550b2tlblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbyBsb2dpbicpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0ganNvbndlYnRva2VuLnNpZ24oe19pZDogJzEwMDAyMTUnLCBzZXg6ICdGJ30sIEpXVF9TRUNSRVQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlc0luOiAnMWQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBjdHguYm9keSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5ib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiA0MDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZzogJ+eUqOaIt+WvhueggemUmeivr++8gSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjdHguYm9keSA9IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb2RlOiA0MDQsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbXNnOiAn6Z2e5rOV55So5oi355m75b2VISdcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN0eC5ib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgY29kZTogNDAxLFxyXG4gICAgICAgICAgICAgICAgbXNnOiAn5Zu+5b2i6aqM6K+B56CB5LiN5q2j56Gu77yBJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlZ2lzdGVyIChjdHgpIHtcclxuICAgICAgICAvLyDmjqXmlLbnmbvlvZXlj4LmlbBcclxuICAgICAgICBjb25zdCB7IGJvZHkgfSA9IGN0eC5yZXF1ZXN0XHJcbiAgICAgICAgLy8g6aqM6K+B6aqM6K+B56CB55qE5pe25pWI5oCn5ZKM5pyJ5pWI5oCnXHJcbiAgICAgICAgbGV0IHNpZCA9IGJvZHkuc2lkXHJcbiAgICAgICAgbGV0IGNvZGUgPSBib2R5LmNvZGVcclxuICAgICAgICBsZXQgbXNnID0ge31cclxuICAgICAgICAvLyDpqozor4Hpqozor4HnoIHnmoTml7bmlYjmgKfjgIHmraPnoa7mgKdcclxuICAgICAgICBsZXQgY29kZVZlcmlmeSA9IGF3YWl0IGNoZWNrQ29kZShzaWQsIGNvZGUpXHJcbiAgICAgICAgaWYgKGNvZGVWZXJpZnkpIHtcclxuICAgICAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyDmo4DmtYvliKTmlq3pgq7nrrHmmK/lkKbooqvms6jlhoxcclxuICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gYXdhaXQgVXNlci5maW5kT25lKHsgdXNlcm5hbWU6IGJvZHkudXNlcm5hbWUgfSlcclxuICAgICAgICAgICAgaWYgKHVzZXJJbmZvICE9PSBudWxsKSB7ICAgIC8v5bey6KKr5rOo5YaMXHJcbiAgICAgICAgICAgICAgICBtc2cudXNlcm5hbWUgPSBbJ+mCrueuseW3sue7j+azqOWGjO+8jOWmguaenOaCqOW/mOiusOS6huWvhuegge+8jOivt+eCueWHu+W/mOiusOWvhueggeS/ruaUueOAgiddXHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlr4bnoIHliqDlr4ZcclxuICAgICAgICAgICAgICAgIGxldCBwYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKGJvZHkucGFzc3dvcmQsIDUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXNzd29yZClcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBib2R5LnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogYm9keS5uaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB1c2VyLnNhdmUoKVxyXG4gICAgICAgICAgICAgICAgY3R4LmJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBtc2c6ICfms6jlhozmiJDlip/vvIzljrvnmbvlvZXlkKcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1zZy5jb2RlID0gWyflm77lvaLpqozor4HnoIHkuI3mraPnoa7vvIEnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguYm9keSA9IHtcclxuICAgICAgICAgICAgY29kZTogNTAwLFxyXG4gICAgICAgICAgICBtc2c6IG1zZ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2luQ29udHJvbGxlcigpIl0sIm5hbWVzIjpbIm1vbWVudCIsImJjcnlwdCIsInNlbmQiLCJqc29ud2VidG9rZW4iLCJKV1RfU0VDUkVUIiwiY2hlY2tDb2RlIiwiVXNlciIsIkxvZ2luQ29udHJvbGxlciIsImNvbnN0cnVjdG9yIiwiZm9yZ2V0IiwiY3R4IiwiYm9keSIsInJlcXVlc3QiLCJzaWQiLCJjb2RlIiwiY29kZVZlcmlmeSIsInJlc3VsdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImV4cGlyZSIsImFkZCIsImZvcm1hdCIsImVtYWlsIiwidXNlcm5hbWUiLCJ1c2VyIiwiZGF0YSIsIm1zZyIsImUiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJmaW5kT25lIiwiY29tcGFyZSIsInBhc3N3b3JkIiwidG9rZW4iLCJzaWduIiwiX2lkIiwic2V4IiwiZXhwaXJlc0luIiwicmVnaXN0ZXIiLCJjaGVjayIsInVzZXJJbmZvIiwiaGFzaCIsIm5pY2tuYW1lIiwiY3JlYXRlZCIsInNhdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/loginController.js\n");

/***/ }),

/***/ "./src/common/ErrorHandle.js":
/*!***********************************!*\
  !*** ./src/common/ErrorHandle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((ctx, next) => {\n  return next().catch(err => {\n    if (401 == err.status) {\n      ctx.status = 401;\n      ctx.body = {\n        code: 401,\n        msg: 'Protected resource, use Authorization header to get access\\n'\n      };\n    } else {\n      // throw err\n      // 加入错误提示\n      console.log(\"development\");\n      ctx.status = err.status || 500;\n      ctx.body = Object.assign({\n        code: 500,\n        msg: err.message\n      },  true ? {\n        stack: err.stack\n      } : 0);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL0Vycm9ySGFuZGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxDQUFDQSxHQUFELEVBQU1DLElBQU4sS0FBZTtBQUM1QixTQUFPQSxJQUFJLEdBQUdDLEtBQVAsQ0FBY0MsR0FBRCxJQUFTO0FBQzNCLFFBQUksT0FBT0EsR0FBRyxDQUFDQyxNQUFmLEVBQXVCO0FBQ3JCSixNQUFBQSxHQUFHLENBQUNJLE1BQUosR0FBYSxHQUFiO0FBQ0FKLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixHQUFXO0FBQ1RDLFFBQUFBLElBQUksRUFBRSxHQURHO0FBRVRDLFFBQUFBLEdBQUcsRUFBRTtBQUZJLE9BQVg7QUFJRCxLQU5ELE1BTU87QUFDTDtBQUNBO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQUFaO0FBQ0FWLE1BQUFBLEdBQUcsQ0FBQ0ksTUFBSixHQUFhRCxHQUFHLENBQUNDLE1BQUosSUFBYyxHQUEzQjtBQUNBSixNQUFBQSxHQUFHLENBQUNLLElBQUosR0FBV1EsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDdkJSLFFBQUFBLElBQUksRUFBRSxHQURpQjtBQUV2QkMsUUFBQUEsR0FBRyxFQUFFSixHQUFHLENBQUNZO0FBRmMsT0FBZCxFQUdSTCxLQUFBLEdBQXlDO0FBQUVNLFFBQUFBLEtBQUssRUFBRWIsR0FBRyxDQUFDYTtBQUFiLE9BQXpDLEdBQWdFLENBSHhELENBQVg7QUFJRDtBQUNGLEdBakJNLENBQVA7QUFrQkQsQ0FuQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly84LTQvLi9zcmMvY29tbW9uL0Vycm9ySGFuZGxlLmpzPzQxZWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKGN0eCwgbmV4dCkgPT4ge1xyXG4gIHJldHVybiBuZXh0KCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgaWYgKDQwMSA9PSBlcnIuc3RhdHVzKSB7XHJcbiAgICAgIGN0eC5zdGF0dXMgPSA0MDFcclxuICAgICAgY3R4LmJvZHkgPSB7XHJcbiAgICAgICAgY29kZTogNDAxLFxyXG4gICAgICAgIG1zZzogJ1Byb3RlY3RlZCByZXNvdXJjZSwgdXNlIEF1dGhvcml6YXRpb24gaGVhZGVyIHRvIGdldCBhY2Nlc3NcXG4nXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRocm93IGVyclxyXG4gICAgICAvLyDliqDlhaXplJnor6/mj5DnpLpcclxuICAgICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXHJcbiAgICAgIGN0eC5zdGF0dXMgPSBlcnIuc3RhdHVzIHx8IDUwMFxyXG4gICAgICBjdHguYm9keSA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgIGNvZGU6IDUwMCxcclxuICAgICAgICBtc2c6IGVyci5tZXNzYWdlXHJcbiAgICAgIH0sIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8geyBzdGFjazogZXJyLnN0YWNrIH0gOiB7fSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjdHgiLCJuZXh0IiwiY2F0Y2giLCJlcnIiLCJzdGF0dXMiLCJib2R5IiwiY29kZSIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJPYmplY3QiLCJhc3NpZ24iLCJtZXNzYWdlIiwic3RhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/ErrorHandle.js\n");

/***/ }),

/***/ "./src/common/Utils.js":
/*!*****************************!*\
  !*** ./src/common/Utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCode\": () => (/* binding */ checkCode)\n/* harmony export */ });\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/RedisConfig */ \"./src/config/RedisConfig.js\");\n\n\nconst checkCode = async (key, value) => {\n  const serveCode = await (0,_config_RedisConfig__WEBPACK_IMPORTED_MODULE_0__.getValue)(key);\n\n  if (serveCode != null) {\n    if (serveCode.toLowerCase() === value.toLowerCase()) {\n      return true;\n    }\n  }\n\n  return false;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL1V0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsS0FBWixLQUFzQjtBQUN0QyxRQUFNQyxTQUFTLEdBQUcsTUFBTUosNkRBQVEsQ0FBQ0UsR0FBRCxDQUFoQzs7QUFDQSxNQUFJRSxTQUFTLElBQUksSUFBakIsRUFBdUI7QUFDckIsUUFBSUEsU0FBUyxDQUFDQyxXQUFWLE9BQTRCRixLQUFLLENBQUNFLFdBQU4sRUFBaEMsRUFBcUQ7QUFDbkQsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQVJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOC00Ly4vc3JjL2NvbW1vbi9VdGlscy5qcz9iNGRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFZhbHVlIH0gZnJvbSBcIkAvY29uZmlnL1JlZGlzQ29uZmlnXCJcclxuXHJcbmNvbnN0IGNoZWNrQ29kZSA9IGFzeW5jIChrZXksIHZhbHVlKSA9PiB7XHJcbiAgY29uc3Qgc2VydmVDb2RlID0gYXdhaXQgZ2V0VmFsdWUoa2V5KVxyXG4gIGlmIChzZXJ2ZUNvZGUgIT0gbnVsbCkge1xyXG4gICAgaWYgKHNlcnZlQ29kZS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNoZWNrQ29kZVxyXG59Il0sIm5hbWVzIjpbImdldFZhbHVlIiwiY2hlY2tDb2RlIiwia2V5IiwidmFsdWUiLCJzZXJ2ZUNvZGUiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/Utils.js\n");

/***/ }),

/***/ "./src/config/DBHelpler.js":
/*!*********************************!*\
  !*** ./src/config/DBHelpler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/config/index.js\");\n\n // 创建连接\n// mongoose.connect(config.DB_URL, {\n//     useNewUrlParser: true, useUnifiedTopology: true\n// })\n// 6.x版本不需要后面相关参数\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_index__WEBPACK_IMPORTED_MODULE_1__.DB_URL); // 连接成功\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on('connected', () => {\n  console.log('Mongoose connection open to ' + _index__WEBPACK_IMPORTED_MODULE_1__.DB_URL);\n}); // 连接异常\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on('error', err => {\n  console.log('Mongoose connection error: ' + err);\n}); // 断开连接\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on('disconnected', () => {\n  console.log('Mongoose connection disconnected');\n}); // 导出\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default()));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL0RCSGVscGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBQSx1REFBQSxDQUFpQkMsMENBQWpCLEdBRUE7O0FBQ0FELDZEQUFBLENBQXVCLFdBQXZCLEVBQW9DLE1BQU07QUFDdENLLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFpQ0wsMENBQTdDO0FBQ0gsQ0FGRCxHQUlBOztBQUNBRCw2REFBQSxDQUF1QixPQUF2QixFQUFpQ08sR0FBRCxJQUFTO0FBQ3JDRixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBZ0NDLEdBQTVDO0FBQ0gsQ0FGRCxHQUlBOztBQUNBUCw2REFBQSxDQUF1QixjQUF2QixFQUF1QyxNQUFNO0FBQ3pDSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNILENBRkQsR0FJQTs7QUFDQSxpRUFBZU4saURBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly84LTQvLi9zcmMvY29uZmlnL0RCSGVscGxlci5qcz9lNjg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuaW1wb3J0IHsgREJfVVJMIH0gZnJvbSAnLi9pbmRleCdcclxuXHJcbi8vIOWIm+W7uui/nuaOpVxyXG4vLyBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5EQl9VUkwsIHtcclxuLy8gICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbi8vIH0pXHJcbi8vIDYueOeJiOacrOS4jemcgOimgeWQjumdouebuOWFs+WPguaVsFxyXG5tb25nb29zZS5jb25uZWN0KERCX1VSTClcclxuXHJcbi8vIOi/nuaOpeaIkOWKn1xyXG5tb25nb29zZS5jb25uZWN0aW9uLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTW9uZ29vc2UgY29ubmVjdGlvbiBvcGVuIHRvICcgKyBEQl9VUkwpXHJcbn0pXHJcblxyXG4vLyDov57mjqXlvILluLhcclxubW9uZ29vc2UuY29ubmVjdGlvbi5vbignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTW9uZ29vc2UgY29ubmVjdGlvbiBlcnJvcjogJyArIGVycilcclxufSlcclxuXHJcbi8vIOaWreW8gOi/nuaOpVxyXG5tb25nb29zZS5jb25uZWN0aW9uLm9uKCdkaXNjb25uZWN0ZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTW9uZ29vc2UgY29ubmVjdGlvbiBkaXNjb25uZWN0ZWQnKVxyXG59KVxyXG5cclxuLy8g5a+85Ye6XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiREJfVVJMIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/DBHelpler.js\n");

/***/ }),

/***/ "./src/config/MailConfig.js":
/*!**********************************!*\
  !*** ./src/config/MailConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n // async..await is not allowed in global scope, must use a wrapper\n\nasync function send(sendInfo) {\n  // Generate test SMTP service account from ethereal.email\n  // Only needed if you don't have a real mail account for testing\n  //   let testAccount = await nodemailer.createTestAccount();\n  // create reusable transporter object using the default SMTP transport\n  let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    /* host: \"smtp.qq.com\",\r\n    port: 587,\r\n    secure: false, // true for 465, false for other ports\r\n    auth: {\r\n      user: '912076360@qq.com', // generated ethereal user\r\n      pass: 'qq token password', // generated ethereal password\r\n    },*/\n    host: \"smtp.163.com\",\n    // port: 587,\n    port: 465,\n    secure: true,\n    // true for 465, false for other ports\n    auth: {\n      user: '18011468389@163.com',\n      // generated ethereal user\n      pass: 'QASCTWISREWQCYBH' // generated ethereal password\n\n    }\n  }); //   let sendInfo = {\n  //       code: '526641',\n  //       expire: '2021-09-27',\n  //       email: '18011468389@163.com',\n  //       user: 'Simu'\n  //   }\n\n  let url = 'http://blog.simuchen.com'; // send mail with defined transport object\n\n  let info = await transporter.sendMail({\n    from: '\"认证邮件\" <18011468389@163.com>',\n    // sender address\n    to: sendInfo.email,\n    // list of receivers\n    subject: sendInfo.user !== '' ? `您好${sendInfo.user}! 您的注册码` : '您的注册码',\n    // Subject line\n    text: `您的邀请码是${sendInfo.code},${sendInfo.expire}前有效哦`,\n    // plain text body\n    html: `\n    <div style=\"border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;\">\n        <div style=\"height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;\">Simu社区——欢迎来到官方社区</div>\n        <div style=\"padding: 25px\">\n        <div>您好，${sendInfo.user}童鞋，重置链接有效时间30分钟，请在${sendInfo.expire}之前重置您的密码：</div>\n        <a href=\"${url}\" style=\"padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;\">立即重置密码</a>\n        <div style=\"padding: 5px; background: #f2f2f2;\">如果该邮件不是由你本人操作，请勿进行激活！否则你的邮箱将会被他人绑定。</div>\n        </div>\n        <div style=\"background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;\">系统邮件，请勿直接回复</div>\n    </div>\n    ` // html body\n\n  });\n  return \"Message sent: %s\", info.messageId; // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>\n  // Preview only available when sending through an Ethereal account\n\n  console.log(\"Preview URL: %s\", nodemailer__WEBPACK_IMPORTED_MODULE_0___default().getTestMessageUrl(info)); // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...\n} // main().catch(console.error);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (send);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL01haWxDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0NBRUE7O0FBQ0EsZUFBZUMsSUFBZixDQUFvQkMsUUFBcEIsRUFBOEI7QUFDNUI7QUFDQTtBQUNGO0FBRUU7QUFDQSxNQUFJQyxXQUFXLEdBQUdILGlFQUFBLENBQTJCO0FBQzNDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0lLLElBQUFBLElBQUksRUFBRSxjQVJxQztBQVMzQztBQUNBQyxJQUFBQSxJQUFJLEVBQUUsR0FWcUM7QUFXM0NDLElBQUFBLE1BQU0sRUFBRSxJQVhtQztBQVc3QjtBQUNkQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsSUFBSSxFQUFFLHFCQURGO0FBQ3lCO0FBQzdCQyxNQUFBQSxJQUFJLEVBQUUsa0JBRkYsQ0FFc0I7O0FBRnRCO0FBWnFDLEdBQTNCLENBQWxCLENBTjRCLENBd0I5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUUsTUFBSUMsR0FBRyxHQUFHLDBCQUFWLENBL0I0QixDQWlDNUI7O0FBQ0EsTUFBSUMsSUFBSSxHQUFHLE1BQU1ULFdBQVcsQ0FBQ1UsUUFBWixDQUFxQjtBQUNwQ0MsSUFBQUEsSUFBSSxFQUFFLDhCQUQ4QjtBQUNFO0FBQ3RDQyxJQUFBQSxFQUFFLEVBQUViLFFBQVEsQ0FBQ2MsS0FGdUI7QUFFaEI7QUFDcEJDLElBQUFBLE9BQU8sRUFBRWYsUUFBUSxDQUFDTyxJQUFULEtBQWtCLEVBQWxCLEdBQXdCLEtBQUlQLFFBQVEsQ0FBQ08sSUFBSyxTQUExQyxHQUFxRCxPQUgxQjtBQUdtQztBQUN2RVMsSUFBQUEsSUFBSSxFQUFHLFNBQVFoQixRQUFRLENBQUNpQixJQUFLLElBQUdqQixRQUFRLENBQUNrQixNQUFPLE1BSlo7QUFJbUI7QUFDdkRDLElBQUFBLElBQUksRUFBRztBQUNYO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQm5CLFFBQVEsQ0FBQ08sSUFBSyxxQkFBb0JQLFFBQVEsQ0FBQ2tCLE1BQU87QUFDcEUsbUJBQW1CVCxHQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0Fmd0MsQ0FlakM7O0FBZmlDLEdBQXJCLENBQWpCO0FBa0JBLFNBQU8sb0JBQW9CQyxJQUFJLENBQUNVLFNBQWhDLENBcEQ0QixDQXFENUI7QUFFQTs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0J4QixtRUFBQSxDQUE2QlksSUFBN0IsQ0FBL0IsRUF4RDRCLENBeUQ1QjtBQUNELEVBRUQ7OztBQUNBLGlFQUFlWCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOC00Ly4vc3JjL2NvbmZpZy9NYWlsQ29uZmlnLmpzPzJkYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcclxuXHJcbi8vIGFzeW5jLi5hd2FpdCBpcyBub3QgYWxsb3dlZCBpbiBnbG9iYWwgc2NvcGUsIG11c3QgdXNlIGEgd3JhcHBlclxyXG5hc3luYyBmdW5jdGlvbiBzZW5kKHNlbmRJbmZvKSB7XHJcbiAgLy8gR2VuZXJhdGUgdGVzdCBTTVRQIHNlcnZpY2UgYWNjb3VudCBmcm9tIGV0aGVyZWFsLmVtYWlsXHJcbiAgLy8gT25seSBuZWVkZWQgaWYgeW91IGRvbid0IGhhdmUgYSByZWFsIG1haWwgYWNjb3VudCBmb3IgdGVzdGluZ1xyXG4vLyAgIGxldCB0ZXN0QWNjb3VudCA9IGF3YWl0IG5vZGVtYWlsZXIuY3JlYXRlVGVzdEFjY291bnQoKTtcclxuXHJcbiAgLy8gY3JlYXRlIHJldXNhYmxlIHRyYW5zcG9ydGVyIG9iamVjdCB1c2luZyB0aGUgZGVmYXVsdCBTTVRQIHRyYW5zcG9ydFxyXG4gIGxldCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgIC8qIGhvc3Q6IFwic210cC5xcS5jb21cIixcclxuICAgIHBvcnQ6IDU4NyxcclxuICAgIHNlY3VyZTogZmFsc2UsIC8vIHRydWUgZm9yIDQ2NSwgZmFsc2UgZm9yIG90aGVyIHBvcnRzXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIHVzZXI6ICc5MTIwNzYzNjBAcXEuY29tJywgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHVzZXJcclxuICAgICAgcGFzczogJ3FxIHRva2VuIHBhc3N3b3JkJywgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHBhc3N3b3JkXHJcbiAgICB9LCovXHJcbiAgICBob3N0OiBcInNtdHAuMTYzLmNvbVwiLFxyXG4gICAgLy8gcG9ydDogNTg3LFxyXG4gICAgcG9ydDogNDY1LFxyXG4gICAgc2VjdXJlOiB0cnVlLCAvLyB0cnVlIGZvciA0NjUsIGZhbHNlIGZvciBvdGhlciBwb3J0c1xyXG4gICAgYXV0aDoge1xyXG4gICAgICB1c2VyOiAnMTgwMTE0NjgzODlAMTYzLmNvbScsIC8vIGdlbmVyYXRlZCBldGhlcmVhbCB1c2VyXHJcbiAgICAgIHBhc3M6ICdRQVNDVFdJU1JFV1FDWUJIJywgLy8gZ2VuZXJhdGVkIGV0aGVyZWFsIHBhc3N3b3JkXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuLy8gICBsZXQgc2VuZEluZm8gPSB7XHJcbi8vICAgICAgIGNvZGU6ICc1MjY2NDEnLFxyXG4vLyAgICAgICBleHBpcmU6ICcyMDIxLTA5LTI3JyxcclxuLy8gICAgICAgZW1haWw6ICcxODAxMTQ2ODM4OUAxNjMuY29tJyxcclxuLy8gICAgICAgdXNlcjogJ1NpbXUnXHJcbi8vICAgfVxyXG5cclxuICBsZXQgdXJsID0gJ2h0dHA6Ly9ibG9nLnNpbXVjaGVuLmNvbSdcclxuXHJcbiAgLy8gc2VuZCBtYWlsIHdpdGggZGVmaW5lZCB0cmFuc3BvcnQgb2JqZWN0XHJcbiAgbGV0IGluZm8gPSBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XHJcbiAgICBmcm9tOiAnXCLorqTor4Hpgq7ku7ZcIiA8MTgwMTE0NjgzODlAMTYzLmNvbT4nLCAvLyBzZW5kZXIgYWRkcmVzc1xyXG4gICAgdG86IHNlbmRJbmZvLmVtYWlsLCAvLyBsaXN0IG9mIHJlY2VpdmVyc1xyXG4gICAgc3ViamVjdDogc2VuZEluZm8udXNlciAhPT0gJycgPyBg5oKo5aW9JHtzZW5kSW5mby51c2VyfSEg5oKo55qE5rOo5YaM56CBYCA6ICfmgqjnmoTms6jlhoznoIEnLCAvLyBTdWJqZWN0IGxpbmVcclxuICAgIHRleHQ6IGDmgqjnmoTpgoDor7fnoIHmmK8ke3NlbmRJbmZvLmNvZGV9LCR7c2VuZEluZm8uZXhwaXJlfeWJjeacieaViOWTpmAsIC8vIHBsYWluIHRleHQgYm9keVxyXG4gICAgaHRtbDogYFxyXG4gICAgPGRpdiBzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7Y29sb3I6ICM2NzY3Njc7d2lkdGg6IDYwMHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZy1ib3R0b206IDUwcHg7cG9zaXRpb246IHJlbGF0aXZlO1wiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDYwcHg7IGJhY2tncm91bmQ6ICMzOTNkNDk7IGxpbmUtaGVpZ2h0OiA2MHB4OyBjb2xvcjogIzU4YTM2ZjsgZm9udC1zaXplOiAxOHB4O3BhZGRpbmctbGVmdDogMTBweDtcIj5TaW1156S+5Yy64oCU4oCU5qyi6L+O5p2l5Yiw5a6Y5pa556S+5Yy6PC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDI1cHhcIj5cclxuICAgICAgICA8ZGl2PuaCqOWlve+8jCR7c2VuZEluZm8udXNlcn3nq6XpnovvvIzph43nva7pk77mjqXmnInmlYjml7bpl7QzMOWIhumSn++8jOivt+WcqCR7c2VuZEluZm8uZXhwaXJlfeS5i+WJjemHjee9ruaCqOeahOWvhuegge+8mjwvZGl2PlxyXG4gICAgICAgIDxhIGhyZWY9XCIke3VybH1cIiBzdHlsZT1cInBhZGRpbmc6IDEwcHggMjBweDsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMwMDllOTQ7IGRpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW46IDE1cHggMDtcIj7nq4vljbPph43nva7lr4bnoIE8L2E+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDVweDsgYmFja2dyb3VuZDogI2YyZjJmMjtcIj7lpoLmnpzor6Xpgq7ku7bkuI3mmK/nlLHkvaDmnKzkurrmk43kvZzvvIzor7fli7/ov5vooYzmv4DmtLvvvIHlkKbliJnkvaDnmoTpgq7nrrHlsIbkvJrooqvku5bkurrnu5HlrprjgII8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogI2ZhZmFmYTsgY29sb3I6ICNiNGI0YjQ7dGV4dC1hbGlnbjogY2VudGVyOyBsaW5lLWhlaWdodDogNDVweDsgaGVpZ2h0OiA0NXB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IGJvdHRvbTogMDt3aWR0aDogMTAwJTtcIj7ns7vnu5/pgq7ku7bvvIzor7fli7/nm7TmjqXlm57lpI08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYCwgLy8gaHRtbCBib2R5XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBcIk1lc3NhZ2Ugc2VudDogJXNcIiwgaW5mby5tZXNzYWdlSWQ7XHJcbiAgLy8gTWVzc2FnZSBzZW50OiA8YjY1OGY4Y2EtNjI5Ni1jY2Y0LTgzMDYtODdkNTdhMGI0MzIxQGV4YW1wbGUuY29tPlxyXG5cclxuICAvLyBQcmV2aWV3IG9ubHkgYXZhaWxhYmxlIHdoZW4gc2VuZGluZyB0aHJvdWdoIGFuIEV0aGVyZWFsIGFjY291bnRcclxuICBjb25zb2xlLmxvZyhcIlByZXZpZXcgVVJMOiAlc1wiLCBub2RlbWFpbGVyLmdldFRlc3RNZXNzYWdlVXJsKGluZm8pKTtcclxuICAvLyBQcmV2aWV3IFVSTDogaHR0cHM6Ly9ldGhlcmVhbC5lbWFpbC9tZXNzYWdlL1dhUUtNZ0tkZHhRRG9vdS4uLlxyXG59XHJcblxyXG4vLyBtYWluKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbmV4cG9ydCBkZWZhdWx0IHNlbmQiXSwibmFtZXMiOlsibm9kZW1haWxlciIsInNlbmQiLCJzZW5kSW5mbyIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiaG9zdCIsInBvcnQiLCJzZWN1cmUiLCJhdXRoIiwidXNlciIsInBhc3MiLCJ1cmwiLCJpbmZvIiwic2VuZE1haWwiLCJmcm9tIiwidG8iLCJlbWFpbCIsInN1YmplY3QiLCJ0ZXh0IiwiY29kZSIsImV4cGlyZSIsImh0bWwiLCJtZXNzYWdlSWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0VGVzdE1lc3NhZ2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/MailConfig.js\n");

/***/ }),

/***/ "./src/config/RedisConfig.js":
/*!***********************************!*\
  !*** ./src/config/RedisConfig.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"setValue\": () => (/* binding */ setValue),\n/* harmony export */   \"getValue\": () => (/* binding */ getValue),\n/* harmony export */   \"getHValue\": () => (/* binding */ getHValue),\n/* harmony export */   \"delValue\": () => (/* binding */ delValue)\n/* harmony export */ });\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/config/index.js\");\n\n\n\nconst options = {\n  host: _index__WEBPACK_IMPORTED_MODULE_2__.REDIS_CONFIG.host,\n  port: _index__WEBPACK_IMPORTED_MODULE_2__.REDIS_CONFIG.port,\n  password: _index__WEBPACK_IMPORTED_MODULE_2__.REDIS_CONFIG.password,\n  detect_buffers: true,\n  retry_strategy: function (options) {\n    if (options.error && options.error.code === 'ECONNREFUSED') {\n      // End reconnecting on a specific error and flush all commands with\n      // a individual error\n      return new Error('The server refused the connection');\n    }\n\n    if (options.total_retry_time > 1000 * 60 * 60) {\n      // End reconnecting after a specific timeout and flush all commands\n      // with a individual error\n      return new Error('Retry time exhausted');\n    }\n\n    if (options.attempt > 10) {\n      // End reconnecting with built in error\n      return undefined;\n    } // reconnect after\n\n\n    return Math.min(options.attempt * 100, 3000);\n  }\n}; // const client = createClient(options)\n\nconst client = (0,bluebird__WEBPACK_IMPORTED_MODULE_1__.promisifyAll)((0,redis__WEBPACK_IMPORTED_MODULE_0__.createClient)(options));\nclient.on('error', err => {\n  console.log('Redis Client Connection error:' + err);\n});\n\nconst setValue = (key, value, time) => {\n  if (typeof value === 'undefined' || value == null || value === '') {\n    return;\n  }\n\n  if (typeof value === 'string') {\n    if (typeof time !== 'undefined') {\n      // 设置time时间后过期，单位是秒\n      client.set(key, value, 'EX', time);\n    } else {\n      client.set(key, value);\n    }\n  } else if (typeof value === 'object') {\n    Object.keys(value).forEach(item => {\n      client.hset(key, item, value[item], (redis__WEBPACK_IMPORTED_MODULE_0___default().print));\n    });\n  }\n}; // v8 Promisify method use util, must node > 8\n// const {promisify} = require('util')\n// const getAsync = promisify(client.get).bind(client)\n// const getValue = (key) => {\n//     return getAsync(key)\n// }\n// const getHValue = (key) => {\n//     return promisify(client.hgetall).bind(client)(key)\n// }\n// bluebird async method\n\n\nconst getValue = key => {\n  return client.getAsync(key);\n};\n\nconst getHValue = key => {\n  return client.hgetallAsync(key);\n};\n\nconst delValue = key => {\n  client.del(key, (err, res) => {\n    if (res === 1) {\n      console.log('delete successfully');\n    } else {\n      console.log('delete redis key error:' + err);\n    }\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBUCxDQUFXZixHQUFYLEVBQWdCLENBQUNKLEdBQUQsRUFBTW9CLEdBQU4sS0FBYztBQUMxQixRQUFJQSxHQUFHLEtBQUssQ0FBWixFQUFlO0FBQ1huQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNILEtBRkQsTUFFTztBQUNIRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBNEJGLEdBQXhDO0FBQ0g7QUFDSixHQU5EO0FBT0gsQ0FSRCIsInNvdXJjZXMiOlsid2VicGFjazovLzgtNC8uL3NyYy9jb25maWcvUmVkaXNDb25maWcuanM/Yjc4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVkaXMsIHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAncmVkaXMnXHJcbmltcG9ydCB7IHByb21pc2lmeUFsbCB9IGZyb20gJ2JsdWViaXJkJ1xyXG5pbXBvcnQgeyBSRURJU19DT05GSUcgfSBmcm9tICcuL2luZGV4J1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGhvc3Q6IFJFRElTX0NPTkZJRy5ob3N0LFxyXG4gICAgcG9ydDogUkVESVNfQ09ORklHLnBvcnQsXHJcbiAgICBwYXNzd29yZDogUkVESVNfQ09ORklHLnBhc3N3b3JkLFxyXG4gICAgZGV0ZWN0X2J1ZmZlcnM6IHRydWUsXHJcbiAgICByZXRyeV9zdHJhdGVneTogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5lcnJvciAmJiBvcHRpb25zLmVycm9yLmNvZGUgPT09ICdFQ09OTlJFRlVTRUQnKSB7XHJcbiAgICAgICAgICAgIC8vIEVuZCByZWNvbm5lY3Rpbmcgb24gYSBzcGVjaWZpYyBlcnJvciBhbmQgZmx1c2ggYWxsIGNvbW1hbmRzIHdpdGhcclxuICAgICAgICAgICAgLy8gYSBpbmRpdmlkdWFsIGVycm9yXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZSBzZXJ2ZXIgcmVmdXNlZCB0aGUgY29ubmVjdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy50b3RhbF9yZXRyeV90aW1lID4gMTAwMCAqIDYwICogNjApIHtcclxuICAgICAgICAgICAgLy8gRW5kIHJlY29ubmVjdGluZyBhZnRlciBhIHNwZWNpZmljIHRpbWVvdXQgYW5kIGZsdXNoIGFsbCBjb21tYW5kc1xyXG4gICAgICAgICAgICAvLyB3aXRoIGEgaW5kaXZpZHVhbCBlcnJvclxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdSZXRyeSB0aW1lIGV4aGF1c3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy5hdHRlbXB0ID4gMTApIHtcclxuICAgICAgICAgICAgLy8gRW5kIHJlY29ubmVjdGluZyB3aXRoIGJ1aWx0IGluIGVycm9yXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlY29ubmVjdCBhZnRlclxyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbihvcHRpb25zLmF0dGVtcHQgKiAxMDAsIDMwMDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQob3B0aW9ucylcclxuY29uc3QgY2xpZW50ID0gcHJvbWlzaWZ5QWxsKGNyZWF0ZUNsaWVudChvcHRpb25zKSlcclxuXHJcbmNsaWVudC5vbignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUmVkaXMgQ2xpZW50IENvbm5lY3Rpb24gZXJyb3I6JyArIGVycilcclxufSlcclxuXHJcbmNvbnN0IHNldFZhbHVlID0gKGtleSwgdmFsdWUsIHRpbWUpID0+IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGltZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy8g6K6+572udGltZeaXtumXtOWQjui/h+acn++8jOWNleS9jeaYr+enklxyXG4gICAgICAgICAgICBjbGllbnQuc2V0KGtleSwgdmFsdWUsICdFWCcsIHRpbWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xpZW50LnNldChrZXksIHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNsaWVudC5oc2V0KGtleSwgaXRlbSwgdmFsdWVbaXRlbV0sIHJlZGlzLnByaW50KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuLy8gdjggUHJvbWlzaWZ5IG1ldGhvZCB1c2UgdXRpbCwgbXVzdCBub2RlID4gOFxyXG4vLyBjb25zdCB7cHJvbWlzaWZ5fSA9IHJlcXVpcmUoJ3V0aWwnKVxyXG4vLyBjb25zdCBnZXRBc3luYyA9IHByb21pc2lmeShjbGllbnQuZ2V0KS5iaW5kKGNsaWVudClcclxuLy8gY29uc3QgZ2V0VmFsdWUgPSAoa2V5KSA9PiB7XHJcbi8vICAgICByZXR1cm4gZ2V0QXN5bmMoa2V5KVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBnZXRIVmFsdWUgPSAoa2V5KSA9PiB7XHJcbi8vICAgICByZXR1cm4gcHJvbWlzaWZ5KGNsaWVudC5oZ2V0YWxsKS5iaW5kKGNsaWVudCkoa2V5KVxyXG4vLyB9XHJcblxyXG4vLyBibHVlYmlyZCBhc3luYyBtZXRob2RcclxuY29uc3QgZ2V0VmFsdWUgPSAoa2V5KSA9PiB7XHJcbiAgICByZXR1cm4gY2xpZW50LmdldEFzeW5jKGtleSlcclxufVxyXG5cclxuY29uc3QgZ2V0SFZhbHVlID0gKGtleSkgPT4ge1xyXG4gICAgcmV0dXJuIGNsaWVudC5oZ2V0YWxsQXN5bmMoa2V5KVxyXG59XHJcblxyXG5jb25zdCBkZWxWYWx1ZSA9IChrZXkpID0+IHtcclxuICAgIGNsaWVudC5kZWwoa2V5LCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgc3VjY2Vzc2Z1bGx5JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIHJlZGlzIGtleSBlcnJvcjonICsgZXJyKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjbGllbnQsXHJcbiAgICBzZXRWYWx1ZSxcclxuICAgIGdldFZhbHVlLFxyXG4gICAgZ2V0SFZhbHVlLFxyXG4gICAgZGVsVmFsdWVcclxufSJdLCJuYW1lcyI6WyJyZWRpcyIsImNyZWF0ZUNsaWVudCIsInByb21pc2lmeUFsbCIsIlJFRElTX0NPTkZJRyIsIm9wdGlvbnMiLCJob3N0IiwicG9ydCIsInBhc3N3b3JkIiwiZGV0ZWN0X2J1ZmZlcnMiLCJyZXRyeV9zdHJhdGVneSIsImVycm9yIiwiY29kZSIsIkVycm9yIiwidG90YWxfcmV0cnlfdGltZSIsImF0dGVtcHQiLCJ1bmRlZmluZWQiLCJNYXRoIiwibWluIiwiY2xpZW50Iiwib24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsInRpbWUiLCJzZXQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIml0ZW0iLCJoc2V0IiwicHJpbnQiLCJnZXRWYWx1ZSIsImdldEFzeW5jIiwiZ2V0SFZhbHVlIiwiaGdldGFsbEFzeW5jIiwiZGVsVmFsdWUiLCJkZWwiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/RedisConfig.js\n");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DB_URL\": () => (/* binding */ DB_URL),\n/* harmony export */   \"REDIS_CONFIG\": () => (/* binding */ REDIS_CONFIG),\n/* harmony export */   \"JWT_SECRET\": () => (/* binding */ JWT_SECRET)\n/* harmony export */ });\nconst DB_URL = 'mongodb://test:123456@148.70.52.182:27017/testdb';\nconst REDIS_CONFIG = {\n  host: '148.70.52.182',\n  port: 15001,\n  password: '123456'\n}; // jwt随机秘钥\n\nconst JWT_SECRET = 'dC0^eQ8.kM8&sU3_nF7$fK4{aN2$sK3?xuomAqfe81ke!';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLE1BQU0sR0FBRyxrREFBZjtBQUNBLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLGVBRFc7QUFFakJDLEVBQUFBLElBQUksRUFBRSxLQUZXO0FBR2pCQyxFQUFBQSxRQUFRLEVBQUU7QUFITyxDQUFyQixFQUtBOztBQUNBLE1BQU1DLFVBQVUsR0FBRywrQ0FBbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly84LTQvLi9zcmMvY29uZmlnL2luZGV4LmpzP2YxMjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREJfVVJMID0gJ21vbmdvZGI6Ly90ZXN0OjEyMzQ1NkAxNDguNzAuNTIuMTgyOjI3MDE3L3Rlc3RkYidcclxuY29uc3QgUkVESVNfQ09ORklHID0ge1xyXG4gICAgaG9zdDogJzE0OC43MC41Mi4xODInLFxyXG4gICAgcG9ydDogMTUwMDEsXHJcbiAgICBwYXNzd29yZDogJzEyMzQ1NidcclxufVxyXG4vLyBqd3Tpmo/mnLrnp5jpkqVcclxuY29uc3QgSldUX1NFQ1JFVCA9ICdkQzBeZVE4LmtNOCZzVTNfbkY3JGZLNHthTjIkc0szP3h1b21BcWZlODFrZSEnXHJcblxyXG5leHBvcnQge1xyXG4gICAgREJfVVJMLFxyXG4gICAgUkVESVNfQ09ORklHLFxyXG4gICAgSldUX1NFQ1JFVFxyXG59Il0sIm5hbWVzIjpbIkRCX1VSTCIsIlJFRElTX0NPTkZJRyIsImhvc3QiLCJwb3J0IiwicGFzc3dvcmQiLCJKV1RfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var __dirname = \"src\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-jwt */ \"koa-jwt\");\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routers_routers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routers/routers */ \"./src/routers/routers.js\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! koa-compose */ \"koa-compose\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(koa_compose__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! koa-compress */ \"koa-compress\");\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(koa_compress__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config */ \"./src/config/index.js\");\n/* harmony import */ var _common_ErrorHandle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/ErrorHandle */ \"./src/common/ErrorHandle.js\");\n// const koa = require('koa')\n\n // const path = require('path')\n\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())(); // koa-helmet安全头\n// const helmet = require('koa-helmet')\n\n // koa-static静态资源服务器,需传递绝对路径\n// const statics = require('koa-static')\n\n // const router = require('./routers/routers')\n\n\n\n // 跨域请求\n\n // koa-compose 整合中间件\n\n // koa-compress 压缩中间件\n\n\n\n\nconst isDevMode =  false ? 0 : true; // 定义公共路径，不需要jwt鉴权\n\nconst jwt = koa_jwt__WEBPACK_IMPORTED_MODULE_1___default()({\n  secret: _config__WEBPACK_IMPORTED_MODULE_11__.JWT_SECRET\n}).unless({\n  path: [/^\\/public/, /\\/login/]\n});\n/**\r\n * 使用koa-compose 集合中间件\r\n */\n\nconst middleware = koa_compose__WEBPACK_IMPORTED_MODULE_9___default()([koa_body__WEBPACK_IMPORTED_MODULE_6___default()(), koa_static__WEBPACK_IMPORTED_MODULE_4___default()(path__WEBPACK_IMPORTED_MODULE_2___default().join(__dirname, '../public')), _koa_cors__WEBPACK_IMPORTED_MODULE_8___default()(), koa_json__WEBPACK_IMPORTED_MODULE_7___default()({\n  pretty: false,\n  param: 'pretty'\n}), koa_helmet__WEBPACK_IMPORTED_MODULE_3___default()(), _common_ErrorHandle__WEBPACK_IMPORTED_MODULE_12__[\"default\"], jwt]);\n\nif (!isDevMode) {\n  app.use(koa_compress__WEBPACK_IMPORTED_MODULE_10___default()());\n}\n\napp.use(middleware);\napp.use((0,_routers_routers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\napp.listen(3001);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBLE1BQU1HLEdBQUcsR0FBRyxJQUFJSCw0Q0FBSixFQUFaLEVBQ0E7QUFDQTs7Q0FFQTtBQUNBOztDQUdBOztBQUNBO0FBQ0E7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNYyxTQUFTLEdBQUlDLE1BQUQsR0FBNkUsQ0FBN0UsR0FBcUYsSUFBdkcsRUFFQTs7QUFDQSxNQUFNRyxHQUFHLEdBQUdqQiw4Q0FBRyxDQUFDO0FBQUNrQixFQUFBQSxNQUFNLEVBQUVQLGdEQUFVQTtBQUFuQixDQUFELENBQUgsQ0FBMEJRLE1BQTFCLENBQWlDO0FBQUVsQixFQUFBQSxJQUFJLEVBQUUsQ0FBQyxXQUFELEVBQWMsU0FBZDtBQUFSLENBQWpDLENBQVo7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTW1CLFVBQVUsR0FBR1gsa0RBQU8sQ0FBQyxDQUN2QkgsK0NBQU8sRUFEZ0IsRUFFdkJGLGlEQUFPLENBQUNILGdEQUFBLENBQVVxQixTQUFWLEVBQXFCLFdBQXJCLENBQUQsQ0FGZ0IsRUFHdkJkLGdEQUFJLEVBSG1CLEVBSXZCRCwrQ0FBUSxDQUFDO0FBQUNnQixFQUFBQSxNQUFNLEVBQUMsS0FBUjtBQUFlQyxFQUFBQSxLQUFLLEVBQUU7QUFBdEIsQ0FBRCxDQUplLEVBS3ZCckIsaURBQU0sRUFMaUIsRUFNdkJTLDREQU51QixFQU92QkssR0FQdUIsQ0FBRCxDQUExQjs7QUFVQSxJQUFHLENBQUNKLFNBQUosRUFBZTtBQUNYWCxFQUFBQSxHQUFHLENBQUN1QixHQUFKLENBQVFmLG9EQUFRLEVBQWhCO0FBQ0g7O0FBRURSLEdBQUcsQ0FBQ3VCLEdBQUosQ0FBUUwsVUFBUjtBQUNBbEIsR0FBRyxDQUFDdUIsR0FBSixDQUFRcEIsNERBQU0sRUFBZDtBQUVBSCxHQUFHLENBQUN3QixNQUFKLENBQVcsSUFBWCIsInNvdXJjZXMiOlsid2VicGFjazovLzgtNC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGtvYSA9IHJlcXVpcmUoJ2tvYScpXHJcbmltcG9ydCBrb2EgZnJvbSAna29hJ1xyXG5pbXBvcnQgSldUIGZyb20gJ2tvYS1qd3QnXHJcbi8vIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuY29uc3QgYXBwID0gbmV3IGtvYSgpXHJcbi8vIGtvYS1oZWxtZXTlronlhajlpLRcclxuLy8gY29uc3QgaGVsbWV0ID0gcmVxdWlyZSgna29hLWhlbG1ldCcpXHJcbmltcG9ydCBoZWxtZXQgZnJvbSAna29hLWhlbG1ldCdcclxuLy8ga29hLXN0YXRpY+mdmeaAgei1hOa6kOacjeWKoeWZqCzpnIDkvKDpgJLnu53lr7not6/lvoRcclxuLy8gY29uc3Qgc3RhdGljcyA9IHJlcXVpcmUoJ2tvYS1zdGF0aWMnKVxyXG5pbXBvcnQgc3RhdGljcyBmcm9tICdrb2Etc3RhdGljJ1xyXG5cclxuLy8gY29uc3Qgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXJzL3JvdXRlcnMnKVxyXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVycy9yb3V0ZXJzJ1xyXG5pbXBvcnQga29hQm9keSBmcm9tICdrb2EtYm9keSdcclxuaW1wb3J0IGpzb251dGlsIGZyb20gJ2tvYS1qc29uJ1xyXG4vLyDot6jln5/or7fmsYJcclxuaW1wb3J0IGNvcnMgZnJvbSAnQGtvYS9jb3JzJ1xyXG4vLyBrb2EtY29tcG9zZSDmlbTlkIjkuK3pl7Tku7ZcclxuaW1wb3J0IGNvbXBvc2UgZnJvbSAna29hLWNvbXBvc2UnXHJcbi8vIGtvYS1jb21wcmVzcyDljovnvKnkuK3pl7Tku7ZcclxuaW1wb3J0IGNvbXByZXNzIGZyb20gJ2tvYS1jb21wcmVzcydcclxuaW1wb3J0IHsgSldUX1NFQ1JFVCB9IGZyb20gJy4vY29uZmlnJ1xyXG5pbXBvcnQgZXJyb3JIYW5kbGUgZnJvbSAnLi9jb21tb24vRXJyb3JIYW5kbGUnXHJcblxyXG5jb25zdCBpc0Rldk1vZGUgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2QnKSA/IGZhbHNlIDogdHJ1ZVxyXG5cclxuLy8g5a6a5LmJ5YWs5YWx6Lev5b6E77yM5LiN6ZyA6KaBand06Ym05p2DXHJcbmNvbnN0IGp3dCA9IEpXVCh7c2VjcmV0OiBKV1RfU0VDUkVUfSkudW5sZXNzKHsgcGF0aDogWy9eXFwvcHVibGljLywgL1xcL2xvZ2luL10gfSlcclxuLyoqXHJcbiAqIOS9v+eUqGtvYS1jb21wb3NlIOmbhuWQiOS4remXtOS7tlxyXG4gKi9cclxuY29uc3QgbWlkZGxld2FyZSA9IGNvbXBvc2UoW1xyXG4gICAga29hQm9keSgpLFxyXG4gICAgc3RhdGljcyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljJykpLFxyXG4gICAgY29ycygpLFxyXG4gICAganNvbnV0aWwoe3ByZXR0eTpmYWxzZSwgcGFyYW06ICdwcmV0dHknfSksXHJcbiAgICBoZWxtZXQoKSxcclxuICAgIGVycm9ySGFuZGxlLFxyXG4gICAgand0XHJcbl0pXHJcblxyXG5pZighaXNEZXZNb2RlKSB7XHJcbiAgICBhcHAudXNlKGNvbXByZXNzKCkpXHJcbn1cclxuXHJcbmFwcC51c2UobWlkZGxld2FyZSlcclxuYXBwLnVzZShyb3V0ZXIoKSlcclxuXHJcbmFwcC5saXN0ZW4oMzAwMSkiXSwibmFtZXMiOlsia29hIiwiSldUIiwicGF0aCIsImFwcCIsImhlbG1ldCIsInN0YXRpY3MiLCJyb3V0ZXIiLCJrb2FCb2R5IiwianNvbnV0aWwiLCJjb3JzIiwiY29tcG9zZSIsImNvbXByZXNzIiwiSldUX1NFQ1JFVCIsImVycm9ySGFuZGxlIiwiaXNEZXZNb2RlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiand0Iiwic2VjcmV0IiwidW5sZXNzIiwibWlkZGxld2FyZSIsImpvaW4iLCJfX2Rpcm5hbWUiLCJwcmV0dHkiLCJwYXJhbSIsInVzZSIsImxpc3RlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_DBHelpler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/DBHelpler */ \"./src/config/DBHelpler.js\");\n\nconst Schema = _config_DBHelpler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Schema;\nconst UserSchema = new Schema({\n  'username': {\n    type: String\n  },\n  'password': String,\n  'nickname': String,\n  'created': String\n});\nconst UserModel = _config_DBHelpler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].model('users', UserSchema, 'users');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxnRUFBZjtBQUVBLE1BQU1FLFVBQVUsR0FBRyxJQUFJRCxNQUFKLENBQVc7QUFDMUIsY0FBWTtBQUFFRSxJQUFBQSxJQUFJLEVBQUVDO0FBQVIsR0FEYztBQUUxQixjQUFZQSxNQUZjO0FBRzFCLGNBQVlBLE1BSGM7QUFJMUIsYUFBV0E7QUFKZSxDQUFYLENBQW5CO0FBT0EsTUFBTUMsU0FBUyxHQUFHTCwrREFBQSxDQUFlLE9BQWYsRUFBd0JFLFVBQXhCLEVBQW9DLE9BQXBDLENBQWxCO0FBRUEsaUVBQWVHLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly84LTQvLi9zcmMvbW9kZWwvVXNlci5qcz83NmZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICcuLi9jb25maWcvREJIZWxwbGVyJ1xyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWFcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgICd1c2VybmFtZSc6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICAncGFzc3dvcmQnOiBTdHJpbmcsXHJcbiAgICAnbmlja25hbWUnOiBTdHJpbmcsXHJcbiAgICAnY3JlYXRlZCc6IFN0cmluZ1xyXG59KVxyXG5cclxuY29uc3QgVXNlck1vZGVsID0gbW9uZ29vc2UubW9kZWwoJ3VzZXJzJywgVXNlclNjaGVtYSwgJ3VzZXJzJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbFxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJVc2VyU2NoZW1hIiwidHlwZSIsIlN0cmluZyIsIlVzZXJNb2RlbCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/model/User.js\n");

/***/ }),

/***/ "./src/routers/loginRouter.js":
/*!************************************!*\
  !*** ./src/routers/loginRouter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_loginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/loginController */ \"./src/api/loginController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/login');\nrouter.post('/forget', _api_loginController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forget);\nrouter.post('/login', _api_loginController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].login);\nrouter.post('/register', _api_loginController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVycy9sb2dpblJvdXRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1FLE1BQU0sR0FBRyxJQUFJRixtREFBSixFQUFmO0FBRUFFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLFFBQWQ7QUFFQUQsTUFBTSxDQUFDRSxJQUFQLENBQVksU0FBWixFQUF1QkgsbUVBQXZCO0FBQ0FDLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLFFBQVosRUFBc0JILGtFQUF0QjtBQUNBQyxNQUFNLENBQUNFLElBQVAsQ0FBWSxXQUFaLEVBQXlCSCxxRUFBekI7QUFFQSxpRUFBZUMsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovLzgtNC8uL3NyYy9yb3V0ZXJzL2xvZ2luUm91dGVyLmpzPzc4OWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwia29hLXJvdXRlclwiXHJcbmltcG9ydCBsb2dpbkNvbnRyb2xsZXIgZnJvbSBcIi4uL2FwaS9sb2dpbkNvbnRyb2xsZXJcIlxyXG5cclxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIucHJlZml4KCcvbG9naW4nKVxyXG5cclxucm91dGVyLnBvc3QoJy9mb3JnZXQnLCBsb2dpbkNvbnRyb2xsZXIuZm9yZ2V0KVxyXG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgbG9naW5Db250cm9sbGVyLmxvZ2luKVxyXG5yb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgbG9naW5Db250cm9sbGVyLnJlZ2lzdGVyKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl0sIm5hbWVzIjpbIlJvdXRlciIsImxvZ2luQ29udHJvbGxlciIsInJvdXRlciIsInByZWZpeCIsInBvc3QiLCJmb3JnZXQiLCJsb2dpbiIsInJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routers/loginRouter.js\n");

/***/ }),

/***/ "./src/routers/publicRouter.js":
/*!*************************************!*\
  !*** ./src/routers/publicRouter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_PublicController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/PublicController */ \"./src/api/PublicController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/public');\nrouter.get('/getCaptcha', _api_PublicController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCaptcha); // module.exports = router\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVycy9wdWJsaWNSb3V0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsbURBQUosRUFBZjtBQUVBRSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxTQUFkO0FBQ0FELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLGFBQVgsRUFBMEJILHdFQUExQixHQUVBOztBQUNBLGlFQUFlQyxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOC00Ly4vc3JjL3JvdXRlcnMvcHVibGljUm91dGVyLmpzP2Q3NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJ1xyXG5pbXBvcnQgcHVibGljQ29udHJvbGxlciBmcm9tICcuLi9hcGkvUHVibGljQ29udHJvbGxlcidcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxyXG5cclxucm91dGVyLnByZWZpeCgnL3B1YmxpYycpXHJcbnJvdXRlci5nZXQoJy9nZXRDYXB0Y2hhJywgcHVibGljQ29udHJvbGxlci5nZXRDYXB0Y2hhKVxyXG5cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl0sIm5hbWVzIjpbIlJvdXRlciIsInB1YmxpY0NvbnRyb2xsZXIiLCJyb3V0ZXIiLCJwcmVmaXgiLCJnZXQiLCJnZXRDYXB0Y2hhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routers/publicRouter.js\n");

/***/ }),

/***/ "./src/routers/routers.js":
/*!********************************!*\
  !*** ./src/routers/routers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _publicRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicRouter */ \"./src/routers/publicRouter.js\");\n/* harmony import */ var _loginRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginRouter */ \"./src/routers/loginRouter.js\");\n// koa-combine-routers 合并路由\n\n\n // module.exports = combineRouters(\n//     arouters,\n//     brouters\n// )\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default()(_publicRouter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _loginRouter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVycy9yb3V0ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsaUVBQWVBLDBEQUFjLENBQUNDLHFEQUFELEVBQWVDLG9EQUFmLENBQTdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vOC00Ly4vc3JjL3JvdXRlcnMvcm91dGVycy5qcz82M2U4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGtvYS1jb21iaW5lLXJvdXRlcnMg5ZCI5bm26Lev55SxXHJcbmltcG9ydCBjb21iaW5lUm91dGVycyBmcm9tICdrb2EtY29tYmluZS1yb3V0ZXJzJ1xyXG5cclxuaW1wb3J0IHB1YmxpY1JvdXRlciBmcm9tICcuL3B1YmxpY1JvdXRlcidcclxuaW1wb3J0IGxvZ2luUm91dGVyIGZyb20gJy4vbG9naW5Sb3V0ZXInXHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVSb3V0ZXJzKFxyXG4vLyAgICAgYXJvdXRlcnMsXHJcbi8vICAgICBicm91dGVyc1xyXG4vLyApXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSb3V0ZXJzKHB1YmxpY1JvdXRlciwgbG9naW5Sb3V0ZXIpIl0sIm5hbWVzIjpbImNvbWJpbmVSb3V0ZXJzIiwicHVibGljUm91dGVyIiwibG9naW5Sb3V0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routers/routers.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("@koa/cors");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bluebird");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("koa");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("koa-body");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("koa-combine-routers");

/***/ }),

/***/ "koa-compose":
/*!******************************!*\
  !*** external "koa-compose" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("koa-compose");

/***/ }),

/***/ "koa-compress":
/*!*******************************!*\
  !*** external "koa-compress" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("koa-compress");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-helmet");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("koa-json");

/***/ }),

/***/ "koa-jwt":
/*!**************************!*\
  !*** external "koa-jwt" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("koa-jwt");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-static");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redis");

/***/ }),

/***/ "svg-captcha":
/*!******************************!*\
  !*** external "svg-captcha" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("svg-captcha");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;