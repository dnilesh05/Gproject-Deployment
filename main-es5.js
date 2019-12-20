(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row loginBoxHeight\" *ngIf=\"!verifyUserOtp\">\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4\">\n      <div class=\"row\">\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-12 col-md-12 col-lg-8 \">\n          <div class=\"loginbox card\">\n            <div class=\"loginBoxHeading\">\n              Sign into GProject\n            </div>\n            <form #frm=\"ngForm\" (ngSubmit)=\"onSubmit(frm)\" style=\"padding: 0 10px 10px 10px;\">\n               <div class=\"form-group\">\n                <label class=\"field-label\" for=\"email\">Email address *</label>\n                <input type=\"email\" class=\"form-control form-control-sm field-label\" id=\"email\"\n                  aria-describedby=\"emailHelp\" placeholder=\"Enter email\" autocomplete=\"off\" name=\"email\" ngModel required\n                  #userEmail=\"ngModel\" pattern=\"[a-zA-Z0-9_+-]+[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]{1,20}$\" />\n              </div>\n              <div *ngIf=\"userEmail.touched && userEmail.errors\" class=\"\">\n                <div class=\"login-error-msg\" *ngIf=\"userEmail.errors?.required\">\n                  Email is required !\n                </div>\n                <div class=\"login-error-msg\" *ngIf=\"userEmail.errors?.pattern\">\n                  Invalid email !\n                </div>\n              </div>\n              <label class=\"field-label\" for=\"password\">Password *</label>\n              <div class=\"form-group input-group\">\n                <input [type]=\"showPassword?'text':'password'\" class=\"form-control form-control-sm field-label\"\n                  id=\"password\" placeholder=\"Password\" autocomplete=\"off\" name=\"password\" ngModel required\n                  #userPassword=\"ngModel\" />\n                <!-- <div class=\"input-group-append\">\n                  <span class=\"input-group-text\" (click)=\"showPassword =!showPassword\">\n                    <i class=\"fa fa-fw  field-icon\" [ngClass]=\"{'fa-eye-slash':!showPassword,'fa-eye':showPassword}\"\n                      aria-hidden=\"true\"></i></span>\n                </div> -->\n              </div>\n              <!-- <div *ngIf=\"iscaps && userPassword!=''\" class=\"login-error-msg\">\n                <span class=\"login-error-msg\">{{iscaps?'CAPSLOCK IS ON':'No CapsLock'}}</span>\n              </div> -->\n              <div *ngIf=\"userPassword.touched && userPassword.errors\" class=\"\">\n                <div class=\"login-error-msg\" *ngIf=\"userPassword.errors?.required\">\n                  Password is required !\n                </div>\n              </div>\n  \n              <div class=\"row\">\n                <div class=\"col-sm-6\" style=\" font-family: Roboto;color: #9b9b9b;\">\n                  <a class=\"routeLink\" (click)=\"forgotPage()\"><u style=\"text-decoration: underline;color: blue;\">Forgot\n                      password?</u></a>\n                </div>\n                <div class=\"col-sm-6 loginBoxTextRight \" *ngIf=\"!serverResponse\">\n                  <button type=\"submit\" [disabled]=\"frm.invalid\" class=\"btn loginBtn\">\n                    Sign In\n                  </button>\n                </div>\n                <div class=\"col-sm-6 loginBoxTextRight\" *ngIf=\"serverResponse\">\n                  <button class=\"btn loginBtn\">\n                    <i class=\"fa fa-circle-o-notch fa-spin\"></i> Sign In\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"col-sm-2\"></div>\n      </div>\n      <div class=\"loginBoxTextCenter\">\n        <p class=\"field-label\" style=\"font-size:14px;margin-top: 10px; font-family: Roboto;color: #9b9b9b;\">\n          <a class=\"routeLink\" (click)=\"registerPage()\" style=\"text-decoration: underline;\n          color: blue;\">Don't have an account? Sign Up</a>\n        </p>\n      </div>\n    </div>\n  \n    <div class=\"col-sm-4\"></div>\n  </div> \n  <!-- verify user active or not -->\n  <div class=\"row loginBoxHeight\" *ngIf=\"verifyUserOtp\">\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4\">\n      <div class=\"row\">\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-12 col-md-12 col-lg-8 \">\n          <div style=\"text-align: center\">\n            <img src=\"assets/images/color.png\" class=\"img-responsive\" />\n          </div>\n          <div class=\"loginbox card\">\n            <div class=\"loginBoxHeading\">\n              OTP Verification\n            </div>\n            <form  style=\"padding: 0 10px 10px 10px;\">\n              <div class=\"form-group\">\n                <label for=\"otpverification\" style=\"margin-left: 2px;\" class=\"\">Please Enter OTP </label>\n                <input type=\"text\" name=\"otpverification\" id=\"otpverification\"\n                  class=\"form-control form-control-sm field-label\" placeholder=\"Enter your OTP\" autocomplete=\"off\" ngModel\n                  required #userOtpVerification=\"ngModel\" maxlength=\"6\" pattern=\"\"\n                  onkeypress=\"return event.charCode >= 48 && event.charCode <= 57\" />\n              </div>\n              <div *ngIf=\"userOtpVerification.touched && userOtpVerification.errors\" class=\"\">\n                <div class=\"login-error-msg\" *ngIf=\"userOtpVerification.errors?.required\">\n                  Otp is required !\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-12 center-block\" *ngIf=\"!serverResponse1\">\n                  <button type=\"button\" [disabled]=\"frm.invalid\" (click)=\"onSubmitCode(userOtpVerification.value)\" style=\"background-color: #3284C7; \n                  color: #ffffff\" name=\"otpverify\" class=\"btn loginBtn center-block pull-right block\">\n                  Verify</button>\n                </div>\n                <div class=\"col-sm-12 center-block\" *ngIf=\"serverResponse1\">\n                  <button   style=\"background-color: #3284C7; \n                  color: #ffffff\" name=\"otpverify\" class=\"btn loginBtn center-block pull-right block\">\n                    <i class=\"fa fa-circle-o-notch fa-spin\" ></i>Verify</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"loginBoxTextCenter\">\n        <p class=\"field-label\" style=\"font-size:14px;margin-top: 10px; font-family: Roboto;color: #9b9b9b;\">\n          <a class=\"routeLink\" (click)=\"Otpsend()\" style=\"text-decoration: underline;\n          color: blue;cursor: pointer;\">Resend OTP</a>\n        </p>\n      </div>\n    </div>  \n    <div class=\"col-sm-4\"></div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-dashboard/user-dashboard.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-dashboard/user-dashboard.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-12\" style=\"background: #000;color:#fff\">\n       <div style=\"padding: 10px;\">\n        <span>\n            <b>GProject</b>\n        </span>\n        <span style=\"float:right;\" (click)=\"logOutUserSession()\">\n            <b>LogOut</b>\n        </span>\n       </div>\n    </div>\n</div>\n<div class=\"row mt-3\">   \n  <div class=\"col-sm-10 offset-1\">\n     <div class=\"row\">\n        <div class=\"col\" >\n            <div class=\"p-5 card\">\n                Frontier\n            </div>\n            </div>\n            <div class=\"col\" >\n            <div class=\"p-5 card\">\n                Events\n            </div>\n        </div>\n        <div class=\"col\" >\n            <div class=\"p-5 card\">\n                Influence\n            </div>\n        </div>\n        <div class=\"col\" >\n            <div class=\"p-5  card\">\n                Patent\n            </div>\n        </div>\n        <div class=\"col \" >\n            <div class=\"pt-5 pl-4 pr-4 pb-5 card\">\n                NeuroExpert\n            </div>\n        </div>\n     </div>\n  </div>\n</div>\n<div class=\"row mt-5\">\n    <div class=\"col-sm-10 offset-1\">\n       <h4>Frontier</h4>\n    </div>\n</div>\n\n<div class=\"row mt-1\" style=\"overflow-x: none;\">\n    <div class=\"col-sm-10 offset-1 p-3 \">\n        <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th style=\"width: 3%\">\n                    Id\n                </th>\n                <th style=\"width: 8%\">\n                    Date\n                </th>\n                <th style=\"width: 23%\">\n                    Title\n                </th>\n                <th style=\"width: 15%\">\n                   Source\n                </th>\n                <th style=\"width: 10%\">\n                   Author\n                 </th>\n                 <th style=\"width: 15%\">\n                    Image\n                 </th>\n                 <th style=\"width: 8%\">\n                    Organisation\n                 </th>\n                 <th style=\"width: 18%\">\n                    Action\n                 </th>\n             </tr>\n        </thead>\n        <tr *ngFor=\"let item of tableData;let i = index;\" style=\"font-size: 14px;\">\n            <td>\n                {{i}}\n            </td>\n            <td>\n                3-6-19\n            </td>\n            <td>\n                {{item.title}}\n            </td>\n            <td>\n                {{item.source}}\n            </td>\n            <td>\n                {{item.author}}\n            </td>\n            <td>\n                {{item.image}}\n            </td>\n            <td>\n                {{item.organisation}}\n            </td>\n            <td style=\"font-size: 12px;\">\n                <span style=\"border: 1px solid;padding: 3px 10px;margin: 0 3px;\">\n                    <!-- Publish -->\n                    <i class=\"fa fa-upload\" aria-hidden=\"true\"></i>\n                </span>\n                <span style=\"border: 1px solid;padding: 3px 10px;margin: 0 3px;cursor: pointer;\" (click)=\"editPost(item)\">\n                    <!-- Edit  -->\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                </span>\n                <span style=\"border: 1px solid;padding: 3px 10px;margin: 0 3px;\" (click)=\"deletePost(item)\">\n                    <!-- Delete  -->\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                </span>\n            </td>\n        </tr>\n        </table>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"editModal\" *ngIf=\"editPostDetails\">\n    <div class=\"modal-dialog modal-md\">\n        <div class=\"modal-content\">    \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Edit Details</h4>\n        </div>    \n        <!-- Modal body -->\n        <div class=\"modal-body\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"title\">Title:</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter title\" name=\"title\" [(ngModel)]=\"editPostDetails.title\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"source\">Source:</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter source\" name=\"source\" [(ngModel)]=\"editPostDetails.source\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Author\">Author:</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Author\" name=\"Author\" [(ngModel)]=\"editPostDetails.author\">\n                </div>  \n                <div class=\"form-group\">\n                        <label for=\"Organisation\">Organisation:</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Organisation\" name=\"Organisation\" [(ngModel)]=\"editPostDetails.organisation\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Organisation\">Image:</label>\n                    <input type=\"file\" class=\"form-control\" placeholder=\"Enter Organisation\" name=\"youtube\" [(ngModel)]=\"editPostDetails.organisation\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Organisation\">Youtube Link:</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Organisation\" name=\"youtube\" [(ngModel)]=\"editPostDetails.organisation\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"body\">Post Details:</label>\n                    <textarea type=\"text\" class=\"form-control\" placeholder=\"Enter post details\" name=\"body\" [(ngModel)]=\"editPostDetails.body\"></textarea>\n                </div>               \n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </form>\n        </div>    \n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n            <a  class=\"btn btn-default\" data-dismiss=\"modal\">Close</a>\n        </div>\n    \n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"modal\" id=\"deleteModal\">\n        <div class=\"modal-dialog modal-md\">\n            <div class=\"modal-content\">    \n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Delete Details</h4>\n            </div>    \n            <!-- Modal body -->\n            <div class=\"modal-body\">\n              <h6>Are you sure you want to delete it.</h6>\n            </div>    \n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n                <a  class=\"btn btn-default\" data-dismiss=\"modal\">Close</a>\n            </div>\n        \n            </div>\n        </div>\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _dashboard_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/user-dashboard/user-dashboard.component */ "./src/app/dashboard/user-dashboard/user-dashboard.component.ts");
            var routes = [
                { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'dashboard', component: _dashboard_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["UserDashboardComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.title = 'GProject';
                }
                AppComponent.prototype.ngOnInit = function () {
                    if (localStorage.getItem('UserDetails') != null) {
                        this.router.navigate(['/dashboard']);
                    }
                    else {
                        this.router.navigate(['\login']);
                    }
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
            /* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
                        _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"]
                    ],
                    providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"] }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/auth/auth.module.ts ***!
          \*************************************/
        /*! exports provided: AuthModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function () { return AuthModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var AuthModule = /** @class */ (function () {
                function AuthModule() {
                }
                return AuthModule;
            }());
            AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                    ],
                    exports: [
                        _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                    ]
                })
            ], AuthModule);
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.css": 
        /*!************************************************!*\
          !*** ./src/app/auth/login/login.component.css ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sellerlogin {\n    background: #f3f3f3;\n  }\n  .loginBoxHeight {\n    margin: 75px 0 0 0;\n  }\n  .loginbox {\n    /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); */\n    /* box-shadow: 0px 1px 3px 3px rgba(0, 0, 0, 0.16),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.23); */\n    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.16),\n      0px 0px 0px 0px rgba(0, 0, 0, 0.23);\n    font-size: 12px;\n    margin-top: 25px;\n  }\n  .loginBoxHeading {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.16);\n    color: #4a4a4a;\n    font-family: Roboto;\n    padding: 10px 0;\n    margin-bottom: 10px;\n    font-size: 18px;\n    line-height: 24px;\n    text-align: center;\n  }\n  .loginBoxTextRight {\n    text-align: right;\n  }\n  .loginBoxTextCenter {\n    text-align: center;\n  }\n  .loginBtn {\n    background: #3284c7;\n    color: #fff;\n    font-size: 12px;\n  }\n  .loginBtn:disabled {\n    cursor: not-allowed;\n    pointer-events: all !important;\n  }\n  .login-error-msg {\n    color: red;\n    font-size: 12px;\n    margin: -10px 0 5px 0;\n  }\n  .routeLink:hover {\n    cursor: pointer;\n  }\n  .loginbox .field-label {\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.6;\n    letter-spacing: normal;\n    color: #9b9b9b;\n  }\n  .loader {\n    border: 5px solid #3498db;\n    border-radius: 50%;\n    border-top: 5px solid #f3f3f3;\n    width: 20px;\n    height: 20px;\n    -webkit-animation: spin 2s linear infinite; /* Safari */\n    animation: spin 2s linear infinite;\n  }\n  /* Safari */\n  @-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLDhFQUE4RTtJQUM5RTs0Q0FDd0M7SUFDeEM7eUNBQ3FDO0lBQ3JDLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDRDQUE0QztJQUM1QyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7RUFFQTtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjtFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBMEMsRUFBRSxXQUFXO0lBQ3ZELGtDQUFrQztFQUNwQztFQUVBLFdBQVc7RUFDWDtJQUNFO01BQ0UsK0JBQStCO0lBQ2pDO0lBQ0E7TUFDRSxpQ0FBaUM7SUFDbkM7RUFDRjtFQUVBO0lBQ0U7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGxlcmxvZ2luIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICB9XG4gIC5sb2dpbkJveEhlaWdodCB7XG4gICAgbWFyZ2luOiA3NXB4IDAgMCAwO1xuICB9XG4gIC5sb2dpbmJveCB7XG4gICAgLyogYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpOyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTYpLFxuICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7ICovXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNiksXG4gICAgICAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxuICAubG9naW5Cb3hIZWFkaW5nIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBjb2xvcjogIzRhNGE0YTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxvZ2luQm94VGV4dFJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAubG9naW5Cb3hUZXh0Q2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxvZ2luQnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzI4NGM3O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAubG9naW5CdG46ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubG9naW4tZXJyb3ItbXNnIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IC0xMHB4IDAgNXB4IDA7XG4gIH1cbiAgLnJvdXRlTGluazpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAubG9naW5ib3ggLmZpZWxkLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgY29sb3I6ICM5YjliOWI7XG4gIH1cbiAgXG4gIC5sb2FkZXIge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzNDk4ZGI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZjNmM2YzO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IC8qIFNhZmFyaSAqL1xuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8qIFNhZmFyaSAqL1xuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/auth/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(router) {
                    this.router = router;
                    this.userCredential = {
                        name: "",
                        password: ""
                    };
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onSubmit = function (frm) {
                    if (frm.value.email === "test@gmail.com" && frm.value.password === "test@123") {
                        this.userCredential.name = frm.value.email;
                        this.userCredential.password = frm.value.password;
                        localStorage.setItem('UserDetails', JSON.stringify(this.userCredential));
                        this.router.navigate(['/dashboard']);
                    }
                    else {
                        alert('Credential does not match');
                    }
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/dashboard/dashboard.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/dashboard/dashboard.module.ts ***!
          \***********************************************/
        /*! exports provided: DashboardModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function () { return DashboardModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/dashboard/user-dashboard/user-dashboard.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var DashboardModule = /** @class */ (function () {
                function DashboardModule() {
                }
                return DashboardModule;
            }());
            DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                    ]
                })
            ], DashboardModule);
            /***/ 
        }),
        /***/ "./src/app/dashboard/user-dashboard/user-dashboard.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/dashboard/user-dashboard/user-dashboard.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/dashboard/user-dashboard/user-dashboard.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/dashboard/user-dashboard/user-dashboard.component.ts ***!
          \**********************************************************************/
        /*! exports provided: UserDashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function () { return UserDashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var UserDashboardComponent = /** @class */ (function () {
                function UserDashboardComponent(router) {
                    this.router = router;
                    this.tableData = [
                        {
                            title: "C language-yashwant",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        },
                        {
                            title: "C language",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        },
                        {
                            title: "C language",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        },
                        {
                            title: "C language",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        },
                        {
                            title: "C language",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        },
                        {
                            title: "C language",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        },
                        {
                            title: "C language by denis",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        },
                        {
                            title: "Java language by patric",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        },
                        {
                            title: "C language",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        },
                        {
                            title: "C language",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        },
                        {
                            title: "C language",
                            source: "c publication",
                            author: "Denis",
                            image: "No image url",
                            organisation: "oracle",
                            body: "Edit body"
                        }
                    ];
                }
                UserDashboardComponent.prototype.ngOnInit = function () {
                };
                UserDashboardComponent.prototype.logOutUserSession = function () {
                    localStorage.removeItem('UserDetails');
                    this.router.navigate(['\login']);
                };
                UserDashboardComponent.prototype.editPost = function (item) {
                    // alert('Hi');
                    this.editPostDetails = item;
                    console.log(this.editPostDetails);
                    $('#editModal').modal('show');
                };
                UserDashboardComponent.prototype.deletePost = function () {
                    console.log(this.editPostDetails);
                    $('#deleteModal').modal('show');
                };
                return UserDashboardComponent;
            }());
            UserDashboardComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-dashboard/user-dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/dashboard/user-dashboard/user-dashboard.component.css")).default]
                })
            ], UserDashboardComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/nilesh/PersonalProjects/GProject/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map