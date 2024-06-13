(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+DhY":
    /*!*****************************************************!*\
      !*** ./src/app/components/about/about.component.ts ***!
      \*****************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function DhY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 7,
        vars: 0,
        consts: [["routerLink", "/"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Task Tracker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Version: 1.0.0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/saif/Desktop/SE452/Latest/se452-banking-management-system/frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/ui.service */
      "Witw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../button/button.component */
      "7psr");

      function HeaderComponent_app_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function HeaderComponent_app_button_5_Template_app_button_btnClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.toggleAddDeposit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx_r0.showAddDeposit ? "red" : "green");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx_r0.showAddDeposit ? "Close" : "Deposit");
        }
      }

      function HeaderComponent_app_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function HeaderComponent_app_button_6_Template_app_button_btnClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.toggleAddWithdraw();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx_r1.showAddWithdraw ? "red" : "blue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("text", ctx_r1.showAddWithdraw ? "Close" : "Withdraw");
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(uiService, router) {
          var _this = this;

          _classCallCheck(this, HeaderComponent);

          this.uiService = uiService;
          this.router = router;
          this.title = 'DePaul Bank';
          this.showAddDeposit = false;
          this.showAddWithdraw = false;
          this.showBtnDeposit = true;
          this.showBtnWithdraw = true;
          this.subscriptionDeposit = this.uiService.onToggleDeposit().subscribe(function (value) {
            return _this.showAddDeposit = value, _this.showBtnWithdraw = !value;
          });
          this.subscriptionWithdraw = this.uiService.onToggleWithdraw().subscribe(function (value) {
            return _this.showAddWithdraw = value, _this.showBtnDeposit = !value;
          });
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Unsubscribe to ensure no memory leaks
            this.subscriptionDeposit.unsubscribe();
            this.subscriptionWithdraw.unsubscribe();
          }
        }, {
          key: "toggleAddDeposit",
          value: function toggleAddDeposit() {
            this.uiService.toggleAddDeposit();
          }
        }, {
          key: "toggleAddWithdraw",
          value: function toggleAddWithdraw() {
            this.uiService.toggleAddWithdraw();
          }
        }, {
          key: "hasRoute",
          value: function hasRoute(route) {
            return this.router.url === route;
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 7,
        vars: 2,
        consts: [[1, "block"], [3, "color", "text", "btnClick", 4, "ngIf"], [3, "color", "text", "btnClick"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_app_button_5_Template, 1, 2, "app-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_app_button_6_Template, 1, 2, "app-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasRoute("/deposit") && ctx.showBtnDeposit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasRoute("/deposit") && ctx.showBtnWithdraw);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]],
        styles: [".block[_ngcontent-%COMP%] {\n  margin-left: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDcwMHB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "5Ey6":
    /*!*******************************************************!*\
      !*** ./src/app/components/signup/signup.component.ts ***!
      \*******************************************************/

    /*! exports provided: SignupComponent */

    /***/
    function Ey6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent(http, router, taskService) {
          _classCallCheck(this, SignupComponent);

          this.http = http;
          this.router = router;
          this.taskService = taskService;
          this.signupObj = {
            username: '',
            password: '',
            email: '',
            accountType: ''
          };
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSignup",
          value: function onSignup() {
            var _this2 = this;

            //localStorage.setItem("signupUsers",JSON.stringify(this.signupUsers));
            this.taskService.signup(this.signupObj).subscribe(function (resp) {
              if (resp) {
                debugger;
                console.log(resp);
                alert("User created successfully");

                _this2.router.navigate(['/login']);
              } else {
                alert("User/Email already exists");
              }
            });
          }
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]));
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 47,
        vars: 4,
        consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"], [1, "hero", "is-fullheight"], [1, "hero-body"], [1, "container"], [1, "columns", "is-centered"], [1, "column", "is-4-desktop"], [1, "box"], [1, "title", "has-text-centered", "has-text-white"], [1, "field"], [1, "label"], [1, "control"], ["name", "username", "type", "text", "placeholder", "Enter your username", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "email", "type", "email", "placeholder", "Enter your email", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Enter your password", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], [1, "select", "is-fullwidth"], ["name", "accountType", "required", "", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], ["value", "CHECKING"], ["value", "SAVINGS"], [1, "button", "is-primary", "is-fullwidth", 3, "click"]],
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Signup Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.signupObj.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.signupObj.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.signupObj.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Account Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_select_ngModelChange_36_listener($event) {
              return ctx.signupObj.accountType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Select account type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Checking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Savings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_45_listener() {
              return ctx.onSignup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.accountType);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"]],
        styles: ["body[_ngcontent-%COMP%], .hero.is-fullheight[_ngcontent-%COMP%] {\n    background-color: #121212;\n    \n  }\n  .box[_ngcontent-%COMP%] {\n    background-color: #1f1f1f;\n    color: #ffffff;\n  }\n  .input[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    background-color: #2c2c2c;\n    color: #ffffff;\n    border: 1px solid #444;\n  }\n  .input[_ngcontent-%COMP%]::-moz-placeholder {\n    color: #aaaaaa;\n  }\n  .input[_ngcontent-%COMP%]:-ms-input-placeholder {\n    color: #aaaaaa;\n  }\n  .input[_ngcontent-%COMP%]::placeholder, .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    color: #aaaaaa;\n  }\n  .button.is-primary[_ngcontent-%COMP%] {\n    background-color: #3273dc;\n    color: #ffffff;\n    border: none;\n  }\n  .button.is-primary[_ngcontent-%COMP%]:hover {\n    background-color: #275ba1;\n  }\n  .label[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBRkE7SUFDRSxjQUFjO0VBQ2hCO0VBRkE7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7RUFDZDtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgLmhlcm8uaXMtZnVsbGhlaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAvKiBjb2xvcjogI2ZmZmZmZjsgKi9cbiAgfVxuICAuYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5pbnB1dCwgLnNlbGVjdCBzZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcbiAgfVxuICAuaW5wdXQ6OnBsYWNlaG9sZGVyLCAuc2VsZWN0IHNlbGVjdCBvcHRpb24ge1xuICAgIGNvbG9yOiAjYWFhYWFhO1xuICB9XG4gIC5idXR0b24uaXMtcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLmJ1dHRvbi5pcy1wcmltYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc1YmExO1xuICB9XG4gIC5sYWJlbCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    "7psr":
    /*!*******************************************************!*\
      !*** ./src/app/components/button/button.component.ts ***!
      \*******************************************************/

    /*! exports provided: ButtonComponent */

    /***/
    function psr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
        return ButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var ButtonComponent = /*#__PURE__*/function () {
        function ButtonComponent() {
          _classCallCheck(this, ButtonComponent);

          this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onClick",
          value: function onClick() {
            this.btnClick.emit();
          }
        }]);

        return ButtonComponent;
      }();

      ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
        return new (t || ButtonComponent)();
      };

      ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonComponent,
        selectors: [["app-button"]],
        inputs: {
          text: "text",
          color: "color"
        },
        outputs: {
          btnClick: "btnClick"
        },
        decls: 2,
        vars: 4,
        consts: [[1, "button", "is-info", 2, "margin-top", "30px", "margin-right", "30px", "color", "white", 3, "ngStyle", "click"]],
        template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener() {
              return ctx.onClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.color));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, "\n");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: [".button[_ngcontent-%COMP%]   is-info[_ngcontent-%COMP%] {\n    margin-top:30px;\n    margin-right: 30px;;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24gaXMtaW5mbyB7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDs7XG59Il19 */"]
      });
      /***/
    },

    /***/
    "9g/1":
    /*!*****************************************************************!*\
      !*** ./src/app/components/add-deposit/add-deposit.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AddDepositComponent */

    /***/
    function g1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddDepositComponent", function () {
        return AddDepositComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/ui.service */
      "Witw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function AddDepositComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddDepositComponent_form_0_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDepositComponent_form_0_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.accountNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDepositComponent_form_0_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.amount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddDepositComponent_form_0_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.notes = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.accountNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.notes);
        }
      }

      var AddDepositComponent = /*#__PURE__*/function () {
        function AddDepositComponent(uiService) {
          var _this3 = this;

          _classCallCheck(this, AddDepositComponent);

          this.uiService = uiService;
          this.onAddDeposit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.reminder = false;
          this.subscription = this.uiService.onToggleDeposit().subscribe(function (value) {
            return _this3.showAddTask = value;
          });
        }

        _createClass(AddDepositComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Unsubscribe to ensure no memory leaks
            this.subscription.unsubscribe();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (!this.accountNumber) {
              alert('Please add a deposit!');
              return;
            }

            var newDeposit = {
              accountNumber: this.accountNumber,
              transactionNumber: this.generateTransactionNumber(),
              amount: this.amount,
              depositDate: Date.now(),
              notes: this.notes
            };
            this.onAddDeposit.emit(newDeposit);
            this.accountNumber = '';
            this.transactionNumber = '';
            this.amount = 0;
            this.notes = '';
          }
        }, {
          key: "generateTransactionNumber",
          value: function generateTransactionNumber() {
            var timestamp = Date.now(); // Get current timestamp

            var prefix = 'D'; // Prefix for transaction number
            // Generate a unique transaction number using timestamp

            var transactionNumber = "".concat(prefix).concat(timestamp);
            return transactionNumber;
          }
        }]);

        return AddDepositComponent;
      }();

      AddDepositComponent.ɵfac = function AddDepositComponent_Factory(t) {
        return new (t || AddDepositComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]));
      };

      AddDepositComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddDepositComponent,
        selectors: [["app-add-deposit"]],
        outputs: {
          onAddDeposit: "onAddDeposit"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "add-form", 3, "ngSubmit", 4, "ngIf"], [1, "add-form", 3, "ngSubmit"], [1, "form-control"], [1, "field"], ["for", "text", 1, "label", "is-medium"], [1, "control"], ["type", "text", "name", "text", "id", "accountNumber", "placeholder", "Account number", 1, "input", "is-medium", 3, "ngModel", "ngModelChange"], ["for", "number", 1, "label", "is-medium"], ["type", "number", "name", "amount", "id", "amount", "placeholder", "Amount", 1, "input", "is-medium", 3, "ngModel", "ngModelChange"], ["for", "day", 1, "label", "is-medium"], ["type", "text", "name", "notes", "id", "notes", "placeholder", "Notes", 1, "input", "is-medium", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Deposit", 1, "button", "is-link", 2, "margin-top", "20px"]],
        template: function AddDepositComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddDepositComponent_form_0_Template, 18, 3, "form", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddTask);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]],
        styles: [".add-form[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  font-size: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kZXBvc2l0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJhZGQtZGVwb3NpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../carousel/carousel.component */
      "qUJ1");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 1,
        vars: 0,
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel");
          }
        },
        directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "JPrA":
    /*!*******************************************************************!*\
      !*** ./src/app/components/add-withdraw/add-withdraw.component.ts ***!
      \*******************************************************************/

    /*! exports provided: AddWithdrawComponent */

    /***/
    function JPrA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddWithdrawComponent", function () {
        return AddWithdrawComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/ui.service */
      "Witw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function AddWithdrawComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddWithdrawComponent_form_0_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddWithdrawComponent_form_0_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.accountNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddWithdrawComponent_form_0_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.amount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddWithdrawComponent_form_0_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.notes = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Withdrawal Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddWithdrawComponent_form_0_Template_select_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.withdrawalType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cash");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cheque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Online-transfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.accountNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.notes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.withdrawalType);
        }
      }

      var AddWithdrawComponent = /*#__PURE__*/function () {
        function AddWithdrawComponent(uiService) {
          var _this4 = this;

          _classCallCheck(this, AddWithdrawComponent);

          this.uiService = uiService;
          this.onAddWithdraw = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.reminder = false;
          this.subscription = this.uiService.onToggleWithdraw().subscribe(function (value) {
            return _this4.showAddWithdraw = value;
          });
        }

        _createClass(AddWithdrawComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Unsubscribe to ensure no memory leaks
            this.subscription.unsubscribe();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (!this.accountNumber) {
              alert('Please add a value for withdrawal!');
              return;
            }

            var newDeposit = {
              accountNumber: this.accountNumber,
              transactionNumber: this.generateTransactionNumber(),
              amount: this.amount,
              withdrawalType: this.withdrawalType,
              withdrawalDate: Date.now(),
              notes: this.notes
            };
            this.onAddWithdraw.emit(newDeposit);
            this.accountNumber = '';
            this.transactionNumber = '';
            this.amount = 0;
            this.notes = '';
          }
        }, {
          key: "generateTransactionNumber",
          value: function generateTransactionNumber() {
            var timestamp = Date.now(); // Get current timestamp

            var prefix = 'W'; // Prefix for transaction number
            // Generate a unique transaction number using timestamp

            var transactionNumber = "".concat(prefix).concat(timestamp);
            return transactionNumber;
          }
        }]);

        return AddWithdrawComponent;
      }();

      AddWithdrawComponent.ɵfac = function AddWithdrawComponent_Factory(t) {
        return new (t || AddWithdrawComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]));
      };

      AddWithdrawComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddWithdrawComponent,
        selectors: [["app-add-withdraw"]],
        outputs: {
          onAddWithdraw: "onAddWithdraw"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "add-form", 3, "ngSubmit", 4, "ngIf"], [1, "add-form", 3, "ngSubmit"], [1, "form-control"], ["for", "text", 1, "label", "is-medium"], [1, "control", "is-medium"], ["type", "text", "name", "text", "id", "accountNumber", "placeholder", "Account number", 1, "input", "is-medium", 3, "ngModel", "ngModelChange"], ["for", "number", 1, "label", "is-medium"], [1, "control"], ["type", "number", "name", "amount", "id", "amount", "placeholder", "Amount", 1, "input", "is-medium", 3, "ngModel", "ngModelChange"], ["for", "day", 1, "label", "is-medium"], ["type", "text", "name", "notes", "id", "notes", "placeholder", "Notes", 1, "input", "is-medium", 3, "ngModel", "ngModelChange"], ["id", "withdrawalType", 1, "select", "is-normal", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Withdraw", 1, "button", "is-link", 2, "margin-top", "20px"]],
        template: function AddWithdrawComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddWithdrawComponent_form_0_Template, 28, 4, "form", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddWithdraw);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"]],
        styles: [".add-form[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC13aXRoZHJhdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0VBQ3JCIiwiZmlsZSI6ImFkZC13aXRoZHJhdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1mb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4gICJdfQ== */"]
      });
      /***/
    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 15,
        vars: 0,
        consts: [[1, "footer"], [1, "content", "has-text-centered"], ["href", "https://jgthms.com"], ["href", "http://opensource.org/licenses/mit-license.php"], ["href", "http://creativecommons.org/licenses/by-nc-sa/4.0/"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bulma");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Jeremy Thomas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ". The source code is licensed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "MIT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". The website content is licensed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CC BY NC SA 4.0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["footer[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Lquv":
    /*!*************************************************************!*\
      !*** ./src/app/components/dashboard/dashboard.component.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Lquv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/task.service */
      "i6c7");
      /* harmony import */


      var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/ui.service */
      "Witw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(taskService, uiService, router, route) {
          var _this5 = this;

          _classCallCheck(this, DashboardComponent);

          this.taskService = taskService;
          this.uiService = uiService;
          this.router = router;
          this.route = route;
          this.showPopup = false;
          this.showImage = true;
          this.deposits = [];
          this.withdraws = [];
          this.subscription = this.uiService.onToggleDeposit().subscribe(function (value) {
            return _this5.showImage = !value;
          });
          this.subscription = this.uiService.onToggleWithdraw().subscribe(function (value) {
            return _this5.showImage = !value;
          });
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.taskService.dashboard$.subscribe(function (dashboard) {
              _this6.dashboards = dashboard;
            });
            this.getTasks();
          }
        }, {
          key: "getTasks",
          value: function getTasks() {
            this.taskService.getDashboard();
            console.log(this.dashboards);
          }
        }, {
          key: "delay",
          value: function delay(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 23,
        vars: 3,
        consts: [[1, "title", "is-1"], ["value", "100", "max", "100", 1, "progress", "is-primary"], [1, "table-container"], [1, "table", "is-striped", "is-large", "is-hoverable", "is-fullwidth"], [1, "has-text-primary", "is-medium", 2, "font-size", "x-large"], [1, "has-text-danger", 2, "font-size", "x-large"], [1, "has-text-warning", 2, "font-size", "x-large"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "progress", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 45%\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Dashboard Id: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "No. of transactions: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "No. of Withdrawals: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.dashboards[0].id, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dashboards[0].numberOfTransactions, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.dashboards[0].numberOfWithdrawals, "");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "N+2n":
    /*!*****************************************************!*\
      !*** ./src/app/components/tasks/tasks.component.ts ***!
      \*****************************************************/

    /*! exports provided: TasksComponent */

    /***/
    function N2n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
        return TasksComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/task.service */
      "i6c7");
      /* harmony import */


      var _services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/ui.service */
      "Witw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _add_deposit_add_deposit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../add-deposit/add-deposit.component */
      "9g/1");
      /* harmony import */


      var _add_withdraw_add_withdraw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../add-withdraw/add-withdraw.component */
      "JPrA");
      /* harmony import */


      var _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../task-item/task-item.component */
      "QGZo");
      /* harmony import */


      var _popmessage_popmessage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../popmessage/popmessage.component */
      "WsOW");

      function TasksComponent_app_task_item_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-task-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDeleteTask", function TasksComponent_app_task_item_4_Template_app_task_item_onDeleteTask_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var account_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.deleteTask(account_r3);
          })("onToggleReminder", function TasksComponent_app_task_item_4_Template_app_task_item_onToggleReminder_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var account_r3 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.toggleReminder(account_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var account_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("account", account_r3);
        }
      }

      function TasksComponent_img_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
        }
      }

      function TasksComponent_app_popmessage_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-popmessage", 14);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("messageType", ctx_r2.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("message", ctx_r2.messagePopup);
        }
      }

      var TasksComponent = /*#__PURE__*/function () {
        function TasksComponent(taskService, uiService, router, route) {
          var _this7 = this;

          _classCallCheck(this, TasksComponent);

          this.taskService = taskService;
          this.uiService = uiService;
          this.router = router;
          this.route = route;
          this.showPopup = false;
          this.showImage = true;
          this.accounts = [];
          this.deposits = [];
          this.withdraws = [];
          this.subscription = this.uiService.onToggleDeposit().subscribe(function (value) {
            return _this7.showImage = !value;
          });
          this.subscription = this.uiService.onToggleWithdraw().subscribe(function (value) {
            return _this7.showImage = !value;
          });
        }

        _createClass(TasksComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.taskService.accounts$.subscribe(function (accounts) {
              _this8.accounts = accounts;
            });
            this.getTasks();
          }
        }, {
          key: "getTasks",
          value: function getTasks() {
            this.taskService.getTasks();
            console.log(this.accounts);
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(account) {
            var _this9 = this;

            this.taskService.deleteTask(account).subscribe(function () {
              return _this9.accounts = _this9.accounts.filter(function (t) {
                return t.accountId !== account.accountId;
              });
            });
          }
        }, {
          key: "toggleReminder",
          value: function toggleReminder(account) {
            account.reminder = !account.reminder;
            this.taskService.updateTaskReminder(account).subscribe();
          }
        }, {
          key: "addDeposit",
          value: function addDeposit(deposit) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this10 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.taskService.addDeposit(deposit).subscribe(function (resp) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!(resp.status == "OK")) {
                                    _context.next = 11;
                                    break;
                                  }

                                  this.deposits.push(deposit);
                                  this.accounts.forEach(function (account) {
                                    if (account.accountNumber == deposit.accountNumber) {
                                      account.balance += deposit.amount;
                                    }
                                  });
                                  this.showPopup = true;
                                  this.messagePopup = "Deposit successful for account number:" + deposit.accountNumber + " !";
                                  this.messageClass = "Success";
                                  _context.next = 8;
                                  return this.delay(10000);

                                case 8:
                                  this.showPopup = false;
                                  _context.next = 17;
                                  break;

                                case 11:
                                  this.showPopup = true;
                                  this.messagePopup = resp.message;
                                  this.messageClass = "Error";
                                  _context.next = 16;
                                  return this.delay(10000);

                                case 16:
                                  this.showPopup = false;

                                case 17:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "addWithdraw",
          value: function addWithdraw(withdraw) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.taskService.addWithdraw(withdraw).subscribe(function (resp) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (!(resp.status == "OK")) {
                                    _context3.next = 11;
                                    break;
                                  }

                                  this.withdraws.push(withdraw);
                                  this.accounts.forEach(function (account) {
                                    if (account.accountNumber == withdraw.accountNumber) {
                                      account.balance -= withdraw.amount;
                                    }
                                  });
                                  this.showPopup = true;
                                  this.messagePopup = "Withdraw successful for account number:" + withdraw.accountNumber + " !";
                                  this.messageClass = "Success";
                                  _context3.next = 8;
                                  return this.delay(10000);

                                case 8:
                                  this.showPopup = false;
                                  _context3.next = 17;
                                  break;

                                case 11:
                                  this.showPopup = true;
                                  this.messagePopup = resp.message;
                                  this.messageClass = "Error";
                                  _context3.next = 16;
                                  return this.delay(10000);

                                case 16:
                                  this.showPopup = false;

                                case 17:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "delay",
          value: function delay(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
        }]);

        return TasksComponent;
      }();

      TasksComponent.ɵfac = function TasksComponent_Factory(t) {
        return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TasksComponent,
        selectors: [["app-tasks"]],
        decls: 15,
        vars: 3,
        consts: [[1, "container"], [1, "columm", 2, "margin-left", "30px", "margin-top", "1px"], [1, "title", "is-1"], [3, "account", "onDeleteTask", "onToggleReminder", 4, "ngFor", "ngForOf"], [1, "column", 2, "margin-left", "370px"], [3, "onAddDeposit"], [3, "onAddWithdraw"], [1, "img-box"], [1, "image", "is-1280x1280"], ["src", "assets/deposit.png", "alt", "", 4, "ngIf"], [1, "column"], [3, "messageType", "message", 4, "ngIf"], [3, "account", "onDeleteTask", "onToggleReminder"], ["src", "assets/deposit.png", "alt", ""], [3, "messageType", "message"]],
        template: function TasksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All Accounts");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TasksComponent_app_task_item_4_Template, 1, 1, "app-task-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-add-deposit", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onAddDeposit", function TasksComponent_Template_app_add_deposit_onAddDeposit_6_listener($event) {
              return ctx.addDeposit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-add-withdraw", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onAddWithdraw", function TasksComponent_Template_app_add_withdraw_onAddWithdraw_7_listener($event) {
              return ctx.addWithdraw($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "figure", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TasksComponent_img_12_Template, 1, 0, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TasksComponent_app_popmessage_14_Template, 1, 2, "app-popmessage", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accounts);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPopup);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _add_deposit_add_deposit_component__WEBPACK_IMPORTED_MODULE_6__["AddDepositComponent"], _add_withdraw_add_withdraw_component__WEBPACK_IMPORTED_MODULE_7__["AddWithdrawComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_8__["TaskItemComponent"], _popmessage_popmessage_component__WEBPACK_IMPORTED_MODULE_9__["PopmessageComponent"]],
        styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhOztFQUVmIiwiZmlsZSI6InRhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICB9XG4gIFxuICJdfQ== */"]
      });
      /***/
    },

    /***/
    "QGZo":
    /*!*************************************************************!*\
      !*** ./src/app/components/task-item/task-item.component.ts ***!
      \*************************************************************/

    /*! exports provided: TaskItemComponent */

    /***/
    function QGZo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskItemComponent", function () {
        return TaskItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");

      var TaskItemComponent = /*#__PURE__*/function () {
        function TaskItemComponent() {
          _classCallCheck(this, TaskItemComponent);

          this.onDeleteTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onToggleReminder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
        }

        _createClass(TaskItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onDelete",
          value: function onDelete(task) {
            this.onDeleteTask.emit(task);
          }
        }, {
          key: "onToggle",
          value: function onToggle(task) {
            this.onToggleReminder.emit(task);
          }
        }]);

        return TaskItemComponent;
      }();

      TaskItemComponent.ɵfac = function TaskItemComponent_Factory(t) {
        return new (t || TaskItemComponent)();
      };

      TaskItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskItemComponent,
        selectors: [["app-task-item"]],
        inputs: {
          account: "account"
        },
        outputs: {
          onDeleteTask: "onDeleteTask",
          onToggleReminder: "onToggleReminder"
        },
        decls: 17,
        vars: 3,
        consts: [[1, "table-container"], [1, "table", "is-striped", "is-large", "is-hoverable", "is-fullwidth"], [1, "has-text-primary", "is-medium", 2, "font-size", "x-large"], [1, "has-text-danger", 2, "font-size", "x-large"], [1, "has-text-warning", 2, "font-size", "x-large"]],
        template: function TaskItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Account-Number: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Account-Type: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Balance: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.account.accountNumber, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.account.accountType, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.account.balance, "");
          }
        },
        styles: [".task[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  margin: 5px;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n\n.task.reminder[_ngcontent-%COMP%] {\n  border-left: 5px solid green;\n}\n\n.task[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2staXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InRhc2staXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2sge1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLnJlbWluZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcbn1cblxuLnRhc2sgaDMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [[1, "container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "W3Zi":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function W3Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/task.service */
      "i6c7");
      /* harmony import */


      var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/ui.service */
      "Witw");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, taskService, uiService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.taskService = taskService;
          this.uiService = uiService;
          this.signupUsers = [];
          this.loginObj = {
            username: '',
            password: '',
            email: '',
            accountType: ''
          };
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogin",
          value: function onLogin() {
            var _this12 = this;

            // const isUserExist = this.signupUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
            this.taskService.login(this.loginObj).subscribe(function (response) {
              console.log('Login response', response);

              if (response.message == 'Login successful') {
                localStorage.setItem("loginUser", JSON.stringify(_this12.loginObj));

                _this12.router.navigate(['/home']);

                _this12.uiService.setShowLogout(true);
              } else alert('invalid user credential');
            });
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var token = localStorage.getItem("loginUser");
            return token != null && token.length > 0;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return this.isLoggedIn() ? localStorage.getItem("loginUser") : null;
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__["UiService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 30,
        vars: 2,
        consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"], [1, "hero", "is-fullheight"], [1, "hero-body"], [1, "container"], [1, "columns", "is-centered"], [1, "column", "is-4-desktop"], [1, "box"], [1, "title", "has-text-centered", "has-text-white"], [1, "field"], [1, "label"], [1, "control"], ["name", "username", "type", "text", "placeholder", "Enter your username", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["name", "password", "type", "password", "placeholder", "Enter your password", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], [1, "button", "is-primary", "is-fullwidth", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.loginObj.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.loginObj.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() {
              return ctx.onLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginObj.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginObj.password);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: ["body[_ngcontent-%COMP%], .hero.is-fullheight[_ngcontent-%COMP%] {\n    background-color: #121212;\n    \n  }\n  .box[_ngcontent-%COMP%] {\n    background-color: #1f1f1f;\n    color: #ffffff;\n  }\n  .input[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n    background-color: #2c2c2c;\n    color: #ffffff;\n    border: 1px solid #444;\n  }\n  .input[_ngcontent-%COMP%]::-moz-placeholder {\n    color: #aaaaaa;\n  }\n  .input[_ngcontent-%COMP%]:-ms-input-placeholder {\n    color: #aaaaaa;\n  }\n  .input[_ngcontent-%COMP%]::placeholder, .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    color: #aaaaaa;\n  }\n  .button.is-primary[_ngcontent-%COMP%] {\n    background-color: #3273dc;\n    color: #ffffff;\n    border: none;\n  }\n  .button.is-primary[_ngcontent-%COMP%]:hover {\n    background-color: #275ba1;\n  }\n  .label[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFGQTtJQUNFLGNBQWM7RUFDaEI7RUFGQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtFQUNkO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIC5oZXJvLmlzLWZ1bGxoZWlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgLyogY29sb3I6ICNmZmZmZmY7ICovXG4gIH1cbiAgLmJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAuaW5wdXQsIC5zZWxlY3Qgc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7XG4gIH1cbiAgLmlucHV0OjpwbGFjZWhvbGRlciwgLnNlbGVjdCBzZWxlY3Qgb3B0aW9uIHtcbiAgICBjb2xvcjogI2FhYWFhYTtcbiAgfVxuICAuYnV0dG9uLmlzLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjczZGM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC5idXR0b24uaXMtcHJpbWFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NWJhMTtcbiAgfVxuICAubGFiZWwge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "Witw":
    /*!****************************************!*\
      !*** ./src/app/services/ui.service.ts ***!
      \****************************************/

    /*! exports provided: UiService */

    /***/
    function Witw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiService", function () {
        return UiService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UiService = /*#__PURE__*/function () {
        function UiService(router) {
          _classCallCheck(this, UiService);

          this.router = router;
          this.showAddDeposit = false;
          this.showAddWithdraw = false;
          this.showLogout = false;
          this.subjectDeposit = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.subjectWithdraw = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.subjectLogout = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }

        _createClass(UiService, [{
          key: "toggleAddDeposit",
          value: function toggleAddDeposit() {
            this.showAddDeposit = !this.showAddDeposit;
            this.subjectDeposit.next(this.showAddDeposit);
          }
        }, {
          key: "toggleAddWithdraw",
          value: function toggleAddWithdraw() {
            this.showAddWithdraw = !this.showAddWithdraw;
            this.subjectWithdraw.next(this.showAddWithdraw);
          }
        }, {
          key: "onToggleDeposit",
          value: function onToggleDeposit() {
            return this.subjectDeposit.asObservable();
          }
        }, {
          key: "onToggleWithdraw",
          value: function onToggleWithdraw() {
            return this.subjectWithdraw.asObservable();
          }
        }, {
          key: "onToggleLogout",
          value: function onToggleLogout() {
            return this.subjectLogout.asObservable();
          }
        }, {
          key: "setShowLogout",
          value: function setShowLogout(show) {
            this.showLogout = show;
            this.subjectLogout.next(this.showLogout);
          }
        }]);

        return UiService;
      }();

      UiService.ɵfac = function UiService_Factory(t) {
        return new (t || UiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UiService,
        factory: UiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "WsOW":
    /*!***************************************************************!*\
      !*** ./src/app/components/popmessage/popmessage.component.ts ***!
      \***************************************************************/

    /*! exports provided: PopmessageComponent */

    /***/
    function WsOW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopmessageComponent", function () {
        return PopmessageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var PopmessageComponent = /*#__PURE__*/function () {
        function PopmessageComponent() {
          _classCallCheck(this, PopmessageComponent);
        }

        _createClass(PopmessageComponent, [{
          key: "getStatus",
          value: function getStatus(messageType) {
            if (messageType === 'Success') return 'message is-success';else return 'message is-warning';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PopmessageComponent;
      }();

      PopmessageComponent.ɵfac = function PopmessageComponent_Factory(t) {
        return new (t || PopmessageComponent)();
      };

      PopmessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopmessageComponent,
        selectors: [["app-popmessage"]],
        inputs: {
          messageType: "messageType",
          message: "message"
        },
        decls: 7,
        vars: 3,
        consts: [[1, "message", "is-success", 3, "ngClass"], [1, "message-header"], ["aria-label", "delete", 1, "delete"], [1, "message-body"]],
        template: function PopmessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getStatus(ctx.messageType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.message, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BtZXNzYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "XwwH":
    /*!******************************************!*\
      !*** ./src/app/components/auth.guard.ts ***!
      \******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function XwwH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            // Check local storage for the required value
            var isAuthenticated = !!localStorage.getItem("loginUser");

            if (isAuthenticated) {
              return true;
            } else {
              // Redirect to login page if not authenticated
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/button/button.component */
      "7psr");
      /* harmony import */


      var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/tasks/tasks.component */
      "N+2n");
      /* harmony import */


      var _components_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/task-item/task-item.component */
      "QGZo");
      /* harmony import */


      var _components_add_deposit_add_deposit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/add-deposit/add-deposit.component */
      "9g/1");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/about/about.component */
      "+DhY");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _components_add_withdraw_add_withdraw_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/add-withdraw/add-withdraw.component */
      "JPrA");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/carousel/carousel.component */
      "qUJ1");
      /* harmony import */


      var _components_popmessage_popmessage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/popmessage/popmessage.component */
      "WsOW");
      /* harmony import */


      var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/signup/signup.component */
      "5Ey6");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/dashboard/dashboard.component */
      "Lquv");
      /* harmony import */


      var _components_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/transaction-history/transaction-history.component */
      "aCO6");
      /* harmony import */


      var _components_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/auth.guard */
      "XwwH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var appRoutes = [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
      }, {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
      }, {
        path: 'deposit',
        component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"],
        canActivate: [_components_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]]
      }, {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]
      }, {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"]
      }, {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
      }, {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
        canActivate: [_components_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]]
      }, {
        path: 'transactionHistory',
        component: _components_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_21__["TransactionHistoryComponent"],
        canActivate: [_components_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]]
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, {
          enableTracing: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"], _components_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_9__["TaskItemComponent"], _components_add_deposit_add_deposit_component__WEBPACK_IMPORTED_MODULE_10__["AddDepositComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _components_add_withdraw_add_withdraw_component__WEBPACK_IMPORTED_MODULE_13__["AddWithdrawComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"], _components_popmessage_popmessage_component__WEBPACK_IMPORTED_MODULE_17__["PopmessageComponent"], _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _components_transaction_history_transaction_history_component__WEBPACK_IMPORTED_MODULE_21__["TransactionHistoryComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "aCO6":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/transaction-history/transaction-history.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: TransactionHistoryComponent */

    /***/
    function aCO6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionHistoryComponent", function () {
        return TransactionHistoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/task.service */
      "i6c7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TransactionHistoryComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var transaction_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r1.accountNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transaction_r1.transactionNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.transactionType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1.timestamp);
        }
      }

      var TransactionHistoryComponent = /*#__PURE__*/function () {
        function TransactionHistoryComponent(taskService) {
          _classCallCheck(this, TransactionHistoryComponent);

          this.taskService = taskService; //transactions:Transaction[]=[{id:1,transactionNumber:'123sa',accountNumber:'102',amount:1000,transactionType:'Deposit',timestamp:'24th June.2024'}];

          this.transactions = [];
        }

        _createClass(TransactionHistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.taskService.transactions$.subscribe(function (transactions) {
              _this13.transactions = transactions;
            });
            this.getTransactions();
          }
        }, {
          key: "getTransactions",
          value: function getTransactions() {
            this.taskService.getTransactions(this.accountNumber);
            console.log(this.transactions);
          }
        }, {
          key: "apple",
          value: function apple() {
            console.log("apple");
            console.log(this.accountNumber);
          }
        }]);

        return TransactionHistoryComponent;
      }();

      TransactionHistoryComponent.ɵfac = function TransactionHistoryComponent_Factory(t) {
        return new (t || TransactionHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]));
      };

      TransactionHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TransactionHistoryComponent,
        selectors: [["app-transaction-history"]],
        decls: 32,
        vars: 2,
        consts: [[1, "title", "is-1"], [1, "field", "has-addons"], [1, "control"], ["type", "text", "id", "accountNumber", "placeholder", "Account Number", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "button", "is-info", 3, "click"], ["value", "100", "max", "100", 1, "progress", "is-info"], [1, "table"], ["title", "TransactionNumber"], ["title", "TransactionType"], ["title", "Amount"], ["title", "Time"], [4, "ngFor", "ngForOf"]],
        template: function TransactionHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Transaction History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionHistoryComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.accountNumber = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionHistoryComponent_Template_button_click_8_listener() {
              return ctx.getTransactions();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Search ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "progress", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 45% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "abbr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Account Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "abbr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Transaction Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "abbr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Transaction Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "abbr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "abbr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TransactionHistoryComponent_tr_31_Template, 11, 5, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accountNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transactions);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbi1oaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "hrlM":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function hrlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/ui.service */
      "Witw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NavbarComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Log in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_22_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(uiService, router) {
          _classCallCheck(this, NavbarComponent);

          this.uiService = uiService;
          this.router = router;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.uiServiceSubscription = this.uiService.onToggleLogout().subscribe(function (show) {
              _this14.showLogOut = show;
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem("loginUser");
            this.uiService.setShowLogout(false);
            this.router.navigate(['/login']);
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 23,
        vars: 2,
        consts: [["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css"], [1, "navbar", "is-fixed-top", "has-shadow"], [1, "navbar-brand"], [1, "navbar-item"], ["src", "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_1280.png", 2, "max-height", "50px", "margin-right", "40px"], ["id", "nav-links", 1, "navbar-menu"], [1, "navbar-start"], ["routerLink", "/home", 1, "navbar-item"], ["routerLink", "/dashboard", 1, "navbar-item"], ["routerLink", "/deposit", 1, "navbar-item"], ["routerLink", "/transactionHistory", 1, "navbar-item"], [1, "navbar-end"], ["class", "navbar-item", 4, "ngIf"], [1, "buttons", "is-right"], ["routerLink", "/signup", 1, "button", "is-primary"], ["routerLink", "/login", 1, "button", "is-light"], [1, "button", "is-primary", 3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Deposit/Withdraw");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Transaction History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavbarComponent_div_21_Template, 7, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavbarComponent_div_22_Template, 5, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showLogOut);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLogOut);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: [".bd-placeholder-img[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  text-anchor: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n@media (min-width: 768px) {\n  .bd-placeholder-img-lg[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n}\n\n.b-example-divider[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: rgba(0, 0, 0, .1);\n  border-width: 1px 0;\n  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n}\n\n.b-example-vr[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 1.5rem;\n  height: 100vh;\n}\n\n.bi[_ngcontent-%COMP%] {\n  vertical-align: -.125em;\n  fill: currentColor;\n}\n\n.nav-scroller[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.btn-bd-primary[_ngcontent-%COMP%] {\n  --bd-violet-bg: #712cf9;\n  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;\n\n  --bs-btn-font-weight: 600;\n  --bs-btn-color: var(--bs-white);\n  --bs-btn-bg: var(--bd-violet-bg);\n  --bs-btn-border-color: var(--bd-violet-bg);\n  --bs-btn-hover-color: var(--bs-white);\n  --bs-btn-hover-bg: #6528e0;\n  --bs-btn-hover-border-color: #6528e0;\n  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);\n  --bs-btn-active-color: var(--bs-btn-hover-color);\n  --bs-btn-active-bg: #5a23c8;\n  --bs-btn-active-border-color: #5a23c8;\n}\n\n.bd-mode-toggle[_ngcontent-%COMP%] {\n  z-index: 1500;\n}\n\n.bd-mode-toggle[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {\n  display: flexbox !important;\n}\n\n.p-3[_ngcontent-%COMP%]   text-bg-dark[_ngcontent-%COMP%] {\nwidth: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFpQjtNQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsd0ZBQXdGO0FBQzFGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrREFBa0Q7O0VBRWxELHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLDBDQUEwQztFQUMxQyxxQ0FBcUM7RUFDckMsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQywrQ0FBK0M7RUFDL0MsZ0RBQWdEO0VBQ2hELDJCQUEyQjtFQUMzQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7QUFDQSxXQUFXO0FBQ1giLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmQtcGxhY2Vob2xkZXItaW1nIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYmQtcGxhY2Vob2xkZXItaW1nLWxnIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgfVxufVxuXG4uYi1leGFtcGxlLWRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLjVlbSAxLjVlbSByZ2JhKDAsIDAsIDAsIC4xKSwgaW5zZXQgMCAuMTI1ZW0gLjVlbSByZ2JhKDAsIDAsIDAsIC4xNSk7XG59XG5cbi5iLWV4YW1wbGUtdnIge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJpIHtcbiAgdmVydGljYWwtYWxpZ246IC0uMTI1ZW07XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuLm5hdi1zY3JvbGxlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAyLjc1cmVtO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5uYXYtc2Nyb2xsZXIgLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbi5idG4tYmQtcHJpbWFyeSB7XG4gIC0tYmQtdmlvbGV0LWJnOiAjNzEyY2Y5O1xuICAtLWJkLXZpb2xldC1yZ2I6IDExMi41MjA3MTgsIDQ0LjA2MjE1NCwgMjQ5LjQzNzg0NjtcblxuICAtLWJzLWJ0bi1mb250LXdlaWdodDogNjAwO1xuICAtLWJzLWJ0bi1jb2xvcjogdmFyKC0tYnMtd2hpdGUpO1xuICAtLWJzLWJ0bi1iZzogdmFyKC0tYmQtdmlvbGV0LWJnKTtcbiAgLS1icy1idG4tYm9yZGVyLWNvbG9yOiB2YXIoLS1iZC12aW9sZXQtYmcpO1xuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogdmFyKC0tYnMtd2hpdGUpO1xuICAtLWJzLWJ0bi1ob3Zlci1iZzogIzY1MjhlMDtcbiAgLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiAjNjUyOGUwO1xuICAtLWJzLWJ0bi1mb2N1cy1zaGFkb3ctcmdiOiB2YXIoLS1iZC12aW9sZXQtcmdiKTtcbiAgLS1icy1idG4tYWN0aXZlLWNvbG9yOiB2YXIoLS1icy1idG4taG92ZXItY29sb3IpO1xuICAtLWJzLWJ0bi1hY3RpdmUtYmc6ICM1YTIzYzg7XG4gIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6ICM1YTIzYzg7XG59XG5cbi5iZC1tb2RlLXRvZ2dsZSB7XG4gIHotaW5kZXg6IDE1MDA7XG59XG5cbi5iZC1tb2RlLXRvZ2dsZSAuZHJvcGRvd24tbWVudSAuYWN0aXZlIC5iaSB7XG4gIGRpc3BsYXk6IGZsZXhib3ggIWltcG9ydGFudDtcbn1cblxuLnAtMyB0ZXh0LWJnLWRhcmsge1xud2lkdGg6IDEwMCU7XG59XG5cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "i6c7":
    /*!******************************************!*\
      !*** ./src/app/services/task.service.ts ***!
      \******************************************/

    /*! exports provided: TaskService */

    /***/
    function i6c7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskService", function () {
        return TaskService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420'
        })
      };

      var TaskService = /*#__PURE__*/function () {
        function TaskService(http, router) {
          _classCallCheck(this, TaskService);

          this.http = http;
          this.router = router;
          this.apiUrl = 'https://0886-172-178-99-192.ngrok-free.app/api';
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.refreshDashboard = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.refreshTransactions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.accounts$ = this.refresh.asObservable();
          this.transactions$ = this.refreshTransactions.asObservable();
          this.dashboard$ = this.refreshDashboard.asObservable();
        }

        _createClass(TaskService, [{
          key: "getTasks",
          value: function getTasks() {
            var _this15 = this;

            return this.http.get(this.apiUrl + "/account", httpOptions).subscribe(function (accounts) {
              return _this15.refresh.next(accounts);
            });
          }
        }, {
          key: "getTransactions",
          value: function getTransactions(accountNumber) {
            var _this16 = this;

            return this.http.get(this.apiUrl + "/transactions/" + accountNumber, httpOptions).subscribe(function (transactions) {
              return _this16.refreshTransactions.next(transactions);
            });
          }
        }, {
          key: "getDashboard",
          value: function getDashboard() {
            var _this17 = this;

            return this.http.get(this.apiUrl + "/dashboard", httpOptions).subscribe(function (dashboard) {
              return _this17.refreshDashboard.next(dashboard);
            });
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(account) {
            var url = "".concat(this.apiUrl, "/").concat(account.accountId);
            return this.http["delete"](url, httpOptions);
          }
        }, {
          key: "updateTaskReminder",
          value: function updateTaskReminder(account) {
            var url = "".concat(this.apiUrl, "/").concat(account.accountId);
            return this.http.put(url, account, httpOptions);
          }
        }, {
          key: "addDeposit",
          value: function addDeposit(deposit) {
            var post = this.http.post(this.apiUrl + "/deposit", deposit, httpOptions);
            return post;
          }
        }, {
          key: "addWithdraw",
          value: function addWithdraw(withdraw) {
            var post = this.http.post(this.apiUrl + "/withdraw", withdraw, httpOptions);
            return post;
          }
        }, {
          key: "login",
          value: function login(user) {
            var post = this.http.post(this.apiUrl + "/login", user, httpOptions);
            return post;
          }
        }, {
          key: "signup",
          value: function signup(user) {
            var post = this.http.post(this.apiUrl + "/signup", user, httpOptions);
            return post;
          }
        }]);

        return TaskService;
      }();

      TaskService.ɵfac = function TaskService_Factory(t) {
        return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: TaskService,
        factory: TaskService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "qUJ1":
    /*!***********************************************************!*\
      !*** ./src/app/components/carousel/carousel.component.ts ***!
      \***********************************************************/

    /*! exports provided: CarouselComponent */

    /***/
    function qUJ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      var CarouselComponent = /*#__PURE__*/function () {
        function CarouselComponent() {
          _classCallCheck(this, CarouselComponent);

          this.linkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLinkedin"];
          this.github = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGithub"];
          this.instagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faInstagram"];
        }

        _createClass(CarouselComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CarouselComponent;
      }();

      CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || CarouselComponent)();
      };

      CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CarouselComponent,
        selectors: [["app-carousel"]],
        decls: 138,
        vars: 12,
        consts: [["href", "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap", "rel", "stylesheet"], ["rel", "stylesheet", "type", "text/css", "href", "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"], ["id", "customCarousel1", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "detail-box"], [1, "heading_container", "heading_left"], [1, "title", "is-1"], ["value", "100", "max", "100", 1, "progress", "is-warning"], [1, "content", "is-medium"], [1, "has-text-primary"], [1, "has-text-info"], [1, "has-text-warning"], [1, "btn-box"], ["href", "", 1, "btn1"], [1, "img-box"], ["src", "assets/slider-img.png", "alt", ""], [1, "about_section", "layout_padding"], [1, "heading_container", "heading_center"], ["src", "assets/about-img.png", "alt", ""], ["href", ""], [1, "team_section", "layout_padding"], [1, "container-fluid"], [1, ""], [1, "team_container"], [1, "col-lg-3", "col-sm-6"], [1, "box"], ["src", "assets/team-1.jpeg", "alt", "", 1, "img1"], [1, "social_box"], ["href", "https://www.instagram.com/saif_695/"], [3, "icon"], ["href", "https://www.linkedin.com/in/syed-saifuddin-7b98377b/"], ["href", "https://github.com/saifuddinsyed60"], ["src", "assets/team-2.jpeg", "alt", "", 1, "img1"], ["href", "#"], ["href", "https://www.linkedin.com/in/vinodonweb/"], ["href", "https://github.com/vinodonweb"], ["src", "assets/team-3.jpeg", "alt", "", 1, "img1"], ["href", "https://www.linkedin.com/in/hari-hara-sudhan-k/"], ["href", "https://github.com/hari-hs"], ["src", "assets/team-4.jpeg", "alt", "", 1, "img1"], ["href", "https://www.linkedin.com/in/shlok-kadakia/"], ["href", "https://github.com/skadakia01"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Amanah ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Bank");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "progress", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " 45% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Explore the Features:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Smart Savings:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Automated savings plans to help you reach your goals faster.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "24/7 Support:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Our dedicated support team is here to assist you around the clock.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Transactions:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Advanced security measures to keep your money safe.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Read More ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " About ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Welcome to Amanah Bank, where we redefine banking with our customer-centric approach and innovative financial solutions. Here, we believe in providing banking services that empower individuals and businesses to thrive without the burden of interest. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " What Sets Us Apart ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " We operate on the principle of fairness and transparency. Unlike traditional banks, we do not charge interest on loans or credit facilities. Instead, we offer flexible financing options and competitive rates, ensuring that our customers can achieve their financial goals without the worry of accruing interest. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Whether you're saving for the future, financing a home, or starting a business, we're here to help you succeed. Join us today and discover the freedom of banking without interest. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Join us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "section", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "h2", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Syed Saifuddin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Product Manager ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " Vinod Sharma ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " IT Manager ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Hari Hara Sudhan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " System Administrator ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, " Shlok Kadakia ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Marketing Head ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "a", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "fa-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.instagram);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.linkedin);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.github);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.instagram);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.linkedin);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.github);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.instagram);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.linkedin);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.github);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.instagram);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.linkedin);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.github);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
        styles: [".image-container[_ngcontent-%COMP%] {\n  width: 1320px; \n  height: 900px; \n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%; \n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: #0c0c0c;\n  background-color: #ffffff;\n  overflow-x: hidden;\n}\n\n.layout_padding[_ngcontent-%COMP%] {\n  padding: 90px 0;\n}\n\n.layout_padding2[_ngcontent-%COMP%] {\n  padding: 75px 0;\n}\n\n.layout_padding2-top[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n\n.layout_padding2-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 75px;\n}\n\n.layout_padding-top[_ngcontent-%COMP%] {\n  padding-top: 90px;\n}\n\n.layout_padding-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 90px;\n}\n\n.heading_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.heading_container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  font-weight: bold;\n  margin-bottom: 0;\n}\n\n.heading_container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #00bbf0;\n}\n\n.heading_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n\n.heading_container.heading_center[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  color: initial;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none;\n}\n\n\n\n.hero_area[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.hero_area[_ngcontent-%COMP%]   .hero_bg_box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  overflow: hidden;\n  z-index: -1;\n}\n\n.hero_area[_ngcontent-%COMP%]   .hero_bg_box[_ngcontent-%COMP%]   .bg_img_box[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.hero_area[_ngcontent-%COMP%]   .hero_bg_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.sub_page[_ngcontent-%COMP%]   .hero_area[_ngcontent-%COMP%] {\n  min-height: auto;\n  background: linear-gradient(130deg, #231a6f, #0f054c);\n}\n\n.sub_page[_ngcontent-%COMP%]   .hero_area[_ngcontent-%COMP%]   .hero_bg_box[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header_section[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n\n.header_section[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  padding-right: 25px;\n  padding-left: 25px;\n}\n\n.navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  color: #ffffff;\n}\n\n.custom_nav-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 20px;\n  color: #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%], .custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #00bbf0;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .nav_search-btn[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  padding: 0;\n  border: none;\n  color: #ffffff;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .nav_search-btn[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 37px;\n  height: 42px;\n  transition: all 0.3s;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 35px;\n  height: 4px;\n  background-color: #ffffff;\n  margin: 7px 0;\n  transition: all 0.3s;\n  position: relative;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #ffffff;\n  top: -10px;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  top: 10px;\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[aria-expanded=\"true\"][_ngcontent-%COMP%] {\n  transform: rotate(360deg);\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[aria-expanded=\"true\"][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[aria-expanded=\"true\"][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[aria-expanded=\"true\"][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  transform: rotate(90deg);\n  top: 0;\n}\n\n\n\n\n\n.slider_section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 45px 0 145px 0;\n}\n\n.slider_section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.slider_section[_ngcontent-%COMP%]   #customCarousel1[_ngcontent-%COMP%] {\n  width: 100%;\n  position: unset;\n}\n\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%] {\n  color: #00204a;\n}\n\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  color: #ffffff;\n}\n\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fefefe;\n  font-size: 14px;\n}\n\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 -5px;\n  margin-top: 25px;\n}\n\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-align: center;\n  width: 165px;\n}\n\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   .btn1[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: #00bbf0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: all 0.3s;\n  border: none;\n}\n\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   .btn1[_ngcontent-%COMP%]:hover {\n  background-color: #007fa4;\n}\n\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   .btn2[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: #000000;\n  color: #ffffff;\n  border-radius: 0;\n  transition: all 0.3s;\n  border: none;\n}\n\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   .btn2[_ngcontent-%COMP%]:hover {\n  background-color: black;\n}\n\n.slider_section[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  margin: 45px 0;\n}\n\n.slider_section[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -webkit-animation: upDown 5s infinite;\n          animation: upDown 5s infinite;\n}\n\n@-webkit-keyframes upDown {\n  0% {\n    transform: translateY(-45px);\n  }\n  50% {\n    transform: translateY(45px);\n  }\n  100% {\n    transform: translateY(-45px);\n  }\n}\n\n@keyframes upDown {\n  0% {\n    transform: translateY(-45px);\n  }\n  50% {\n    transform: translateY(45px);\n  }\n  100% {\n    transform: translateY(-45px);\n  }\n}\n\n.slider_section[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  position: unset;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n}\n\n.slider_section[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  opacity: 1;\n}\n\n.slider_section[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background-color: #00bbf0;\n}\n\n.service_section[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-top: 45px;\n  background-color: #f8f8f9;\n  padding: 20px;\n  border-radius: 5px;\n}\n\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 125px;\n  min-width: 75px;\n  height: 75px;\n  margin-bottom: 15px;\n}\n\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  transition: all 0.3s;\n}\n\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00204a;\n  font-weight: 600;\n}\n\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n\n.service_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 45px;\n}\n\n.service_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #00bbf0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: all 0.3s;\n  border: none;\n}\n\n.service_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #007fa4;\n}\n\n.about_section[_ngcontent-%COMP%] {\n  background-color: #00204a;\n  color: #ffffff;\n}\n\n.about_section[_ngcontent-%COMP%]   .heading_container[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n\n.about_section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.about_section[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.about_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.about_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.about_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #00bbf0;\n  color: #ffffff;\n  border-radius: 0px;\n  transition: all 0.3s;\n  border: none;\n  margin-top: 15px;\n}\n\n.about_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #007fa4;\n}\n\n.why_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.why_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 120px;\n  height: 120px;\n  min-width: 120px;\n  min-height: 120px;\n  border-radius: 100%;\n  border: 5px solid #00204a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.why_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 55px;\n  height: auto;\n  fill: #00204a;\n}\n\n.why_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.why_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.why_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 45px;\n}\n\n.why_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #00bbf0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: all 0.3s;\n  border: none;\n}\n\n.why_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #007fa4;\n}\n\n\n\n.team_section[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #00204a;\n  color: #ffffff;\n}\n\n.team_section[_ngcontent-%COMP%]   .heading_container[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding: 35px 0 0 0;\n  border-radius: 5px;\n  overflow: hidden;\n  transition: all .1s;\n  margin-top: 45px;\n  background: linear-gradient(to bottom, #002759, #002b64);\n}\n\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  border-radius: 100%;\n  border: 5px solid #ffffff;\n}\n\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%] {\n  margin: 25px 0;\n}\n\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #00bbf0;\n  font-weight: 600;\n  position: relative;\n}\n\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .social_box[_ngcontent-%COMP%] {\n  padding: 10px 45px 20px 45px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .social_box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 22px;\n}\n\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .social_box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n\n\n\n\n\n.client_section[_ngcontent-%COMP%]   .heading_container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n}\n\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  margin-bottom: -50px;\n  margin-left: 25px;\n  position: relative;\n}\n\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .client_id[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .client_id[_ngcontent-%COMP%]   .client_info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .client_id[_ngcontent-%COMP%]   .client_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 15px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);\n  padding: 75px 25px 25px 25px;\n}\n\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00204a;\n  margin-bottom: 10px;\n}\n\n.client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 45px;\n}\n\n.client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%], .client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  background-color: #ffffff;\n  color: #000000;\n  outline: none;\n  bottom: 0px;\n  font-size: 24px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);\n}\n\n.client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%]:hover, .client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%]:hover {\n  color: #00204a;\n}\n\n\n\n.info_section[_ngcontent-%COMP%] {\n  background-color: #00204a;\n  color: #ffffff;\n  padding: 45px 0 15px 0;\n}\n\n.info_section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_col[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_contact[_ngcontent-%COMP%]   .contact_link_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_contact[_ngcontent-%COMP%]   .contact_link_box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: #ffffff;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_contact[_ngcontent-%COMP%]   .contact_link_box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_contact[_ngcontent-%COMP%]   .contact_link_box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_social[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  border-radius: 100%;\n  margin-right: 10px;\n  font-size: 24px;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  color: #ffffff;\n}\n\n.info_section[_ngcontent-%COMP%]   .info_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #ffffff;\n  background-color: transparent;\n  width: 100%;\n  height: 45px;\n  color: #ffffff;\n  outline: none;\n}\n\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #ffffff;\n}\n\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #ffffff;\n}\n\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #ffffff;\n}\n\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: inline-block;\n  padding: 10px 55px;\n  background-color: #00bbf0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: all 0.3s;\n  border: none;\n  margin-top: 15px;\n}\n\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #007fa4;\n}\n\n\n\n.footer_section[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #ffffff;\n  text-align: center;\n}\n\n.footer_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #00204a;\n  padding: 25px 0;\n  margin: 0;\n}\n\n.footer_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiLCJjYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFpQ0E7RUF0QkUsYUFBYSxFQUFBLHlCQUF1QjtFQXdCcEMsYUFBTyxFQUFPLDBCQUFBO0FDL0JoQjs7QUFFQTtFQUNFLFdBQVc7RURpQ2IsWUFBQSxFQUFnQixrQ0FBQTtBQy9CaEI7O0FEbUNBO0VBQ0Usb0NBQWU7RUFDaEIsY0FBQTtFQy9CQyx5QkFBeUI7RURpQzNCLGtCQUFvQjtBQy9CcEI7O0FBRUE7RURpQ0EsZUFBQTtBQy9CQTs7QUFFQTtFRGlDQSxlQUFBO0FDL0JBOztBQUVBO0VEaUNBLGlCQUFBO0FDL0JBOztBQUVBO0VEaUNBLG9CQUFtQjtBQy9CbkI7O0FBRUE7RURxREMsaUJBQUE7QUNuREQ7O0FBRUE7RURnQ0ksb0JBQWlCO0FDOUJyQjs7QUFFQTtFRGlDSyxhQUFBO0VBS0Qsc0JBQWdCO0VBakJwQix1QkFvQmtCO0FDOUJsQjs7QUFFQTtFQUNFLGtCQUFrQjtFRGlDbkIsaUJBQUE7RUFDQSxnQkFBTTtBQUNQOztBQzlCQTtFQUNFLGNBQWM7QURpQ2hCOztBQzlCQTtFRGlDQyxnQkFBQTtFQy9CQyxnQkFBZ0I7QURpQ2xCOztBQzlCQTtFQUdVLG1CQUFtQjtFRGlDN0Isa0JBQWtCO0FBQ2xCOztBQzlCQTs7O0VEMERDLHFCQUFBO0FDdEREOztBQUVBOztFRGlDSSxjQUFPO0FDOUJYOztBQUVBOztFRGlDSSx3QkFBcUI7RUFFZCxnQkFBSTtBQzlCZjs7QURjQSxpQkFNRTs7QUNqQkY7RUQrQk0sa0JBQWdCO0VBQ2pCLGlCQUFBO0VBR0MsYUFBVztFQU9mLHNCQUFXO0FDaENiOztBQUVBO0VBQ0Usa0JBQWtCO0VENEJwQixNQUFBO0VBTU0sT0FBTztFQUNSLFdBQUE7RUMvQkgsWUFBWTtFRDJDYixhQUFBO0VBSEcsdUJBQW1CO0VDL0JiLHFCQUFxQjtFRG9DL0IsZ0JBQ007RUFDRixXQUFXO0FDbkNmOztBQUVBO0VBQ0UsZUFB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 */", "[_ngcontent-%COMP%]:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], main[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n[tabindex=\"-1\"][_ngcontent-%COMP%]:focus {\n  outline: 0 !important;\n}\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nabbr[title][_ngcontent-%COMP%], abbr[data-original-title][_ngcontent-%COMP%] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n  text-decoration-skip-ink: none;\n}\naddress[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], dl[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\nol[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\ndt[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\ndd[_ngcontent-%COMP%] {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\nblockquote[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n}\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -.5em;\n}\na[_ngcontent-%COMP%] {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\na[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):hover, a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\npre[_ngcontent-%COMP%], code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em;\n}\npre[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n}\nfigure[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n}\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  vertical-align: middle;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\ncaption[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\nth[_ngcontent-%COMP%] {\n  text-align: inherit;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%], select[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  overflow: visible;\n}\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none;\n}\nselect[_ngcontent-%COMP%] {\n  word-wrap: normal;\n}\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\nbutton[_ngcontent-%COMP%]:not(:disabled), [type=\"button\"][_ngcontent-%COMP%]:not(:disabled), [type=\"reset\"][_ngcontent-%COMP%]:not(:disabled), [type=\"submit\"][_ngcontent-%COMP%]:not(:disabled) {\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type=\"radio\"][_ngcontent-%COMP%], input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"date\"][_ngcontent-%COMP%], input[type=\"time\"][_ngcontent-%COMP%], input[type=\"datetime-local\"][_ngcontent-%COMP%], input[type=\"month\"][_ngcontent-%COMP%] {\n  -webkit-appearance: listbox;\n}\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  resize: vertical;\n}\nfieldset[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"][_ngcontent-%COMP%] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\noutput[_ngcontent-%COMP%] {\n  display: inline-block;\n}\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n  cursor: pointer;\n}\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\nh2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\nh4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\nh5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\nh6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.lead[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n.display-1[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-2[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-3[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n.display-4[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\nsmall[_ngcontent-%COMP%], .small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\nmark[_ngcontent-%COMP%], .mark[_ngcontent-%COMP%] {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n.list-unstyled[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline-item[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.list-inline-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0.5rem;\n}\n.initialism[_ngcontent-%COMP%] {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n.blockquote[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote-footer[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n.blockquote-footer[_ngcontent-%COMP%]::before {\n  content: \"\\2014\\00A0\";\n}\n.img-fluid[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n.img-thumbnail[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n.figure[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.figure-img[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n.figure-caption[_ngcontent-%COMP%] {\n  font-size: 90%;\n  color: #6c757d;\n}\ncode[_ngcontent-%COMP%] {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word;\n}\na[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\n  color: inherit;\n}\nkbd[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\nkbd[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\npre[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\npre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n.pre-scrollable[_ngcontent-%COMP%] {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1140px;\n  }\n}\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.no-gutters[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0;\n}\n.no-gutters[_ngcontent-%COMP%]    > .col[_ngcontent-%COMP%], .no-gutters[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n.col-auto[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n.col-1[_ngcontent-%COMP%] {\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n.col-2[_ngcontent-%COMP%] {\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n.col-3[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.col-4[_ngcontent-%COMP%] {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n.col-5[_ngcontent-%COMP%] {\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n.col-6[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n.col-7[_ngcontent-%COMP%] {\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n.col-8[_ngcontent-%COMP%] {\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n.col-9[_ngcontent-%COMP%] {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.col-10[_ngcontent-%COMP%] {\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n.col-11[_ngcontent-%COMP%] {\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n.col-12[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n.order-first[_ngcontent-%COMP%] {\n  order: -1;\n}\n.order-last[_ngcontent-%COMP%] {\n  order: 13;\n}\n.order-0[_ngcontent-%COMP%] {\n  order: 0;\n}\n.order-1[_ngcontent-%COMP%] {\n  order: 1;\n}\n.order-2[_ngcontent-%COMP%] {\n  order: 2;\n}\n.order-3[_ngcontent-%COMP%] {\n  order: 3;\n}\n.order-4[_ngcontent-%COMP%] {\n  order: 4;\n}\n.order-5[_ngcontent-%COMP%] {\n  order: 5;\n}\n.order-6[_ngcontent-%COMP%] {\n  order: 6;\n}\n.order-7[_ngcontent-%COMP%] {\n  order: 7;\n}\n.order-8[_ngcontent-%COMP%] {\n  order: 8;\n}\n.order-9[_ngcontent-%COMP%] {\n  order: 9;\n}\n.order-10[_ngcontent-%COMP%] {\n  order: 10;\n}\n.order-11[_ngcontent-%COMP%] {\n  order: 11;\n}\n.order-12[_ngcontent-%COMP%] {\n  order: 12;\n}\n.offset-1[_ngcontent-%COMP%] {\n  margin-left: 8.333333%;\n}\n.offset-2[_ngcontent-%COMP%] {\n  margin-left: 16.666667%;\n}\n.offset-3[_ngcontent-%COMP%] {\n  margin-left: 25%;\n}\n.offset-4[_ngcontent-%COMP%] {\n  margin-left: 33.333333%;\n}\n.offset-5[_ngcontent-%COMP%] {\n  margin-left: 41.666667%;\n}\n.offset-6[_ngcontent-%COMP%] {\n  margin-left: 50%;\n}\n.offset-7[_ngcontent-%COMP%] {\n  margin-left: 58.333333%;\n}\n.offset-8[_ngcontent-%COMP%] {\n  margin-left: 66.666667%;\n}\n.offset-9[_ngcontent-%COMP%] {\n  margin-left: 75%;\n}\n.offset-10[_ngcontent-%COMP%] {\n  margin-left: 83.333333%;\n}\n.offset-11[_ngcontent-%COMP%] {\n  margin-left: 91.666667%;\n}\n@media (min-width: 576px) {\n  .col-sm[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-sm-auto[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-sm-1[_ngcontent-%COMP%] {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2[_ngcontent-%COMP%] {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5[_ngcontent-%COMP%] {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7[_ngcontent-%COMP%] {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8[_ngcontent-%COMP%] {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9[_ngcontent-%COMP%] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10[_ngcontent-%COMP%] {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11[_ngcontent-%COMP%] {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .order-sm-last[_ngcontent-%COMP%] {\n    order: 13;\n  }\n  .order-sm-0[_ngcontent-%COMP%] {\n    order: 0;\n  }\n  .order-sm-1[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .order-sm-2[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .order-sm-3[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .order-sm-4[_ngcontent-%COMP%] {\n    order: 4;\n  }\n  .order-sm-5[_ngcontent-%COMP%] {\n    order: 5;\n  }\n  .order-sm-6[_ngcontent-%COMP%] {\n    order: 6;\n  }\n  .order-sm-7[_ngcontent-%COMP%] {\n    order: 7;\n  }\n  .order-sm-8[_ngcontent-%COMP%] {\n    order: 8;\n  }\n  .order-sm-9[_ngcontent-%COMP%] {\n    order: 9;\n  }\n  .order-sm-10[_ngcontent-%COMP%] {\n    order: 10;\n  }\n  .order-sm-11[_ngcontent-%COMP%] {\n    order: 11;\n  }\n  .order-sm-12[_ngcontent-%COMP%] {\n    order: 12;\n  }\n  .offset-sm-0[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .offset-sm-1[_ngcontent-%COMP%] {\n    margin-left: 8.333333%;\n  }\n  .offset-sm-2[_ngcontent-%COMP%] {\n    margin-left: 16.666667%;\n  }\n  .offset-sm-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n  .offset-sm-4[_ngcontent-%COMP%] {\n    margin-left: 33.333333%;\n  }\n  .offset-sm-5[_ngcontent-%COMP%] {\n    margin-left: 41.666667%;\n  }\n  .offset-sm-6[_ngcontent-%COMP%] {\n    margin-left: 50%;\n  }\n  .offset-sm-7[_ngcontent-%COMP%] {\n    margin-left: 58.333333%;\n  }\n  .offset-sm-8[_ngcontent-%COMP%] {\n    margin-left: 66.666667%;\n  }\n  .offset-sm-9[_ngcontent-%COMP%] {\n    margin-left: 75%;\n  }\n  .offset-sm-10[_ngcontent-%COMP%] {\n    margin-left: 83.333333%;\n  }\n  .offset-sm-11[_ngcontent-%COMP%] {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-md-auto[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-md-1[_ngcontent-%COMP%] {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2[_ngcontent-%COMP%] {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5[_ngcontent-%COMP%] {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7[_ngcontent-%COMP%] {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8[_ngcontent-%COMP%] {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9[_ngcontent-%COMP%] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10[_ngcontent-%COMP%] {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11[_ngcontent-%COMP%] {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .order-md-last[_ngcontent-%COMP%] {\n    order: 13;\n  }\n  .order-md-0[_ngcontent-%COMP%] {\n    order: 0;\n  }\n  .order-md-1[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .order-md-2[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .order-md-3[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .order-md-4[_ngcontent-%COMP%] {\n    order: 4;\n  }\n  .order-md-5[_ngcontent-%COMP%] {\n    order: 5;\n  }\n  .order-md-6[_ngcontent-%COMP%] {\n    order: 6;\n  }\n  .order-md-7[_ngcontent-%COMP%] {\n    order: 7;\n  }\n  .order-md-8[_ngcontent-%COMP%] {\n    order: 8;\n  }\n  .order-md-9[_ngcontent-%COMP%] {\n    order: 9;\n  }\n  .order-md-10[_ngcontent-%COMP%] {\n    order: 10;\n  }\n  .order-md-11[_ngcontent-%COMP%] {\n    order: 11;\n  }\n  .order-md-12[_ngcontent-%COMP%] {\n    order: 12;\n  }\n  .offset-md-0[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .offset-md-1[_ngcontent-%COMP%] {\n    margin-left: 8.333333%;\n  }\n  .offset-md-2[_ngcontent-%COMP%] {\n    margin-left: 16.666667%;\n  }\n  .offset-md-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n  .offset-md-4[_ngcontent-%COMP%] {\n    margin-left: 33.333333%;\n  }\n  .offset-md-5[_ngcontent-%COMP%] {\n    margin-left: 41.666667%;\n  }\n  .offset-md-6[_ngcontent-%COMP%] {\n    margin-left: 50%;\n  }\n  .offset-md-7[_ngcontent-%COMP%] {\n    margin-left: 58.333333%;\n  }\n  .offset-md-8[_ngcontent-%COMP%] {\n    margin-left: 66.666667%;\n  }\n  .offset-md-9[_ngcontent-%COMP%] {\n    margin-left: 75%;\n  }\n  .offset-md-10[_ngcontent-%COMP%] {\n    margin-left: 83.333333%;\n  }\n  .offset-md-11[_ngcontent-%COMP%] {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-lg-auto[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-lg-1[_ngcontent-%COMP%] {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2[_ngcontent-%COMP%] {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5[_ngcontent-%COMP%] {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7[_ngcontent-%COMP%] {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8[_ngcontent-%COMP%] {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9[_ngcontent-%COMP%] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10[_ngcontent-%COMP%] {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11[_ngcontent-%COMP%] {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .order-lg-last[_ngcontent-%COMP%] {\n    order: 13;\n  }\n  .order-lg-0[_ngcontent-%COMP%] {\n    order: 0;\n  }\n  .order-lg-1[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .order-lg-2[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .order-lg-3[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .order-lg-4[_ngcontent-%COMP%] {\n    order: 4;\n  }\n  .order-lg-5[_ngcontent-%COMP%] {\n    order: 5;\n  }\n  .order-lg-6[_ngcontent-%COMP%] {\n    order: 6;\n  }\n  .order-lg-7[_ngcontent-%COMP%] {\n    order: 7;\n  }\n  .order-lg-8[_ngcontent-%COMP%] {\n    order: 8;\n  }\n  .order-lg-9[_ngcontent-%COMP%] {\n    order: 9;\n  }\n  .order-lg-10[_ngcontent-%COMP%] {\n    order: 10;\n  }\n  .order-lg-11[_ngcontent-%COMP%] {\n    order: 11;\n  }\n  .order-lg-12[_ngcontent-%COMP%] {\n    order: 12;\n  }\n  .offset-lg-0[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .offset-lg-1[_ngcontent-%COMP%] {\n    margin-left: 8.333333%;\n  }\n  .offset-lg-2[_ngcontent-%COMP%] {\n    margin-left: 16.666667%;\n  }\n  .offset-lg-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n  .offset-lg-4[_ngcontent-%COMP%] {\n    margin-left: 33.333333%;\n  }\n  .offset-lg-5[_ngcontent-%COMP%] {\n    margin-left: 41.666667%;\n  }\n  .offset-lg-6[_ngcontent-%COMP%] {\n    margin-left: 50%;\n  }\n  .offset-lg-7[_ngcontent-%COMP%] {\n    margin-left: 58.333333%;\n  }\n  .offset-lg-8[_ngcontent-%COMP%] {\n    margin-left: 66.666667%;\n  }\n  .offset-lg-9[_ngcontent-%COMP%] {\n    margin-left: 75%;\n  }\n  .offset-lg-10[_ngcontent-%COMP%] {\n    margin-left: 83.333333%;\n  }\n  .offset-lg-11[_ngcontent-%COMP%] {\n    margin-left: 91.666667%;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .col-xl-auto[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-xl-1[_ngcontent-%COMP%] {\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xl-2[_ngcontent-%COMP%] {\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-3[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4[_ngcontent-%COMP%] {\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xl-5[_ngcontent-%COMP%] {\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xl-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7[_ngcontent-%COMP%] {\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xl-8[_ngcontent-%COMP%] {\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xl-9[_ngcontent-%COMP%] {\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10[_ngcontent-%COMP%] {\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xl-11[_ngcontent-%COMP%] {\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xl-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .order-xl-last[_ngcontent-%COMP%] {\n    order: 13;\n  }\n  .order-xl-0[_ngcontent-%COMP%] {\n    order: 0;\n  }\n  .order-xl-1[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .order-xl-2[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .order-xl-3[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .order-xl-4[_ngcontent-%COMP%] {\n    order: 4;\n  }\n  .order-xl-5[_ngcontent-%COMP%] {\n    order: 5;\n  }\n  .order-xl-6[_ngcontent-%COMP%] {\n    order: 6;\n  }\n  .order-xl-7[_ngcontent-%COMP%] {\n    order: 7;\n  }\n  .order-xl-8[_ngcontent-%COMP%] {\n    order: 8;\n  }\n  .order-xl-9[_ngcontent-%COMP%] {\n    order: 9;\n  }\n  .order-xl-10[_ngcontent-%COMP%] {\n    order: 10;\n  }\n  .order-xl-11[_ngcontent-%COMP%] {\n    order: 11;\n  }\n  .order-xl-12[_ngcontent-%COMP%] {\n    order: 12;\n  }\n  .offset-xl-0[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .offset-xl-1[_ngcontent-%COMP%] {\n    margin-left: 8.333333%;\n  }\n  .offset-xl-2[_ngcontent-%COMP%] {\n    margin-left: 16.666667%;\n  }\n  .offset-xl-3[_ngcontent-%COMP%] {\n    margin-left: 25%;\n  }\n  .offset-xl-4[_ngcontent-%COMP%] {\n    margin-left: 33.333333%;\n  }\n  .offset-xl-5[_ngcontent-%COMP%] {\n    margin-left: 41.666667%;\n  }\n  .offset-xl-6[_ngcontent-%COMP%] {\n    margin-left: 50%;\n  }\n  .offset-xl-7[_ngcontent-%COMP%] {\n    margin-left: 58.333333%;\n  }\n  .offset-xl-8[_ngcontent-%COMP%] {\n    margin-left: 66.666667%;\n  }\n  .offset-xl-9[_ngcontent-%COMP%] {\n    margin-left: 75%;\n  }\n  .offset-xl-10[_ngcontent-%COMP%] {\n    margin-left: 83.333333%;\n  }\n  .offset-xl-11[_ngcontent-%COMP%] {\n    margin-left: 91.666667%;\n  }\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-top: 2px solid #dee2e6;\n}\n.table-sm[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-sm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.3rem;\n}\n.table-bordered[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 2px;\n}\n.table-borderless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-borderless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-borderless[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-borderless[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border: 0;\n}\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-primary[_ngcontent-%COMP%], .table-primary[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-primary[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #b8daff;\n}\n.table-primary[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-primary[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-primary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-primary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-color: #7abaff;\n}\n.table-hover[_ngcontent-%COMP%]   .table-primary[_ngcontent-%COMP%]:hover {\n  background-color: #9fcdff;\n}\n.table-hover[_ngcontent-%COMP%]   .table-primary[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-primary[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #9fcdff;\n}\n.table-secondary[_ngcontent-%COMP%], .table-secondary[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-secondary[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #d6d8db;\n}\n.table-secondary[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-secondary[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-secondary[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-secondary[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-color: #b3b7bb;\n}\n.table-hover[_ngcontent-%COMP%]   .table-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #c8cbcf;\n}\n.table-hover[_ngcontent-%COMP%]   .table-secondary[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-secondary[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #c8cbcf;\n}\n.table-success[_ngcontent-%COMP%], .table-success[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-success[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #c3e6cb;\n}\n.table-success[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-success[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-success[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-success[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-color: #8fd19e;\n}\n.table-hover[_ngcontent-%COMP%]   .table-success[_ngcontent-%COMP%]:hover {\n  background-color: #b1dfbb;\n}\n.table-hover[_ngcontent-%COMP%]   .table-success[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-success[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #b1dfbb;\n}\n.table-info[_ngcontent-%COMP%], .table-info[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-info[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #bee5eb;\n}\n.table-info[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-info[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-info[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-info[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-color: #86cfda;\n}\n.table-hover[_ngcontent-%COMP%]   .table-info[_ngcontent-%COMP%]:hover {\n  background-color: #abdde5;\n}\n.table-hover[_ngcontent-%COMP%]   .table-info[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-info[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #abdde5;\n}\n.table-warning[_ngcontent-%COMP%], .table-warning[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-warning[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #ffeeba;\n}\n.table-warning[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-warning[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-warning[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-warning[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-color: #ffdf7e;\n}\n.table-hover[_ngcontent-%COMP%]   .table-warning[_ngcontent-%COMP%]:hover {\n  background-color: #ffe8a1;\n}\n.table-hover[_ngcontent-%COMP%]   .table-warning[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-warning[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #ffe8a1;\n}\n.table-danger[_ngcontent-%COMP%], .table-danger[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-danger[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #f5c6cb;\n}\n.table-danger[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-danger[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-danger[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-danger[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-color: #ed969e;\n}\n.table-hover[_ngcontent-%COMP%]   .table-danger[_ngcontent-%COMP%]:hover {\n  background-color: #f1b0b7;\n}\n.table-hover[_ngcontent-%COMP%]   .table-danger[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-danger[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #f1b0b7;\n}\n.table-light[_ngcontent-%COMP%], .table-light[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-light[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #fdfdfe;\n}\n.table-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-light[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-light[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-light[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-color: #fbfcfc;\n}\n.table-hover[_ngcontent-%COMP%]   .table-light[_ngcontent-%COMP%]:hover {\n  background-color: #ececf6;\n}\n.table-hover[_ngcontent-%COMP%]   .table-light[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-light[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #ececf6;\n}\n.table-dark[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #c6c8ca;\n}\n.table-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-color: #95999c;\n}\n.table-hover[_ngcontent-%COMP%]   .table-dark[_ngcontent-%COMP%]:hover {\n  background-color: #b9bbbe;\n}\n.table-hover[_ngcontent-%COMP%]   .table-dark[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-dark[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #b9bbbe;\n}\n.table-active[_ngcontent-%COMP%], .table-active[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-active[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover[_ngcontent-%COMP%]   .table-active[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover[_ngcontent-%COMP%]   .table-active[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-active[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55;\n}\n.table[_ngcontent-%COMP%]   .thead-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.table-dark[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #343a40;\n}\n.table-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-color: #454d55;\n}\n.table-dark.table-bordered[_ngcontent-%COMP%] {\n  border: 0;\n}\n.table-dark.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.table-dark.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.075);\n}\n@media (max-width: 575.98px) {\n  .table-responsive-sm[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-sm[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .table-responsive-md[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-md[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .table-responsive-lg[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-lg[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .table-responsive-xl[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-xl[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n.table-responsive[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n  border: 0;\n}\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.form-control[_ngcontent-%COMP%]::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.form-control[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\nselect.form-control[_ngcontent-%COMP%]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.form-control-file[_ngcontent-%COMP%], .form-control-range[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.col-form-label[_ngcontent-%COMP%] {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n.col-form-label-lg[_ngcontent-%COMP%] {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.col-form-label-sm[_ngcontent-%COMP%] {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.form-control-plaintext[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n.form-control-plaintext.form-control-sm[_ngcontent-%COMP%], .form-control-plaintext.form-control-lg[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.form-control-sm[_ngcontent-%COMP%] {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n.form-control-lg[_ngcontent-%COMP%] {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\nselect.form-control[size][_ngcontent-%COMP%], select.form-control[multiple][_ngcontent-%COMP%] {\n  height: auto;\n}\ntextarea.form-control[_ngcontent-%COMP%] {\n  height: auto;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n.form-row[_ngcontent-%COMP%]    > .col[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.form-check[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n.form-check-input[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n.form-check-input[_ngcontent-%COMP%]:disabled    ~ .form-check-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.form-check-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n.form-check-inline[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n.valid-feedback[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n.valid-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem;\n}\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid, .form-control.is-valid[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: center right calc(0.375em + 0.1875rem);\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid:focus, .form-control.is-valid[_ngcontent-%COMP%]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .form-control.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .form-control.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]:valid, textarea.form-control.is-valid[_ngcontent-%COMP%] {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:valid, .custom-select.is-valid[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  padding-right: calc((1em + 0.75rem) * 3 / 4 + 1.75rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:valid:focus, .custom-select.is-valid[_ngcontent-%COMP%]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .custom-select.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .custom-select.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .form-control-file[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-control-file[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .form-control-file.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .form-control-file.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:valid    ~ .form-check-label[_ngcontent-%COMP%], .form-check-input.is-valid[_ngcontent-%COMP%]    ~ .form-check-label[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .form-check-input.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .form-check-input.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid    ~ .custom-control-label[_ngcontent-%COMP%], .custom-control-input.is-valid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #28a745;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .custom-control-input.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .custom-control-input.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #34ce57;\n  background-color: #34ce57;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #28a745;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-valid[_ngcontent-%COMP%]    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #28a745;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .custom-file-input.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .custom-file-input.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid:focus    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-valid[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n.invalid-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid, .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center right calc(0.375em + 0.1875rem);\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid:focus, .form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .form-control.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .form-control.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]:invalid, textarea.form-control.is-invalid[_ngcontent-%COMP%] {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid, .custom-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  padding-right: calc((1em + 0.75rem) * 3 / 4 + 1.75rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid:focus, .custom-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .custom-select.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .custom-select.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .form-control-file[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-control-file[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .form-control-file.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .form-control-file.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:invalid    ~ .form-check-label[_ngcontent-%COMP%], .form-check-input.is-invalid[_ngcontent-%COMP%]    ~ .form-check-label[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .form-check-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .form-check-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid    ~ .custom-control-label[_ngcontent-%COMP%], .custom-control-input.is-invalid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #dc3545;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .custom-control-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .custom-control-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #e4606d;\n  background-color: #e4606d;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #dc3545;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-invalid[_ngcontent-%COMP%]    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .custom-file-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .custom-file-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid:focus    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-invalid[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.form-inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n.form-inline[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  .form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 0 0 auto;\n    flex-flow: row wrap;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-control-plaintext[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  .form-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .form-inline[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n    position: relative;\n    flex-shrink: 0;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n  }\n  .form-inline[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.btn[_ngcontent-%COMP%]:hover {\n  color: #212529;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]:focus, .btn.focus[_ngcontent-%COMP%] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n}\na.btn.disabled[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]:disabled   a.btn[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n.btn-primary[_ngcontent-%COMP%]:focus, .btn-primary.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n}\n.btn-primary.disabled[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n.btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n.btn-secondary[_ngcontent-%COMP%]:focus, .btn-secondary.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n.btn-secondary.disabled[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n.btn-success[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n.btn-success[_ngcontent-%COMP%]:focus, .btn-success.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n.btn-success.disabled[_ngcontent-%COMP%], .btn-success[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-success.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n.btn-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-success.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n.btn-info[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.btn-info[_ngcontent-%COMP%]:focus, .btn-info.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n.btn-info.disabled[_ngcontent-%COMP%], .btn-info[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-info.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n.btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-info.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n.btn-warning[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning[_ngcontent-%COMP%]:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n.btn-warning[_ngcontent-%COMP%]:focus, .btn-warning.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n.btn-warning.disabled[_ngcontent-%COMP%], .btn-warning[_ngcontent-%COMP%]:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-warning.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n.btn-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-warning.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n.btn-danger[_ngcontent-%COMP%]:focus, .btn-danger.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n.btn-danger.disabled[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-danger.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n.btn-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-danger.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n.btn-light[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n.btn-light[_ngcontent-%COMP%]:focus, .btn-light.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n.btn-light.disabled[_ngcontent-%COMP%], .btn-light[_ngcontent-%COMP%]:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-light.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n.btn-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-light.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n.btn-dark[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n.btn-dark[_ngcontent-%COMP%]:focus, .btn-dark.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n.btn-dark.disabled[_ngcontent-%COMP%], .btn-dark[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-dark.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n.btn-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-dark.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #007bff;\n  border-color: #007bff;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:focus, .btn-outline-primary.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-outline-primary.disabled[_ngcontent-%COMP%], .btn-outline-primary[_ngcontent-%COMP%]:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-primary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-primary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:focus, .btn-outline-secondary.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n.btn-outline-secondary.disabled[_ngcontent-%COMP%], .btn-outline-secondary[_ngcontent-%COMP%]:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n.btn-outline-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-secondary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n.btn-outline-success[_ngcontent-%COMP%] {\n  color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success[_ngcontent-%COMP%]:focus, .btn-outline-success.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-outline-success.disabled[_ngcontent-%COMP%], .btn-outline-success[_ngcontent-%COMP%]:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n.btn-outline-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-success.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-outline-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-success.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-outline-info[_ngcontent-%COMP%] {\n  color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info[_ngcontent-%COMP%]:focus, .btn-outline-info.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-outline-info.disabled[_ngcontent-%COMP%], .btn-outline-info[_ngcontent-%COMP%]:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n.btn-outline-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-info.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.btn-outline-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-info.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-outline-warning[_ngcontent-%COMP%] {\n  color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning[_ngcontent-%COMP%]:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning[_ngcontent-%COMP%]:focus, .btn-outline-warning.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-warning.disabled[_ngcontent-%COMP%], .btn-outline-warning[_ngcontent-%COMP%]:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n.btn-outline-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-warning.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n.btn-outline-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-warning.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:focus, .btn-outline-danger.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-danger.disabled[_ngcontent-%COMP%], .btn-outline-danger[_ngcontent-%COMP%]:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-danger.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-danger.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-light[_ngcontent-%COMP%] {\n  color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light[_ngcontent-%COMP%]:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light[_ngcontent-%COMP%]:focus, .btn-outline-light.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-light.disabled[_ngcontent-%COMP%], .btn-outline-light[_ngcontent-%COMP%]:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n.btn-outline-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-light.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n.btn-outline-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-light.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark[_ngcontent-%COMP%]:focus, .btn-outline-dark.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-outline-dark.disabled[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%]:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n.btn-outline-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-dark.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n.btn-outline-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-dark.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-link[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #007bff;\n  text-decoration: none;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n.btn-link[_ngcontent-%COMP%]:focus, .btn-link.focus[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  box-shadow: none;\n}\n.btn-link[_ngcontent-%COMP%]:disabled, .btn-link.disabled[_ngcontent-%COMP%] {\n  color: #6c757d;\n  pointer-events: none;\n}\n.btn-lg[_ngcontent-%COMP%], .btn-group-lg[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n.btn-sm[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n.btn-block[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.btn-block[_ngcontent-%COMP%]    + .btn-block[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\ninput[type=\"submit\"].btn-block[_ngcontent-%COMP%], input[type=\"reset\"].btn-block[_ngcontent-%COMP%], input[type=\"button\"].btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fade[_ngcontent-%COMP%] {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fade[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.fade[_ngcontent-%COMP%]:not(.show) {\n  opacity: 0;\n}\n.collapse[_ngcontent-%COMP%]:not(.show) {\n  display: none;\n}\n.collapsing[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.dropup[_ngcontent-%COMP%], .dropright[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropleft[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-toggle[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n  margin-left: 0;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n.dropdown-menu-left[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0;\n}\n.dropdown-menu-right[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n}\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left[_ngcontent-%COMP%] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-sm-right[_ngcontent-%COMP%] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 768px) {\n  .dropdown-menu-md-left[_ngcontent-%COMP%] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-md-right[_ngcontent-%COMP%] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left[_ngcontent-%COMP%] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-lg-right[_ngcontent-%COMP%] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left[_ngcontent-%COMP%] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-xl-right[_ngcontent-%COMP%] {\n    right: 0;\n    left: auto;\n  }\n}\n.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n  margin-left: 0;\n}\n.dropright[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n  margin-left: 0;\n}\n.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  vertical-align: 0;\n}\n.dropleft[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n  margin-left: 0;\n}\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::before {\n  vertical-align: 0;\n}\n.dropdown-menu[x-placement^=\"top\"][_ngcontent-%COMP%], .dropdown-menu[x-placement^=\"right\"][_ngcontent-%COMP%], .dropdown-menu[x-placement^=\"bottom\"][_ngcontent-%COMP%], .dropdown-menu[x-placement^=\"left\"][_ngcontent-%COMP%] {\n  right: auto;\n  bottom: auto;\n}\n.dropdown-divider[_ngcontent-%COMP%] {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n.dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: transparent;\n}\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.dropdown-header[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n.dropdown-item-text[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529;\n}\n.btn-group[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n}\n.btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:hover, .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:hover {\n  z-index: 1;\n}\n.btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:focus, .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:active, .btn-group[_ngcontent-%COMP%]    > .btn.active[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:focus, .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:active, .btn-group-vertical[_ngcontent-%COMP%]    > .btn.active[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.btn-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  width: auto;\n}\n.btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:not(:first-child), .btn-group[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: -1px;\n}\n.btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle), .btn-group[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:not(:last-child)    > .btn[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:not(:first-child), .btn-group[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:not(:first-child)    > .btn[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.dropdown-toggle-split[_ngcontent-%COMP%] {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split[_ngcontent-%COMP%]::after, .dropup[_ngcontent-%COMP%]   .dropdown-toggle-split[_ngcontent-%COMP%]::after, .dropright[_ngcontent-%COMP%]   .dropdown-toggle-split[_ngcontent-%COMP%]::after {\n  margin-left: 0;\n}\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle-split[_ngcontent-%COMP%]::before {\n  margin-right: 0;\n}\n.btn-sm[_ngcontent-%COMP%]    + .dropdown-toggle-split[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]    + .dropdown-toggle-split[_ngcontent-%COMP%] {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n.btn-lg[_ngcontent-%COMP%]    + .dropdown-toggle-split[_ngcontent-%COMP%], .btn-group-lg[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]    + .dropdown-toggle-split[_ngcontent-%COMP%] {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n.btn-group-vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:not(:first-child), .btn-group-vertical[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: -1px;\n}\n.btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle), .btn-group-vertical[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:not(:last-child)    > .btn[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:not(:first-child), .btn-group-vertical[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:not(:first-child)    > .btn[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-toggle[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .btn-group-toggle[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.btn-group-toggle[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%], .btn-group-toggle[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%], .btn-group-toggle[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%], .btn-group-toggle[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .form-control-plaintext[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]    + .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]    + .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]    + .custom-file[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .form-control-plaintext[_ngcontent-%COMP%]    + .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .form-control-plaintext[_ngcontent-%COMP%]    + .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .form-control-plaintext[_ngcontent-%COMP%]    + .custom-file[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]    + .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]    + .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]    + .custom-file[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]    + .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]    + .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]    + .custom-file[_ngcontent-%COMP%] {\n  margin-left: -1px;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:focus, .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]:focus, .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%] {\n  z-index: 3;\n}\n.input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:focus {\n  z-index: 4;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:not(:last-child), .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:not(:first-child), .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:not(:last-child)   .custom-file-label[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:not(:last-child)   .custom-file-label[_ngcontent-%COMP%]::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:not(:first-child)   .custom-file-label[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-prepend[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%] {\n  display: flex;\n}\n.input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus, .input-group-append[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  z-index: 3;\n}\n.input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-left: -1px;\n}\n.input-group-prepend[_ngcontent-%COMP%] {\n  margin-right: -1px;\n}\n.input-group-append[_ngcontent-%COMP%] {\n  margin-left: -1px;\n}\n.input-group-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.input-group-text[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.input-group-lg[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:not(textarea), .input-group-lg[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%] {\n  height: calc(1.5em + 1rem + 2px);\n}\n.input-group-lg[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n.input-group-sm[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:not(textarea), .input-group-sm[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%] {\n  height: calc(1.5em + 0.5rem + 2px);\n}\n.input-group-sm[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n.input-group-lg[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%] {\n  padding-right: 1.75rem;\n}\n.input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:not(:last-child)    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:not(:last-child)    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:last-child    > .btn[_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle), .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:last-child    > .input-group-text[_ngcontent-%COMP%]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:not(:first-child)    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:not(:first-child)    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:first-child    > .btn[_ngcontent-%COMP%]:not(:first-child), .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:first-child    > .input-group-text[_ngcontent-%COMP%]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.custom-control[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n}\n.custom-control-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-right: 1rem;\n}\n.custom-control-input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n.custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  color: #fff;\n  border-color: #007bff;\n  background-color: #007bff;\n}\n.custom-control-input[_ngcontent-%COMP%]:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-control-input[_ngcontent-%COMP%]:focus:not(:checked)    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #80bdff;\n}\n.custom-control-input[_ngcontent-%COMP%]:not(:disabled):active    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  color: #fff;\n  background-color: #b3d7ff;\n  border-color: #b3d7ff;\n}\n.custom-control-input[_ngcontent-%COMP%]:disabled    ~ .custom-control-label[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.custom-control-input[_ngcontent-%COMP%]:disabled    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #e9ecef;\n}\n.custom-control-label[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n}\n.custom-control-label[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: \"\";\n  background-color: #fff;\n  border: #adb5bd solid 1px;\n}\n.custom-control-label[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background: no-repeat 50% / 50% 50%;\n}\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  border-radius: 0.25rem;\n}\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\");\n}\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:indeterminate    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  border-color: #007bff;\n  background-color: #007bff;\n}\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:indeterminate    ~ .custom-control-label[_ngcontent-%COMP%]::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\");\n}\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:disabled:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:disabled:indeterminate    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n.custom-radio[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  border-radius: 50%;\n}\n.custom-radio[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.custom-radio[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:disabled:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n.custom-switch[_ngcontent-%COMP%] {\n  padding-left: 2.25rem;\n}\n.custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  left: -2.25rem;\n  width: 1.75rem;\n  pointer-events: all;\n  border-radius: 0.5rem;\n}\n.custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {\n  top: calc(0.25rem + 2px);\n  left: calc(-2.25rem + 2px);\n  width: calc(1rem - 4px);\n  height: calc(1rem - 4px);\n  background-color: #adb5bd;\n  border-radius: 0.5rem;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {\n    transition: none;\n  }\n}\n.custom-switch[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n  transform: translateX(0.75rem);\n}\n.custom-switch[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:disabled:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n.custom-select[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.custom-select[_ngcontent-%COMP%]:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-select[_ngcontent-%COMP%]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n.custom-select[multiple][_ngcontent-%COMP%], .custom-select[size][_ngcontent-%COMP%]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.custom-select[_ngcontent-%COMP%]:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n.custom-select[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n.custom-select-sm[_ngcontent-%COMP%] {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n}\n.custom-select-lg[_ngcontent-%COMP%] {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n}\n.custom-file[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0;\n}\n.custom-file-input[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n.custom-file-input[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-file-input[_ngcontent-%COMP%]:disabled    ~ .custom-file-label[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n}\n.custom-file-input[_ngcontent-%COMP%]:lang(en)    ~ .custom-file-label[_ngcontent-%COMP%]::after {\n  content: \"Browse\";\n}\n.custom-file-input[_ngcontent-%COMP%]    ~ .custom-file-label[data-browse][_ngcontent-%COMP%]::after {\n  content: attr(data-browse);\n}\n.custom-file-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.custom-file-label[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(1.5em + 0.75rem);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: inherit;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n.custom-range[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(1rem + 0.4rem);\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.custom-range[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.custom-range[_ngcontent-%COMP%]:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range[_ngcontent-%COMP%]:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range[_ngcontent-%COMP%]:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range[_ngcontent-%COMP%]::-moz-focus-outer {\n  border: 0;\n}\n.custom-range[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-range[_ngcontent-%COMP%]::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.custom-range[_ngcontent-%COMP%]::-webkit-slider-thumb:active {\n  background-color: #b3d7ff;\n}\n.custom-range[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.custom-range[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-range[_ngcontent-%COMP%]::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n.custom-range[_ngcontent-%COMP%]::-moz-range-thumb:active {\n  background-color: #b3d7ff;\n}\n.custom-range[_ngcontent-%COMP%]::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.custom-range[_ngcontent-%COMP%]::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0.2rem;\n  margin-left: 0.2rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-range[_ngcontent-%COMP%]::-ms-thumb {\n    -ms-transition: none;\n    transition: none;\n  }\n}\n.custom-range[_ngcontent-%COMP%]::-ms-thumb:active {\n  background-color: #b3d7ff;\n}\n.custom-range[_ngcontent-%COMP%]::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem;\n}\n.custom-range[_ngcontent-%COMP%]::-ms-fill-lower {\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n.custom-range[_ngcontent-%COMP%]::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n.custom-range[_ngcontent-%COMP%]:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n.custom-range[_ngcontent-%COMP%]:disabled::-webkit-slider-runnable-track {\n  cursor: default;\n}\n.custom-range[_ngcontent-%COMP%]:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n.custom-range[_ngcontent-%COMP%]:disabled::-moz-range-track {\n  cursor: default;\n}\n.custom-range[_ngcontent-%COMP%]:disabled::-ms-thumb {\n  background-color: #adb5bd;\n}\n.custom-control-label[_ngcontent-%COMP%]::before, .custom-file-label[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .custom-control-label[_ngcontent-%COMP%]::before, .custom-file-label[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n.nav-link.disabled[_ngcontent-%COMP%] {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n.nav-tabs[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%] {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n.nav-tabs[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n}\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n}\n.nav-fill[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center;\n}\n.nav-justified[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n.tab-content[_ngcontent-%COMP%]    > .tab-pane[_ngcontent-%COMP%] {\n  display: none;\n}\n.tab-content[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%] {\n  display: block;\n}\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n.navbar[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n.navbar-brand[_ngcontent-%COMP%]:hover, .navbar-brand[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: static;\n  float: none;\n}\n.navbar-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.navbar-collapse[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n.navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.navbar-toggler[_ngcontent-%COMP%]:hover, .navbar-toggler[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n@media (max-width: 575.98px) {\n  .navbar-expand-sm[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-sm[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 576px) {\n  .navbar-expand-sm[_ngcontent-%COMP%] {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-sm[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-sm[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 767.98px) {\n  .navbar-expand-md[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-md[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-expand-md[_ngcontent-%COMP%] {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-md[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-md[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-md[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 991.98px) {\n  .navbar-expand-lg[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-lg[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg[_ngcontent-%COMP%] {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-lg[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-lg[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-xl[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .navbar-expand-xl[_ngcontent-%COMP%] {\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .navbar-expand-xl[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  .navbar-expand-xl[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xl[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-xl[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-xl[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navbar-expand[_ngcontent-%COMP%] {\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n}\n.navbar-expand[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n.navbar-expand[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.navbar-expand[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.navbar-expand[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n.navbar-expand[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n.navbar-expand[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-basis: auto;\n}\n.navbar-expand[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, .navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  color: rgba(0, 0, 0, 0.7);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.3);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-light[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-light[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, .navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus {\n  color: #fff;\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.25);\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-dark[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #fff;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n.card[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card[_ngcontent-%COMP%]    > .list-group[_ngcontent-%COMP%]:first-child   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.card[_ngcontent-%COMP%]    > .list-group[_ngcontent-%COMP%]:last-child   .list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.card-subtitle[_ngcontent-%COMP%] {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n.card-text[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.card-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.card-link[_ngcontent-%COMP%]    + .card-link[_ngcontent-%COMP%] {\n  margin-left: 1.25rem;\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header[_ngcontent-%COMP%]:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n.card-header[_ngcontent-%COMP%]    + .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: 0;\n}\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n.card-header-tabs[_ngcontent-%COMP%] {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n.card-header-pills[_ngcontent-%COMP%] {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n.card-img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n.card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px);\n}\n.card-img-top[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n.card-img-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n.card-deck[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.card-deck[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-deck[_ngcontent-%COMP%] {\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n  .card-deck[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    display: flex;\n    flex: 1 0 0%;\n    flex-direction: column;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n  }\n}\n.card-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n@media (min-width: 576px) {\n  .card-group[_ngcontent-%COMP%] {\n    flex-flow: row wrap;\n  }\n  .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]    + .card[_ngcontent-%COMP%] {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:last-child)   .card-img-top[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:last-child)   .card-header[_ngcontent-%COMP%] {\n    border-top-right-radius: 0;\n  }\n  .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:last-child)   .card-img-bottom[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:last-child)   .card-footer[_ngcontent-%COMP%] {\n    border-bottom-right-radius: 0;\n  }\n  .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-child)   .card-img-top[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-child)   .card-header[_ngcontent-%COMP%] {\n    border-top-left-radius: 0;\n  }\n  .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-child)   .card-img-bottom[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-child)   .card-footer[_ngcontent-%COMP%] {\n    border-bottom-left-radius: 0;\n  }\n}\n.card-columns[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n@media (min-width: 576px) {\n  .card-columns[_ngcontent-%COMP%] {\n    -moz-column-count: 3;\n    column-count: 3;\n    -moz-column-gap: 1.25rem;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1;\n  }\n  .card-columns[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n  }\n}\n.accordion[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.accordion[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-of-type)   .card-header[_ngcontent-%COMP%]:first-child {\n  border-radius: 0;\n}\n.accordion[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type) {\n  border-bottom: 0;\n  border-radius: 0;\n}\n.accordion[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:first-of-type {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.accordion[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:last-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.accordion[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: \"/\";\n}\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:hover::before {\n  text-decoration: underline;\n}\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:hover::before {\n  text-decoration: none;\n}\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n.page-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n.page-link[_ngcontent-%COMP%]:hover {\n  z-index: 2;\n  color: #0056b3;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n.page-link[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.page-item[_ngcontent-%COMP%]:first-child   .page-link[_ngcontent-%COMP%] {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.page-item[_ngcontent-%COMP%]:last-child   .page-link[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  z-index: 1;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n.pagination-lg[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.pagination-lg[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:first-child   .page-link[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.pagination-lg[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:last-child   .page-link[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n.pagination-sm[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.pagination-sm[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:first-child   .page-link[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n.pagination-sm[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:last-child   .page-link[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .badge[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\na.badge[_ngcontent-%COMP%]:hover, a.badge[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n.badge[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: relative;\n  top: -1px;\n}\n.badge-pill[_ngcontent-%COMP%] {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.badge-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #007bff;\n}\na.badge-primary[_ngcontent-%COMP%]:hover, a.badge-primary[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #0062cc;\n}\na.badge-primary[_ngcontent-%COMP%]:focus, a.badge-primary.focus[_ngcontent-%COMP%] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.badge-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #6c757d;\n}\na.badge-secondary[_ngcontent-%COMP%]:hover, a.badge-secondary[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #545b62;\n}\na.badge-secondary[_ngcontent-%COMP%]:focus, a.badge-secondary.focus[_ngcontent-%COMP%] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n.badge-success[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #28a745;\n}\na.badge-success[_ngcontent-%COMP%]:hover, a.badge-success[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #1e7e34;\n}\na.badge-success[_ngcontent-%COMP%]:focus, a.badge-success.focus[_ngcontent-%COMP%] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.badge-info[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #17a2b8;\n}\na.badge-info[_ngcontent-%COMP%]:hover, a.badge-info[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #117a8b;\n}\na.badge-info[_ngcontent-%COMP%]:focus, a.badge-info.focus[_ngcontent-%COMP%] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.badge-warning[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #ffc107;\n}\na.badge-warning[_ngcontent-%COMP%]:hover, a.badge-warning[_ngcontent-%COMP%]:focus {\n  color: #212529;\n  background-color: #d39e00;\n}\na.badge-warning[_ngcontent-%COMP%]:focus, a.badge-warning.focus[_ngcontent-%COMP%] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.badge-danger[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #dc3545;\n}\na.badge-danger[_ngcontent-%COMP%]:hover, a.badge-danger[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #bd2130;\n}\na.badge-danger[_ngcontent-%COMP%]:focus, a.badge-danger.focus[_ngcontent-%COMP%] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.badge-light[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #f8f9fa;\n}\na.badge-light[_ngcontent-%COMP%]:hover, a.badge-light[_ngcontent-%COMP%]:focus {\n  color: #212529;\n  background-color: #dae0e5;\n}\na.badge-light[_ngcontent-%COMP%]:focus, a.badge-light.focus[_ngcontent-%COMP%] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.badge-dark[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #343a40;\n}\na.badge-dark[_ngcontent-%COMP%]:hover, a.badge-dark[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #1d2124;\n}\na.badge-dark[_ngcontent-%COMP%]:focus, a.badge-dark.focus[_ngcontent-%COMP%] {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.jumbotron[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n@media (min-width: 576px) {\n  .jumbotron[_ngcontent-%COMP%] {\n    padding: 4rem 2rem;\n  }\n}\n.jumbotron-fluid[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.alert-heading[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.alert-link[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.alert-dismissible[_ngcontent-%COMP%] {\n  padding-right: 4rem;\n}\n.alert-dismissible[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n.alert-primary[_ngcontent-%COMP%] {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n.alert-primary[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #9fcdff;\n}\n.alert-primary[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #002752;\n}\n.alert-secondary[_ngcontent-%COMP%] {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n.alert-secondary[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #c8cbcf;\n}\n.alert-secondary[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #202326;\n}\n.alert-success[_ngcontent-%COMP%] {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.alert-success[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #b1dfbb;\n}\n.alert-success[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #0b2e13;\n}\n.alert-info[_ngcontent-%COMP%] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n.alert-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #abdde5;\n}\n.alert-info[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #062c33;\n}\n.alert-warning[_ngcontent-%COMP%] {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.alert-warning[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #ffe8a1;\n}\n.alert-warning[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #533f03;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n.alert-danger[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #f1b0b7;\n}\n.alert-danger[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #491217;\n}\n.alert-light[_ngcontent-%COMP%] {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #ececf6;\n}\n.alert-light[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #686868;\n}\n.alert-dark[_ngcontent-%COMP%] {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n.alert-dark[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #b9bbbe;\n}\n.alert-dark[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #040505;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress[_ngcontent-%COMP%] {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #007bff;\n  transition: width 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.progress-bar-striped[_ngcontent-%COMP%] {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n.progress-bar-animated[_ngcontent-%COMP%] {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n  animation: progress-bar-stripes 1s linear infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated[_ngcontent-%COMP%] {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.media[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.media-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n}\n.list-group-item-action[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-action[_ngcontent-%COMP%]:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n.list-group-item-action[_ngcontent-%COMP%]:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.list-group-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.list-group-item.disabled[_ngcontent-%COMP%], .list-group-item[_ngcontent-%COMP%]:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n}\n.list-group-item.active[_ngcontent-%COMP%] {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.list-group-horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.list-group-horizontal[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  margin-right: -1px;\n  margin-bottom: 0;\n}\n.list-group-horizontal[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n}\n.list-group-horizontal[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n}\n@media (min-width: 576px) {\n  .list-group-horizontal-sm[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .list-group-horizontal-sm[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n    margin-right: -1px;\n    margin-bottom: 0;\n  }\n  .list-group-horizontal-sm[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:last-child {\n    margin-right: 0;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n}\n@media (min-width: 768px) {\n  .list-group-horizontal-md[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .list-group-horizontal-md[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n    margin-right: -1px;\n    margin-bottom: 0;\n  }\n  .list-group-horizontal-md[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:last-child {\n    margin-right: 0;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n}\n@media (min-width: 992px) {\n  .list-group-horizontal-lg[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .list-group-horizontal-lg[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n    margin-right: -1px;\n    margin-bottom: 0;\n  }\n  .list-group-horizontal-lg[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:last-child {\n    margin-right: 0;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xl[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n    margin-right: -1px;\n    margin-bottom: 0;\n  }\n  .list-group-horizontal-xl[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:last-child {\n    margin-right: 0;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n}\n.list-group-flush[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.list-group-flush[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: -1px;\n}\n.list-group-flush[_ngcontent-%COMP%]:first-child   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: 0;\n}\n.list-group-flush[_ngcontent-%COMP%]:last-child   .list-group-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  border-bottom: 0;\n}\n.list-group-item-primary[_ngcontent-%COMP%] {\n  color: #004085;\n  background-color: #b8daff;\n}\n.list-group-item-primary.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-primary.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #004085;\n  background-color: #9fcdff;\n}\n.list-group-item-primary.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n.list-group-item-secondary[_ngcontent-%COMP%] {\n  color: #383d41;\n  background-color: #d6d8db;\n}\n.list-group-item-secondary.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-secondary.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #383d41;\n  background-color: #c8cbcf;\n}\n.list-group-item-secondary.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41;\n}\n.list-group-item-success[_ngcontent-%COMP%] {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n.list-group-item-success.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-success.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #155724;\n  background-color: #b1dfbb;\n}\n.list-group-item-success.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n.list-group-item-info[_ngcontent-%COMP%] {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n.list-group-item-info.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-info.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n.list-group-item-info.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n.list-group-item-warning[_ngcontent-%COMP%] {\n  color: #856404;\n  background-color: #ffeeba;\n}\n.list-group-item-warning.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-warning.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #856404;\n  background-color: #ffe8a1;\n}\n.list-group-item-warning.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n.list-group-item-danger[_ngcontent-%COMP%] {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\n.list-group-item-danger.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-danger.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\n.list-group-item-danger.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n.list-group-item-light[_ngcontent-%COMP%] {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n.list-group-item-light.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-light.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n.list-group-item-light.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n.list-group-item-dark[_ngcontent-%COMP%] {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n.list-group-item-dark.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-dark.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n.list-group-item-dark.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n.close[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n.close[_ngcontent-%COMP%]:hover {\n  color: #000;\n  text-decoration: none;\n}\n.close[_ngcontent-%COMP%]:not(:disabled):not(.disabled):hover, .close[_ngcontent-%COMP%]:not(:disabled):not(.disabled):focus {\n  opacity: .75;\n}\nbutton.close[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\na.close.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.toast[_ngcontent-%COMP%] {\n  max-width: 350px;\n  overflow: hidden;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  opacity: 0;\n  border-radius: 0.25rem;\n}\n.toast[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.toast.showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.toast.show[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n}\n.toast.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.toast-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.toast-body[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.modal-open[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.modal-open[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n.modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transform: none;\n}\n.modal-dialog-scrollable[_ngcontent-%COMP%] {\n  display: flex;\n  max-height: calc(100% - 1rem);\n}\n.modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 1rem);\n  overflow: hidden;\n}\n.modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%], .modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.modal-dialog-centered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n.modal-dialog-centered[_ngcontent-%COMP%]::before {\n  display: block;\n  height: calc(100vh - 1rem);\n  content: \"\";\n}\n.modal-dialog-centered.modal-dialog-scrollable[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n.modal-dialog-centered.modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-height: none;\n}\n.modal-dialog-centered.modal-dialog-scrollable[_ngcontent-%COMP%]::before {\n  content: none;\n}\n.modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.modal-backdrop.fade[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n.modal-body[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n.modal-footer[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: .25rem;\n}\n.modal-footer[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: .25rem;\n}\n.modal-scrollbar-measure[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n  .modal-dialog-scrollable[_ngcontent-%COMP%] {\n    max-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-scrollable[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 3.5rem);\n  }\n  .modal-dialog-centered[_ngcontent-%COMP%] {\n    min-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-centered[_ngcontent-%COMP%]::before {\n    height: calc(100vh - 3.5rem);\n  }\n  .modal-sm[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg[_ngcontent-%COMP%], .modal-xl[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n}\n@media (min-width: 1200px) {\n  .modal-xl[_ngcontent-%COMP%] {\n    max-width: 1140px;\n  }\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n.tooltip[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n.tooltip[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-tooltip-top[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"top\"][_ngcontent-%COMP%] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"top\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.bs-tooltip-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-tooltip-auto[x-placement^=\"top\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n.bs-tooltip-right[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"right\"][_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"right\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-tooltip-auto[x-placement^=\"right\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n.bs-tooltip-bottom[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%] {\n  padding: 0.4rem 0;\n}\n.bs-tooltip-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  top: 0;\n}\n.bs-tooltip-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-tooltip-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n.bs-tooltip-left[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"left\"][_ngcontent-%COMP%] {\n  padding: 0 0.4rem;\n}\n.bs-tooltip-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"left\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n.bs-tooltip-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-tooltip-auto[x-placement^=\"left\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n.tooltip-inner[_ngcontent-%COMP%] {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n.popover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n.popover[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n  margin: 0 0.3rem;\n}\n.popover[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .popover[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n.bs-popover-top[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"top\"][_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.bs-popover-top[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"top\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%] {\n  bottom: calc((0.5rem + 1px) * -1);\n}\n.bs-popover-top[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"top\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-top[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"top\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff;\n}\n.bs-popover-right[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"right\"][_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.bs-popover-right[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"right\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%] {\n  left: calc((0.5rem + 1px) * -1);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n.bs-popover-right[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"right\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-right[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"right\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff;\n}\n.bs-popover-bottom[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.bs-popover-bottom[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%] {\n  top: calc((0.5rem + 1px) * -1);\n}\n.bs-popover-bottom[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-bottom[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff;\n}\n.bs-popover-bottom[_ngcontent-%COMP%]   .popover-header[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .popover-header[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: \"\";\n  border-bottom: 1px solid #f7f7f7;\n}\n.bs-popover-left[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"left\"][_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.bs-popover-left[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"left\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%] {\n  right: calc((0.5rem + 1px) * -1);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n.bs-popover-left[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"left\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n.bs-popover-left[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"left\"][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff;\n}\n.popover-header[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n.popover-header[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.popover-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  color: #212529;\n}\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n}\n.carousel.pointer-event[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n.carousel-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.carousel-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.carousel-item.active[_ngcontent-%COMP%], .carousel-item-next[_ngcontent-%COMP%], .carousel-item-prev[_ngcontent-%COMP%] {\n  display: block;\n}\n.carousel-item-next[_ngcontent-%COMP%]:not(.carousel-item-left), .active.carousel-item-right[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.carousel-item-prev[_ngcontent-%COMP%]:not(.carousel-item-right), .active.carousel-item-left[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.carousel-fade[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade[_ngcontent-%COMP%]   .carousel-item.active[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .carousel-item-next.carousel-item-left[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .carousel-item-prev.carousel-item-right[_ngcontent-%COMP%] {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade[_ngcontent-%COMP%]   .active.carousel-item-left[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .active.carousel-item-right[_ngcontent-%COMP%] {\n  z-index: 0;\n  opacity: 0;\n  transition: 0s 0.6s opacity;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade[_ngcontent-%COMP%]   .active.carousel-item-left[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .active.carousel-item-right[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.carousel-control-prev[_ngcontent-%COMP%]:hover, .carousel-control-prev[_ngcontent-%COMP%]:focus, .carousel-control-next[_ngcontent-%COMP%]:hover, .carousel-control-next[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n.carousel-control-prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n.carousel-control-next[_ngcontent-%COMP%] {\n  right: 0;\n}\n.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: no-repeat 50% / 100% 100%;\n}\n.carousel-control-prev-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\");\n}\n.carousel-control-next-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\");\n}\n.carousel-indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n.carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: .5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.carousel-indicators[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.carousel-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n@-webkit-keyframes spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinner-border[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: spinner-border .75s linear infinite;\n  animation: spinner-border .75s linear infinite;\n}\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n@-webkit-keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.spinner-grow[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: spinner-grow .75s linear infinite;\n  animation: spinner-grow .75s linear infinite;\n}\n.spinner-grow-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.align-baseline[_ngcontent-%COMP%] {\n  vertical-align: baseline !important;\n}\n.align-top[_ngcontent-%COMP%] {\n  vertical-align: top !important;\n}\n.align-middle[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n}\n.align-bottom[_ngcontent-%COMP%] {\n  vertical-align: bottom !important;\n}\n.align-text-bottom[_ngcontent-%COMP%] {\n  vertical-align: text-bottom !important;\n}\n.align-text-top[_ngcontent-%COMP%] {\n  vertical-align: text-top !important;\n}\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #007bff !important;\n}\na.bg-primary[_ngcontent-%COMP%]:hover, a.bg-primary[_ngcontent-%COMP%]:focus, button.bg-primary[_ngcontent-%COMP%]:hover, button.bg-primary[_ngcontent-%COMP%]:focus {\n  background-color: #0062cc !important;\n}\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d !important;\n}\na.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus {\n  background-color: #545b62 !important;\n}\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #28a745 !important;\n}\na.bg-success[_ngcontent-%COMP%]:hover, a.bg-success[_ngcontent-%COMP%]:focus, button.bg-success[_ngcontent-%COMP%]:hover, button.bg-success[_ngcontent-%COMP%]:focus {\n  background-color: #1e7e34 !important;\n}\n.bg-info[_ngcontent-%COMP%] {\n  background-color: #17a2b8 !important;\n}\na.bg-info[_ngcontent-%COMP%]:hover, a.bg-info[_ngcontent-%COMP%]:focus, button.bg-info[_ngcontent-%COMP%]:hover, button.bg-info[_ngcontent-%COMP%]:focus {\n  background-color: #117a8b !important;\n}\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107 !important;\n}\na.bg-warning[_ngcontent-%COMP%]:hover, a.bg-warning[_ngcontent-%COMP%]:focus, button.bg-warning[_ngcontent-%COMP%]:hover, button.bg-warning[_ngcontent-%COMP%]:focus {\n  background-color: #d39e00 !important;\n}\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545 !important;\n}\na.bg-danger[_ngcontent-%COMP%]:hover, a.bg-danger[_ngcontent-%COMP%]:focus, button.bg-danger[_ngcontent-%COMP%]:hover, button.bg-danger[_ngcontent-%COMP%]:focus {\n  background-color: #bd2130 !important;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\na.bg-light[_ngcontent-%COMP%]:hover, a.bg-light[_ngcontent-%COMP%]:focus, button.bg-light[_ngcontent-%COMP%]:hover, button.bg-light[_ngcontent-%COMP%]:focus {\n  background-color: #dae0e5 !important;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #343a40 !important;\n}\na.bg-dark[_ngcontent-%COMP%]:hover, a.bg-dark[_ngcontent-%COMP%]:focus, button.bg-dark[_ngcontent-%COMP%]:hover, button.bg-dark[_ngcontent-%COMP%]:focus {\n  background-color: #1d2124 !important;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n.bg-transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6 !important;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6 !important;\n}\n.border-right[_ngcontent-%COMP%] {\n  border-right: 1px solid #dee2e6 !important;\n}\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n.border-left[_ngcontent-%COMP%] {\n  border-left: 1px solid #dee2e6 !important;\n}\n.border-0[_ngcontent-%COMP%] {\n  border: 0 !important;\n}\n.border-top-0[_ngcontent-%COMP%] {\n  border-top: 0 !important;\n}\n.border-right-0[_ngcontent-%COMP%] {\n  border-right: 0 !important;\n}\n.border-bottom-0[_ngcontent-%COMP%] {\n  border-bottom: 0 !important;\n}\n.border-left-0[_ngcontent-%COMP%] {\n  border-left: 0 !important;\n}\n.border-primary[_ngcontent-%COMP%] {\n  border-color: #007bff !important;\n}\n.border-secondary[_ngcontent-%COMP%] {\n  border-color: #6c757d !important;\n}\n.border-success[_ngcontent-%COMP%] {\n  border-color: #28a745 !important;\n}\n.border-info[_ngcontent-%COMP%] {\n  border-color: #17a2b8 !important;\n}\n.border-warning[_ngcontent-%COMP%] {\n  border-color: #ffc107 !important;\n}\n.border-danger[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n}\n.border-light[_ngcontent-%COMP%] {\n  border-color: #f8f9fa !important;\n}\n.border-dark[_ngcontent-%COMP%] {\n  border-color: #343a40 !important;\n}\n.border-white[_ngcontent-%COMP%] {\n  border-color: #fff !important;\n}\n.rounded-sm[_ngcontent-%COMP%] {\n  border-radius: 0.2rem !important;\n}\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.25rem !important;\n}\n.rounded-top[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n.rounded-right[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n.rounded-bottom[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-left[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.3rem !important;\n}\n.rounded-circle[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n}\n.rounded-pill[_ngcontent-%COMP%] {\n  border-radius: 50rem !important;\n}\n.rounded-0[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\n.clearfix[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.d-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.d-inline[_ngcontent-%COMP%] {\n  display: inline !important;\n}\n.d-inline-block[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.d-block[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.d-table[_ngcontent-%COMP%] {\n  display: table !important;\n}\n.d-table-row[_ngcontent-%COMP%] {\n  display: table-row !important;\n}\n.d-table-cell[_ngcontent-%COMP%] {\n  display: table-cell !important;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.d-inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n@media (min-width: 576px) {\n  .d-sm-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .d-sm-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n  .d-sm-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .d-sm-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .d-sm-table[_ngcontent-%COMP%] {\n    display: table !important;\n  }\n  .d-sm-table-row[_ngcontent-%COMP%] {\n    display: table-row !important;\n  }\n  .d-sm-table-cell[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n  .d-sm-flex[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .d-sm-inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 768px) {\n  .d-md-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .d-md-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n  .d-md-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .d-md-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .d-md-table[_ngcontent-%COMP%] {\n    display: table !important;\n  }\n  .d-md-table-row[_ngcontent-%COMP%] {\n    display: table-row !important;\n  }\n  .d-md-table-cell[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n  .d-md-flex[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .d-md-inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 992px) {\n  .d-lg-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .d-lg-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n  .d-lg-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .d-lg-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .d-lg-table[_ngcontent-%COMP%] {\n    display: table !important;\n  }\n  .d-lg-table-row[_ngcontent-%COMP%] {\n    display: table-row !important;\n  }\n  .d-lg-table-cell[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n  .d-lg-flex[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .d-lg-inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n}\n@media (min-width: 1200px) {\n  .d-xl-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .d-xl-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n  .d-xl-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .d-xl-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .d-xl-table[_ngcontent-%COMP%] {\n    display: table !important;\n  }\n  .d-xl-table-row[_ngcontent-%COMP%] {\n    display: table-row !important;\n  }\n  .d-xl-table-cell[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n  .d-xl-flex[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .d-xl-inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n}\n@media print {\n  .d-print-none[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .d-print-inline[_ngcontent-%COMP%] {\n    display: inline !important;\n  }\n  .d-print-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important;\n  }\n  .d-print-block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .d-print-table[_ngcontent-%COMP%] {\n    display: table !important;\n  }\n  .d-print-table-row[_ngcontent-%COMP%] {\n    display: table-row !important;\n  }\n  .d-print-table-cell[_ngcontent-%COMP%] {\n    display: table-cell !important;\n  }\n  .d-print-flex[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .d-print-inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n}\n.embed-responsive[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive[_ngcontent-%COMP%]::before {\n  display: block;\n  content: \"\";\n}\n.embed-responsive[_ngcontent-%COMP%]   .embed-responsive-item[_ngcontent-%COMP%], .embed-responsive[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .embed-responsive[_ngcontent-%COMP%]   embed[_ngcontent-%COMP%], .embed-responsive[_ngcontent-%COMP%]   object[_ngcontent-%COMP%], .embed-responsive[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-21by9[_ngcontent-%COMP%]::before {\n  padding-top: 42.857143%;\n}\n.embed-responsive-16by9[_ngcontent-%COMP%]::before {\n  padding-top: 56.25%;\n}\n.embed-responsive-4by3[_ngcontent-%COMP%]::before {\n  padding-top: 75%;\n}\n.embed-responsive-1by1[_ngcontent-%COMP%]::before {\n  padding-top: 100%;\n}\n.flex-row[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column !important;\n}\n.flex-row-reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important;\n}\n.flex-column-reverse[_ngcontent-%COMP%] {\n  flex-direction: column-reverse !important;\n}\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap !important;\n}\n.flex-nowrap[_ngcontent-%COMP%] {\n  flex-wrap: nowrap !important;\n}\n.flex-wrap-reverse[_ngcontent-%COMP%] {\n  flex-wrap: wrap-reverse !important;\n}\n.flex-fill[_ngcontent-%COMP%] {\n  flex: 1 1 auto !important;\n}\n.flex-grow-0[_ngcontent-%COMP%] {\n  flex-grow: 0 !important;\n}\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1 !important;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0 !important;\n}\n.flex-shrink-1[_ngcontent-%COMP%] {\n  flex-shrink: 1 !important;\n}\n.justify-content-start[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n}\n.justify-content-end[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n.justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n.justify-content-around[_ngcontent-%COMP%] {\n  justify-content: space-around !important;\n}\n.align-items-start[_ngcontent-%COMP%] {\n  align-items: flex-start !important;\n}\n.align-items-end[_ngcontent-%COMP%] {\n  align-items: flex-end !important;\n}\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n.align-items-baseline[_ngcontent-%COMP%] {\n  align-items: baseline !important;\n}\n.align-items-stretch[_ngcontent-%COMP%] {\n  align-items: stretch !important;\n}\n.align-content-start[_ngcontent-%COMP%] {\n  align-content: flex-start !important;\n}\n.align-content-end[_ngcontent-%COMP%] {\n  align-content: flex-end !important;\n}\n.align-content-center[_ngcontent-%COMP%] {\n  align-content: center !important;\n}\n.align-content-between[_ngcontent-%COMP%] {\n  align-content: space-between !important;\n}\n.align-content-around[_ngcontent-%COMP%] {\n  align-content: space-around !important;\n}\n.align-content-stretch[_ngcontent-%COMP%] {\n  align-content: stretch !important;\n}\n.align-self-auto[_ngcontent-%COMP%] {\n  align-self: auto !important;\n}\n.align-self-start[_ngcontent-%COMP%] {\n  align-self: flex-start !important;\n}\n.align-self-end[_ngcontent-%COMP%] {\n  align-self: flex-end !important;\n}\n.align-self-center[_ngcontent-%COMP%] {\n  align-self: center !important;\n}\n.align-self-baseline[_ngcontent-%COMP%] {\n  align-self: baseline !important;\n}\n.align-self-stretch[_ngcontent-%COMP%] {\n  align-self: stretch !important;\n}\n@media (min-width: 576px) {\n  .flex-sm-row[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n  }\n  .flex-sm-column[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse[_ngcontent-%COMP%] {\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-sm-fill[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-grow-0[_ngcontent-%COMP%] {\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1[_ngcontent-%COMP%] {\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1[_ngcontent-%COMP%] {\n    flex-shrink: 1 !important;\n  }\n  .justify-content-sm-start[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end[_ngcontent-%COMP%] {\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .justify-content-sm-between[_ngcontent-%COMP%] {\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around[_ngcontent-%COMP%] {\n    justify-content: space-around !important;\n  }\n  .align-items-sm-start[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end[_ngcontent-%COMP%] {\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center[_ngcontent-%COMP%] {\n    align-items: center !important;\n  }\n  .align-items-sm-baseline[_ngcontent-%COMP%] {\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch[_ngcontent-%COMP%] {\n    align-items: stretch !important;\n  }\n  .align-content-sm-start[_ngcontent-%COMP%] {\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end[_ngcontent-%COMP%] {\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center[_ngcontent-%COMP%] {\n    align-content: center !important;\n  }\n  .align-content-sm-between[_ngcontent-%COMP%] {\n    align-content: space-between !important;\n  }\n  .align-content-sm-around[_ngcontent-%COMP%] {\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch[_ngcontent-%COMP%] {\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto[_ngcontent-%COMP%] {\n    align-self: auto !important;\n  }\n  .align-self-sm-start[_ngcontent-%COMP%] {\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end[_ngcontent-%COMP%] {\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center[_ngcontent-%COMP%] {\n    align-self: center !important;\n  }\n  .align-self-sm-baseline[_ngcontent-%COMP%] {\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch[_ngcontent-%COMP%] {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 768px) {\n  .flex-md-row[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n  }\n  .flex-md-column[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse[_ngcontent-%COMP%] {\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-md-fill[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important;\n  }\n  .flex-md-grow-0[_ngcontent-%COMP%] {\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1[_ngcontent-%COMP%] {\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1[_ngcontent-%COMP%] {\n    flex-shrink: 1 !important;\n  }\n  .justify-content-md-start[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end[_ngcontent-%COMP%] {\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .justify-content-md-between[_ngcontent-%COMP%] {\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around[_ngcontent-%COMP%] {\n    justify-content: space-around !important;\n  }\n  .align-items-md-start[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .align-items-md-end[_ngcontent-%COMP%] {\n    align-items: flex-end !important;\n  }\n  .align-items-md-center[_ngcontent-%COMP%] {\n    align-items: center !important;\n  }\n  .align-items-md-baseline[_ngcontent-%COMP%] {\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch[_ngcontent-%COMP%] {\n    align-items: stretch !important;\n  }\n  .align-content-md-start[_ngcontent-%COMP%] {\n    align-content: flex-start !important;\n  }\n  .align-content-md-end[_ngcontent-%COMP%] {\n    align-content: flex-end !important;\n  }\n  .align-content-md-center[_ngcontent-%COMP%] {\n    align-content: center !important;\n  }\n  .align-content-md-between[_ngcontent-%COMP%] {\n    align-content: space-between !important;\n  }\n  .align-content-md-around[_ngcontent-%COMP%] {\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch[_ngcontent-%COMP%] {\n    align-content: stretch !important;\n  }\n  .align-self-md-auto[_ngcontent-%COMP%] {\n    align-self: auto !important;\n  }\n  .align-self-md-start[_ngcontent-%COMP%] {\n    align-self: flex-start !important;\n  }\n  .align-self-md-end[_ngcontent-%COMP%] {\n    align-self: flex-end !important;\n  }\n  .align-self-md-center[_ngcontent-%COMP%] {\n    align-self: center !important;\n  }\n  .align-self-md-baseline[_ngcontent-%COMP%] {\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch[_ngcontent-%COMP%] {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 992px) {\n  .flex-lg-row[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n  }\n  .flex-lg-column[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse[_ngcontent-%COMP%] {\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-lg-fill[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-grow-0[_ngcontent-%COMP%] {\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1[_ngcontent-%COMP%] {\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1[_ngcontent-%COMP%] {\n    flex-shrink: 1 !important;\n  }\n  .justify-content-lg-start[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end[_ngcontent-%COMP%] {\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .justify-content-lg-between[_ngcontent-%COMP%] {\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around[_ngcontent-%COMP%] {\n    justify-content: space-around !important;\n  }\n  .align-items-lg-start[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end[_ngcontent-%COMP%] {\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center[_ngcontent-%COMP%] {\n    align-items: center !important;\n  }\n  .align-items-lg-baseline[_ngcontent-%COMP%] {\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch[_ngcontent-%COMP%] {\n    align-items: stretch !important;\n  }\n  .align-content-lg-start[_ngcontent-%COMP%] {\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end[_ngcontent-%COMP%] {\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center[_ngcontent-%COMP%] {\n    align-content: center !important;\n  }\n  .align-content-lg-between[_ngcontent-%COMP%] {\n    align-content: space-between !important;\n  }\n  .align-content-lg-around[_ngcontent-%COMP%] {\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch[_ngcontent-%COMP%] {\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto[_ngcontent-%COMP%] {\n    align-self: auto !important;\n  }\n  .align-self-lg-start[_ngcontent-%COMP%] {\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end[_ngcontent-%COMP%] {\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center[_ngcontent-%COMP%] {\n    align-self: center !important;\n  }\n  .align-self-lg-baseline[_ngcontent-%COMP%] {\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch[_ngcontent-%COMP%] {\n    align-self: stretch !important;\n  }\n}\n@media (min-width: 1200px) {\n  .flex-xl-row[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n  }\n  .flex-xl-column[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse[_ngcontent-%COMP%] {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-xl-fill[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-grow-0[_ngcontent-%COMP%] {\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1[_ngcontent-%COMP%] {\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1[_ngcontent-%COMP%] {\n    flex-shrink: 1 !important;\n  }\n  .justify-content-xl-start[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end[_ngcontent-%COMP%] {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .justify-content-xl-between[_ngcontent-%COMP%] {\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around[_ngcontent-%COMP%] {\n    justify-content: space-around !important;\n  }\n  .align-items-xl-start[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end[_ngcontent-%COMP%] {\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center[_ngcontent-%COMP%] {\n    align-items: center !important;\n  }\n  .align-items-xl-baseline[_ngcontent-%COMP%] {\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch[_ngcontent-%COMP%] {\n    align-items: stretch !important;\n  }\n  .align-content-xl-start[_ngcontent-%COMP%] {\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end[_ngcontent-%COMP%] {\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center[_ngcontent-%COMP%] {\n    align-content: center !important;\n  }\n  .align-content-xl-between[_ngcontent-%COMP%] {\n    align-content: space-between !important;\n  }\n  .align-content-xl-around[_ngcontent-%COMP%] {\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch[_ngcontent-%COMP%] {\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto[_ngcontent-%COMP%] {\n    align-self: auto !important;\n  }\n  .align-self-xl-start[_ngcontent-%COMP%] {\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end[_ngcontent-%COMP%] {\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center[_ngcontent-%COMP%] {\n    align-self: center !important;\n  }\n  .align-self-xl-baseline[_ngcontent-%COMP%] {\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch[_ngcontent-%COMP%] {\n    align-self: stretch !important;\n  }\n}\n.float-left[_ngcontent-%COMP%] {\n  float: left !important;\n}\n.float-right[_ngcontent-%COMP%] {\n  float: right !important;\n}\n.float-none[_ngcontent-%COMP%] {\n  float: none !important;\n}\n@media (min-width: 576px) {\n  .float-sm-left[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n  .float-sm-right[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n  .float-sm-none[_ngcontent-%COMP%] {\n    float: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-left[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n  .float-md-right[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n  .float-md-none[_ngcontent-%COMP%] {\n    float: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-left[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n  .float-lg-right[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n  .float-lg-none[_ngcontent-%COMP%] {\n    float: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-left[_ngcontent-%COMP%] {\n    float: left !important;\n  }\n  .float-xl-right[_ngcontent-%COMP%] {\n    float: right !important;\n  }\n  .float-xl-none[_ngcontent-%COMP%] {\n    float: none !important;\n  }\n}\n.overflow-auto[_ngcontent-%COMP%] {\n  overflow: auto !important;\n}\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n.position-static[_ngcontent-%COMP%] {\n  position: static !important;\n}\n.position-relative[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n.position-absolute[_ngcontent-%COMP%] {\n  position: absolute !important;\n}\n.position-fixed[_ngcontent-%COMP%] {\n  position: fixed !important;\n}\n.position-sticky[_ngcontent-%COMP%] {\n  position: sticky !important;\n}\n.fixed-top[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n.fixed-bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n@supports (position: sticky) {\n  .sticky-top[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n.shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n.shadow-none[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n.w-25[_ngcontent-%COMP%] {\n  width: 25% !important;\n}\n.w-50[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n.w-75[_ngcontent-%COMP%] {\n  width: 75% !important;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.w-auto[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n.h-25[_ngcontent-%COMP%] {\n  height: 25% !important;\n}\n.h-50[_ngcontent-%COMP%] {\n  height: 50% !important;\n}\n.h-75[_ngcontent-%COMP%] {\n  height: 75% !important;\n}\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n.h-auto[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n.mw-100[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n}\n.mh-100[_ngcontent-%COMP%] {\n  max-height: 100% !important;\n}\n.min-vw-100[_ngcontent-%COMP%] {\n  min-width: 100vw !important;\n}\n.min-vh-100[_ngcontent-%COMP%] {\n  min-height: 100vh !important;\n}\n.vw-100[_ngcontent-%COMP%] {\n  width: 100vw !important;\n}\n.vh-100[_ngcontent-%COMP%] {\n  height: 100vh !important;\n}\n.stretched-link[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0);\n}\n.m-0[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.mt-0[_ngcontent-%COMP%], .my-0[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n.mr-0[_ngcontent-%COMP%], .mx-0[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n}\n.mb-0[_ngcontent-%COMP%], .my-0[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n.ml-0[_ngcontent-%COMP%], .mx-0[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n.m-1[_ngcontent-%COMP%] {\n  margin: 0.25rem !important;\n}\n.mt-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\n  margin-top: 0.25rem !important;\n}\n.mr-1[_ngcontent-%COMP%], .mx-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem !important;\n}\n.mb-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1[_ngcontent-%COMP%], .mx-1[_ngcontent-%COMP%] {\n  margin-left: 0.25rem !important;\n}\n.m-2[_ngcontent-%COMP%] {\n  margin: 0.5rem !important;\n}\n.mt-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n}\n.mr-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n}\n.mb-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem !important;\n}\n.m-3[_ngcontent-%COMP%] {\n  margin: 1rem !important;\n}\n.mt-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-top: 1rem !important;\n}\n.mr-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-right: 1rem !important;\n}\n.mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem !important;\n}\n.ml-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-left: 1rem !important;\n}\n.m-4[_ngcontent-%COMP%] {\n  margin: 1.5rem !important;\n}\n.mt-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-top: 1.5rem !important;\n}\n.mr-4[_ngcontent-%COMP%], .mx-4[_ngcontent-%COMP%] {\n  margin-right: 1.5rem !important;\n}\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4[_ngcontent-%COMP%], .mx-4[_ngcontent-%COMP%] {\n  margin-left: 1.5rem !important;\n}\n.m-5[_ngcontent-%COMP%] {\n  margin: 3rem !important;\n}\n.mt-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n  margin-top: 3rem !important;\n}\n.mr-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-right: 3rem !important;\n}\n.mb-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n  margin-bottom: 3rem !important;\n}\n.ml-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-left: 3rem !important;\n}\n.p-0[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.pt-0[_ngcontent-%COMP%], .py-0[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.pr-0[_ngcontent-%COMP%], .px-0[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n.pb-0[_ngcontent-%COMP%], .py-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n.pl-0[_ngcontent-%COMP%], .px-0[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n.p-1[_ngcontent-%COMP%] {\n  padding: 0.25rem !important;\n}\n.pt-1[_ngcontent-%COMP%], .py-1[_ngcontent-%COMP%] {\n  padding-top: 0.25rem !important;\n}\n.pr-1[_ngcontent-%COMP%], .px-1[_ngcontent-%COMP%] {\n  padding-right: 0.25rem !important;\n}\n.pb-1[_ngcontent-%COMP%], .py-1[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1[_ngcontent-%COMP%], .px-1[_ngcontent-%COMP%] {\n  padding-left: 0.25rem !important;\n}\n.p-2[_ngcontent-%COMP%] {\n  padding: 0.5rem !important;\n}\n.pt-2[_ngcontent-%COMP%], .py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem !important;\n}\n.pr-2[_ngcontent-%COMP%], .px-2[_ngcontent-%COMP%] {\n  padding-right: 0.5rem !important;\n}\n.pb-2[_ngcontent-%COMP%], .py-2[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2[_ngcontent-%COMP%], .px-2[_ngcontent-%COMP%] {\n  padding-left: 0.5rem !important;\n}\n.p-3[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n.pt-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-top: 1rem !important;\n}\n.pr-3[_ngcontent-%COMP%], .px-3[_ngcontent-%COMP%] {\n  padding-right: 1rem !important;\n}\n.pb-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-bottom: 1rem !important;\n}\n.pl-3[_ngcontent-%COMP%], .px-3[_ngcontent-%COMP%] {\n  padding-left: 1rem !important;\n}\n.p-4[_ngcontent-%COMP%] {\n  padding: 1.5rem !important;\n}\n.pt-4[_ngcontent-%COMP%], .py-4[_ngcontent-%COMP%] {\n  padding-top: 1.5rem !important;\n}\n.pr-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-right: 1.5rem !important;\n}\n.pb-4[_ngcontent-%COMP%], .py-4[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-left: 1.5rem !important;\n}\n.p-5[_ngcontent-%COMP%] {\n  padding: 3rem !important;\n}\n.pt-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-top: 3rem !important;\n}\n.pr-5[_ngcontent-%COMP%], .px-5[_ngcontent-%COMP%] {\n  padding-right: 3rem !important;\n}\n.pb-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-bottom: 3rem !important;\n}\n.pl-5[_ngcontent-%COMP%], .px-5[_ngcontent-%COMP%] {\n  padding-left: 3rem !important;\n}\n.m-n1[_ngcontent-%COMP%] {\n  margin: -0.25rem !important;\n}\n.mt-n1[_ngcontent-%COMP%], .my-n1[_ngcontent-%COMP%] {\n  margin-top: -0.25rem !important;\n}\n.mr-n1[_ngcontent-%COMP%], .mx-n1[_ngcontent-%COMP%] {\n  margin-right: -0.25rem !important;\n}\n.mb-n1[_ngcontent-%COMP%], .my-n1[_ngcontent-%COMP%] {\n  margin-bottom: -0.25rem !important;\n}\n.ml-n1[_ngcontent-%COMP%], .mx-n1[_ngcontent-%COMP%] {\n  margin-left: -0.25rem !important;\n}\n.m-n2[_ngcontent-%COMP%] {\n  margin: -0.5rem !important;\n}\n.mt-n2[_ngcontent-%COMP%], .my-n2[_ngcontent-%COMP%] {\n  margin-top: -0.5rem !important;\n}\n.mr-n2[_ngcontent-%COMP%], .mx-n2[_ngcontent-%COMP%] {\n  margin-right: -0.5rem !important;\n}\n.mb-n2[_ngcontent-%COMP%], .my-n2[_ngcontent-%COMP%] {\n  margin-bottom: -0.5rem !important;\n}\n.ml-n2[_ngcontent-%COMP%], .mx-n2[_ngcontent-%COMP%] {\n  margin-left: -0.5rem !important;\n}\n.m-n3[_ngcontent-%COMP%] {\n  margin: -1rem !important;\n}\n.mt-n3[_ngcontent-%COMP%], .my-n3[_ngcontent-%COMP%] {\n  margin-top: -1rem !important;\n}\n.mr-n3[_ngcontent-%COMP%], .mx-n3[_ngcontent-%COMP%] {\n  margin-right: -1rem !important;\n}\n.mb-n3[_ngcontent-%COMP%], .my-n3[_ngcontent-%COMP%] {\n  margin-bottom: -1rem !important;\n}\n.ml-n3[_ngcontent-%COMP%], .mx-n3[_ngcontent-%COMP%] {\n  margin-left: -1rem !important;\n}\n.m-n4[_ngcontent-%COMP%] {\n  margin: -1.5rem !important;\n}\n.mt-n4[_ngcontent-%COMP%], .my-n4[_ngcontent-%COMP%] {\n  margin-top: -1.5rem !important;\n}\n.mr-n4[_ngcontent-%COMP%], .mx-n4[_ngcontent-%COMP%] {\n  margin-right: -1.5rem !important;\n}\n.mb-n4[_ngcontent-%COMP%], .my-n4[_ngcontent-%COMP%] {\n  margin-bottom: -1.5rem !important;\n}\n.ml-n4[_ngcontent-%COMP%], .mx-n4[_ngcontent-%COMP%] {\n  margin-left: -1.5rem !important;\n}\n.m-n5[_ngcontent-%COMP%] {\n  margin: -3rem !important;\n}\n.mt-n5[_ngcontent-%COMP%], .my-n5[_ngcontent-%COMP%] {\n  margin-top: -3rem !important;\n}\n.mr-n5[_ngcontent-%COMP%], .mx-n5[_ngcontent-%COMP%] {\n  margin-right: -3rem !important;\n}\n.mb-n5[_ngcontent-%COMP%], .my-n5[_ngcontent-%COMP%] {\n  margin-bottom: -3rem !important;\n}\n.ml-n5[_ngcontent-%COMP%], .mx-n5[_ngcontent-%COMP%] {\n  margin-left: -3rem !important;\n}\n.m-auto[_ngcontent-%COMP%] {\n  margin: auto !important;\n}\n.mt-auto[_ngcontent-%COMP%], .my-auto[_ngcontent-%COMP%] {\n  margin-top: auto !important;\n}\n.mr-auto[_ngcontent-%COMP%], .mx-auto[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n}\n.mb-auto[_ngcontent-%COMP%], .my-auto[_ngcontent-%COMP%] {\n  margin-bottom: auto !important;\n}\n.ml-auto[_ngcontent-%COMP%], .mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n}\n@media (min-width: 576px) {\n  .m-sm-0[_ngcontent-%COMP%] {\n    margin: 0 !important;\n  }\n  .mt-sm-0[_ngcontent-%COMP%], .my-sm-0[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0[_ngcontent-%COMP%], .mx-sm-0[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0[_ngcontent-%COMP%], .my-sm-0[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0[_ngcontent-%COMP%], .mx-sm-0[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .m-sm-1[_ngcontent-%COMP%] {\n    margin: 0.25rem !important;\n  }\n  .mt-sm-1[_ngcontent-%COMP%], .my-sm-1[_ngcontent-%COMP%] {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1[_ngcontent-%COMP%], .mx-sm-1[_ngcontent-%COMP%] {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1[_ngcontent-%COMP%], .my-sm-1[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1[_ngcontent-%COMP%], .mx-sm-1[_ngcontent-%COMP%] {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2[_ngcontent-%COMP%] {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2[_ngcontent-%COMP%], .my-sm-2[_ngcontent-%COMP%] {\n    margin-top: 0.5rem !important;\n  }\n  .mr-sm-2[_ngcontent-%COMP%], .mx-sm-2[_ngcontent-%COMP%] {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2[_ngcontent-%COMP%], .my-sm-2[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2[_ngcontent-%COMP%], .mx-sm-2[_ngcontent-%COMP%] {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3[_ngcontent-%COMP%] {\n    margin: 1rem !important;\n  }\n  .mt-sm-3[_ngcontent-%COMP%], .my-sm-3[_ngcontent-%COMP%] {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3[_ngcontent-%COMP%], .mx-sm-3[_ngcontent-%COMP%] {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3[_ngcontent-%COMP%], .my-sm-3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3[_ngcontent-%COMP%], .mx-sm-3[_ngcontent-%COMP%] {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4[_ngcontent-%COMP%] {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4[_ngcontent-%COMP%], .my-sm-4[_ngcontent-%COMP%] {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4[_ngcontent-%COMP%], .mx-sm-4[_ngcontent-%COMP%] {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4[_ngcontent-%COMP%], .my-sm-4[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4[_ngcontent-%COMP%], .mx-sm-4[_ngcontent-%COMP%] {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5[_ngcontent-%COMP%] {\n    margin: 3rem !important;\n  }\n  .mt-sm-5[_ngcontent-%COMP%], .my-sm-5[_ngcontent-%COMP%] {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5[_ngcontent-%COMP%], .mx-sm-5[_ngcontent-%COMP%] {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5[_ngcontent-%COMP%], .my-sm-5[_ngcontent-%COMP%] {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5[_ngcontent-%COMP%], .mx-sm-5[_ngcontent-%COMP%] {\n    margin-left: 3rem !important;\n  }\n  .p-sm-0[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  .pt-sm-0[_ngcontent-%COMP%], .py-sm-0[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n  }\n  .pr-sm-0[_ngcontent-%COMP%], .px-sm-0[_ngcontent-%COMP%] {\n    padding-right: 0 !important;\n  }\n  .pb-sm-0[_ngcontent-%COMP%], .py-sm-0[_ngcontent-%COMP%] {\n    padding-bottom: 0 !important;\n  }\n  .pl-sm-0[_ngcontent-%COMP%], .px-sm-0[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n  .p-sm-1[_ngcontent-%COMP%] {\n    padding: 0.25rem !important;\n  }\n  .pt-sm-1[_ngcontent-%COMP%], .py-sm-1[_ngcontent-%COMP%] {\n    padding-top: 0.25rem !important;\n  }\n  .pr-sm-1[_ngcontent-%COMP%], .px-sm-1[_ngcontent-%COMP%] {\n    padding-right: 0.25rem !important;\n  }\n  .pb-sm-1[_ngcontent-%COMP%], .py-sm-1[_ngcontent-%COMP%] {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-sm-1[_ngcontent-%COMP%], .px-sm-1[_ngcontent-%COMP%] {\n    padding-left: 0.25rem !important;\n  }\n  .p-sm-2[_ngcontent-%COMP%] {\n    padding: 0.5rem !important;\n  }\n  .pt-sm-2[_ngcontent-%COMP%], .py-sm-2[_ngcontent-%COMP%] {\n    padding-top: 0.5rem !important;\n  }\n  .pr-sm-2[_ngcontent-%COMP%], .px-sm-2[_ngcontent-%COMP%] {\n    padding-right: 0.5rem !important;\n  }\n  .pb-sm-2[_ngcontent-%COMP%], .py-sm-2[_ngcontent-%COMP%] {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-sm-2[_ngcontent-%COMP%], .px-sm-2[_ngcontent-%COMP%] {\n    padding-left: 0.5rem !important;\n  }\n  .p-sm-3[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n  .pt-sm-3[_ngcontent-%COMP%], .py-sm-3[_ngcontent-%COMP%] {\n    padding-top: 1rem !important;\n  }\n  .pr-sm-3[_ngcontent-%COMP%], .px-sm-3[_ngcontent-%COMP%] {\n    padding-right: 1rem !important;\n  }\n  .pb-sm-3[_ngcontent-%COMP%], .py-sm-3[_ngcontent-%COMP%] {\n    padding-bottom: 1rem !important;\n  }\n  .pl-sm-3[_ngcontent-%COMP%], .px-sm-3[_ngcontent-%COMP%] {\n    padding-left: 1rem !important;\n  }\n  .p-sm-4[_ngcontent-%COMP%] {\n    padding: 1.5rem !important;\n  }\n  .pt-sm-4[_ngcontent-%COMP%], .py-sm-4[_ngcontent-%COMP%] {\n    padding-top: 1.5rem !important;\n  }\n  .pr-sm-4[_ngcontent-%COMP%], .px-sm-4[_ngcontent-%COMP%] {\n    padding-right: 1.5rem !important;\n  }\n  .pb-sm-4[_ngcontent-%COMP%], .py-sm-4[_ngcontent-%COMP%] {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-sm-4[_ngcontent-%COMP%], .px-sm-4[_ngcontent-%COMP%] {\n    padding-left: 1.5rem !important;\n  }\n  .p-sm-5[_ngcontent-%COMP%] {\n    padding: 3rem !important;\n  }\n  .pt-sm-5[_ngcontent-%COMP%], .py-sm-5[_ngcontent-%COMP%] {\n    padding-top: 3rem !important;\n  }\n  .pr-sm-5[_ngcontent-%COMP%], .px-sm-5[_ngcontent-%COMP%] {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-5[_ngcontent-%COMP%], .py-sm-5[_ngcontent-%COMP%] {\n    padding-bottom: 3rem !important;\n  }\n  .pl-sm-5[_ngcontent-%COMP%], .px-sm-5[_ngcontent-%COMP%] {\n    padding-left: 3rem !important;\n  }\n  .m-sm-n1[_ngcontent-%COMP%] {\n    margin: -0.25rem !important;\n  }\n  .mt-sm-n1[_ngcontent-%COMP%], .my-sm-n1[_ngcontent-%COMP%] {\n    margin-top: -0.25rem !important;\n  }\n  .mr-sm-n1[_ngcontent-%COMP%], .mx-sm-n1[_ngcontent-%COMP%] {\n    margin-right: -0.25rem !important;\n  }\n  .mb-sm-n1[_ngcontent-%COMP%], .my-sm-n1[_ngcontent-%COMP%] {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-sm-n1[_ngcontent-%COMP%], .mx-sm-n1[_ngcontent-%COMP%] {\n    margin-left: -0.25rem !important;\n  }\n  .m-sm-n2[_ngcontent-%COMP%] {\n    margin: -0.5rem !important;\n  }\n  .mt-sm-n2[_ngcontent-%COMP%], .my-sm-n2[_ngcontent-%COMP%] {\n    margin-top: -0.5rem !important;\n  }\n  .mr-sm-n2[_ngcontent-%COMP%], .mx-sm-n2[_ngcontent-%COMP%] {\n    margin-right: -0.5rem !important;\n  }\n  .mb-sm-n2[_ngcontent-%COMP%], .my-sm-n2[_ngcontent-%COMP%] {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-sm-n2[_ngcontent-%COMP%], .mx-sm-n2[_ngcontent-%COMP%] {\n    margin-left: -0.5rem !important;\n  }\n  .m-sm-n3[_ngcontent-%COMP%] {\n    margin: -1rem !important;\n  }\n  .mt-sm-n3[_ngcontent-%COMP%], .my-sm-n3[_ngcontent-%COMP%] {\n    margin-top: -1rem !important;\n  }\n  .mr-sm-n3[_ngcontent-%COMP%], .mx-sm-n3[_ngcontent-%COMP%] {\n    margin-right: -1rem !important;\n  }\n  .mb-sm-n3[_ngcontent-%COMP%], .my-sm-n3[_ngcontent-%COMP%] {\n    margin-bottom: -1rem !important;\n  }\n  .ml-sm-n3[_ngcontent-%COMP%], .mx-sm-n3[_ngcontent-%COMP%] {\n    margin-left: -1rem !important;\n  }\n  .m-sm-n4[_ngcontent-%COMP%] {\n    margin: -1.5rem !important;\n  }\n  .mt-sm-n4[_ngcontent-%COMP%], .my-sm-n4[_ngcontent-%COMP%] {\n    margin-top: -1.5rem !important;\n  }\n  .mr-sm-n4[_ngcontent-%COMP%], .mx-sm-n4[_ngcontent-%COMP%] {\n    margin-right: -1.5rem !important;\n  }\n  .mb-sm-n4[_ngcontent-%COMP%], .my-sm-n4[_ngcontent-%COMP%] {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-sm-n4[_ngcontent-%COMP%], .mx-sm-n4[_ngcontent-%COMP%] {\n    margin-left: -1.5rem !important;\n  }\n  .m-sm-n5[_ngcontent-%COMP%] {\n    margin: -3rem !important;\n  }\n  .mt-sm-n5[_ngcontent-%COMP%], .my-sm-n5[_ngcontent-%COMP%] {\n    margin-top: -3rem !important;\n  }\n  .mr-sm-n5[_ngcontent-%COMP%], .mx-sm-n5[_ngcontent-%COMP%] {\n    margin-right: -3rem !important;\n  }\n  .mb-sm-n5[_ngcontent-%COMP%], .my-sm-n5[_ngcontent-%COMP%] {\n    margin-bottom: -3rem !important;\n  }\n  .ml-sm-n5[_ngcontent-%COMP%], .mx-sm-n5[_ngcontent-%COMP%] {\n    margin-left: -3rem !important;\n  }\n  .m-sm-auto[_ngcontent-%COMP%] {\n    margin: auto !important;\n  }\n  .mt-sm-auto[_ngcontent-%COMP%], .my-sm-auto[_ngcontent-%COMP%] {\n    margin-top: auto !important;\n  }\n  .mr-sm-auto[_ngcontent-%COMP%], .mx-sm-auto[_ngcontent-%COMP%] {\n    margin-right: auto !important;\n  }\n  .mb-sm-auto[_ngcontent-%COMP%], .my-sm-auto[_ngcontent-%COMP%] {\n    margin-bottom: auto !important;\n  }\n  .ml-sm-auto[_ngcontent-%COMP%], .mx-sm-auto[_ngcontent-%COMP%] {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 768px) {\n  .m-md-0[_ngcontent-%COMP%] {\n    margin: 0 !important;\n  }\n  .mt-md-0[_ngcontent-%COMP%], .my-md-0[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n  }\n  .mr-md-0[_ngcontent-%COMP%], .mx-md-0[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n  }\n  .mb-md-0[_ngcontent-%COMP%], .my-md-0[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0[_ngcontent-%COMP%], .mx-md-0[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .m-md-1[_ngcontent-%COMP%] {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1[_ngcontent-%COMP%], .my-md-1[_ngcontent-%COMP%] {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1[_ngcontent-%COMP%], .mx-md-1[_ngcontent-%COMP%] {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1[_ngcontent-%COMP%], .my-md-1[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1[_ngcontent-%COMP%], .mx-md-1[_ngcontent-%COMP%] {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2[_ngcontent-%COMP%] {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2[_ngcontent-%COMP%], .my-md-2[_ngcontent-%COMP%] {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2[_ngcontent-%COMP%], .mx-md-2[_ngcontent-%COMP%] {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2[_ngcontent-%COMP%], .my-md-2[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2[_ngcontent-%COMP%], .mx-md-2[_ngcontent-%COMP%] {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3[_ngcontent-%COMP%] {\n    margin: 1rem !important;\n  }\n  .mt-md-3[_ngcontent-%COMP%], .my-md-3[_ngcontent-%COMP%] {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3[_ngcontent-%COMP%], .mx-md-3[_ngcontent-%COMP%] {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3[_ngcontent-%COMP%], .my-md-3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3[_ngcontent-%COMP%], .mx-md-3[_ngcontent-%COMP%] {\n    margin-left: 1rem !important;\n  }\n  .m-md-4[_ngcontent-%COMP%] {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4[_ngcontent-%COMP%], .my-md-4[_ngcontent-%COMP%] {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4[_ngcontent-%COMP%], .mx-md-4[_ngcontent-%COMP%] {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4[_ngcontent-%COMP%], .my-md-4[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4[_ngcontent-%COMP%], .mx-md-4[_ngcontent-%COMP%] {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5[_ngcontent-%COMP%] {\n    margin: 3rem !important;\n  }\n  .mt-md-5[_ngcontent-%COMP%], .my-md-5[_ngcontent-%COMP%] {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5[_ngcontent-%COMP%], .mx-md-5[_ngcontent-%COMP%] {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5[_ngcontent-%COMP%], .my-md-5[_ngcontent-%COMP%] {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5[_ngcontent-%COMP%], .mx-md-5[_ngcontent-%COMP%] {\n    margin-left: 3rem !important;\n  }\n  .p-md-0[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  .pt-md-0[_ngcontent-%COMP%], .py-md-0[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n  }\n  .pr-md-0[_ngcontent-%COMP%], .px-md-0[_ngcontent-%COMP%] {\n    padding-right: 0 !important;\n  }\n  .pb-md-0[_ngcontent-%COMP%], .py-md-0[_ngcontent-%COMP%] {\n    padding-bottom: 0 !important;\n  }\n  .pl-md-0[_ngcontent-%COMP%], .px-md-0[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n  .p-md-1[_ngcontent-%COMP%] {\n    padding: 0.25rem !important;\n  }\n  .pt-md-1[_ngcontent-%COMP%], .py-md-1[_ngcontent-%COMP%] {\n    padding-top: 0.25rem !important;\n  }\n  .pr-md-1[_ngcontent-%COMP%], .px-md-1[_ngcontent-%COMP%] {\n    padding-right: 0.25rem !important;\n  }\n  .pb-md-1[_ngcontent-%COMP%], .py-md-1[_ngcontent-%COMP%] {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-md-1[_ngcontent-%COMP%], .px-md-1[_ngcontent-%COMP%] {\n    padding-left: 0.25rem !important;\n  }\n  .p-md-2[_ngcontent-%COMP%] {\n    padding: 0.5rem !important;\n  }\n  .pt-md-2[_ngcontent-%COMP%], .py-md-2[_ngcontent-%COMP%] {\n    padding-top: 0.5rem !important;\n  }\n  .pr-md-2[_ngcontent-%COMP%], .px-md-2[_ngcontent-%COMP%] {\n    padding-right: 0.5rem !important;\n  }\n  .pb-md-2[_ngcontent-%COMP%], .py-md-2[_ngcontent-%COMP%] {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-md-2[_ngcontent-%COMP%], .px-md-2[_ngcontent-%COMP%] {\n    padding-left: 0.5rem !important;\n  }\n  .p-md-3[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n  .pt-md-3[_ngcontent-%COMP%], .py-md-3[_ngcontent-%COMP%] {\n    padding-top: 1rem !important;\n  }\n  .pr-md-3[_ngcontent-%COMP%], .px-md-3[_ngcontent-%COMP%] {\n    padding-right: 1rem !important;\n  }\n  .pb-md-3[_ngcontent-%COMP%], .py-md-3[_ngcontent-%COMP%] {\n    padding-bottom: 1rem !important;\n  }\n  .pl-md-3[_ngcontent-%COMP%], .px-md-3[_ngcontent-%COMP%] {\n    padding-left: 1rem !important;\n  }\n  .p-md-4[_ngcontent-%COMP%] {\n    padding: 1.5rem !important;\n  }\n  .pt-md-4[_ngcontent-%COMP%], .py-md-4[_ngcontent-%COMP%] {\n    padding-top: 1.5rem !important;\n  }\n  .pr-md-4[_ngcontent-%COMP%], .px-md-4[_ngcontent-%COMP%] {\n    padding-right: 1.5rem !important;\n  }\n  .pb-md-4[_ngcontent-%COMP%], .py-md-4[_ngcontent-%COMP%] {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-md-4[_ngcontent-%COMP%], .px-md-4[_ngcontent-%COMP%] {\n    padding-left: 1.5rem !important;\n  }\n  .p-md-5[_ngcontent-%COMP%] {\n    padding: 3rem !important;\n  }\n  .pt-md-5[_ngcontent-%COMP%], .py-md-5[_ngcontent-%COMP%] {\n    padding-top: 3rem !important;\n  }\n  .pr-md-5[_ngcontent-%COMP%], .px-md-5[_ngcontent-%COMP%] {\n    padding-right: 3rem !important;\n  }\n  .pb-md-5[_ngcontent-%COMP%], .py-md-5[_ngcontent-%COMP%] {\n    padding-bottom: 3rem !important;\n  }\n  .pl-md-5[_ngcontent-%COMP%], .px-md-5[_ngcontent-%COMP%] {\n    padding-left: 3rem !important;\n  }\n  .m-md-n1[_ngcontent-%COMP%] {\n    margin: -0.25rem !important;\n  }\n  .mt-md-n1[_ngcontent-%COMP%], .my-md-n1[_ngcontent-%COMP%] {\n    margin-top: -0.25rem !important;\n  }\n  .mr-md-n1[_ngcontent-%COMP%], .mx-md-n1[_ngcontent-%COMP%] {\n    margin-right: -0.25rem !important;\n  }\n  .mb-md-n1[_ngcontent-%COMP%], .my-md-n1[_ngcontent-%COMP%] {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-md-n1[_ngcontent-%COMP%], .mx-md-n1[_ngcontent-%COMP%] {\n    margin-left: -0.25rem !important;\n  }\n  .m-md-n2[_ngcontent-%COMP%] {\n    margin: -0.5rem !important;\n  }\n  .mt-md-n2[_ngcontent-%COMP%], .my-md-n2[_ngcontent-%COMP%] {\n    margin-top: -0.5rem !important;\n  }\n  .mr-md-n2[_ngcontent-%COMP%], .mx-md-n2[_ngcontent-%COMP%] {\n    margin-right: -0.5rem !important;\n  }\n  .mb-md-n2[_ngcontent-%COMP%], .my-md-n2[_ngcontent-%COMP%] {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-md-n2[_ngcontent-%COMP%], .mx-md-n2[_ngcontent-%COMP%] {\n    margin-left: -0.5rem !important;\n  }\n  .m-md-n3[_ngcontent-%COMP%] {\n    margin: -1rem !important;\n  }\n  .mt-md-n3[_ngcontent-%COMP%], .my-md-n3[_ngcontent-%COMP%] {\n    margin-top: -1rem !important;\n  }\n  .mr-md-n3[_ngcontent-%COMP%], .mx-md-n3[_ngcontent-%COMP%] {\n    margin-right: -1rem !important;\n  }\n  .mb-md-n3[_ngcontent-%COMP%], .my-md-n3[_ngcontent-%COMP%] {\n    margin-bottom: -1rem !important;\n  }\n  .ml-md-n3[_ngcontent-%COMP%], .mx-md-n3[_ngcontent-%COMP%] {\n    margin-left: -1rem !important;\n  }\n  .m-md-n4[_ngcontent-%COMP%] {\n    margin: -1.5rem !important;\n  }\n  .mt-md-n4[_ngcontent-%COMP%], .my-md-n4[_ngcontent-%COMP%] {\n    margin-top: -1.5rem !important;\n  }\n  .mr-md-n4[_ngcontent-%COMP%], .mx-md-n4[_ngcontent-%COMP%] {\n    margin-right: -1.5rem !important;\n  }\n  .mb-md-n4[_ngcontent-%COMP%], .my-md-n4[_ngcontent-%COMP%] {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-md-n4[_ngcontent-%COMP%], .mx-md-n4[_ngcontent-%COMP%] {\n    margin-left: -1.5rem !important;\n  }\n  .m-md-n5[_ngcontent-%COMP%] {\n    margin: -3rem !important;\n  }\n  .mt-md-n5[_ngcontent-%COMP%], .my-md-n5[_ngcontent-%COMP%] {\n    margin-top: -3rem !important;\n  }\n  .mr-md-n5[_ngcontent-%COMP%], .mx-md-n5[_ngcontent-%COMP%] {\n    margin-right: -3rem !important;\n  }\n  .mb-md-n5[_ngcontent-%COMP%], .my-md-n5[_ngcontent-%COMP%] {\n    margin-bottom: -3rem !important;\n  }\n  .ml-md-n5[_ngcontent-%COMP%], .mx-md-n5[_ngcontent-%COMP%] {\n    margin-left: -3rem !important;\n  }\n  .m-md-auto[_ngcontent-%COMP%] {\n    margin: auto !important;\n  }\n  .mt-md-auto[_ngcontent-%COMP%], .my-md-auto[_ngcontent-%COMP%] {\n    margin-top: auto !important;\n  }\n  .mr-md-auto[_ngcontent-%COMP%], .mx-md-auto[_ngcontent-%COMP%] {\n    margin-right: auto !important;\n  }\n  .mb-md-auto[_ngcontent-%COMP%], .my-md-auto[_ngcontent-%COMP%] {\n    margin-bottom: auto !important;\n  }\n  .ml-md-auto[_ngcontent-%COMP%], .mx-md-auto[_ngcontent-%COMP%] {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 992px) {\n  .m-lg-0[_ngcontent-%COMP%] {\n    margin: 0 !important;\n  }\n  .mt-lg-0[_ngcontent-%COMP%], .my-lg-0[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n  }\n  .mr-lg-0[_ngcontent-%COMP%], .mx-lg-0[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n  }\n  .mb-lg-0[_ngcontent-%COMP%], .my-lg-0[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n  .ml-lg-0[_ngcontent-%COMP%], .mx-lg-0[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .m-lg-1[_ngcontent-%COMP%] {\n    margin: 0.25rem !important;\n  }\n  .mt-lg-1[_ngcontent-%COMP%], .my-lg-1[_ngcontent-%COMP%] {\n    margin-top: 0.25rem !important;\n  }\n  .mr-lg-1[_ngcontent-%COMP%], .mx-lg-1[_ngcontent-%COMP%] {\n    margin-right: 0.25rem !important;\n  }\n  .mb-lg-1[_ngcontent-%COMP%], .my-lg-1[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-lg-1[_ngcontent-%COMP%], .mx-lg-1[_ngcontent-%COMP%] {\n    margin-left: 0.25rem !important;\n  }\n  .m-lg-2[_ngcontent-%COMP%] {\n    margin: 0.5rem !important;\n  }\n  .mt-lg-2[_ngcontent-%COMP%], .my-lg-2[_ngcontent-%COMP%] {\n    margin-top: 0.5rem !important;\n  }\n  .mr-lg-2[_ngcontent-%COMP%], .mx-lg-2[_ngcontent-%COMP%] {\n    margin-right: 0.5rem !important;\n  }\n  .mb-lg-2[_ngcontent-%COMP%], .my-lg-2[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-lg-2[_ngcontent-%COMP%], .mx-lg-2[_ngcontent-%COMP%] {\n    margin-left: 0.5rem !important;\n  }\n  .m-lg-3[_ngcontent-%COMP%] {\n    margin: 1rem !important;\n  }\n  .mt-lg-3[_ngcontent-%COMP%], .my-lg-3[_ngcontent-%COMP%] {\n    margin-top: 1rem !important;\n  }\n  .mr-lg-3[_ngcontent-%COMP%], .mx-lg-3[_ngcontent-%COMP%] {\n    margin-right: 1rem !important;\n  }\n  .mb-lg-3[_ngcontent-%COMP%], .my-lg-3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem !important;\n  }\n  .ml-lg-3[_ngcontent-%COMP%], .mx-lg-3[_ngcontent-%COMP%] {\n    margin-left: 1rem !important;\n  }\n  .m-lg-4[_ngcontent-%COMP%] {\n    margin: 1.5rem !important;\n  }\n  .mt-lg-4[_ngcontent-%COMP%], .my-lg-4[_ngcontent-%COMP%] {\n    margin-top: 1.5rem !important;\n  }\n  .mr-lg-4[_ngcontent-%COMP%], .mx-lg-4[_ngcontent-%COMP%] {\n    margin-right: 1.5rem !important;\n  }\n  .mb-lg-4[_ngcontent-%COMP%], .my-lg-4[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-lg-4[_ngcontent-%COMP%], .mx-lg-4[_ngcontent-%COMP%] {\n    margin-left: 1.5rem !important;\n  }\n  .m-lg-5[_ngcontent-%COMP%] {\n    margin: 3rem !important;\n  }\n  .mt-lg-5[_ngcontent-%COMP%], .my-lg-5[_ngcontent-%COMP%] {\n    margin-top: 3rem !important;\n  }\n  .mr-lg-5[_ngcontent-%COMP%], .mx-lg-5[_ngcontent-%COMP%] {\n    margin-right: 3rem !important;\n  }\n  .mb-lg-5[_ngcontent-%COMP%], .my-lg-5[_ngcontent-%COMP%] {\n    margin-bottom: 3rem !important;\n  }\n  .ml-lg-5[_ngcontent-%COMP%], .mx-lg-5[_ngcontent-%COMP%] {\n    margin-left: 3rem !important;\n  }\n  .p-lg-0[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  .pt-lg-0[_ngcontent-%COMP%], .py-lg-0[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n  }\n  .pr-lg-0[_ngcontent-%COMP%], .px-lg-0[_ngcontent-%COMP%] {\n    padding-right: 0 !important;\n  }\n  .pb-lg-0[_ngcontent-%COMP%], .py-lg-0[_ngcontent-%COMP%] {\n    padding-bottom: 0 !important;\n  }\n  .pl-lg-0[_ngcontent-%COMP%], .px-lg-0[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n  .p-lg-1[_ngcontent-%COMP%] {\n    padding: 0.25rem !important;\n  }\n  .pt-lg-1[_ngcontent-%COMP%], .py-lg-1[_ngcontent-%COMP%] {\n    padding-top: 0.25rem !important;\n  }\n  .pr-lg-1[_ngcontent-%COMP%], .px-lg-1[_ngcontent-%COMP%] {\n    padding-right: 0.25rem !important;\n  }\n  .pb-lg-1[_ngcontent-%COMP%], .py-lg-1[_ngcontent-%COMP%] {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-lg-1[_ngcontent-%COMP%], .px-lg-1[_ngcontent-%COMP%] {\n    padding-left: 0.25rem !important;\n  }\n  .p-lg-2[_ngcontent-%COMP%] {\n    padding: 0.5rem !important;\n  }\n  .pt-lg-2[_ngcontent-%COMP%], .py-lg-2[_ngcontent-%COMP%] {\n    padding-top: 0.5rem !important;\n  }\n  .pr-lg-2[_ngcontent-%COMP%], .px-lg-2[_ngcontent-%COMP%] {\n    padding-right: 0.5rem !important;\n  }\n  .pb-lg-2[_ngcontent-%COMP%], .py-lg-2[_ngcontent-%COMP%] {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-lg-2[_ngcontent-%COMP%], .px-lg-2[_ngcontent-%COMP%] {\n    padding-left: 0.5rem !important;\n  }\n  .p-lg-3[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n  .pt-lg-3[_ngcontent-%COMP%], .py-lg-3[_ngcontent-%COMP%] {\n    padding-top: 1rem !important;\n  }\n  .pr-lg-3[_ngcontent-%COMP%], .px-lg-3[_ngcontent-%COMP%] {\n    padding-right: 1rem !important;\n  }\n  .pb-lg-3[_ngcontent-%COMP%], .py-lg-3[_ngcontent-%COMP%] {\n    padding-bottom: 1rem !important;\n  }\n  .pl-lg-3[_ngcontent-%COMP%], .px-lg-3[_ngcontent-%COMP%] {\n    padding-left: 1rem !important;\n  }\n  .p-lg-4[_ngcontent-%COMP%] {\n    padding: 1.5rem !important;\n  }\n  .pt-lg-4[_ngcontent-%COMP%], .py-lg-4[_ngcontent-%COMP%] {\n    padding-top: 1.5rem !important;\n  }\n  .pr-lg-4[_ngcontent-%COMP%], .px-lg-4[_ngcontent-%COMP%] {\n    padding-right: 1.5rem !important;\n  }\n  .pb-lg-4[_ngcontent-%COMP%], .py-lg-4[_ngcontent-%COMP%] {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-lg-4[_ngcontent-%COMP%], .px-lg-4[_ngcontent-%COMP%] {\n    padding-left: 1.5rem !important;\n  }\n  .p-lg-5[_ngcontent-%COMP%] {\n    padding: 3rem !important;\n  }\n  .pt-lg-5[_ngcontent-%COMP%], .py-lg-5[_ngcontent-%COMP%] {\n    padding-top: 3rem !important;\n  }\n  .pr-lg-5[_ngcontent-%COMP%], .px-lg-5[_ngcontent-%COMP%] {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-5[_ngcontent-%COMP%], .py-lg-5[_ngcontent-%COMP%] {\n    padding-bottom: 3rem !important;\n  }\n  .pl-lg-5[_ngcontent-%COMP%], .px-lg-5[_ngcontent-%COMP%] {\n    padding-left: 3rem !important;\n  }\n  .m-lg-n1[_ngcontent-%COMP%] {\n    margin: -0.25rem !important;\n  }\n  .mt-lg-n1[_ngcontent-%COMP%], .my-lg-n1[_ngcontent-%COMP%] {\n    margin-top: -0.25rem !important;\n  }\n  .mr-lg-n1[_ngcontent-%COMP%], .mx-lg-n1[_ngcontent-%COMP%] {\n    margin-right: -0.25rem !important;\n  }\n  .mb-lg-n1[_ngcontent-%COMP%], .my-lg-n1[_ngcontent-%COMP%] {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-lg-n1[_ngcontent-%COMP%], .mx-lg-n1[_ngcontent-%COMP%] {\n    margin-left: -0.25rem !important;\n  }\n  .m-lg-n2[_ngcontent-%COMP%] {\n    margin: -0.5rem !important;\n  }\n  .mt-lg-n2[_ngcontent-%COMP%], .my-lg-n2[_ngcontent-%COMP%] {\n    margin-top: -0.5rem !important;\n  }\n  .mr-lg-n2[_ngcontent-%COMP%], .mx-lg-n2[_ngcontent-%COMP%] {\n    margin-right: -0.5rem !important;\n  }\n  .mb-lg-n2[_ngcontent-%COMP%], .my-lg-n2[_ngcontent-%COMP%] {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-lg-n2[_ngcontent-%COMP%], .mx-lg-n2[_ngcontent-%COMP%] {\n    margin-left: -0.5rem !important;\n  }\n  .m-lg-n3[_ngcontent-%COMP%] {\n    margin: -1rem !important;\n  }\n  .mt-lg-n3[_ngcontent-%COMP%], .my-lg-n3[_ngcontent-%COMP%] {\n    margin-top: -1rem !important;\n  }\n  .mr-lg-n3[_ngcontent-%COMP%], .mx-lg-n3[_ngcontent-%COMP%] {\n    margin-right: -1rem !important;\n  }\n  .mb-lg-n3[_ngcontent-%COMP%], .my-lg-n3[_ngcontent-%COMP%] {\n    margin-bottom: -1rem !important;\n  }\n  .ml-lg-n3[_ngcontent-%COMP%], .mx-lg-n3[_ngcontent-%COMP%] {\n    margin-left: -1rem !important;\n  }\n  .m-lg-n4[_ngcontent-%COMP%] {\n    margin: -1.5rem !important;\n  }\n  .mt-lg-n4[_ngcontent-%COMP%], .my-lg-n4[_ngcontent-%COMP%] {\n    margin-top: -1.5rem !important;\n  }\n  .mr-lg-n4[_ngcontent-%COMP%], .mx-lg-n4[_ngcontent-%COMP%] {\n    margin-right: -1.5rem !important;\n  }\n  .mb-lg-n4[_ngcontent-%COMP%], .my-lg-n4[_ngcontent-%COMP%] {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-lg-n4[_ngcontent-%COMP%], .mx-lg-n4[_ngcontent-%COMP%] {\n    margin-left: -1.5rem !important;\n  }\n  .m-lg-n5[_ngcontent-%COMP%] {\n    margin: -3rem !important;\n  }\n  .mt-lg-n5[_ngcontent-%COMP%], .my-lg-n5[_ngcontent-%COMP%] {\n    margin-top: -3rem !important;\n  }\n  .mr-lg-n5[_ngcontent-%COMP%], .mx-lg-n5[_ngcontent-%COMP%] {\n    margin-right: -3rem !important;\n  }\n  .mb-lg-n5[_ngcontent-%COMP%], .my-lg-n5[_ngcontent-%COMP%] {\n    margin-bottom: -3rem !important;\n  }\n  .ml-lg-n5[_ngcontent-%COMP%], .mx-lg-n5[_ngcontent-%COMP%] {\n    margin-left: -3rem !important;\n  }\n  .m-lg-auto[_ngcontent-%COMP%] {\n    margin: auto !important;\n  }\n  .mt-lg-auto[_ngcontent-%COMP%], .my-lg-auto[_ngcontent-%COMP%] {\n    margin-top: auto !important;\n  }\n  .mr-lg-auto[_ngcontent-%COMP%], .mx-lg-auto[_ngcontent-%COMP%] {\n    margin-right: auto !important;\n  }\n  .mb-lg-auto[_ngcontent-%COMP%], .my-lg-auto[_ngcontent-%COMP%] {\n    margin-bottom: auto !important;\n  }\n  .ml-lg-auto[_ngcontent-%COMP%], .mx-lg-auto[_ngcontent-%COMP%] {\n    margin-left: auto !important;\n  }\n}\n@media (min-width: 1200px) {\n  .m-xl-0[_ngcontent-%COMP%] {\n    margin: 0 !important;\n  }\n  .mt-xl-0[_ngcontent-%COMP%], .my-xl-0[_ngcontent-%COMP%] {\n    margin-top: 0 !important;\n  }\n  .mr-xl-0[_ngcontent-%COMP%], .mx-xl-0[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n  }\n  .mb-xl-0[_ngcontent-%COMP%], .my-xl-0[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n  .ml-xl-0[_ngcontent-%COMP%], .mx-xl-0[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .m-xl-1[_ngcontent-%COMP%] {\n    margin: 0.25rem !important;\n  }\n  .mt-xl-1[_ngcontent-%COMP%], .my-xl-1[_ngcontent-%COMP%] {\n    margin-top: 0.25rem !important;\n  }\n  .mr-xl-1[_ngcontent-%COMP%], .mx-xl-1[_ngcontent-%COMP%] {\n    margin-right: 0.25rem !important;\n  }\n  .mb-xl-1[_ngcontent-%COMP%], .my-xl-1[_ngcontent-%COMP%] {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-xl-1[_ngcontent-%COMP%], .mx-xl-1[_ngcontent-%COMP%] {\n    margin-left: 0.25rem !important;\n  }\n  .m-xl-2[_ngcontent-%COMP%] {\n    margin: 0.5rem !important;\n  }\n  .mt-xl-2[_ngcontent-%COMP%], .my-xl-2[_ngcontent-%COMP%] {\n    margin-top: 0.5rem !important;\n  }\n  .mr-xl-2[_ngcontent-%COMP%], .mx-xl-2[_ngcontent-%COMP%] {\n    margin-right: 0.5rem !important;\n  }\n  .mb-xl-2[_ngcontent-%COMP%], .my-xl-2[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-xl-2[_ngcontent-%COMP%], .mx-xl-2[_ngcontent-%COMP%] {\n    margin-left: 0.5rem !important;\n  }\n  .m-xl-3[_ngcontent-%COMP%] {\n    margin: 1rem !important;\n  }\n  .mt-xl-3[_ngcontent-%COMP%], .my-xl-3[_ngcontent-%COMP%] {\n    margin-top: 1rem !important;\n  }\n  .mr-xl-3[_ngcontent-%COMP%], .mx-xl-3[_ngcontent-%COMP%] {\n    margin-right: 1rem !important;\n  }\n  .mb-xl-3[_ngcontent-%COMP%], .my-xl-3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem !important;\n  }\n  .ml-xl-3[_ngcontent-%COMP%], .mx-xl-3[_ngcontent-%COMP%] {\n    margin-left: 1rem !important;\n  }\n  .m-xl-4[_ngcontent-%COMP%] {\n    margin: 1.5rem !important;\n  }\n  .mt-xl-4[_ngcontent-%COMP%], .my-xl-4[_ngcontent-%COMP%] {\n    margin-top: 1.5rem !important;\n  }\n  .mr-xl-4[_ngcontent-%COMP%], .mx-xl-4[_ngcontent-%COMP%] {\n    margin-right: 1.5rem !important;\n  }\n  .mb-xl-4[_ngcontent-%COMP%], .my-xl-4[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-xl-4[_ngcontent-%COMP%], .mx-xl-4[_ngcontent-%COMP%] {\n    margin-left: 1.5rem !important;\n  }\n  .m-xl-5[_ngcontent-%COMP%] {\n    margin: 3rem !important;\n  }\n  .mt-xl-5[_ngcontent-%COMP%], .my-xl-5[_ngcontent-%COMP%] {\n    margin-top: 3rem !important;\n  }\n  .mr-xl-5[_ngcontent-%COMP%], .mx-xl-5[_ngcontent-%COMP%] {\n    margin-right: 3rem !important;\n  }\n  .mb-xl-5[_ngcontent-%COMP%], .my-xl-5[_ngcontent-%COMP%] {\n    margin-bottom: 3rem !important;\n  }\n  .ml-xl-5[_ngcontent-%COMP%], .mx-xl-5[_ngcontent-%COMP%] {\n    margin-left: 3rem !important;\n  }\n  .p-xl-0[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  .pt-xl-0[_ngcontent-%COMP%], .py-xl-0[_ngcontent-%COMP%] {\n    padding-top: 0 !important;\n  }\n  .pr-xl-0[_ngcontent-%COMP%], .px-xl-0[_ngcontent-%COMP%] {\n    padding-right: 0 !important;\n  }\n  .pb-xl-0[_ngcontent-%COMP%], .py-xl-0[_ngcontent-%COMP%] {\n    padding-bottom: 0 !important;\n  }\n  .pl-xl-0[_ngcontent-%COMP%], .px-xl-0[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n  .p-xl-1[_ngcontent-%COMP%] {\n    padding: 0.25rem !important;\n  }\n  .pt-xl-1[_ngcontent-%COMP%], .py-xl-1[_ngcontent-%COMP%] {\n    padding-top: 0.25rem !important;\n  }\n  .pr-xl-1[_ngcontent-%COMP%], .px-xl-1[_ngcontent-%COMP%] {\n    padding-right: 0.25rem !important;\n  }\n  .pb-xl-1[_ngcontent-%COMP%], .py-xl-1[_ngcontent-%COMP%] {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-xl-1[_ngcontent-%COMP%], .px-xl-1[_ngcontent-%COMP%] {\n    padding-left: 0.25rem !important;\n  }\n  .p-xl-2[_ngcontent-%COMP%] {\n    padding: 0.5rem !important;\n  }\n  .pt-xl-2[_ngcontent-%COMP%], .py-xl-2[_ngcontent-%COMP%] {\n    padding-top: 0.5rem !important;\n  }\n  .pr-xl-2[_ngcontent-%COMP%], .px-xl-2[_ngcontent-%COMP%] {\n    padding-right: 0.5rem !important;\n  }\n  .pb-xl-2[_ngcontent-%COMP%], .py-xl-2[_ngcontent-%COMP%] {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-xl-2[_ngcontent-%COMP%], .px-xl-2[_ngcontent-%COMP%] {\n    padding-left: 0.5rem !important;\n  }\n  .p-xl-3[_ngcontent-%COMP%] {\n    padding: 1rem !important;\n  }\n  .pt-xl-3[_ngcontent-%COMP%], .py-xl-3[_ngcontent-%COMP%] {\n    padding-top: 1rem !important;\n  }\n  .pr-xl-3[_ngcontent-%COMP%], .px-xl-3[_ngcontent-%COMP%] {\n    padding-right: 1rem !important;\n  }\n  .pb-xl-3[_ngcontent-%COMP%], .py-xl-3[_ngcontent-%COMP%] {\n    padding-bottom: 1rem !important;\n  }\n  .pl-xl-3[_ngcontent-%COMP%], .px-xl-3[_ngcontent-%COMP%] {\n    padding-left: 1rem !important;\n  }\n  .p-xl-4[_ngcontent-%COMP%] {\n    padding: 1.5rem !important;\n  }\n  .pt-xl-4[_ngcontent-%COMP%], .py-xl-4[_ngcontent-%COMP%] {\n    padding-top: 1.5rem !important;\n  }\n  .pr-xl-4[_ngcontent-%COMP%], .px-xl-4[_ngcontent-%COMP%] {\n    padding-right: 1.5rem !important;\n  }\n  .pb-xl-4[_ngcontent-%COMP%], .py-xl-4[_ngcontent-%COMP%] {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-xl-4[_ngcontent-%COMP%], .px-xl-4[_ngcontent-%COMP%] {\n    padding-left: 1.5rem !important;\n  }\n  .p-xl-5[_ngcontent-%COMP%] {\n    padding: 3rem !important;\n  }\n  .pt-xl-5[_ngcontent-%COMP%], .py-xl-5[_ngcontent-%COMP%] {\n    padding-top: 3rem !important;\n  }\n  .pr-xl-5[_ngcontent-%COMP%], .px-xl-5[_ngcontent-%COMP%] {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-5[_ngcontent-%COMP%], .py-xl-5[_ngcontent-%COMP%] {\n    padding-bottom: 3rem !important;\n  }\n  .pl-xl-5[_ngcontent-%COMP%], .px-xl-5[_ngcontent-%COMP%] {\n    padding-left: 3rem !important;\n  }\n  .m-xl-n1[_ngcontent-%COMP%] {\n    margin: -0.25rem !important;\n  }\n  .mt-xl-n1[_ngcontent-%COMP%], .my-xl-n1[_ngcontent-%COMP%] {\n    margin-top: -0.25rem !important;\n  }\n  .mr-xl-n1[_ngcontent-%COMP%], .mx-xl-n1[_ngcontent-%COMP%] {\n    margin-right: -0.25rem !important;\n  }\n  .mb-xl-n1[_ngcontent-%COMP%], .my-xl-n1[_ngcontent-%COMP%] {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-xl-n1[_ngcontent-%COMP%], .mx-xl-n1[_ngcontent-%COMP%] {\n    margin-left: -0.25rem !important;\n  }\n  .m-xl-n2[_ngcontent-%COMP%] {\n    margin: -0.5rem !important;\n  }\n  .mt-xl-n2[_ngcontent-%COMP%], .my-xl-n2[_ngcontent-%COMP%] {\n    margin-top: -0.5rem !important;\n  }\n  .mr-xl-n2[_ngcontent-%COMP%], .mx-xl-n2[_ngcontent-%COMP%] {\n    margin-right: -0.5rem !important;\n  }\n  .mb-xl-n2[_ngcontent-%COMP%], .my-xl-n2[_ngcontent-%COMP%] {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-xl-n2[_ngcontent-%COMP%], .mx-xl-n2[_ngcontent-%COMP%] {\n    margin-left: -0.5rem !important;\n  }\n  .m-xl-n3[_ngcontent-%COMP%] {\n    margin: -1rem !important;\n  }\n  .mt-xl-n3[_ngcontent-%COMP%], .my-xl-n3[_ngcontent-%COMP%] {\n    margin-top: -1rem !important;\n  }\n  .mr-xl-n3[_ngcontent-%COMP%], .mx-xl-n3[_ngcontent-%COMP%] {\n    margin-right: -1rem !important;\n  }\n  .mb-xl-n3[_ngcontent-%COMP%], .my-xl-n3[_ngcontent-%COMP%] {\n    margin-bottom: -1rem !important;\n  }\n  .ml-xl-n3[_ngcontent-%COMP%], .mx-xl-n3[_ngcontent-%COMP%] {\n    margin-left: -1rem !important;\n  }\n  .m-xl-n4[_ngcontent-%COMP%] {\n    margin: -1.5rem !important;\n  }\n  .mt-xl-n4[_ngcontent-%COMP%], .my-xl-n4[_ngcontent-%COMP%] {\n    margin-top: -1.5rem !important;\n  }\n  .mr-xl-n4[_ngcontent-%COMP%], .mx-xl-n4[_ngcontent-%COMP%] {\n    margin-right: -1.5rem !important;\n  }\n  .mb-xl-n4[_ngcontent-%COMP%], .my-xl-n4[_ngcontent-%COMP%] {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-xl-n4[_ngcontent-%COMP%], .mx-xl-n4[_ngcontent-%COMP%] {\n    margin-left: -1.5rem !important;\n  }\n  .m-xl-n5[_ngcontent-%COMP%] {\n    margin: -3rem !important;\n  }\n  .mt-xl-n5[_ngcontent-%COMP%], .my-xl-n5[_ngcontent-%COMP%] {\n    margin-top: -3rem !important;\n  }\n  .mr-xl-n5[_ngcontent-%COMP%], .mx-xl-n5[_ngcontent-%COMP%] {\n    margin-right: -3rem !important;\n  }\n  .mb-xl-n5[_ngcontent-%COMP%], .my-xl-n5[_ngcontent-%COMP%] {\n    margin-bottom: -3rem !important;\n  }\n  .ml-xl-n5[_ngcontent-%COMP%], .mx-xl-n5[_ngcontent-%COMP%] {\n    margin-left: -3rem !important;\n  }\n  .m-xl-auto[_ngcontent-%COMP%] {\n    margin: auto !important;\n  }\n  .mt-xl-auto[_ngcontent-%COMP%], .my-xl-auto[_ngcontent-%COMP%] {\n    margin-top: auto !important;\n  }\n  .mr-xl-auto[_ngcontent-%COMP%], .mx-xl-auto[_ngcontent-%COMP%] {\n    margin-right: auto !important;\n  }\n  .mb-xl-auto[_ngcontent-%COMP%], .my-xl-auto[_ngcontent-%COMP%] {\n    margin-bottom: auto !important;\n  }\n  .ml-xl-auto[_ngcontent-%COMP%], .mx-xl-auto[_ngcontent-%COMP%] {\n    margin-left: auto !important;\n  }\n}\n.text-monospace[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n.text-justify[_ngcontent-%COMP%] {\n  text-align: justify !important;\n}\n.text-wrap[_ngcontent-%COMP%] {\n  white-space: normal !important;\n}\n.text-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n}\n.text-truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n@media (min-width: 576px) {\n  .text-sm-left[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n  .text-sm-right[_ngcontent-%COMP%] {\n    text-align: right !important;\n  }\n  .text-sm-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .text-md-left[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n  .text-md-right[_ngcontent-%COMP%] {\n    text-align: right !important;\n  }\n  .text-md-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .text-lg-left[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n  .text-lg-right[_ngcontent-%COMP%] {\n    text-align: right !important;\n  }\n  .text-lg-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .text-xl-left[_ngcontent-%COMP%] {\n    text-align: left !important;\n  }\n  .text-xl-right[_ngcontent-%COMP%] {\n    text-align: right !important;\n  }\n  .text-xl-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n}\n.text-lowercase[_ngcontent-%COMP%] {\n  text-transform: lowercase !important;\n}\n.text-uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase !important;\n}\n.text-capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n.font-weight-light[_ngcontent-%COMP%] {\n  font-weight: 300 !important;\n}\n.font-weight-lighter[_ngcontent-%COMP%] {\n  font-weight: lighter !important;\n}\n.font-weight-normal[_ngcontent-%COMP%] {\n  font-weight: 400 !important;\n}\n.font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 700 !important;\n}\n.font-weight-bolder[_ngcontent-%COMP%] {\n  font-weight: bolder !important;\n}\n.font-italic[_ngcontent-%COMP%] {\n  font-style: italic !important;\n}\n.text-white[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.text-primary[_ngcontent-%COMP%] {\n  color: #007bff !important;\n}\na.text-primary[_ngcontent-%COMP%]:hover, a.text-primary[_ngcontent-%COMP%]:focus {\n  color: #0056b3 !important;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\na.text-secondary[_ngcontent-%COMP%]:hover, a.text-secondary[_ngcontent-%COMP%]:focus {\n  color: #494f54 !important;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n}\na.text-success[_ngcontent-%COMP%]:hover, a.text-success[_ngcontent-%COMP%]:focus {\n  color: #19692c !important;\n}\n.text-info[_ngcontent-%COMP%] {\n  color: #17a2b8 !important;\n}\na.text-info[_ngcontent-%COMP%]:hover, a.text-info[_ngcontent-%COMP%]:focus {\n  color: #0f6674 !important;\n}\n.text-warning[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n}\na.text-warning[_ngcontent-%COMP%]:hover, a.text-warning[_ngcontent-%COMP%]:focus {\n  color: #ba8b00 !important;\n}\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\na.text-danger[_ngcontent-%COMP%]:hover, a.text-danger[_ngcontent-%COMP%]:focus {\n  color: #a71d2a !important;\n}\n.text-light[_ngcontent-%COMP%] {\n  color: #f8f9fa !important;\n}\na.text-light[_ngcontent-%COMP%]:hover, a.text-light[_ngcontent-%COMP%]:focus {\n  color: #cbd3da !important;\n}\n.text-dark[_ngcontent-%COMP%] {\n  color: #343a40 !important;\n}\na.text-dark[_ngcontent-%COMP%]:hover, a.text-dark[_ngcontent-%COMP%]:focus {\n  color: #121416 !important;\n}\n.text-body[_ngcontent-%COMP%] {\n  color: #212529 !important;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.text-black-50[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n.text-white-50[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n.text-hide[_ngcontent-%COMP%] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.text-decoration-none[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n.text-break[_ngcontent-%COMP%] {\n  word-break: break-word !important;\n  overflow-wrap: break-word !important;\n}\n.text-reset[_ngcontent-%COMP%] {\n  color: inherit !important;\n}\n.visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n@media print {\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n  a[_ngcontent-%COMP%]:not(.btn) {\n    text-decoration: underline;\n  }\n  abbr[title][_ngcontent-%COMP%]::after {\n    content: \" (\" attr(title) \")\";\n  }\n  pre[_ngcontent-%COMP%] {\n    white-space: pre-wrap !important;\n  }\n  pre[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%] {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid;\n  }\n  thead[_ngcontent-%COMP%] {\n    display: table-header-group;\n  }\n  tr[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n  p[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    orphans: 3;\n    widows: 3;\n  }\n  h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    page-break-after: avoid;\n  }\n  @page {\n    size[_ngcontent-%COMP%]:   a3[_ngcontent-%COMP%];\n  }\n  body[_ngcontent-%COMP%] {\n    min-width: 992px !important;\n  }\n  .container[_ngcontent-%COMP%] {\n    min-width: 992px !important;\n  }\n  .navbar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .badge[_ngcontent-%COMP%] {\n    border: 1px solid #000;\n  }\n  .table[_ngcontent-%COMP%] {\n    border-collapse: collapse !important;\n  }\n  .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #fff !important;\n  }\n  .table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6 !important;\n  }\n  .table-dark[_ngcontent-%COMP%] {\n    color: inherit;\n  }\n  .table-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n    border-color: #dee2e6;\n  }\n  .table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    color: inherit;\n    border-color: #dee2e6;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n/*# sourceMappingURL=data:application/json;base64,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QjtBQUVBO0VBQ0U7OztJQUdFLDRCQUE0QjtJQUM1QiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTs7SUFFRSx5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTs7SUFFRSx3QkFBd0I7RUFDMUI7RUFDQTs7O0lBR0UsVUFBVTtJQUNWLFNBQVM7RUFDWDtFQUNBOztJQUVFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBOztJQUVFLGlDQUFpQztFQUNuQztFQUNBOztJQUVFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBOzs7O0lBSUUscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFDQSx3Q0FBd0MiLCJmaWxlIjoiYm9vdHN0cmFwLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQm9vdHN0cmFwIHY0LjMuMSAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tLylcbiAqIENvcHlyaWdodCAyMDExLTIwMTkgVGhlIEJvb3RzdHJhcCBBdXRob3JzXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE5IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbjpyb290IHtcbiAgLS1ibHVlOiAjMDA3YmZmO1xuICAtLWluZGlnbzogIzY2MTBmMjtcbiAgLS1wdXJwbGU6ICM2ZjQyYzE7XG4gIC0tcGluazogI2U4M2U4YztcbiAgLS1yZWQ6ICNkYzM1NDU7XG4gIC0tb3JhbmdlOiAjZmQ3ZTE0O1xuICAtLXllbGxvdzogI2ZmYzEwNztcbiAgLS1ncmVlbjogIzI4YTc0NTtcbiAgLS10ZWFsOiAjMjBjOTk3O1xuICAtLWN5YW46ICMxN2EyYjg7XG4gIC0td2hpdGU6ICNmZmY7XG4gIC0tZ3JheTogIzZjNzU3ZDtcbiAgLS1ncmF5LWRhcms6ICMzNDNhNDA7XG4gIC0tcHJpbWFyeTogIzAwN2JmZjtcbiAgLS1zZWNvbmRhcnk6ICM2Yzc1N2Q7XG4gIC0tc3VjY2VzczogIzI4YTc0NTtcbiAgLS1pbmZvOiAjMTdhMmI4O1xuICAtLXdhcm5pbmc6ICNmZmMxMDc7XG4gIC0tZGFuZ2VyOiAjZGMzNTQ1O1xuICAtLWxpZ2h0OiAjZjhmOWZhO1xuICAtLWRhcms6ICMzNDNhNDA7XG4gIC0tYnJlYWtwb2ludC14czogMDtcbiAgLS1icmVha3BvaW50LXNtOiA1NzZweDtcbiAgLS1icmVha3BvaW50LW1kOiA3NjhweDtcbiAgLS1icmVha3BvaW50LWxnOiA5OTJweDtcbiAgLS1icmVha3BvaW50LXhsOiAxMjAwcHg7XG4gIC0tZm9udC1mYW1pbHktc2Fucy1zZXJpZjogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICAtLWZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbmFydGljbGUsIGFzaWRlLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5bdGFiaW5kZXg9XCItMVwiXTpmb2N1cyB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmFiYnJbdGl0bGVdLFxuYWJicltkYXRhLW9yaWdpbmFsLXRpdGxlXSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICBjdXJzb3I6IGhlbHA7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XG59XG5cbmFkZHJlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG5vbCxcbnVsLFxuZGwge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5vbCBvbCxcbnVsIHVsLFxub2wgdWwsXG51bCBvbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmR0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuZGQge1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbmJsb2NrcXVvdGUge1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuc3ViLFxuc3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLS41ZW07XG59XG5cbmEge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMDA1NmIzO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpob3ZlciwgYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6Zm9jdXMge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbnByZSxcbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5wcmUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5zdmcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbmNhcHRpb24ge1xuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjYXB0aW9uLXNpZGU6IGJvdHRvbTtcbn1cblxudGgge1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggZG90dGVkO1xuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG59XG5cbmlucHV0LFxuYnV0dG9uLFxuc2VsZWN0LFxub3B0Z3JvdXAsXG50ZXh0YXJlYSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbixcbmlucHV0IHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG5zZWxlY3Qge1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbn1cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxuW3R5cGU9XCJidXR0b25cIl06bm90KDpkaXNhYmxlZCksXG5bdHlwZT1cInJlc2V0XCJdOm5vdCg6ZGlzYWJsZWQpLFxuW3R5cGU9XCJzdWJtaXRcIl06bm90KDpkaXNhYmxlZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcbmlucHV0W3R5cGU9XCJ0aW1lXCJdLFxuaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLFxuaW5wdXRbdHlwZT1cIm1vbnRoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBsaXN0Ym94O1xufVxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG5maWVsZHNldCB7XG4gIG1pbi13aWR0aDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICBmb250OiBpbmhlcml0O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxub3V0cHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG5oMSwgLmgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbmgyLCAuaDIge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbmgzLCAuaDMge1xuICBmb250LXNpemU6IDEuNzVyZW07XG59XG5cbmg0LCAuaDQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuaDUsIC5oNSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuaDYsIC5oNiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmxlYWQge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5kaXNwbGF5LTEge1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5kaXNwbGF5LTIge1xuICBmb250LXNpemU6IDUuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmRpc3BsYXktMyB7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uZGlzcGxheS00IHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5zbWFsbCxcbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5tYXJrLFxuLm1hcmsge1xuICBwYWRkaW5nOiAwLjJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcbn1cblxuLmxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5saXN0LWlubGluZSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmxpc3QtaW5saW5lLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5saXN0LWlubGluZS1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmluaXRpYWxpc20ge1xuICBmb250LXNpemU6IDkwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJsb2NrcXVvdGUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5ibG9ja3F1b3RlLWZvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDgwJTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5ibG9ja3F1b3RlLWZvb3Rlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXDIwMTRcXDAwQTBcIjtcbn1cblxuLmltZy1mbHVpZCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1nLXRodW1ibmFpbCB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZmlndXJlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZmlndXJlLWltZyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5maWd1cmUtY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuY29kZSB7XG4gIGZvbnQtc2l6ZTogODcuNSU7XG4gIGNvbG9yOiAjZTgzZThjO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG5hID4gY29kZSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5rYmQge1xuICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xuICBmb250LXNpemU6IDg3LjUlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuXG5rYmQga2JkIHtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5wcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA4Ny41JTtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbnByZSBjb2RlIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xufVxuXG4ucHJlLXNjcm9sbGFibGUge1xuICBtYXgtaGVpZ2h0OiAzNDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTQwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTYwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgfVxufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLm5vLWd1dHRlcnMge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ubm8tZ3V0dGVycyA+IC5jb2wsXG4ubm8tZ3V0dGVycyA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uY29sLTEsIC5jb2wtMiwgLmNvbC0zLCAuY29sLTQsIC5jb2wtNSwgLmNvbC02LCAuY29sLTcsIC5jb2wtOCwgLmNvbC05LCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLFxuLmNvbC1hdXRvLCAuY29sLXNtLTEsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLFxuLmNvbC1zbS1hdXRvLCAuY29sLW1kLTEsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEyLCAuY29sLW1kLFxuLmNvbC1tZC1hdXRvLCAuY29sLWxnLTEsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLFxuLmNvbC1sZy1hdXRvLCAuY29sLXhsLTEsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLFxuLmNvbC14bC1hdXRvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uY29sIHtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNvbC1hdXRvIHtcbiAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmNvbC0xIHtcbiAgLW1zLWZsZXg6IDAgMCA4LjMzMzMzMyU7XG4gIGZsZXg6IDAgMCA4LjMzMzMzMyU7XG4gIG1heC13aWR0aDogOC4zMzMzMzMlO1xufVxuXG4uY29sLTIge1xuICAtbXMtZmxleDogMCAwIDE2LjY2NjY2NyU7XG4gIGZsZXg6IDAgMCAxNi42NjY2NjclO1xuICBtYXgtd2lkdGg6IDE2LjY2NjY2NyU7XG59XG5cbi5jb2wtMyB7XG4gIC1tcy1mbGV4OiAwIDAgMjUlO1xuICBmbGV4OiAwIDAgMjUlO1xuICBtYXgtd2lkdGg6IDI1JTtcbn1cblxuLmNvbC00IHtcbiAgLW1zLWZsZXg6IDAgMCAzMy4zMzMzMzMlO1xuICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgbWF4LXdpZHRoOiAzMy4zMzMzMzMlO1xufVxuXG4uY29sLTUge1xuICAtbXMtZmxleDogMCAwIDQxLjY2NjY2NyU7XG4gIGZsZXg6IDAgMCA0MS42NjY2NjclO1xuICBtYXgtd2lkdGg6IDQxLjY2NjY2NyU7XG59XG5cbi5jb2wtNiB7XG4gIC1tcy1mbGV4OiAwIDAgNTAlO1xuICBmbGV4OiAwIDAgNTAlO1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmNvbC03IHtcbiAgLW1zLWZsZXg6IDAgMCA1OC4zMzMzMzMlO1xuICBmbGV4OiAwIDAgNTguMzMzMzMzJTtcbiAgbWF4LXdpZHRoOiA1OC4zMzMzMzMlO1xufVxuXG4uY29sLTgge1xuICAtbXMtZmxleDogMCAwIDY2LjY2NjY2NyU7XG4gIGZsZXg6IDAgMCA2Ni42NjY2NjclO1xuICBtYXgtd2lkdGg6IDY2LjY2NjY2NyU7XG59XG5cbi5jb2wtOSB7XG4gIC1tcy1mbGV4OiAwIDAgNzUlO1xuICBmbGV4OiAwIDAgNzUlO1xuICBtYXgtd2lkdGg6IDc1JTtcbn1cblxuLmNvbC0xMCB7XG4gIC1tcy1mbGV4OiAwIDAgODMuMzMzMzMzJTtcbiAgZmxleDogMCAwIDgzLjMzMzMzMyU7XG4gIG1heC13aWR0aDogODMuMzMzMzMzJTtcbn1cblxuLmNvbC0xMSB7XG4gIC1tcy1mbGV4OiAwIDAgOTEuNjY2NjY3JTtcbiAgZmxleDogMCAwIDkxLjY2NjY2NyU7XG4gIG1heC13aWR0aDogOTEuNjY2NjY3JTtcbn1cblxuLmNvbC0xMiB7XG4gIC1tcy1mbGV4OiAwIDAgMTAwJTtcbiAgZmxleDogMCAwIDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLm9yZGVyLWZpcnN0IHtcbiAgLW1zLWZsZXgtb3JkZXI6IC0xO1xuICBvcmRlcjogLTE7XG59XG5cbi5vcmRlci1sYXN0IHtcbiAgLW1zLWZsZXgtb3JkZXI6IDEzO1xuICBvcmRlcjogMTM7XG59XG5cbi5vcmRlci0wIHtcbiAgLW1zLWZsZXgtb3JkZXI6IDA7XG4gIG9yZGVyOiAwO1xufVxuXG4ub3JkZXItMSB7XG4gIC1tcy1mbGV4LW9yZGVyOiAxO1xuICBvcmRlcjogMTtcbn1cblxuLm9yZGVyLTIge1xuICAtbXMtZmxleC1vcmRlcjogMjtcbiAgb3JkZXI6IDI7XG59XG5cbi5vcmRlci0zIHtcbiAgLW1zLWZsZXgtb3JkZXI6IDM7XG4gIG9yZGVyOiAzO1xufVxuXG4ub3JkZXItNCB7XG4gIC1tcy1mbGV4LW9yZGVyOiA0O1xuICBvcmRlcjogNDtcbn1cblxuLm9yZGVyLTUge1xuICAtbXMtZmxleC1vcmRlcjogNTtcbiAgb3JkZXI6IDU7XG59XG5cbi5vcmRlci02IHtcbiAgLW1zLWZsZXgtb3JkZXI6IDY7XG4gIG9yZGVyOiA2O1xufVxuXG4ub3JkZXItNyB7XG4gIC1tcy1mbGV4LW9yZGVyOiA3O1xuICBvcmRlcjogNztcbn1cblxuLm9yZGVyLTgge1xuICAtbXMtZmxleC1vcmRlcjogODtcbiAgb3JkZXI6IDg7XG59XG5cbi5vcmRlci05IHtcbiAgLW1zLWZsZXgtb3JkZXI6IDk7XG4gIG9yZGVyOiA5O1xufVxuXG4ub3JkZXItMTAge1xuICAtbXMtZmxleC1vcmRlcjogMTA7XG4gIG9yZGVyOiAxMDtcbn1cblxuLm9yZGVyLTExIHtcbiAgLW1zLWZsZXgtb3JkZXI6IDExO1xuICBvcmRlcjogMTE7XG59XG5cbi5vcmRlci0xMiB7XG4gIC1tcy1mbGV4LW9yZGVyOiAxMjtcbiAgb3JkZXI6IDEyO1xufVxuXG4ub2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMlO1xufVxuXG4ub2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjY3JTtcbn1cblxuLm9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLm9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMyU7XG59XG5cbi5vZmZzZXQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjclO1xufVxuXG4ub2Zmc2V0LTYge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4ub2Zmc2V0LTcge1xuICBtYXJnaW4tbGVmdDogNTguMzMzMzMzJTtcbn1cblxuLm9mZnNldC04IHtcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NyU7XG59XG5cbi5vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG59XG5cbi5vZmZzZXQtMTAge1xuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzJTtcbn1cblxuLm9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjclO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmNvbC1zbSB7XG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb2wtc20tYXV0byB7XG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuY29sLXNtLTEge1xuICAgIC1tcy1mbGV4OiAwIDAgOC4zMzMzMzMlO1xuICAgIGZsZXg6IDAgMCA4LjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS0yIHtcbiAgICAtbXMtZmxleDogMCAwIDE2LjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDE2LjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjclO1xuICB9XG4gIC5jb2wtc20tMyB7XG4gICAgLW1zLWZsZXg6IDAgMCAyNSU7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgfVxuICAuY29sLXNtLTQge1xuICAgIC1tcy1mbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS01IHtcbiAgICAtbXMtZmxleDogMCAwIDQxLjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDQxLjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjclO1xuICB9XG4gIC5jb2wtc20tNiB7XG4gICAgLW1zLWZsZXg6IDAgMCA1MCU7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxuICAuY29sLXNtLTcge1xuICAgIC1tcy1mbGV4OiAwIDAgNTguMzMzMzMzJTtcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMyU7XG4gIH1cbiAgLmNvbC1zbS04IHtcbiAgICAtbXMtZmxleDogMCAwIDY2LjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDY2LjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjclO1xuICB9XG4gIC5jb2wtc20tOSB7XG4gICAgLW1zLWZsZXg6IDAgMCA3NSU7XG4gICAgZmxleDogMCAwIDc1JTtcbiAgICBtYXgtd2lkdGg6IDc1JTtcbiAgfVxuICAuY29sLXNtLTEwIHtcbiAgICAtbXMtZmxleDogMCAwIDgzLjMzMzMzMyU7XG4gICAgZmxleDogMCAwIDgzLjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMlO1xuICB9XG4gIC5jb2wtc20tMTEge1xuICAgIC1tcy1mbGV4OiAwIDAgOTEuNjY2NjY3JTtcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1zbS0xMiB7XG4gICAgLW1zLWZsZXg6IDAgMCAxMDAlO1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAub3JkZXItc20tZmlyc3Qge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcbiAgICBvcmRlcjogLTE7XG4gIH1cbiAgLm9yZGVyLXNtLWxhc3Qge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAxMztcbiAgICBvcmRlcjogMTM7XG4gIH1cbiAgLm9yZGVyLXNtLTAge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAwO1xuICAgIG9yZGVyOiAwO1xuICB9XG4gIC5vcmRlci1zbS0xIHtcbiAgICAtbXMtZmxleC1vcmRlcjogMTtcbiAgICBvcmRlcjogMTtcbiAgfVxuICAub3JkZXItc20tMiB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDI7XG4gICAgb3JkZXI6IDI7XG4gIH1cbiAgLm9yZGVyLXNtLTMge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAzO1xuICAgIG9yZGVyOiAzO1xuICB9XG4gIC5vcmRlci1zbS00IHtcbiAgICAtbXMtZmxleC1vcmRlcjogNDtcbiAgICBvcmRlcjogNDtcbiAgfVxuICAub3JkZXItc20tNSB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDU7XG4gICAgb3JkZXI6IDU7XG4gIH1cbiAgLm9yZGVyLXNtLTYge1xuICAgIC1tcy1mbGV4LW9yZGVyOiA2O1xuICAgIG9yZGVyOiA2O1xuICB9XG4gIC5vcmRlci1zbS03IHtcbiAgICAtbXMtZmxleC1vcmRlcjogNztcbiAgICBvcmRlcjogNztcbiAgfVxuICAub3JkZXItc20tOCB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDg7XG4gICAgb3JkZXI6IDg7XG4gIH1cbiAgLm9yZGVyLXNtLTkge1xuICAgIC1tcy1mbGV4LW9yZGVyOiA5O1xuICAgIG9yZGVyOiA5O1xuICB9XG4gIC5vcmRlci1zbS0xMCB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDEwO1xuICAgIG9yZGVyOiAxMDtcbiAgfVxuICAub3JkZXItc20tMTEge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAxMTtcbiAgICBvcmRlcjogMTE7XG4gIH1cbiAgLm9yZGVyLXNtLTEyIHtcbiAgICAtbXMtZmxleC1vcmRlcjogMTI7XG4gICAgb3JkZXI6IDEyO1xuICB9XG4gIC5vZmZzZXQtc20tMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLm9mZnNldC1zbS0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtc20tMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC1zbS0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5vZmZzZXQtc20tNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1zbS01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXNtLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cbiAgLm9mZnNldC1zbS03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXNtLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjclO1xuICB9XG4gIC5vZmZzZXQtc20tOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuICAub2Zmc2V0LXNtLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXNtLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY3JTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC1tZCB7XG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb2wtbWQtYXV0byB7XG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuY29sLW1kLTEge1xuICAgIC1tcy1mbGV4OiAwIDAgOC4zMzMzMzMlO1xuICAgIGZsZXg6IDAgMCA4LjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC0yIHtcbiAgICAtbXMtZmxleDogMCAwIDE2LjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDE2LjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtMyB7XG4gICAgLW1zLWZsZXg6IDAgMCAyNSU7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgfVxuICAuY29sLW1kLTQge1xuICAgIC1tcy1mbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC01IHtcbiAgICAtbXMtZmxleDogMCAwIDQxLjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDQxLjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtNiB7XG4gICAgLW1zLWZsZXg6IDAgMCA1MCU7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxuICAuY29sLW1kLTcge1xuICAgIC1tcy1mbGV4OiAwIDAgNTguMzMzMzMzJTtcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMyU7XG4gIH1cbiAgLmNvbC1tZC04IHtcbiAgICAtbXMtZmxleDogMCAwIDY2LjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDY2LjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjclO1xuICB9XG4gIC5jb2wtbWQtOSB7XG4gICAgLW1zLWZsZXg6IDAgMCA3NSU7XG4gICAgZmxleDogMCAwIDc1JTtcbiAgICBtYXgtd2lkdGg6IDc1JTtcbiAgfVxuICAuY29sLW1kLTEwIHtcbiAgICAtbXMtZmxleDogMCAwIDgzLjMzMzMzMyU7XG4gICAgZmxleDogMCAwIDgzLjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMlO1xuICB9XG4gIC5jb2wtbWQtMTEge1xuICAgIC1tcy1mbGV4OiAwIDAgOTEuNjY2NjY3JTtcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1tZC0xMiB7XG4gICAgLW1zLWZsZXg6IDAgMCAxMDAlO1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAub3JkZXItbWQtZmlyc3Qge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcbiAgICBvcmRlcjogLTE7XG4gIH1cbiAgLm9yZGVyLW1kLWxhc3Qge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAxMztcbiAgICBvcmRlcjogMTM7XG4gIH1cbiAgLm9yZGVyLW1kLTAge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAwO1xuICAgIG9yZGVyOiAwO1xuICB9XG4gIC5vcmRlci1tZC0xIHtcbiAgICAtbXMtZmxleC1vcmRlcjogMTtcbiAgICBvcmRlcjogMTtcbiAgfVxuICAub3JkZXItbWQtMiB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDI7XG4gICAgb3JkZXI6IDI7XG4gIH1cbiAgLm9yZGVyLW1kLTMge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAzO1xuICAgIG9yZGVyOiAzO1xuICB9XG4gIC5vcmRlci1tZC00IHtcbiAgICAtbXMtZmxleC1vcmRlcjogNDtcbiAgICBvcmRlcjogNDtcbiAgfVxuICAub3JkZXItbWQtNSB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDU7XG4gICAgb3JkZXI6IDU7XG4gIH1cbiAgLm9yZGVyLW1kLTYge1xuICAgIC1tcy1mbGV4LW9yZGVyOiA2O1xuICAgIG9yZGVyOiA2O1xuICB9XG4gIC5vcmRlci1tZC03IHtcbiAgICAtbXMtZmxleC1vcmRlcjogNztcbiAgICBvcmRlcjogNztcbiAgfVxuICAub3JkZXItbWQtOCB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDg7XG4gICAgb3JkZXI6IDg7XG4gIH1cbiAgLm9yZGVyLW1kLTkge1xuICAgIC1tcy1mbGV4LW9yZGVyOiA5O1xuICAgIG9yZGVyOiA5O1xuICB9XG4gIC5vcmRlci1tZC0xMCB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDEwO1xuICAgIG9yZGVyOiAxMDtcbiAgfVxuICAub3JkZXItbWQtMTEge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAxMTtcbiAgICBvcmRlcjogMTE7XG4gIH1cbiAgLm9yZGVyLW1kLTEyIHtcbiAgICAtbXMtZmxleC1vcmRlcjogMTI7XG4gICAgb3JkZXI6IDEyO1xuICB9XG4gIC5vZmZzZXQtbWQtMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLm9mZnNldC1tZC0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtbWQtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC1tZC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5vZmZzZXQtbWQtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1tZC01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LW1kLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cbiAgLm9mZnNldC1tZC03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LW1kLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjclO1xuICB9XG4gIC5vZmZzZXQtbWQtOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuICAub2Zmc2V0LW1kLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LW1kLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY3JTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbC1sZyB7XG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb2wtbGctYXV0byB7XG4gICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuY29sLWxnLTEge1xuICAgIC1tcy1mbGV4OiAwIDAgOC4zMzMzMzMlO1xuICAgIGZsZXg6IDAgMCA4LjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy0yIHtcbiAgICAtbXMtZmxleDogMCAwIDE2LjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDE2LjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NjclO1xuICB9XG4gIC5jb2wtbGctMyB7XG4gICAgLW1zLWZsZXg6IDAgMCAyNSU7XG4gICAgZmxleDogMCAwIDI1JTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgfVxuICAuY29sLWxnLTQge1xuICAgIC1tcy1mbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy01IHtcbiAgICAtbXMtZmxleDogMCAwIDQxLjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDQxLjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NjclO1xuICB9XG4gIC5jb2wtbGctNiB7XG4gICAgLW1zLWZsZXg6IDAgMCA1MCU7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxuICAuY29sLWxnLTcge1xuICAgIC1tcy1mbGV4OiAwIDAgNTguMzMzMzMzJTtcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzMyU7XG4gIH1cbiAgLmNvbC1sZy04IHtcbiAgICAtbXMtZmxleDogMCAwIDY2LjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDY2LjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NjclO1xuICB9XG4gIC5jb2wtbGctOSB7XG4gICAgLW1zLWZsZXg6IDAgMCA3NSU7XG4gICAgZmxleDogMCAwIDc1JTtcbiAgICBtYXgtd2lkdGg6IDc1JTtcbiAgfVxuICAuY29sLWxnLTEwIHtcbiAgICAtbXMtZmxleDogMCAwIDgzLjMzMzMzMyU7XG4gICAgZmxleDogMCAwIDgzLjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMzMlO1xuICB9XG4gIC5jb2wtbGctMTEge1xuICAgIC1tcy1mbGV4OiAwIDAgOTEuNjY2NjY3JTtcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY2NyU7XG4gIH1cbiAgLmNvbC1sZy0xMiB7XG4gICAgLW1zLWZsZXg6IDAgMCAxMDAlO1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAub3JkZXItbGctZmlyc3Qge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAtMTtcbiAgICBvcmRlcjogLTE7XG4gIH1cbiAgLm9yZGVyLWxnLWxhc3Qge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAxMztcbiAgICBvcmRlcjogMTM7XG4gIH1cbiAgLm9yZGVyLWxnLTAge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAwO1xuICAgIG9yZGVyOiAwO1xuICB9XG4gIC5vcmRlci1sZy0xIHtcbiAgICAtbXMtZmxleC1vcmRlcjogMTtcbiAgICBvcmRlcjogMTtcbiAgfVxuICAub3JkZXItbGctMiB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDI7XG4gICAgb3JkZXI6IDI7XG4gIH1cbiAgLm9yZGVyLWxnLTMge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAzO1xuICAgIG9yZGVyOiAzO1xuICB9XG4gIC5vcmRlci1sZy00IHtcbiAgICAtbXMtZmxleC1vcmRlcjogNDtcbiAgICBvcmRlcjogNDtcbiAgfVxuICAub3JkZXItbGctNSB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDU7XG4gICAgb3JkZXI6IDU7XG4gIH1cbiAgLm9yZGVyLWxnLTYge1xuICAgIC1tcy1mbGV4LW9yZGVyOiA2O1xuICAgIG9yZGVyOiA2O1xuICB9XG4gIC5vcmRlci1sZy03IHtcbiAgICAtbXMtZmxleC1vcmRlcjogNztcbiAgICBvcmRlcjogNztcbiAgfVxuICAub3JkZXItbGctOCB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDg7XG4gICAgb3JkZXI6IDg7XG4gIH1cbiAgLm9yZGVyLWxnLTkge1xuICAgIC1tcy1mbGV4LW9yZGVyOiA5O1xuICAgIG9yZGVyOiA5O1xuICB9XG4gIC5vcmRlci1sZy0xMCB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDEwO1xuICAgIG9yZGVyOiAxMDtcbiAgfVxuICAub3JkZXItbGctMTEge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAxMTtcbiAgICBvcmRlcjogMTE7XG4gIH1cbiAgLm9yZGVyLWxnLTEyIHtcbiAgICAtbXMtZmxleC1vcmRlcjogMTI7XG4gICAgb3JkZXI6IDEyO1xuICB9XG4gIC5vZmZzZXQtbGctMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLm9mZnNldC1sZy0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQtbGctMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC1sZy0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5vZmZzZXQtbGctNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC1sZy01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LWxnLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cbiAgLm9mZnNldC1sZy03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LWxnLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjclO1xuICB9XG4gIC5vZmZzZXQtbGctOSB7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgfVxuICAub2Zmc2V0LWxnLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LWxnLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY3JTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb2wteGwge1xuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuY29sLXhsLWF1dG8ge1xuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbC14bC0xIHtcbiAgICAtbXMtZmxleDogMCAwIDguMzMzMzMzJTtcbiAgICBmbGV4OiAwIDAgOC4zMzMzMzMlO1xuICAgIG1heC13aWR0aDogOC4zMzMzMzMlO1xuICB9XG4gIC5jb2wteGwtMiB7XG4gICAgLW1zLWZsZXg6IDAgMCAxNi42NjY2NjclO1xuICAgIGZsZXg6IDAgMCAxNi42NjY2NjclO1xuICAgIG1heC13aWR0aDogMTYuNjY2NjY3JTtcbiAgfVxuICAuY29sLXhsLTMge1xuICAgIC1tcy1mbGV4OiAwIDAgMjUlO1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiAyNSU7XG4gIH1cbiAgLmNvbC14bC00IHtcbiAgICAtbXMtZmxleDogMCAwIDMzLjMzMzMzMyU7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMlO1xuICB9XG4gIC5jb2wteGwtNSB7XG4gICAgLW1zLWZsZXg6IDAgMCA0MS42NjY2NjclO1xuICAgIGZsZXg6IDAgMCA0MS42NjY2NjclO1xuICAgIG1heC13aWR0aDogNDEuNjY2NjY3JTtcbiAgfVxuICAuY29sLXhsLTYge1xuICAgIC1tcy1mbGV4OiAwIDAgNTAlO1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbC14bC03IHtcbiAgICAtbXMtZmxleDogMCAwIDU4LjMzMzMzMyU7XG4gICAgZmxleDogMCAwIDU4LjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMlO1xuICB9XG4gIC5jb2wteGwtOCB7XG4gICAgLW1zLWZsZXg6IDAgMCA2Ni42NjY2NjclO1xuICAgIGZsZXg6IDAgMCA2Ni42NjY2NjclO1xuICAgIG1heC13aWR0aDogNjYuNjY2NjY3JTtcbiAgfVxuICAuY29sLXhsLTkge1xuICAgIC1tcy1mbGV4OiAwIDAgNzUlO1xuICAgIGZsZXg6IDAgMCA3NSU7XG4gICAgbWF4LXdpZHRoOiA3NSU7XG4gIH1cbiAgLmNvbC14bC0xMCB7XG4gICAgLW1zLWZsZXg6IDAgMCA4My4zMzMzMzMlO1xuICAgIGZsZXg6IDAgMCA4My4zMzMzMzMlO1xuICAgIG1heC13aWR0aDogODMuMzMzMzMzJTtcbiAgfVxuICAuY29sLXhsLTExIHtcbiAgICAtbXMtZmxleDogMCAwIDkxLjY2NjY2NyU7XG4gICAgZmxleDogMCAwIDkxLjY2NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjclO1xuICB9XG4gIC5jb2wteGwtMTIge1xuICAgIC1tcy1mbGV4OiAwIDAgMTAwJTtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm9yZGVyLXhsLWZpcnN0IHtcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XG4gICAgb3JkZXI6IC0xO1xuICB9XG4gIC5vcmRlci14bC1sYXN0IHtcbiAgICAtbXMtZmxleC1vcmRlcjogMTM7XG4gICAgb3JkZXI6IDEzO1xuICB9XG4gIC5vcmRlci14bC0wIHtcbiAgICAtbXMtZmxleC1vcmRlcjogMDtcbiAgICBvcmRlcjogMDtcbiAgfVxuICAub3JkZXIteGwtMSB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XG4gICAgb3JkZXI6IDE7XG4gIH1cbiAgLm9yZGVyLXhsLTIge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAyO1xuICAgIG9yZGVyOiAyO1xuICB9XG4gIC5vcmRlci14bC0zIHtcbiAgICAtbXMtZmxleC1vcmRlcjogMztcbiAgICBvcmRlcjogMztcbiAgfVxuICAub3JkZXIteGwtNCB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDQ7XG4gICAgb3JkZXI6IDQ7XG4gIH1cbiAgLm9yZGVyLXhsLTUge1xuICAgIC1tcy1mbGV4LW9yZGVyOiA1O1xuICAgIG9yZGVyOiA1O1xuICB9XG4gIC5vcmRlci14bC02IHtcbiAgICAtbXMtZmxleC1vcmRlcjogNjtcbiAgICBvcmRlcjogNjtcbiAgfVxuICAub3JkZXIteGwtNyB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDc7XG4gICAgb3JkZXI6IDc7XG4gIH1cbiAgLm9yZGVyLXhsLTgge1xuICAgIC1tcy1mbGV4LW9yZGVyOiA4O1xuICAgIG9yZGVyOiA4O1xuICB9XG4gIC5vcmRlci14bC05IHtcbiAgICAtbXMtZmxleC1vcmRlcjogOTtcbiAgICBvcmRlcjogOTtcbiAgfVxuICAub3JkZXIteGwtMTAge1xuICAgIC1tcy1mbGV4LW9yZGVyOiAxMDtcbiAgICBvcmRlcjogMTA7XG4gIH1cbiAgLm9yZGVyLXhsLTExIHtcbiAgICAtbXMtZmxleC1vcmRlcjogMTE7XG4gICAgb3JkZXI6IDExO1xuICB9XG4gIC5vcmRlci14bC0xMiB7XG4gICAgLW1zLWZsZXgtb3JkZXI6IDEyO1xuICAgIG9yZGVyOiAxMjtcbiAgfVxuICAub2Zmc2V0LXhsLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5vZmZzZXQteGwtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzJTtcbiAgfVxuICAub2Zmc2V0LXhsLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjclO1xuICB9XG4gIC5vZmZzZXQteGwtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgfVxuICAub2Zmc2V0LXhsLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMlO1xuICB9XG4gIC5vZmZzZXQteGwtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NyU7XG4gIH1cbiAgLm9mZnNldC14bC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5vZmZzZXQteGwtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC14bC04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY3JTtcbiAgfVxuICAub2Zmc2V0LXhsLTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIH1cbiAgLm9mZnNldC14bC0xMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMyU7XG4gIH1cbiAgLm9mZnNldC14bC0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NyU7XG4gIH1cbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4udGFibGUgdGgsXG4udGFibGUgdGQge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnRhYmxlIHRoZWFkIHRoIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi50YWJsZSB0Ym9keSArIHRib2R5IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi50YWJsZS1zbSB0aCxcbi50YWJsZS1zbSB0ZCB7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHRoLFxuLnRhYmxlLWJvcmRlcmVkIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRoLFxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xufVxuXG4udGFibGUtYm9yZGVybGVzcyB0aCxcbi50YWJsZS1ib3JkZXJsZXNzIHRkLFxuLnRhYmxlLWJvcmRlcmxlc3MgdGhlYWQgdGgsXG4udGFibGUtYm9yZGVybGVzcyB0Ym9keSArIHRib2R5IHtcbiAgYm9yZGVyOiAwO1xufVxuXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xufVxuXG4udGFibGUtcHJpbWFyeSxcbi50YWJsZS1wcmltYXJ5ID4gdGgsXG4udGFibGUtcHJpbWFyeSA+IHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZGFmZjtcbn1cblxuLnRhYmxlLXByaW1hcnkgdGgsXG4udGFibGUtcHJpbWFyeSB0ZCxcbi50YWJsZS1wcmltYXJ5IHRoZWFkIHRoLFxuLnRhYmxlLXByaW1hcnkgdGJvZHkgKyB0Ym9keSB7XG4gIGJvcmRlci1jb2xvcjogIzdhYmFmZjtcbn1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmY2RmZjtcbn1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1wcmltYXJ5OmhvdmVyID4gdGQsXG4udGFibGUtaG92ZXIgLnRhYmxlLXByaW1hcnk6aG92ZXIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZmNkZmY7XG59XG5cbi50YWJsZS1zZWNvbmRhcnksXG4udGFibGUtc2Vjb25kYXJ5ID4gdGgsXG4udGFibGUtc2Vjb25kYXJ5ID4gdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkOGRiO1xufVxuXG4udGFibGUtc2Vjb25kYXJ5IHRoLFxuLnRhYmxlLXNlY29uZGFyeSB0ZCxcbi50YWJsZS1zZWNvbmRhcnkgdGhlYWQgdGgsXG4udGFibGUtc2Vjb25kYXJ5IHRib2R5ICsgdGJvZHkge1xuICBib3JkZXItY29sb3I6ICNiM2I3YmI7XG59XG5cbi50YWJsZS1ob3ZlciAudGFibGUtc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4Y2JjZjtcbn1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1zZWNvbmRhcnk6aG92ZXIgPiB0ZCxcbi50YWJsZS1ob3ZlciAudGFibGUtc2Vjb25kYXJ5OmhvdmVyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjYmNmO1xufVxuXG4udGFibGUtc3VjY2Vzcyxcbi50YWJsZS1zdWNjZXNzID4gdGgsXG4udGFibGUtc3VjY2VzcyA+IHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MzZTZjYjtcbn1cblxuLnRhYmxlLXN1Y2Nlc3MgdGgsXG4udGFibGUtc3VjY2VzcyB0ZCxcbi50YWJsZS1zdWNjZXNzIHRoZWFkIHRoLFxuLnRhYmxlLXN1Y2Nlc3MgdGJvZHkgKyB0Ym9keSB7XG4gIGJvcmRlci1jb2xvcjogIzhmZDE5ZTtcbn1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxZGZiYjtcbn1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1zdWNjZXNzOmhvdmVyID4gdGQsXG4udGFibGUtaG92ZXIgLnRhYmxlLXN1Y2Nlc3M6aG92ZXIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWRmYmI7XG59XG5cbi50YWJsZS1pbmZvLFxuLnRhYmxlLWluZm8gPiB0aCxcbi50YWJsZS1pbmZvID4gdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVlNWViO1xufVxuXG4udGFibGUtaW5mbyB0aCxcbi50YWJsZS1pbmZvIHRkLFxuLnRhYmxlLWluZm8gdGhlYWQgdGgsXG4udGFibGUtaW5mbyB0Ym9keSArIHRib2R5IHtcbiAgYm9yZGVyLWNvbG9yOiAjODZjZmRhO1xufVxuXG4udGFibGUtaG92ZXIgLnRhYmxlLWluZm86aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJkZGU1O1xufVxuXG4udGFibGUtaG92ZXIgLnRhYmxlLWluZm86aG92ZXIgPiB0ZCxcbi50YWJsZS1ob3ZlciAudGFibGUtaW5mbzpob3ZlciA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiZGRlNTtcbn1cblxuLnRhYmxlLXdhcm5pbmcsXG4udGFibGUtd2FybmluZyA+IHRoLFxuLnRhYmxlLXdhcm5pbmcgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVlYmE7XG59XG5cbi50YWJsZS13YXJuaW5nIHRoLFxuLnRhYmxlLXdhcm5pbmcgdGQsXG4udGFibGUtd2FybmluZyB0aGVhZCB0aCxcbi50YWJsZS13YXJuaW5nIHRib2R5ICsgdGJvZHkge1xuICBib3JkZXItY29sb3I6ICNmZmRmN2U7XG59XG5cbi50YWJsZS1ob3ZlciAudGFibGUtd2FybmluZzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU4YTE7XG59XG5cbi50YWJsZS1ob3ZlciAudGFibGUtd2FybmluZzpob3ZlciA+IHRkLFxuLnRhYmxlLWhvdmVyIC50YWJsZS13YXJuaW5nOmhvdmVyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlOGExO1xufVxuXG4udGFibGUtZGFuZ2VyLFxuLnRhYmxlLWRhbmdlciA+IHRoLFxuLnRhYmxlLWRhbmdlciA+IHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzZjYjtcbn1cblxuLnRhYmxlLWRhbmdlciB0aCxcbi50YWJsZS1kYW5nZXIgdGQsXG4udGFibGUtZGFuZ2VyIHRoZWFkIHRoLFxuLnRhYmxlLWRhbmdlciB0Ym9keSArIHRib2R5IHtcbiAgYm9yZGVyLWNvbG9yOiAjZWQ5NjllO1xufVxuXG4udGFibGUtaG92ZXIgLnRhYmxlLWRhbmdlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWIwYjc7XG59XG5cbi50YWJsZS1ob3ZlciAudGFibGUtZGFuZ2VyOmhvdmVyID4gdGQsXG4udGFibGUtaG92ZXIgLnRhYmxlLWRhbmdlcjpob3ZlciA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYjBiNztcbn1cblxuLnRhYmxlLWxpZ2h0LFxuLnRhYmxlLWxpZ2h0ID4gdGgsXG4udGFibGUtbGlnaHQgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmU7XG59XG5cbi50YWJsZS1saWdodCB0aCxcbi50YWJsZS1saWdodCB0ZCxcbi50YWJsZS1saWdodCB0aGVhZCB0aCxcbi50YWJsZS1saWdodCB0Ym9keSArIHRib2R5IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmJmY2ZjO1xufVxuXG4udGFibGUtaG92ZXIgLnRhYmxlLWxpZ2h0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNmNjtcbn1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1saWdodDpob3ZlciA+IHRkLFxuLnRhYmxlLWhvdmVyIC50YWJsZS1saWdodDpob3ZlciA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNmNjtcbn1cblxuLnRhYmxlLWRhcmssXG4udGFibGUtZGFyayA+IHRoLFxuLnRhYmxlLWRhcmsgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNmM4Y2E7XG59XG5cbi50YWJsZS1kYXJrIHRoLFxuLnRhYmxlLWRhcmsgdGQsXG4udGFibGUtZGFyayB0aGVhZCB0aCxcbi50YWJsZS1kYXJrIHRib2R5ICsgdGJvZHkge1xuICBib3JkZXItY29sb3I6ICM5NTk5OWM7XG59XG5cbi50YWJsZS1ob3ZlciAudGFibGUtZGFyazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWJiYmU7XG59XG5cbi50YWJsZS1ob3ZlciAudGFibGUtZGFyazpob3ZlciA+IHRkLFxuLnRhYmxlLWhvdmVyIC50YWJsZS1kYXJrOmhvdmVyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliYmJlO1xufVxuXG4udGFibGUtYWN0aXZlLFxuLnRhYmxlLWFjdGl2ZSA+IHRoLFxuLnRhYmxlLWFjdGl2ZSA+IHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi50YWJsZS1ob3ZlciAudGFibGUtYWN0aXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi50YWJsZS1ob3ZlciAudGFibGUtYWN0aXZlOmhvdmVyID4gdGQsXG4udGFibGUtaG92ZXIgLnRhYmxlLWFjdGl2ZTpob3ZlciA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG5cbi50YWJsZSAudGhlYWQtZGFyayB0aCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICBib3JkZXItY29sb3I6ICM0NTRkNTU7XG59XG5cbi50YWJsZSAudGhlYWQtbGlnaHQgdGgge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xufVxuXG4udGFibGUtZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xufVxuXG4udGFibGUtZGFyayB0aCxcbi50YWJsZS1kYXJrIHRkLFxuLnRhYmxlLWRhcmsgdGhlYWQgdGgge1xuICBib3JkZXItY29sb3I6ICM0NTRkNTU7XG59XG5cbi50YWJsZS1kYXJrLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4udGFibGUtZGFyay50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xufVxuXG4udGFibGUtZGFyay50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC50YWJsZS1yZXNwb25zaXZlLXNtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfVxuICAudGFibGUtcmVzcG9uc2l2ZS1zbSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAudGFibGUtcmVzcG9uc2l2ZS1tZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cbiAgLnRhYmxlLXJlc3BvbnNpdmUtbWQgPiAudGFibGUtYm9yZGVyZWQge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUtbGcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG4gIC50YWJsZS1yZXNwb25zaXZlLWxnID4gLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAudGFibGUtcmVzcG9uc2l2ZS14bCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cbiAgLnRhYmxlLXJlc3BvbnNpdmUteGwgPiAudGFibGUtYm9yZGVyZWQge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uZm9ybS1jb250cm9sOjotbXMtZXhwYW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICM4MGJkZmY7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cblxuLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mb3JtLWNvbnRyb2w6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZm9ybS1jb250cm9sOmRpc2FibGVkLCAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIG9wYWNpdHk6IDE7XG59XG5cbnNlbGVjdC5mb3JtLWNvbnRyb2w6Zm9jdXM6Oi1tcy12YWx1ZSB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1jb250cm9sLWZpbGUsXG4uZm9ybS1jb250cm9sLXJhbmdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLWZvcm0tbGFiZWwge1xuICBwYWRkaW5nLXRvcDogY2FsYygwLjM3NXJlbSArIDFweCk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuMzc1cmVtICsgMXB4KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uY29sLWZvcm0tbGFiZWwtbGcge1xuICBwYWRkaW5nLXRvcDogY2FsYygwLjVyZW0gKyAxcHgpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjVyZW0gKyAxcHgpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5jb2wtZm9ybS1sYWJlbC1zbSB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDAuMjVyZW0gKyAxcHgpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjI1cmVtICsgMXB4KTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmZvcm0tY29udHJvbC1wbGFpbnRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAwLjM3NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMzc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogMXB4IDA7XG59XG5cbi5mb3JtLWNvbnRyb2wtcGxhaW50ZXh0LmZvcm0tY29udHJvbC1zbSwgLmZvcm0tY29udHJvbC1wbGFpbnRleHQuZm9ybS1jb250cm9sLWxnIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uZm9ybS1jb250cm9sLXNtIHtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC41cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cblxuLmZvcm0tY29udHJvbC1sZyB7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDFyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59XG5cbnNlbGVjdC5mb3JtLWNvbnRyb2xbc2l6ZV0sIHNlbGVjdC5mb3JtLWNvbnRyb2xbbXVsdGlwbGVdIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuXG4uZm9ybS1yb3cge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG4uZm9ybS1yb3cgPiAuY29sLFxuLmZvcm0tcm93ID4gW2NsYXNzKj1cImNvbC1cIl0ge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uZm9ybS1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbn1cblxuLmZvcm0tY2hlY2staW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IC0xLjI1cmVtO1xufVxuXG4uZm9ybS1jaGVjay1pbnB1dDpkaXNhYmxlZCB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmZvcm0tY2hlY2staW5saW5lIHtcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG59XG5cbi5mb3JtLWNoZWNrLWlubGluZSAuZm9ybS1jaGVjay1pbnB1dCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogODAlO1xuICBjb2xvcjogIzI4YTc0NTtcbn1cblxuLnZhbGlkLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogLjFyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjkpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLXZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZmlsbD0nJTIzMjhhNzQ1JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgY2FsYygwLjM3NWVtICsgMC4xODc1cmVtKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKSBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDp2YWxpZDpmb2N1cywgLmZvcm0tY29udHJvbC5pcy12YWxpZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuMjUpO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOnZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDp2YWxpZCB+IC52YWxpZC10b29sdGlwLCAuZm9ybS1jb250cm9sLmlzLXZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxuLmZvcm0tY29udHJvbC5pcy12YWxpZCB+IC52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53YXMtdmFsaWRhdGVkIHRleHRhcmVhLmZvcm0tY29udHJvbDp2YWxpZCwgdGV4dGFyZWEuZm9ybS1jb250cm9sLmlzLXZhbGlkIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2FsYygwLjM3NWVtICsgMC4xODc1cmVtKSByaWdodCBjYWxjKDAuMzc1ZW0gKyAwLjE4NzVyZW0pO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLXNlbGVjdDp2YWxpZCwgLmN1c3RvbS1zZWxlY3QuaXMtdmFsaWQge1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGMoKDFlbSArIDAuNzVyZW0pICogMyAvIDQgKyAxLjc1cmVtKTtcbiAgYmFja2dyb3VuZDogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPSclMjMzNDNhNDAnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2VcIikgbm8tcmVwZWF0IHJpZ2h0IDAuNzVyZW0gY2VudGVyLzhweCAxMHB4LCB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyUyMzI4YTc0NScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvJTNlJTNjL3N2ZyUzZVwiKSAjZmZmIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQgMS43NXJlbS9jYWxjKDAuNzVlbSArIDAuMzc1cmVtKSBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1zZWxlY3Q6dmFsaWQ6Zm9jdXMsIC5jdXN0b20tc2VsZWN0LmlzLXZhbGlkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC4yNSk7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tc2VsZWN0OnZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1zZWxlY3Q6dmFsaWQgfiAudmFsaWQtdG9vbHRpcCwgLmN1c3RvbS1zZWxlY3QuaXMtdmFsaWQgfiAudmFsaWQtZmVlZGJhY2ssXG4uY3VzdG9tLXNlbGVjdC5pcy12YWxpZCB+IC52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2wtZmlsZTp2YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2wtZmlsZTp2YWxpZCB+IC52YWxpZC10b29sdGlwLCAuZm9ybS1jb250cm9sLWZpbGUuaXMtdmFsaWQgfiAudmFsaWQtZmVlZGJhY2ssXG4uZm9ybS1jb250cm9sLWZpbGUuaXMtdmFsaWQgfiAudmFsaWQtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jaGVjay1pbnB1dDp2YWxpZCB+IC5mb3JtLWNoZWNrLWxhYmVsLCAuZm9ybS1jaGVjay1pbnB1dC5pcy12YWxpZCB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICMyOGE3NDU7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OnZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY2hlY2staW5wdXQ6dmFsaWQgfiAudmFsaWQtdG9vbHRpcCwgLmZvcm0tY2hlY2staW5wdXQuaXMtdmFsaWQgfiAudmFsaWQtZmVlZGJhY2ssXG4uZm9ybS1jaGVjay1pbnB1dC5pcy12YWxpZCB+IC52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDp2YWxpZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbCwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLXZhbGlkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgY29sb3I6ICMyOGE3NDU7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDp2YWxpZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQuaXMtdmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OnZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OnZhbGlkIH4gLnZhbGlkLXRvb2x0aXAsIC5jdXN0b20tY29udHJvbC1pbnB1dC5pcy12YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcbi5jdXN0b20tY29udHJvbC1pbnB1dC5pcy12YWxpZCB+IC52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDp2YWxpZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1pbnB1dC5pcy12YWxpZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICMzNGNlNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNGNlNTc7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDp2YWxpZDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQuaXMtdmFsaWQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjI1KTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OnZhbGlkOmZvY3VzOm5vdCg6Y2hlY2tlZCkgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLXZhbGlkOmZvY3VzOm5vdCg6Y2hlY2tlZCkgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1maWxlLWlucHV0OnZhbGlkIH4gLmN1c3RvbS1maWxlLWxhYmVsLCAuY3VzdG9tLWZpbGUtaW5wdXQuaXMtdmFsaWQgfiAuY3VzdG9tLWZpbGUtbGFiZWwge1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tZmlsZS1pbnB1dDp2YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tZmlsZS1pbnB1dDp2YWxpZCB+IC52YWxpZC10b29sdGlwLCAuY3VzdG9tLWZpbGUtaW5wdXQuaXMtdmFsaWQgfiAudmFsaWQtZmVlZGJhY2ssXG4uY3VzdG9tLWZpbGUtaW5wdXQuaXMtdmFsaWQgfiAudmFsaWQtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWZpbGUtaW5wdXQ6dmFsaWQ6Zm9jdXMgfiAuY3VzdG9tLWZpbGUtbGFiZWwsIC5jdXN0b20tZmlsZS1pbnB1dC5pcy12YWxpZDpmb2N1cyB+IC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuMjUpO1xufVxuXG4uaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDgwJTtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5pbnZhbGlkLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogLjFyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjkpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQsIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbiAgcGFkZGluZy1yaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0pO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nJTIzZGMzNTQ1JyB2aWV3Qm94PSctMiAtMiA3IDcnJTNlJTNjcGF0aCBzdHJva2U9JyUyM2RjMzU0NScgZD0nTTAgMGwzIDNtMC0zTDAgMycvJTNlJTNjY2lyY2xlIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3g9JzMnIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3k9JzMnIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3g9JzMnIGN5PSczJyByPScuNScvJTNlJTNjL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0IGNhbGMoMC4zNzVlbSArIDAuMTg3NXJlbSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY2FsYygwLjc1ZW0gKyAwLjM3NXJlbSkgY2FsYygwLjc1ZW0gKyAwLjM3NXJlbSk7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZDpmb2N1cywgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC4yNSk7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCwgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIH4gLmludmFsaWQtZmVlZGJhY2ssXG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQgfiAuaW52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53YXMtdmFsaWRhdGVkIHRleHRhcmVhLmZvcm0tY29udHJvbDppbnZhbGlkLCB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNhbGMoMC4zNzVlbSArIDAuMTg3NXJlbSkgcmlnaHQgY2FsYygwLjM3NWVtICsgMC4xODc1cmVtKTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1zZWxlY3Q6aW52YWxpZCwgLmN1c3RvbS1zZWxlY3QuaXMtaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbiAgcGFkZGluZy1yaWdodDogY2FsYygoMWVtICsgMC43NXJlbSkgKiAzIC8gNCArIDEuNzVyZW0pO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNSclM2UlM2NwYXRoIGZpbGw9JyUyMzM0M2E0MCcgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvJTNlJTNjL3N2ZyUzZVwiKSBuby1yZXBlYXQgcmlnaHQgMC43NXJlbSBjZW50ZXIvOHB4IDEwcHgsIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjNkYzM1NDUnIHZpZXdCb3g9Jy0yIC0yIDcgNyclM2UlM2NwYXRoIHN0cm9rZT0nJTIzZGMzNTQ1JyBkPSdNMCAwbDMgM20wLTNMMCAzJy8lM2UlM2NjaXJjbGUgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeD0nMycgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeT0nMycgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeD0nMycgY3k9JzMnIHI9Jy41Jy8lM2UlM2Mvc3ZnJTNFXCIpICNmZmYgbm8tcmVwZWF0IGNlbnRlciByaWdodCAxLjc1cmVtL2NhbGMoMC43NWVtICsgMC4zNzVyZW0pIGNhbGMoMC43NWVtICsgMC4zNzVyZW0pO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLXNlbGVjdDppbnZhbGlkOmZvY3VzLCAuY3VzdG9tLXNlbGVjdC5pcy1pbnZhbGlkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC4yNSk7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tc2VsZWN0OmludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tc2VsZWN0OmludmFsaWQgfiAuaW52YWxpZC10b29sdGlwLCAuY3VzdG9tLXNlbGVjdC5pcy1pbnZhbGlkIH4gLmludmFsaWQtZmVlZGJhY2ssXG4uY3VzdG9tLXNlbGVjdC5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sLWZpbGU6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbC1maWxlOmludmFsaWQgfiAuaW52YWxpZC10b29sdGlwLCAuZm9ybS1jb250cm9sLWZpbGUuaXMtaW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuLmZvcm0tY29udHJvbC1maWxlLmlzLWludmFsaWQgfiAuaW52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OmludmFsaWQgfiAuZm9ybS1jaGVjay1sYWJlbCwgLmZvcm0tY2hlY2staW5wdXQuaXMtaW52YWxpZCB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OmludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OmludmFsaWQgfiAuaW52YWxpZC10b29sdGlwLCAuZm9ybS1jaGVjay1pbnB1dC5pcy1pbnZhbGlkIH4gLmludmFsaWQtZmVlZGJhY2ssXG4uZm9ybS1jaGVjay1pbnB1dC5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6aW52YWxpZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbCwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLWludmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OmludmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLWludmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OmludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDppbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLWludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcbi5jdXN0b20tY29udHJvbC1pbnB1dC5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6aW52YWxpZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1pbnB1dC5pcy1pbnZhbGlkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogI2U0NjA2ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0NjA2ZDtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OmludmFsaWQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLWludmFsaWQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjI1KTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OmludmFsaWQ6Zm9jdXM6bm90KDpjaGVja2VkKSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQuaXMtaW52YWxpZDpmb2N1czpub3QoOmNoZWNrZWQpIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tZmlsZS1pbnB1dDppbnZhbGlkIH4gLmN1c3RvbS1maWxlLWxhYmVsLCAuY3VzdG9tLWZpbGUtaW5wdXQuaXMtaW52YWxpZCB+IC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1maWxlLWlucHV0OmludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tZmlsZS1pbnB1dDppbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCwgLmN1c3RvbS1maWxlLWlucHV0LmlzLWludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcbi5jdXN0b20tZmlsZS1pbnB1dC5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWZpbGUtaW5wdXQ6aW52YWxpZDpmb2N1cyB+IC5jdXN0b20tZmlsZS1sYWJlbCwgLmN1c3RvbS1maWxlLWlucHV0LmlzLWludmFsaWQ6Zm9jdXMgfiAuY3VzdG9tLWZpbGUtbGFiZWwge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjI1KTtcbn1cblxuLmZvcm0taW5saW5lIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybS1pbmxpbmUgLmZvcm0tY2hlY2sge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5mb3JtLWlubGluZSBsYWJlbCB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmZvcm0taW5saW5lIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAtbXMtZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5mb3JtLWlubGluZSAuZm9ybS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLmZvcm0tY29udHJvbC1wbGFpbnRleHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuZm9ybS1pbmxpbmUgLmlucHV0LWdyb3VwLFxuICAuZm9ybS1pbmxpbmUgLmN1c3RvbS1zZWxlY3Qge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5mb3JtLWlubGluZSAuZm9ybS1jaGVjayB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLmN1c3RvbS1jb250cm9sIHtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5mb3JtLWlubGluZSAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5idG4ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG46Zm9jdXMsIC5idG4uZm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59XG5cbi5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY1O1xufVxuXG5hLmJ0bi5kaXNhYmxlZCxcbmZpZWxkc2V0OmRpc2FibGVkIGEuYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OWQ5O1xuICBib3JkZXItY29sb3I6ICMwMDYyY2M7XG59XG5cbi5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1wcmltYXJ5LmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMzgsIDE0MywgMjU1LCAwLjUpO1xufVxuXG4uYnRuLXByaW1hcnkuZGlzYWJsZWQsIC5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG59XG5cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uc2hvdyA+IC5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYztcbiAgYm9yZGVyLWNvbG9yOiAjMDA1Y2JmO1xufVxuXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMzgsIDE0MywgMjU1LCAwLjUpO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xuICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTYyNjg7XG4gIGJvcmRlci1jb2xvcjogIzU0NWI2Mjtcbn1cblxuLmJ0bi1zZWNvbmRhcnk6Zm9jdXMsIC5idG4tc2Vjb25kYXJ5LmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTMwLCAxMzgsIDE0NSwgMC41KTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkuZGlzYWJsZWQsIC5idG4tc2Vjb25kYXJ5OmRpc2FibGVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcbn1cblxuLmJ0bi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uc2hvdyA+IC5idG4tc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1YjYyO1xuICBib3JkZXItY29sb3I6ICM0ZTU1NWI7XG59XG5cbi5idG4tc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuLnNob3cgPiAuYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMzAsIDEzOCwgMTQ1LCAwLjUpO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xufVxuXG4uYnRuLXN1Y2Nlc3M6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxODgzODtcbiAgYm9yZGVyLWNvbG9yOiAjMWU3ZTM0O1xufVxuXG4uYnRuLXN1Y2Nlc3M6Zm9jdXMsIC5idG4tc3VjY2Vzcy5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDcyLCAxODAsIDk3LCAwLjUpO1xufVxuXG4uYnRuLXN1Y2Nlc3MuZGlzYWJsZWQsIC5idG4tc3VjY2VzczpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG59XG5cbi5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uc2hvdyA+IC5idG4tc3VjY2Vzcy5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNDtcbiAgYm9yZGVyLWNvbG9yOiAjMWM3NDMwO1xufVxuXG4uYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuLnNob3cgPiAuYnRuLXN1Y2Nlc3MuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNzIsIDE4MCwgOTcsIDAuNSk7XG59XG5cbi5idG4taW5mbyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xuICBib3JkZXItY29sb3I6ICMxN2EyYjg7XG59XG5cbi5idG4taW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM4NDk2O1xuICBib3JkZXItY29sb3I6ICMxMTdhOGI7XG59XG5cbi5idG4taW5mbzpmb2N1cywgLmJ0bi1pbmZvLmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTgsIDE3NiwgMTk1LCAwLjUpO1xufVxuXG4uYnRuLWluZm8uZGlzYWJsZWQsIC5idG4taW5mbzpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xuICBib3JkZXItY29sb3I6ICMxN2EyYjg7XG59XG5cbi5idG4taW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4taW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uc2hvdyA+IC5idG4taW5mby5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExN2E4YjtcbiAgYm9yZGVyLWNvbG9yOiAjMTA3MDdmO1xufVxuXG4uYnRuLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuLnNob3cgPiAuYnRuLWluZm8uZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTgsIDE3NiwgMTk1LCAwLjUpO1xufVxuXG4uYnRuLXdhcm5pbmcge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xufVxuXG4uYnRuLXdhcm5pbmc6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwYTgwMDtcbiAgYm9yZGVyLWNvbG9yOiAjZDM5ZTAwO1xufVxuXG4uYnRuLXdhcm5pbmc6Zm9jdXMsIC5idG4td2FybmluZy5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMiwgMTcwLCAxMiwgMC41KTtcbn1cblxuLmJ0bi13YXJuaW5nLmRpc2FibGVkLCAuYnRuLXdhcm5pbmc6ZGlzYWJsZWQge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xufVxuXG4uYnRuLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLnNob3cgPiAuYnRuLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzllMDA7XG4gIGJvcmRlci1jb2xvcjogI2M2OTUwMDtcbn1cblxuLmJ0bi13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbi5zaG93ID4gLmJ0bi13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMiwgMTcwLCAxMiwgMC41KTtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uYnRuLWRhbmdlcjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzO1xuICBib3JkZXItY29sb3I6ICNiZDIxMzA7XG59XG5cbi5idG4tZGFuZ2VyOmZvY3VzLCAuYnRuLWRhbmdlci5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyNSwgODMsIDk3LCAwLjUpO1xufVxuXG4uYnRuLWRhbmdlci5kaXNhYmxlZCwgLmJ0bi1kYW5nZXI6ZGlzYWJsZWQge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uYnRuLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbi5zaG93ID4gLmJ0bi1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XG4gIGJvcmRlci1jb2xvcjogI2IyMWYyZDtcbn1cblxuLmJ0bi1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4uc2hvdyA+IC5idG4tZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyNSwgODMsIDk3LCAwLjUpO1xufVxuXG4uYnRuLWxpZ2h0IHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLmJ0bi1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhO1xuICBib3JkZXItY29sb3I6ICNkYWUwZTU7XG59XG5cbi5idG4tbGlnaHQ6Zm9jdXMsIC5idG4tbGlnaHQuZm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMTYsIDIxNywgMjE5LCAwLjUpO1xufVxuXG4uYnRuLWxpZ2h0LmRpc2FibGVkLCAuYnRuLWxpZ2h0OmRpc2FibGVkIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLnNob3cgPiAuYnRuLWxpZ2h0LmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU1O1xuICBib3JkZXItY29sb3I6ICNkM2Q5ZGY7XG59XG5cbi5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbi5zaG93ID4gLmJ0bi1saWdodC5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMTYsIDIxNywgMjE5LCAwLjUpO1xufVxuXG4uYnRuLWRhcmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgYm9yZGVyLWNvbG9yOiAjMzQzYTQwO1xufVxuXG4uYnRuLWRhcms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjcyYjtcbiAgYm9yZGVyLWNvbG9yOiAjMWQyMTI0O1xufVxuXG4uYnRuLWRhcms6Zm9jdXMsIC5idG4tZGFyay5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDgyLCA4OCwgOTMsIDAuNSk7XG59XG5cbi5idG4tZGFyay5kaXNhYmxlZCwgLmJ0bi1kYXJrOmRpc2FibGVkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gIGJvcmRlci1jb2xvcjogIzM0M2E0MDtcbn1cblxuLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbi5zaG93ID4gLmJ0bi1kYXJrLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTI0O1xuICBib3JkZXItY29sb3I6ICMxNzFhMWQ7XG59XG5cbi5idG4tZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4uc2hvdyA+IC5idG4tZGFyay5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg4MiwgODgsIDkzLCAwLjUpO1xufVxuXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6Zm9jdXMsIC5idG4tb3V0bGluZS1wcmltYXJ5LmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuNSk7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5LmRpc2FibGVkLCAuYnRuLW91dGxpbmUtcHJpbWFyeTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uc2hvdyA+IC5idG4tb3V0bGluZS1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuLnNob3cgPiAuYnRuLW91dGxpbmUtcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC41KTtcbn1cblxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkO1xufVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmZvY3VzLCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTA4LCAxMTcsIDEyNSwgMC41KTtcbn1cblxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLnNob3cgPiAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xuICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDgsIDExNywgMTI1LCAwLjUpO1xufVxuXG4uYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG59XG5cbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbn1cblxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6Zm9jdXMsIC5idG4tb3V0bGluZS1zdWNjZXNzLmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuNSk7XG59XG5cbi5idG4tb3V0bGluZS1zdWNjZXNzLmRpc2FibGVkLCAuYnRuLW91dGxpbmUtc3VjY2VzczpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG59XG5cbi5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuLnNob3cgPiAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC41KTtcbn1cblxuLmJ0bi1vdXRsaW5lLWluZm8ge1xuICBjb2xvcjogIzE3YTJiODtcbiAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4O1xufVxuXG4uYnRuLW91dGxpbmUtaW5mbzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xuICBib3JkZXItY29sb3I6ICMxN2EyYjg7XG59XG5cbi5idG4tb3V0bGluZS1pbmZvOmZvY3VzLCAuYnRuLW91dGxpbmUtaW5mby5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIzLCAxNjIsIDE4NCwgMC41KTtcbn1cblxuLmJ0bi1vdXRsaW5lLWluZm8uZGlzYWJsZWQsIC5idG4tb3V0bGluZS1pbmZvOmRpc2FibGVkIHtcbiAgY29sb3I6ICMxN2EyYjg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLW91dGxpbmUtaW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWluZm8uZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XG4gIGJvcmRlci1jb2xvcjogIzE3YTJiODtcbn1cblxuLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLW91dGxpbmUtaW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4uc2hvdyA+IC5idG4tb3V0bGluZS1pbmZvLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIzLCAxNjIsIDE4NCwgMC41KTtcbn1cblxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcge1xuICBjb2xvcjogI2ZmYzEwNztcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xufVxuXG4uYnRuLW91dGxpbmUtd2FybmluZzpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XG59XG5cbi5idG4tb3V0bGluZS13YXJuaW5nOmZvY3VzLCAuYnRuLW91dGxpbmUtd2FybmluZy5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI1NSwgMTkzLCA3LCAwLjUpO1xufVxuXG4uYnRuLW91dGxpbmUtd2FybmluZy5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLXdhcm5pbmc6ZGlzYWJsZWQge1xuICBjb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4tb3V0bGluZS13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLnNob3cgPiAuYnRuLW91dGxpbmUtd2FybmluZy5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xufVxuXG4uYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAxOTMsIDcsIDAuNSk7XG59XG5cbi5idG4tb3V0bGluZS1kYW5nZXIge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xufVxuXG4uYnRuLW91dGxpbmUtZGFuZ2VyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cblxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpmb2N1cywgLmJ0bi1vdXRsaW5lLWRhbmdlci5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xufVxuXG4uYnRuLW91dGxpbmUtZGFuZ2VyLmRpc2FibGVkLCAuYnRuLW91dGxpbmUtZGFuZ2VyOmRpc2FibGVkIHtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLW91dGxpbmUtZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uc2hvdyA+IC5idG4tb3V0bGluZS1kYW5nZXIuZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbn1cblxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuLnNob3cgPiAuYnRuLW91dGxpbmUtZGFuZ2VyLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQge1xuICBjb2xvcjogI2Y4ZjlmYTtcbiAgYm9yZGVyLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgYm9yZGVyLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQ6Zm9jdXMsIC5idG4tb3V0bGluZS1saWdodC5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI0OCwgMjQ5LCAyNTAsIDAuNSk7XG59XG5cbi5idG4tb3V0bGluZS1saWdodC5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLWxpZ2h0OmRpc2FibGVkIHtcbiAgY29sb3I6ICNmOGY5ZmE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLW91dGxpbmUtbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLnNob3cgPiAuYnRuLW91dGxpbmUtbGlnaHQuZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLmJ0bi1vdXRsaW5lLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1vdXRsaW5lLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWxpZ2h0LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI0OCwgMjQ5LCAyNTAsIDAuNSk7XG59XG5cbi5idG4tb3V0bGluZS1kYXJrIHtcbiAgY29sb3I6ICMzNDNhNDA7XG4gIGJvcmRlci1jb2xvcjogIzM0M2E0MDtcbn1cblxuLmJ0bi1vdXRsaW5lLWRhcms6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgYm9yZGVyLWNvbG9yOiAjMzQzYTQwO1xufVxuXG4uYnRuLW91dGxpbmUtZGFyazpmb2N1cywgLmJ0bi1vdXRsaW5lLWRhcmsuZm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1MiwgNTgsIDY0LCAwLjUpO1xufVxuXG4uYnRuLW91dGxpbmUtZGFyay5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLWRhcms6ZGlzYWJsZWQge1xuICBjb2xvcjogIzM0M2E0MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4tb3V0bGluZS1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuLnNob3cgPiAuYnRuLW91dGxpbmUtZGFyay5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgYm9yZGVyLWNvbG9yOiAjMzQzYTQwO1xufVxuXG4uYnRuLW91dGxpbmUtZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbi5zaG93ID4gLmJ0bi1vdXRsaW5lLWRhcmsuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTIsIDU4LCA2NCwgMC41KTtcbn1cblxuLmJ0bi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwMDU2YjM7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYnRuLWxpbms6Zm9jdXMsIC5idG4tbGluay5mb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLWxpbms6ZGlzYWJsZWQsIC5idG4tbGluay5kaXNhYmxlZCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi1sZywgLmJ0bi1ncm91cC1sZyA+IC5idG4ge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59XG5cbi5idG4tc20sIC5idG4tZ3JvdXAtc20gPiAuYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cblxuLmJ0bi1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0uYnRuLWJsb2NrLFxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLmJ0bi1ibG9jayxcbmlucHV0W3R5cGU9XCJidXR0b25cIl0uYnRuLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mYWRlIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5mYWRlIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5cbi5mYWRlOm5vdCguc2hvdykge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY29sbGFwc2U6bm90KC5zaG93KSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb2xsYXBzaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjM1cyBlYXNlO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuY29sbGFwc2luZyB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uZHJvcHVwLFxuLmRyb3ByaWdodCxcbi5kcm9wZG93bixcbi5kcm9wbGVmdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMC4yNTVlbTtcbiAgdmVydGljYWwtYWxpZ246IDAuMjU1ZW07XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDAuM2VtIHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IDAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6ZW1wdHk6OmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDEwcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgbWFyZ2luOiAwLjEyNXJlbSAwIDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5kcm9wZG93bi1tZW51LWxlZnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogMDtcbn1cblxuLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5kcm9wZG93bi1tZW51LXNtLWxlZnQge1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnUtc20tcmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kcm9wZG93bi1tZW51LW1kLWxlZnQge1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnUtbWQtcmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5kcm9wZG93bi1tZW51LWxnLWxlZnQge1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnUtbGctcmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZHJvcGRvd24tbWVudS14bC1sZWZ0IHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICB9XG4gIC5kcm9wZG93bi1tZW51LXhsLXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG59XG5cbi5kcm9wdXAgLmRyb3Bkb3duLW1lbnUge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMTAwJTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMC4xMjVyZW07XG59XG5cbi5kcm9wdXAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1NWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogMC4yNTVlbTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMC4zZW0gc29saWQ7XG4gIGJvcmRlci1sZWZ0OiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmRyb3B1cCAuZHJvcGRvd24tdG9nZ2xlOmVtcHR5OjphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZHJvcHJpZ2h0IC5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiAwO1xuICByaWdodDogYXV0bztcbiAgbGVmdDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDAuMTI1cmVtO1xufVxuXG4uZHJvcHJpZ2h0IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMC4yNTVlbTtcbiAgdmVydGljYWwtYWxpZ246IDAuMjU1ZW07XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMC4zZW0gc29saWQ7XG59XG5cbi5kcm9wcmlnaHQgLmRyb3Bkb3duLXRvZ2dsZTplbXB0eTo6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmRyb3ByaWdodCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiAwO1xufVxuXG4uZHJvcGxlZnQgLmRyb3Bkb3duLW1lbnUge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxMDAlO1xuICBsZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDAuMTI1cmVtO1xufVxuXG4uZHJvcGxlZnQgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1NWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogMC4yNTVlbTtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmRyb3BsZWZ0IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3BsZWZ0IC5kcm9wZG93bi10b2dnbGU6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1NWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogMC4yNTVlbTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMC4zZW0gc29saWQ7XG4gIGJvcmRlci1ib3R0b206IDAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uZHJvcGxlZnQgLmRyb3Bkb3duLXRvZ2dsZTplbXB0eTo6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmRyb3BsZWZ0IC5kcm9wZG93bi10b2dnbGU6OmJlZm9yZSB7XG4gIHZlcnRpY2FsLWFsaWduOiAwO1xufVxuXG4uZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49XCJ0b3BcIl0sIC5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj1cInJpZ2h0XCJdLCAuZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49XCJib3R0b21cIl0sIC5kcm9wZG93bi1tZW51W3gtcGxhY2VtZW50Xj1cImxlZnRcIl0ge1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZGl2aWRlciB7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjI1cmVtIDEuNXJlbTtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciwgLmRyb3Bkb3duLWl0ZW06Zm9jdXMge1xuICBjb2xvcjogIzE2MTgxYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4uZHJvcGRvd24taXRlbS5hY3RpdmUsIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG59XG5cbi5kcm9wZG93bi1pdGVtLmRpc2FibGVkLCAuZHJvcGRvd24taXRlbTpkaXNhYmxlZCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51LnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRyb3Bkb3duLWl0ZW0tdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjI1cmVtIDEuNXJlbTtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi5idG4tZ3JvdXAsXG4uYnRuLWdyb3VwLXZlcnRpY2FsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYnRuLWdyb3VwID4gLmJ0bixcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtbXMtZmxleDogMSAxIGF1dG87XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uYnRuLWdyb3VwID4gLmJ0bjpob3Zlcixcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuOmhvdmVyIHtcbiAgei1pbmRleDogMTtcbn1cblxuLmJ0bi1ncm91cCA+IC5idG46Zm9jdXMsIC5idG4tZ3JvdXAgPiAuYnRuOmFjdGl2ZSwgLmJ0bi1ncm91cCA+IC5idG4uYWN0aXZlLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG46Zm9jdXMsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjphY3RpdmUsXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi5hY3RpdmUge1xuICB6LWluZGV4OiAxO1xufVxuXG4uYnRuLXRvb2xiYXIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uYnRuLXRvb2xiYXIgLmlucHV0LWdyb3VwIHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5idG4tZ3JvdXAgPiAuYnRuOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cblxuLmJ0bi1ncm91cCA+IC5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSksXG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmJ0bi1ncm91cCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCksXG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlLXNwbGl0IHtcbiAgcGFkZGluZy1yaWdodDogMC41NjI1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNTYyNXJlbTtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdDo6YWZ0ZXIsXG4uZHJvcHVwIC5kcm9wZG93bi10b2dnbGUtc3BsaXQ6OmFmdGVyLFxuLmRyb3ByaWdodCAuZHJvcGRvd24tdG9nZ2xlLXNwbGl0OjphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uZHJvcGxlZnQgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdDo6YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uYnRuLXNtICsgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdCwgLmJ0bi1ncm91cC1zbSA+IC5idG4gKyAuZHJvcGRvd24tdG9nZ2xlLXNwbGl0IHtcbiAgcGFkZGluZy1yaWdodDogMC4zNzVyZW07XG4gIHBhZGRpbmctbGVmdDogMC4zNzVyZW07XG59XG5cbi5idG4tbGcgKyAuZHJvcGRvd24tdG9nZ2xlLXNwbGl0LCAuYnRuLWdyb3VwLWxnID4gLmJ0biArIC5kcm9wZG93bi10b2dnbGUtc3BsaXQge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG59XG5cbi5idG4tZ3JvdXAtdmVydGljYWwge1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4sXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKSxcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cblxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSksXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKSxcbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpID4gLmJ0biB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uYnRuLWdyb3VwLXRvZ2dsZSA+IC5idG4sXG4uYnRuLWdyb3VwLXRvZ2dsZSA+IC5idG4tZ3JvdXAgPiAuYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmJ0bi1ncm91cC10b2dnbGUgPiAuYnRuIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbi5idG4tZ3JvdXAtdG9nZ2xlID4gLmJ0biBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4uYnRuLWdyb3VwLXRvZ2dsZSA+IC5idG4tZ3JvdXAgPiAuYnRuIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbi5idG4tZ3JvdXAtdG9nZ2xlID4gLmJ0bi1ncm91cCA+IC5idG4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbC1wbGFpbnRleHQsXG4uaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLXNlbGVjdCxcbi5pbnB1dC1ncm91cCA+IC5jdXN0b20tZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2lkdGg6IDElO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sICsgLmZvcm0tY29udHJvbCxcbi5pbnB1dC1ncm91cCA+IC5mb3JtLWNvbnRyb2wgKyAuY3VzdG9tLXNlbGVjdCxcbi5pbnB1dC1ncm91cCA+IC5mb3JtLWNvbnRyb2wgKyAuY3VzdG9tLWZpbGUsXG4uaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sLXBsYWludGV4dCArIC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sLXBsYWludGV4dCArIC5jdXN0b20tc2VsZWN0LFxuLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbC1wbGFpbnRleHQgKyAuY3VzdG9tLWZpbGUsXG4uaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLXNlbGVjdCArIC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLXNlbGVjdCArIC5jdXN0b20tc2VsZWN0LFxuLmlucHV0LWdyb3VwID4gLmN1c3RvbS1zZWxlY3QgKyAuY3VzdG9tLWZpbGUsXG4uaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLWZpbGUgKyAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwID4gLmN1c3RvbS1maWxlICsgLmN1c3RvbS1zZWxlY3QsXG4uaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLWZpbGUgKyAuY3VzdG9tLWZpbGUge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cblxuLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbDpmb2N1cyxcbi5pbnB1dC1ncm91cCA+IC5jdXN0b20tc2VsZWN0OmZvY3VzLFxuLmlucHV0LWdyb3VwID4gLmN1c3RvbS1maWxlIC5jdXN0b20tZmlsZS1pbnB1dDpmb2N1cyB+IC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5pbnB1dC1ncm91cCA+IC5jdXN0b20tZmlsZSAuY3VzdG9tLWZpbGUtaW5wdXQ6Zm9jdXMge1xuICB6LWluZGV4OiA0O1xufVxuXG4uaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sOm5vdCg6bGFzdC1jaGlsZCksXG4uaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLXNlbGVjdDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmlucHV0LWdyb3VwID4gLmN1c3RvbS1zZWxlY3Q6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLWZpbGUge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0LWdyb3VwID4gLmN1c3RvbS1maWxlOm5vdCg6bGFzdC1jaGlsZCkgLmN1c3RvbS1maWxlLWxhYmVsLFxuLmlucHV0LWdyb3VwID4gLmN1c3RvbS1maWxlOm5vdCg6bGFzdC1jaGlsZCkgLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmlucHV0LWdyb3VwID4gLmN1c3RvbS1maWxlOm5vdCg6Zmlyc3QtY2hpbGQpIC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kLFxuLmlucHV0LWdyb3VwLWFwcGVuZCB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuYnRuLFxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuYnRuOmZvY3VzLFxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuOmZvY3VzIHtcbiAgei1pbmRleDogMztcbn1cblxuLmlucHV0LWdyb3VwLXByZXBlbmQgLmJ0biArIC5idG4sXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuYnRuICsgLmlucHV0LWdyb3VwLXRleHQsXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCArIC5pbnB1dC1ncm91cC10ZXh0LFxuLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQgKyAuYnRuLFxuLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuICsgLmJ0bixcbi5pbnB1dC1ncm91cC1hcHBlbmQgLmJ0biArIC5pbnB1dC1ncm91cC10ZXh0LFxuLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCArIC5pbnB1dC1ncm91cC10ZXh0LFxuLmlucHV0LWdyb3VwLWFwcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCArIC5idG4ge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cblxuLmlucHV0LWdyb3VwLXByZXBlbmQge1xuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG59XG5cbi5pbnB1dC1ncm91cC1hcHBlbmQge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uaW5wdXQtZ3JvdXAtdGV4dCBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4uaW5wdXQtZ3JvdXAtdGV4dCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uaW5wdXQtZ3JvdXAtbGcgPiAuZm9ybS1jb250cm9sOm5vdCh0ZXh0YXJlYSksXG4uaW5wdXQtZ3JvdXAtbGcgPiAuY3VzdG9tLXNlbGVjdCB7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDFyZW0gKyAycHgpO1xufVxuXG4uaW5wdXQtZ3JvdXAtbGcgPiAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLWxnID4gLmN1c3RvbS1zZWxlY3QsXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtcHJlcGVuZCA+IC5pbnB1dC1ncm91cC10ZXh0LFxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWFwcGVuZCA+IC5pbnB1dC1ncm91cC10ZXh0LFxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLXByZXBlbmQgPiAuYnRuLFxuLmlucHV0LWdyb3VwLWxnID4gLmlucHV0LWdyb3VwLWFwcGVuZCA+IC5idG4ge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59XG5cbi5pbnB1dC1ncm91cC1zbSA+IC5mb3JtLWNvbnRyb2w6bm90KHRleHRhcmVhKSxcbi5pbnB1dC1ncm91cC1zbSA+IC5jdXN0b20tc2VsZWN0IHtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC41cmVtICsgMnB4KTtcbn1cblxuLmlucHV0LWdyb3VwLXNtID4gLmZvcm0tY29udHJvbCxcbi5pbnB1dC1ncm91cC1zbSA+IC5jdXN0b20tc2VsZWN0LFxuLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLXByZXBlbmQgPiAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1hcHBlbmQgPiAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1wcmVwZW5kID4gLmJ0bixcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1hcHBlbmQgPiAuYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbn1cblxuLmlucHV0LWdyb3VwLWxnID4gLmN1c3RvbS1zZWxlY3QsXG4uaW5wdXQtZ3JvdXAtc20gPiAuY3VzdG9tLXNlbGVjdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNzVyZW07XG59XG5cbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1wcmVwZW5kID4gLmJ0bixcbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1wcmVwZW5kID4gLmlucHV0LWdyb3VwLXRleHQsXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuLFxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLWFwcGVuZDpub3QoOmxhc3QtY2hpbGQpID4gLmlucHV0LWdyb3VwLXRleHQsXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kOmxhc3QtY2hpbGQgPiAuYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpLFxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLWFwcGVuZDpsYXN0LWNoaWxkID4gLmlucHV0LWdyb3VwLXRleHQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLWFwcGVuZCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kID4gLmlucHV0LWdyb3VwLXRleHQsXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtcHJlcGVuZDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG4sXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtcHJlcGVuZDpub3QoOmZpcnN0LWNoaWxkKSA+IC5pbnB1dC1ncm91cC10ZXh0LFxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLXByZXBlbmQ6Zmlyc3QtY2hpbGQgPiAuYnRuOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLXByZXBlbmQ6Zmlyc3QtY2hpbGQgPiAuaW5wdXQtZ3JvdXAtdGV4dDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5jdXN0b20tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG59XG5cbi5jdXN0b20tY29udHJvbC1pbmxpbmUge1xuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5jdXN0b20tY29udHJvbC1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzOm5vdCg6Y2hlY2tlZCkgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0Om5vdCg6ZGlzYWJsZWQpOmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Q3ZmY7XG4gIGJvcmRlci1jb2xvcjogI2IzZDdmZjtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjI1cmVtO1xuICBsZWZ0OiAtMS41cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogI2FkYjViZCBzb2xpZCAxcHg7XG59XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC4yNXJlbTtcbiAgbGVmdDogLTEuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCUgLyA1MCUgNTAlO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyUyM2ZmZicgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2IDIuOTc0IDcuMjUgOCAyLjE5M3onLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmluZGV0ZXJtaW5hdGUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbn1cblxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6aW5kZXRlcm1pbmF0ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNCclM2UlM2NwYXRoIHN0cm9rZT0nJTIzZmZmJyBkPSdNMCAyaDQnLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTIzLCAyNTUsIDAuNSk7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmluZGV0ZXJtaW5hdGUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTIzLCAyNTUsIDAuNSk7XG59XG5cbi5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0nJTIzZmZmJy8lM2UlM2Mvc3ZnJTNlXCIpO1xufVxuXG4uY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyMywgMjU1LCAwLjUpO1xufVxuXG4uY3VzdG9tLXN3aXRjaCB7XG4gIHBhZGRpbmctbGVmdDogMi4yNXJlbTtcbn1cblxuLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBsZWZ0OiAtMi4yNXJlbTtcbiAgd2lkdGg6IDEuNzVyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIHRvcDogY2FsYygwLjI1cmVtICsgMnB4KTtcbiAgbGVmdDogY2FsYygtMi4yNXJlbSArIDJweCk7XG4gIHdpZHRoOiBjYWxjKDFyZW0gLSA0cHgpO1xuICBoZWlnaHQ6IGNhbGMoMXJlbSAtIDRweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uY3VzdG9tLXN3aXRjaCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjc1cmVtKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuNzVyZW0pO1xufVxuXG4uY3VzdG9tLXN3aXRjaCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC41KTtcbn1cblxuLmN1c3RvbS1zZWxlY3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMS43NXJlbSAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNSclM2UlM2NwYXRoIGZpbGw9JyUyMzM0M2E0MCcgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvJTNlJTNjL3N2ZyUzZVwiKSBuby1yZXBlYXQgcmlnaHQgMC43NXJlbSBjZW50ZXIvOHB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG4uY3VzdG9tLXNlbGVjdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xufVxuXG4uY3VzdG9tLXNlbGVjdDpmb2N1czo6LW1zLXZhbHVlIHtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5jdXN0b20tc2VsZWN0W211bHRpcGxlXSwgLmN1c3RvbS1zZWxlY3Rbc2l6ZV06bm90KFtzaXplPVwiMVwiXSkge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5jdXN0b20tc2VsZWN0OmRpc2FibGVkIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbi5jdXN0b20tc2VsZWN0OjotbXMtZXhwYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1c3RvbS1zZWxlY3Qtc20ge1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjVyZW0gKyAycHgpO1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4uY3VzdG9tLXNlbGVjdC1sZyB7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDFyZW0gKyAycHgpO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmN1c3RvbS1maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1maWxlLWxhYmVsIHtcbiAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59XG5cbi5jdXN0b20tZmlsZS1pbnB1dDpkaXNhYmxlZCB+IC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbi5jdXN0b20tZmlsZS1pbnB1dDpsYW5nKGVuKSB+IC5jdXN0b20tZmlsZS1sYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIkJyb3dzZVwiO1xufVxuXG4uY3VzdG9tLWZpbGUtaW5wdXQgfiAuY3VzdG9tLWZpbGUtbGFiZWxbZGF0YS1icm93c2VdOjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1icm93c2UpO1xufVxuXG4uY3VzdG9tLWZpbGUtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBjb250ZW50OiBcIkJyb3dzZVwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItbGVmdDogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbn1cblxuLmN1c3RvbS1yYW5nZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMXJlbSArIDAuNHJlbSk7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmN1c3RvbS1yYW5nZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jdXN0b20tcmFuZ2U6Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmYsIDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cblxuLmN1c3RvbS1yYW5nZTpmb2N1czo6LW1vei1yYW5nZS10aHVtYiB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjZmZmLCAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59XG5cbi5jdXN0b20tcmFuZ2U6Zm9jdXM6Oi1tcy10aHVtYiB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjZmZmLCAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59XG5cbi5jdXN0b20tcmFuZ2U6Oi1tb3otZm9jdXMtb3V0ZXIge1xuICBib3JkZXI6IDA7XG59XG5cbi5jdXN0b20tcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbWFyZ2luLXRvcDogLTAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5jdXN0b20tcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5cbi5jdXN0b20tcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Q3ZmY7XG59XG5cbi5jdXN0b20tcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMC41cmVtO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmN1c3RvbS1yYW5nZTo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5jdXN0b20tcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmN1c3RvbS1yYW5nZTo6LW1vei1yYW5nZS10aHVtYjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNkN2ZmO1xufVxuXG4uY3VzdG9tLXJhbmdlOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMC41cmVtO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmN1c3RvbS1yYW5nZTo6LW1zLXRodW1iIHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuY3VzdG9tLXJhbmdlOjotbXMtdGh1bWIge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmN1c3RvbS1yYW5nZTo6LW1zLXRodW1iOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Q3ZmY7XG59XG5cbi5jdXN0b20tcmFuZ2U6Oi1tcy10cmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItd2lkdGg6IDAuNXJlbTtcbn1cblxuLmN1c3RvbS1yYW5nZTo6LW1zLWZpbGwtbG93ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uY3VzdG9tLXJhbmdlOjotbXMtZmlsbC11cHBlciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmN1c3RvbS1yYW5nZTpkaXNhYmxlZDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xufVxuXG4uY3VzdG9tLXJhbmdlOmRpc2FibGVkOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmN1c3RvbS1yYW5nZTpkaXNhYmxlZDo6LW1vei1yYW5nZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XG59XG5cbi5jdXN0b20tcmFuZ2U6ZGlzYWJsZWQ6Oi1tb3otcmFuZ2UtdHJhY2sge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5jdXN0b20tcmFuZ2U6ZGlzYWJsZWQ6Oi1tcy10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1maWxlLWxhYmVsLFxuLmN1c3RvbS1zZWxlY3Qge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuICAuY3VzdG9tLWZpbGUtbGFiZWwsXG4gIC5jdXN0b20tc2VsZWN0IHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cblxuLm5hdi1saW5rOmhvdmVyLCAubmF2LWxpbms6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXYtbGluay5kaXNhYmxlZCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubmF2LXRhYnMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm5hdi10YWJzIC5uYXYtaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbmsge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIsIC5uYXYtdGFicyAubmF2LWxpbms6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNlOWVjZWYgI2U5ZWNlZiAjZGVlMmU2O1xufVxuXG4ubmF2LXRhYnMgLm5hdi1saW5rLmRpc2FibGVkIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSxcbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmsge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2ICNkZWUyZTYgI2ZmZjtcbn1cblxuLm5hdi10YWJzIC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi5uYXYtcGlsbHMgLm5hdi1saW5rIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxuLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xufVxuXG4ubmF2LWZpbGwgLm5hdi1pdGVtIHtcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2LWp1c3RpZmllZCAubmF2LWl0ZW0ge1xuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgZmxleC1iYXNpczogMDtcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFiLWNvbnRlbnQgPiAudGFiLXBhbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFiLWNvbnRlbnQgPiAuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5cbi5uYXZiYXIgPiAuY29udGFpbmVyLFxuLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAwLjMxMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjMxMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm5hdmJhci1icmFuZDpob3ZlciwgLm5hdmJhci1icmFuZDpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdmJhci1uYXYge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGZsb2F0OiBub25lO1xufVxuXG4ubmF2YmFyLXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5cbi5uYXZiYXItY29sbGFwc2Uge1xuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTAwJTtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdmJhci10b2dnbGVyIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5uYXZiYXItdG9nZ2xlcjpob3ZlciwgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEuNWVtO1xuICBoZWlnaHQ6IDEuNWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAubmF2YmFyLWV4cGFuZC1zbSA+IC5jb250YWluZXIsXG4gIC5uYXZiYXItZXhwYW5kLXNtID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5uYXZiYXItZXhwYW5kLXNtIHtcbiAgICAtbXMtZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgfVxuICAubmF2YmFyLWV4cGFuZC1zbSA+IC5jb250YWluZXIsXG4gIC5uYXZiYXItZXhwYW5kLXNtID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIC5uYXZiYXItZXhwYW5kLXNtIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiBhdXRvO1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gIH1cbiAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci10b2dnbGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAubmF2YmFyLWV4cGFuZC1tZCA+IC5jb250YWluZXIsXG4gIC5uYXZiYXItZXhwYW5kLW1kID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXItZXhwYW5kLW1kIHtcbiAgICAtbXMtZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgfVxuICAubmF2YmFyLWV4cGFuZC1tZCA+IC5jb250YWluZXIsXG4gIC5uYXZiYXItZXhwYW5kLW1kID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIC5uYXZiYXItZXhwYW5kLW1kIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiBhdXRvO1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gIH1cbiAgLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci10b2dnbGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAubmF2YmFyLWV4cGFuZC1sZyA+IC5jb250YWluZXIsXG4gIC5uYXZiYXItZXhwYW5kLWxnID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5uYXZiYXItZXhwYW5kLWxnIHtcbiAgICAtbXMtZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgfVxuICAubmF2YmFyLWV4cGFuZC1sZyA+IC5jb250YWluZXIsXG4gIC5uYXZiYXItZXhwYW5kLWxnID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG4gIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiBhdXRvO1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gIH1cbiAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci10b2dnbGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLm5hdmJhci1leHBhbmQteGwgPiAuY29udGFpbmVyLFxuICAubmF2YmFyLWV4cGFuZC14bCA+IC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm5hdmJhci1leHBhbmQteGwge1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICAubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiB7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICB9XG4gIC5uYXZiYXItZXhwYW5kLXhsID4gLmNvbnRhaW5lcixcbiAgLm5hdmJhci1leHBhbmQteGwgPiAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cbiAgLm5hdmJhci1leHBhbmQteGwgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IGF1dG87XG4gICAgZmxleC1iYXNpczogYXV0bztcbiAgfVxuICAubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm5hdmJhci1leHBhbmQge1xuICAtbXMtZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5uYXZiYXItZXhwYW5kID4gLmNvbnRhaW5lcixcbi5uYXZiYXItZXhwYW5kID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLm5hdmJhci1leHBhbmQgLm5hdmJhci1uYXYge1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm5hdmJhci1leHBhbmQgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uYXZiYXItZXhwYW5kIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG59XG5cbi5uYXZiYXItZXhwYW5kID4gLmNvbnRhaW5lcixcbi5uYXZiYXItZXhwYW5kID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5uYXZiYXItZXhwYW5kIC5uYXZiYXItY29sbGFwc2Uge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiBhdXRvO1xuICBmbGV4LWJhc2lzOiBhdXRvO1xufVxuXG4ubmF2YmFyLWV4cGFuZCAubmF2YmFyLXRvZ2dsZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQ6aG92ZXIsIC5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZDpmb2N1cyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIsIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5zaG93ID4gLm5hdi1saW5rLFxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAuYWN0aXZlID4gLm5hdi1saW5rLFxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuc2hvdyxcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGggc3Ryb2tlPSdyZ2JhKDAsIDAsIDAsIDAuNSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci10ZXh0IGEge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdGV4dCBhOmhvdmVyLCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItdGV4dCBhOmZvY3VzIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQ6aG92ZXIsIC5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLCAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5zaG93ID4gLm5hdi1saW5rLFxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5hY3RpdmUgPiAubmF2LWxpbmssXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLnNob3csXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10b2dnbGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjcGF0aCBzdHJva2U9J3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLXRleHQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10ZXh0IGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItdGV4dCBhOmhvdmVyLCAubmF2YmFyLWRhcmsgLm5hdmJhci10ZXh0IGE6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5jYXJkID4gaHIge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uY2FyZCA+IC5saXN0LWdyb3VwOmZpcnN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmNhcmQgPiAubGlzdC1ncm91cDpsYXN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMS4yNXJlbTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IC0wLjM3NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNhcmQtdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNhcmQtbGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNhcmQtbGluayArIC5jYXJkLWxpbmsge1xuICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG5cbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDFweCkgY2FsYygwLjI1cmVtIC0gMXB4KSAwIDA7XG59XG5cbi5jYXJkLWhlYWRlciArIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAwO1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cblxuLmNhcmQtZm9vdGVyOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAwIDAgY2FsYygwLjI1cmVtIC0gMXB4KSBjYWxjKDAuMjVyZW0gLSAxcHgpO1xufVxuXG4uY2FyZC1oZWFkZXItdGFicyB7XG4gIG1hcmdpbi1yaWdodDogLTAuNjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAtMC43NXJlbTtcbiAgbWFyZ2luLWxlZnQ6IC0wLjYyNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLmNhcmQtaGVhZGVyLXBpbGxzIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMC42MjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC42MjVyZW07XG59XG5cbi5jYXJkLWltZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEuMjVyZW07XG59XG5cbi5jYXJkLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAxcHgpO1xufVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDFweCk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAxcHgpO1xufVxuXG4uY2FyZC1pbWctYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAxcHgpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAxcHgpO1xufVxuXG4uY2FyZC1kZWNrIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2FyZC1kZWNrIC5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJkLWRlY2sge1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIH1cbiAgLmNhcmQtZGVjayAuY2FyZCB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleDogMSAwIDAlO1xuICAgIGZsZXg6IDEgMCAwJTtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG59XG5cbi5jYXJkLWdyb3VwIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2FyZC1ncm91cCA+IC5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJkLWdyb3VwIHtcbiAgICAtbXMtZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICB9XG4gIC5jYXJkLWdyb3VwID4gLmNhcmQge1xuICAgIC1tcy1mbGV4OiAxIDAgMCU7XG4gICAgZmxleDogMSAwIDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmNhcmQtZ3JvdXAgPiAuY2FyZCArIC5jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBib3JkZXItbGVmdDogMDtcbiAgfVxuICAuY2FyZC1ncm91cCA+IC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIC5jYXJkLWdyb3VwID4gLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSAuY2FyZC1pbWctdG9wLFxuICAuY2FyZC1ncm91cCA+IC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkgLmNhcmQtaGVhZGVyIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgfVxuICAuY2FyZC1ncm91cCA+IC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkgLmNhcmQtaW1nLWJvdHRvbSxcbiAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIC5jYXJkLWZvb3RlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbiAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4gIC5jYXJkLWdyb3VwID4gLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCkgLmNhcmQtaW1nLXRvcCxcbiAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKSAuY2FyZC1oZWFkZXIge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIH1cbiAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKSAuY2FyZC1pbWctYm90dG9tLFxuICAuY2FyZC1ncm91cCA+IC5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpIC5jYXJkLWZvb3RlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxufVxuXG4uY2FyZC1jb2x1bW5zIC5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJkLWNvbHVtbnMge1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xuICAgIC1tb3otY29sdW1uLWNvdW50OiAzO1xuICAgIGNvbHVtbi1jb3VudDogMztcbiAgICAtd2Via2l0LWNvbHVtbi1nYXA6IDEuMjVyZW07XG4gICAgLW1vei1jb2x1bW4tZ2FwOiAxLjI1cmVtO1xuICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gICAgb3JwaGFuczogMTtcbiAgICB3aWRvd3M6IDE7XG4gIH1cbiAgLmNhcmQtY29sdW1ucyAuY2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5hY2NvcmRpb24gPiAuY2FyZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hY2NvcmRpb24gPiAuY2FyZDpub3QoOmZpcnN0LW9mLXR5cGUpIC5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5hY2NvcmRpb24gPiAuY2FyZDpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5hY2NvcmRpb24gPiAuY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5hY2NvcmRpb24gPiAuY2FyZDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuLmFjY29yZGlvbiA+IC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBjb250ZW50OiBcIi9cIjtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06aG92ZXI6OmJlZm9yZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTpob3Zlcjo6YmVmb3JlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5wYWdlLWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICBjb2xvcjogIzAwN2JmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnBhZ2UtbGluazpob3ZlciB7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjMDA1NmIzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbn1cblxuLnBhZ2UtbGluazpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cblxuLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbn1cblxuLnBhZ2UtaXRlbS5kaXNhYmxlZCAucGFnZS1saW5rIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbn1cblxuLnBhZ2luYXRpb24tbGcgLnBhZ2UtbGluayB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5wYWdpbmF0aW9uLWxnIC5wYWdlLWl0ZW06Zmlyc3QtY2hpbGQgLnBhZ2UtbGluayB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xufVxuXG4ucGFnaW5hdGlvbi1sZyAucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGluayB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjNyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjNyZW07XG59XG5cbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWxpbmsge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnBhZ2luYXRpb24tc20gLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4ycmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjJyZW07XG59XG5cbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMnJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMnJlbTtcbn1cblxuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjI1ZW0gMC40ZW07XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5iYWRnZSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuXG5hLmJhZGdlOmhvdmVyLCBhLmJhZGdlOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYmFkZ2U6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnRuIC5iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuXG4uYmFkZ2UtcGlsbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbn1cblxuLmJhZGdlLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbn1cblxuYS5iYWRnZS1wcmltYXJ5OmhvdmVyLCBhLmJhZGdlLXByaW1hcnk6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYztcbn1cblxuYS5iYWRnZS1wcmltYXJ5OmZvY3VzLCBhLmJhZGdlLXByaW1hcnkuZm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC41KTtcbn1cblxuLmJhZGdlLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xufVxuXG5hLmJhZGdlLXNlY29uZGFyeTpob3ZlciwgYS5iYWRnZS1zZWNvbmRhcnk6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWI2Mjtcbn1cblxuYS5iYWRnZS1zZWNvbmRhcnk6Zm9jdXMsIGEuYmFkZ2Utc2Vjb25kYXJ5LmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTA4LCAxMTcsIDEyNSwgMC41KTtcbn1cblxuLmJhZGdlLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbn1cblxuYS5iYWRnZS1zdWNjZXNzOmhvdmVyLCBhLmJhZGdlLXN1Y2Nlc3M6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNDtcbn1cblxuYS5iYWRnZS1zdWNjZXNzOmZvY3VzLCBhLmJhZGdlLXN1Y2Nlc3MuZm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC41KTtcbn1cblxuLmJhZGdlLWluZm8ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcbn1cblxuYS5iYWRnZS1pbmZvOmhvdmVyLCBhLmJhZGdlLWluZm86Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExN2E4Yjtcbn1cblxuYS5iYWRnZS1pbmZvOmZvY3VzLCBhLmJhZGdlLWluZm8uZm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMywgMTYyLCAxODQsIDAuNSk7XG59XG5cbi5iYWRnZS13YXJuaW5nIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG5cbmEuYmFkZ2Utd2FybmluZzpob3ZlciwgYS5iYWRnZS13YXJuaW5nOmZvY3VzIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzllMDA7XG59XG5cbmEuYmFkZ2Utd2FybmluZzpmb2N1cywgYS5iYWRnZS13YXJuaW5nLmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAxOTMsIDcsIDAuNSk7XG59XG5cbi5iYWRnZS1kYW5nZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbn1cblxuYS5iYWRnZS1kYW5nZXI6aG92ZXIsIGEuYmFkZ2UtZGFuZ2VyOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XG59XG5cbmEuYmFkZ2UtZGFuZ2VyOmZvY3VzLCBhLmJhZGdlLWRhbmdlci5mb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjUpO1xufVxuXG4uYmFkZ2UtbGlnaHQge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuYS5iYWRnZS1saWdodDpob3ZlciwgYS5iYWRnZS1saWdodDpmb2N1cyB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU1O1xufVxuXG5hLmJhZGdlLWxpZ2h0OmZvY3VzLCBhLmJhZGdlLWxpZ2h0LmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjQ4LCAyNDksIDI1MCwgMC41KTtcbn1cblxuLmJhZGdlLWRhcmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cblxuYS5iYWRnZS1kYXJrOmhvdmVyLCBhLmJhZGdlLWRhcms6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEyNDtcbn1cblxuYS5iYWRnZS1kYXJrOmZvY3VzLCBhLmJhZGdlLWRhcmsuZm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1MiwgNTgsIDY0LCAwLjUpO1xufVxuXG4uanVtYm90cm9uIHtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuanVtYm90cm9uIHtcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIH1cbn1cblxuLmp1bWJvdHJvbi1mbHVpZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmFsZXJ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uYWxlcnQtaGVhZGluZyB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uYWxlcnQtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hbGVydC1kaXNtaXNzaWJsZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07XG59XG5cbi5hbGVydC1kaXNtaXNzaWJsZSAuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5hbGVydC1wcmltYXJ5IHtcbiAgY29sb3I6ICMwMDQwODU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2U1ZmY7XG4gIGJvcmRlci1jb2xvcjogI2I4ZGFmZjtcbn1cblxuLmFsZXJ0LXByaW1hcnkgaHIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjOWZjZGZmO1xufVxuXG4uYWxlcnQtcHJpbWFyeSAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjMDAyNzUyO1xufVxuXG4uYWxlcnQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICMzODNkNDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUzZTU7XG4gIGJvcmRlci1jb2xvcjogI2Q2ZDhkYjtcbn1cblxuLmFsZXJ0LXNlY29uZGFyeSBociB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNjOGNiY2Y7XG59XG5cbi5hbGVydC1zZWNvbmRhcnkgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzIwMjMyNjtcbn1cblxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzE1NTcyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgYm9yZGVyLWNvbG9yOiAjYzNlNmNiO1xufVxuXG4uYWxlcnQtc3VjY2VzcyBociB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNiMWRmYmI7XG59XG5cbi5hbGVydC1zdWNjZXNzIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICMwYjJlMTM7XG59XG5cbi5hbGVydC1pbmZvIHtcbiAgY29sb3I6ICMwYzU0NjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XG4gIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcbn1cblxuLmFsZXJ0LWluZm8gaHIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYWJkZGU1O1xufVxuXG4uYWxlcnQtaW5mbyAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjMDYyYzMzO1xufVxuXG4uYWxlcnQtd2FybmluZyB7XG4gIGNvbG9yOiAjODU2NDA0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuICBib3JkZXItY29sb3I6ICNmZmVlYmE7XG59XG5cbi5hbGVydC13YXJuaW5nIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZThhMTtcbn1cblxuLmFsZXJ0LXdhcm5pbmcgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzUzM2YwMztcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG59XG5cbi5hbGVydC1kYW5nZXIgaHIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZjFiMGI3O1xufVxuXG4uYWxlcnQtZGFuZ2VyIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICM0OTEyMTc7XG59XG5cbi5hbGVydC1saWdodCB7XG4gIGNvbG9yOiAjODE4MTgyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBib3JkZXItY29sb3I6ICNmZGZkZmU7XG59XG5cbi5hbGVydC1saWdodCBociB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNlY2VjZjY7XG59XG5cbi5hbGVydC1saWdodCAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAjNjg2ODY4O1xufVxuXG4uYWxlcnQtZGFyayB7XG4gIGNvbG9yOiAjMWIxZTIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkOGQ5O1xuICBib3JkZXItY29sb3I6ICNjNmM4Y2E7XG59XG5cbi5hbGVydC1kYXJrIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2I5YmJiZTtcbn1cblxuLmFsZXJ0LWRhcmsgLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogIzA0MDUwNTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHByb2dyZXNzLWJhci1zdHJpcGVzIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMXJlbSAwO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlcyB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDFyZW0gMDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICB9XG59XG5cbi5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC42cyBlYXNlO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAucHJvZ3Jlc3MtYmFyIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5cbi5wcm9ncmVzcy1iYXItc3RyaXBlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbTtcbn1cblxuLnByb2dyZXNzLWJhci1hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAucHJvZ3Jlc3MtYmFyLWFuaW1hdGVkIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLm1lZGlhIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5tZWRpYS1ib2R5IHtcbiAgLW1zLWZsZXg6IDE7XG4gIGZsZXg6IDE7XG59XG5cbi5saXN0LWdyb3VwIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpob3ZlciwgLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246Zm9jdXMge1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLWFjdGlvbjphY3RpdmUge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0uZGlzYWJsZWQsIC5saXN0LWdyb3VwLWl0ZW06ZGlzYWJsZWQge1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbn1cblxuLmxpc3QtZ3JvdXAtaG9yaXpvbnRhbCB7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubGlzdC1ncm91cC1ob3Jpem9udGFsIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5saXN0LWdyb3VwLWhvcml6b250YWwgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuXG4ubGlzdC1ncm91cC1ob3Jpem9udGFsIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmxpc3QtZ3JvdXAtaG9yaXpvbnRhbC1zbSB7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubGlzdC1ncm91cC1ob3Jpem9udGFsLXNtIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5saXN0LWdyb3VwLWhvcml6b250YWwtc20gLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIC5saXN0LWdyb3VwLWhvcml6b250YWwtc20gLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmxpc3QtZ3JvdXAtaG9yaXpvbnRhbC1tZCB7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubGlzdC1ncm91cC1ob3Jpem9udGFsLW1kIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5saXN0LWdyb3VwLWhvcml6b250YWwtbWQgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIC5saXN0LWdyb3VwLWhvcml6b250YWwtbWQgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmxpc3QtZ3JvdXAtaG9yaXpvbnRhbC1sZyB7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubGlzdC1ncm91cC1ob3Jpem9udGFsLWxnIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5saXN0LWdyb3VwLWhvcml6b250YWwtbGcgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICB9XG4gIC5saXN0LWdyb3VwLWhvcml6b250YWwtbGcgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5saXN0LWdyb3VwLWhvcml6b250YWwteGwge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmxpc3QtZ3JvdXAtaG9yaXpvbnRhbC14bCAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAubGlzdC1ncm91cC1ob3Jpem9udGFsLXhsIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgfVxuICAubGlzdC1ncm91cC1ob3Jpem9udGFsLXhsIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIH1cbn1cblxuLmxpc3QtZ3JvdXAtZmx1c2ggLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5saXN0LWdyb3VwLWZsdXNoIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5saXN0LWdyb3VwLWZsdXNoOmZpcnN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAwO1xufVxuXG4ubGlzdC1ncm91cC1mbHVzaDpsYXN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tcHJpbWFyeSB7XG4gIGNvbG9yOiAjMDA0MDg1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhkYWZmO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLXByaW1hcnkubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpob3ZlciwgLmxpc3QtZ3JvdXAtaXRlbS1wcmltYXJ5Lmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246Zm9jdXMge1xuICBjb2xvcjogIzAwNDA4NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmY2RmZjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS1wcmltYXJ5Lmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQwODU7XG4gIGJvcmRlci1jb2xvcjogIzAwNDA4NTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS1zZWNvbmRhcnkge1xuICBjb2xvcjogIzM4M2Q0MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDhkYjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS1zZWNvbmRhcnkubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpob3ZlciwgLmxpc3QtZ3JvdXAtaXRlbS1zZWNvbmRhcnkubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpmb2N1cyB7XG4gIGNvbG9yOiAjMzgzZDQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjYmNmO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLXNlY29uZGFyeS5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzZDQxO1xuICBib3JkZXItY29sb3I6ICMzODNkNDE7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyB7XG4gIGNvbG9yOiAjMTU1NzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNmNiO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpob3ZlciwgLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246Zm9jdXMge1xuICBjb2xvcjogIzE1NTcyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxZGZiYjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTU3MjQ7XG4gIGJvcmRlci1jb2xvcjogIzE1NTcyNDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS1pbmZvIHtcbiAgY29sb3I6ICMwYzU0NjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWU1ZWI7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0taW5mby5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmhvdmVyLCAubGlzdC1ncm91cC1pdGVtLWluZm8ubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpmb2N1cyB7XG4gIGNvbG9yOiAjMGM1NDYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJkZGU1O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLWluZm8ubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNTQ2MDtcbiAgYm9yZGVyLWNvbG9yOiAjMGM1NDYwO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcge1xuICBjb2xvcjogIzg1NjQwNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWViYTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS13YXJuaW5nLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246aG92ZXIsIC5saXN0LWdyb3VwLWl0ZW0td2FybmluZy5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmZvY3VzIHtcbiAgY29sb3I6ICM4NTY0MDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU4YTE7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0td2FybmluZy5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU2NDA0O1xuICBib3JkZXItY29sb3I6ICM4NTY0MDQ7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyIHtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWM2Y2I7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246aG92ZXIsIC5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246Zm9jdXMge1xuICBjb2xvcjogIzcyMWMyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYjBiNztcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyMWMyNDtcbiAgYm9yZGVyLWNvbG9yOiAjNzIxYzI0O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLWxpZ2h0IHtcbiAgY29sb3I6ICM4MTgxODI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmU7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tbGlnaHQubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpob3ZlciwgLmxpc3QtZ3JvdXAtaXRlbS1saWdodC5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmZvY3VzIHtcbiAgY29sb3I6ICM4MTgxODI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZjY7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tbGlnaHQubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxODE4MjtcbiAgYm9yZGVyLWNvbG9yOiAjODE4MTgyO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLWRhcmsge1xuICBjb2xvcjogIzFiMWUyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2YzhjYTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS1kYXJrLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246aG92ZXIsIC5saXN0LWdyb3VwLWl0ZW0tZGFyay5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmZvY3VzIHtcbiAgY29sb3I6ICMxYjFlMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWJiYmU7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tZGFyay5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZTIxO1xuICBib3JkZXItY29sb3I6ICMxYjFlMjE7XG59XG5cbi5jbG9zZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcbiAgb3BhY2l0eTogLjU7XG59XG5cbi5jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpob3ZlciwgLmNsb3NlOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmZvY3VzIHtcbiAgb3BhY2l0eTogLjc1O1xufVxuXG5idXR0b24uY2xvc2Uge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuYS5jbG9zZS5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udG9hc3Qge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuLnRvYXN0Om5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuXG4udG9hc3Quc2hvd2luZyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50b2FzdC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50b2FzdC5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvYXN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnRvYXN0LWJvZHkge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xufVxuXG4ubW9kYWwtb3BlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tb2RhbC1vcGVuIC5tb2RhbCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwNTA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IDA7XG59XG5cbi5tb2RhbC1kaWFsb2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTBweCk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cblxuLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5tb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxcmVtKTtcbn1cblxuLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDFyZW0pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUgLm1vZGFsLWhlYWRlcixcbi5tb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZSAubW9kYWwtZm9vdGVyIHtcbiAgLW1zLWZsZXgtbmVnYXRpdmU6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUgLm1vZGFsLWJvZHkge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubW9kYWwtZGlhbG9nLWNlbnRlcmVkIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDFyZW0pO1xufVxuXG4ubW9kYWwtZGlhbG9nLWNlbnRlcmVkOjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMXJlbSk7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5tb2RhbC1kaWFsb2ctY2VudGVyZWQubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUge1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubW9kYWwtZGlhbG9nLWNlbnRlcmVkLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogbm9uZTtcbn1cblxuLm1vZGFsLWRpYWxvZy1jZW50ZXJlZC5tb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZTo6YmVmb3JlIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgb3V0bGluZTogMDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwNDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wLmZhZGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubW9kYWwtYmFja2Ryb3Auc2hvdyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuM3JlbTtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIG1hcmdpbjogLTFyZW0gLTFyZW0gLTFyZW0gYXV0bztcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuM3JlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zcmVtO1xufVxuXG4ubW9kYWwtZm9vdGVyID4gOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1cblxuLm1vZGFsLWZvb3RlciA+IDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XG59XG5cbi5tb2RhbC1zY3JvbGxiYXItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcbiAgfVxuICAubW9kYWwtZGlhbG9nLXNjcm9sbGFibGUge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XG4gIH1cbiAgLm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIC5tb2RhbC1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtKTtcbiAgfVxuICAubW9kYWwtZGlhbG9nLWNlbnRlcmVkIHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjVyZW0pO1xuICB9XG4gIC5tb2RhbC1kaWFsb2ctY2VudGVyZWQ6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMy41cmVtKTtcbiAgfVxuICAubW9kYWwtc20ge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5tb2RhbC1sZyxcbiAgLm1vZGFsLXhsIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1vZGFsLXhsIHtcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgfVxufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA3MDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtYnJlYWs6IGF1dG87XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnRvb2x0aXAuc2hvdyB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnRvb2x0aXAgLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDAuOHJlbTtcbiAgaGVpZ2h0OiAwLjRyZW07XG59XG5cbi50b29sdGlwIC5hcnJvdzo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uYnMtdG9vbHRpcC10b3AsIC5icy10b29sdGlwLWF1dG9beC1wbGFjZW1lbnRePVwidG9wXCJdIHtcbiAgcGFkZGluZzogMC40cmVtIDA7XG59XG5cbi5icy10b29sdGlwLXRvcCAuYXJyb3csIC5icy10b29sdGlwLWF1dG9beC1wbGFjZW1lbnRePVwidG9wXCJdIC5hcnJvdyB7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJzLXRvb2x0aXAtdG9wIC5hcnJvdzo6YmVmb3JlLCAuYnMtdG9vbHRpcC1hdXRvW3gtcGxhY2VtZW50Xj1cInRvcFwiXSAuYXJyb3c6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXdpZHRoOiAwLjRyZW0gMC40cmVtIDA7XG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDA7XG59XG5cbi5icy10b29sdGlwLXJpZ2h0LCAuYnMtdG9vbHRpcC1hdXRvW3gtcGxhY2VtZW50Xj1cInJpZ2h0XCJdIHtcbiAgcGFkZGluZzogMCAwLjRyZW07XG59XG5cbi5icy10b29sdGlwLXJpZ2h0IC5hcnJvdywgLmJzLXRvb2x0aXAtYXV0b1t4LXBsYWNlbWVudF49XCJyaWdodFwiXSAuYXJyb3cge1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMC40cmVtO1xuICBoZWlnaHQ6IDAuOHJlbTtcbn1cblxuLmJzLXRvb2x0aXAtcmlnaHQgLmFycm93OjpiZWZvcmUsIC5icy10b29sdGlwLWF1dG9beC1wbGFjZW1lbnRePVwicmlnaHRcIl0gLmFycm93OjpiZWZvcmUge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXdpZHRoOiAwLjRyZW0gMC40cmVtIDAuNHJlbSAwO1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDA7XG59XG5cbi5icy10b29sdGlwLWJvdHRvbSwgLmJzLXRvb2x0aXAtYXV0b1t4LXBsYWNlbWVudF49XCJib3R0b21cIl0ge1xuICBwYWRkaW5nOiAwLjRyZW0gMDtcbn1cblxuLmJzLXRvb2x0aXAtYm90dG9tIC5hcnJvdywgLmJzLXRvb2x0aXAtYXV0b1t4LXBsYWNlbWVudF49XCJib3R0b21cIl0gLmFycm93IHtcbiAgdG9wOiAwO1xufVxuXG4uYnMtdG9vbHRpcC1ib3R0b20gLmFycm93OjpiZWZvcmUsIC5icy10b29sdGlwLWF1dG9beC1wbGFjZW1lbnRePVwiYm90dG9tXCJdIC5hcnJvdzo6YmVmb3JlIHtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItd2lkdGg6IDAgMC40cmVtIDAuNHJlbTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcbn1cblxuLmJzLXRvb2x0aXAtbGVmdCwgLmJzLXRvb2x0aXAtYXV0b1t4LXBsYWNlbWVudF49XCJsZWZ0XCJdIHtcbiAgcGFkZGluZzogMCAwLjRyZW07XG59XG5cbi5icy10b29sdGlwLWxlZnQgLmFycm93LCAuYnMtdG9vbHRpcC1hdXRvW3gtcGxhY2VtZW50Xj1cImxlZnRcIl0gLmFycm93IHtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAwLjRyZW07XG4gIGhlaWdodDogMC44cmVtO1xufVxuXG4uYnMtdG9vbHRpcC1sZWZ0IC5hcnJvdzo6YmVmb3JlLCAuYnMtdG9vbHRpcC1hdXRvW3gtcGxhY2VtZW50Xj1cImxlZnRcIl0gLmFycm93OjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICBib3JkZXItd2lkdGg6IDAuNHJlbSAwIDAuNHJlbSAwLjRyZW07XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwO1xufVxuXG4udG9vbHRpcC1pbm5lciB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4ucG9wb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDYwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAyNzZweDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtYnJlYWs6IGF1dG87XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG59XG5cbi5wb3BvdmVyIC5hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgbWFyZ2luOiAwIDAuM3JlbTtcbn1cblxuLnBvcG92ZXIgLmFycm93OjpiZWZvcmUsIC5wb3BvdmVyIC5hcnJvdzo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uYnMtcG9wb3Zlci10b3AsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwidG9wXCJdIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uYnMtcG9wb3Zlci10b3AgPiAuYXJyb3csIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwidG9wXCJdID4gLmFycm93IHtcbiAgYm90dG9tOiBjYWxjKCgwLjVyZW0gKyAxcHgpICogLTEpO1xufVxuXG4uYnMtcG9wb3Zlci10b3AgPiAuYXJyb3c6OmJlZm9yZSwgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJ0b3BcIl0gPiAuYXJyb3c6OmJlZm9yZSB7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXdpZHRoOiAwLjVyZW0gMC41cmVtIDA7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5icy1wb3BvdmVyLXRvcCA+IC5hcnJvdzo6YWZ0ZXIsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwidG9wXCJdID4gLmFycm93OjphZnRlciB7XG4gIGJvdHRvbTogMXB4O1xuICBib3JkZXItd2lkdGg6IDAuNXJlbSAwLjVyZW0gMDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcbn1cblxuLmJzLXBvcG92ZXItcmlnaHQsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwicmlnaHRcIl0ge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4uYnMtcG9wb3Zlci1yaWdodCA+IC5hcnJvdywgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJyaWdodFwiXSA+IC5hcnJvdyB7XG4gIGxlZnQ6IGNhbGMoKDAuNXJlbSArIDFweCkgKiAtMSk7XG4gIHdpZHRoOiAwLjVyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgbWFyZ2luOiAwLjNyZW0gMDtcbn1cblxuLmJzLXBvcG92ZXItcmlnaHQgPiAuYXJyb3c6OmJlZm9yZSwgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJyaWdodFwiXSA+IC5hcnJvdzo6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXdpZHRoOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xuICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5icy1wb3BvdmVyLXJpZ2h0ID4gLmFycm93OjphZnRlciwgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJyaWdodFwiXSA+IC5hcnJvdzo6YWZ0ZXIge1xuICBsZWZ0OiAxcHg7XG4gIGJvcmRlci13aWR0aDogMC41cmVtIDAuNXJlbSAwLjVyZW0gMDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xufVxuXG4uYnMtcG9wb3Zlci1ib3R0b20sIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwiYm90dG9tXCJdIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uYnMtcG9wb3Zlci1ib3R0b20gPiAuYXJyb3csIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwiYm90dG9tXCJdID4gLmFycm93IHtcbiAgdG9wOiBjYWxjKCgwLjVyZW0gKyAxcHgpICogLTEpO1xufVxuXG4uYnMtcG9wb3Zlci1ib3R0b20gPiAuYXJyb3c6OmJlZm9yZSwgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJib3R0b21cIl0gPiAuYXJyb3c6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4uYnMtcG9wb3Zlci1ib3R0b20gPiAuYXJyb3c6OmFmdGVyLCAuYnMtcG9wb3Zlci1hdXRvW3gtcGxhY2VtZW50Xj1cImJvdHRvbVwiXSA+IC5hcnJvdzo6YWZ0ZXIge1xuICB0b3A6IDFweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xufVxuXG4uYnMtcG9wb3Zlci1ib3R0b20gLnBvcG92ZXItaGVhZGVyOjpiZWZvcmUsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwiYm90dG9tXCJdIC5wb3BvdmVyLWhlYWRlcjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Y3Zjc7XG59XG5cbi5icy1wb3BvdmVyLWxlZnQsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwibGVmdFwiXSB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4uYnMtcG9wb3Zlci1sZWZ0ID4gLmFycm93LCAuYnMtcG9wb3Zlci1hdXRvW3gtcGxhY2VtZW50Xj1cImxlZnRcIl0gPiAuYXJyb3cge1xuICByaWdodDogY2FsYygoMC41cmVtICsgMXB4KSAqIC0xKTtcbiAgd2lkdGg6IDAuNXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBtYXJnaW46IDAuM3JlbSAwO1xufVxuXG4uYnMtcG9wb3Zlci1sZWZ0ID4gLmFycm93OjpiZWZvcmUsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwibGVmdFwiXSA+IC5hcnJvdzo6YmVmb3JlIHtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci13aWR0aDogMC41cmVtIDAgMC41cmVtIDAuNXJlbTtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5icy1wb3BvdmVyLWxlZnQgPiAuYXJyb3c6OmFmdGVyLCAuYnMtcG9wb3Zlci1hdXRvW3gtcGxhY2VtZW50Xj1cImxlZnRcIl0gPiAuYXJyb3c6OmFmdGVyIHtcbiAgcmlnaHQ6IDFweDtcbiAgYm9yZGVyLXdpZHRoOiAwLjVyZW0gMCAwLjVyZW0gMC41cmVtO1xuICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcbn1cblxuLnBvcG92ZXItaGVhZGVyIHtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcbn1cblxuLnBvcG92ZXItaGVhZGVyOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnBvcG92ZXItYm9keSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLmNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2Fyb3VzZWwucG9pbnRlci1ldmVudCB7XG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xuICB0b3VjaC1hY3Rpb246IHBhbi15O1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2Fyb3VzZWwtaW5uZXI6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IC0xMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5jYXJvdXNlbC1pdGVtIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSxcbi5jYXJvdXNlbC1pdGVtLW5leHQsXG4uY2Fyb3VzZWwtaXRlbS1wcmV2IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJvdXNlbC1pdGVtLW5leHQ6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpLFxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLmNhcm91c2VsLWl0ZW0tcHJldjpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpLFxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pdGVtIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLWxlZnQsXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQge1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tbGVmdCxcbi5jYXJvdXNlbC1mYWRlIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1yaWdodCB7XG4gIHotaW5kZXg6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDBzIDAuNnMgb3BhY2l0eTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmNhcm91c2VsLWZhZGUgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQsXG4gIC5jYXJvdXNlbC1mYWRlIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1yaWdodCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTUlO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbiAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2OmhvdmVyLCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2OmZvY3VzLFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dDpob3Zlcixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQ6Zm9jdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiAwO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBsZWZ0OiAwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IDUwJSAvIDEwMCUgMTAwJTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIik7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjNmZmYnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTU7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMTUlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtbXMtZmxleDogMCAxIGF1dG87XG4gIGZsZXg6IDAgMSBhdXRvO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICB0ZXh0LWluZGVudDogLTk5OXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IC41O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDE1JTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5uZXItYm9yZGVyIHtcbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lci1ib3JkZXIge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLnNwaW5uZXItYm9yZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIGJvcmRlcjogMC4yNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1ib3JkZXIgLjc1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3Bpbm5lci1ib3JkZXIgLjc1cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5zcGlubmVyLWJvcmRlci1zbSB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlci13aWR0aDogMC4yZW07XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGlubmVyLWdyb3cge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lci1ncm93IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uc3Bpbm5lci1ncm93IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lci1ncm93IC43NXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW5uZXItZ3JvdyAuNzVzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLnNwaW5uZXItZ3Jvdy1zbSB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG59XG5cbi5hbGlnbi1iYXNlbGluZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tdG9wIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tbWlkZGxlIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tYm90dG9tIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbSAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tdGV4dC1ib3R0b20ge1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b20gIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXRleHQtdG9wIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xufVxuXG5hLmJnLXByaW1hcnk6aG92ZXIsIGEuYmctcHJpbWFyeTpmb2N1cyxcbmJ1dHRvbi5iZy1wcmltYXJ5OmhvdmVyLFxuYnV0dG9uLmJnLXByaW1hcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MmNjICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG59XG5cbmEuYmctc2Vjb25kYXJ5OmhvdmVyLCBhLmJnLXNlY29uZGFyeTpmb2N1cyxcbmJ1dHRvbi5iZy1zZWNvbmRhcnk6aG92ZXIsXG5idXR0b24uYmctc2Vjb25kYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWI2MiAhaW1wb3J0YW50O1xufVxuXG4uYmctc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cblxuYS5iZy1zdWNjZXNzOmhvdmVyLCBhLmJnLXN1Y2Nlc3M6Zm9jdXMsXG5idXR0b24uYmctc3VjY2Vzczpob3ZlcixcbmJ1dHRvbi5iZy1zdWNjZXNzOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNCAhaW1wb3J0YW50O1xufVxuXG4uYmctaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcbn1cblxuYS5iZy1pbmZvOmhvdmVyLCBhLmJnLWluZm86Zm9jdXMsXG5idXR0b24uYmctaW5mbzpob3ZlcixcbmJ1dHRvbi5iZy1pbmZvOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExN2E4YiAhaW1wb3J0YW50O1xufVxuXG4uYmctd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cblxuYS5iZy13YXJuaW5nOmhvdmVyLCBhLmJnLXdhcm5pbmc6Zm9jdXMsXG5idXR0b24uYmctd2FybmluZzpob3ZlcixcbmJ1dHRvbi5iZy13YXJuaW5nOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUwMCAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG5hLmJnLWRhbmdlcjpob3ZlciwgYS5iZy1kYW5nZXI6Zm9jdXMsXG5idXR0b24uYmctZGFuZ2VyOmhvdmVyLFxuYnV0dG9uLmJnLWRhbmdlcjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzAgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xufVxuXG5hLmJnLWxpZ2h0OmhvdmVyLCBhLmJnLWxpZ2h0OmZvY3VzLFxuYnV0dG9uLmJnLWxpZ2h0OmhvdmVyLFxuYnV0dG9uLmJnLWxpZ2h0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4uYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDAgIWltcG9ydGFudDtcbn1cblxuYS5iZy1kYXJrOmhvdmVyLCBhLmJnLWRhcms6Zm9jdXMsXG5idXR0b24uYmctZGFyazpob3ZlcixcbmJ1dHRvbi5iZy1kYXJrOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjEyNCAhaW1wb3J0YW50O1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1yaWdodCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci0wIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdG9wLTAge1xuICBib3JkZXItdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcmlnaHQtMCB7XG4gIGJvcmRlci1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS0wIHtcbiAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxlZnQtMCB7XG4gIGJvcmRlci1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXNlY29uZGFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1pbmZvIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItd2FybmluZyB7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWRhbmdlciB7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItZGFyayB7XG4gIGJvcmRlci1jb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXdoaXRlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLXNtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZC10b3Age1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLXJpZ2h0IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZC1sZWZ0IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLWxnIHtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGVkLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ucm91bmRlZC1waWxsIHtcbiAgYm9yZGVyLXJhZGl1czogNTByZW0gIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtMCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cblxuLmNsZWFyZml4OjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmQtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmQtaW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbi5kLWlubGluZS1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4uZC1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5kLXRhYmxlIHtcbiAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbn1cblxuLmQtdGFibGUtcm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXRhYmxlLWNlbGwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLWlubGluZS1mbGV4IHtcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZC1zbS1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtc20taW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZC1zbS1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtc20tdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLWZsZXgge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXNtLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3ggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZC1tZC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbWQtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZC1tZC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbWQtdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLWZsZXgge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLW1kLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3ggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZC1sZy1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbGctaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZC1sZy1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLWxnLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLWxnLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLWxnLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtbGctdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLWxnLWZsZXgge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLWxnLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3ggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmQteGwtbm9uZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXhsLWlubGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQteGwtaW5saW5lLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC1ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC10YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC10YWJsZS1yb3cge1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXhsLXRhYmxlLWNlbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC1mbGV4IHtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxuICAuZC14bC1pbmxpbmUtZmxleCB7XG4gICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgcHJpbnQge1xuICAuZC1wcmludC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtcHJpbnQtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuZC1wcmludC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtcHJpbnQtdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LWZsZXgge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG4gIC5kLXByaW50LWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3ggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5lbWJlZC1yZXNwb25zaXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5lbWJlZC1yZXNwb25zaXZlOjpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmVtYmVkLXJlc3BvbnNpdmUgLmVtYmVkLXJlc3BvbnNpdmUtaXRlbSxcbi5lbWJlZC1yZXNwb25zaXZlIGlmcmFtZSxcbi5lbWJlZC1yZXNwb25zaXZlIGVtYmVkLFxuLmVtYmVkLXJlc3BvbnNpdmUgb2JqZWN0LFxuLmVtYmVkLXJlc3BvbnNpdmUgdmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IDA7XG59XG5cbi5lbWJlZC1yZXNwb25zaXZlLTIxYnk5OjpiZWZvcmUge1xuICBwYWRkaW5nLXRvcDogNDIuODU3MTQzJTtcbn1cblxuLmVtYmVkLXJlc3BvbnNpdmUtMTZieTk6OmJlZm9yZSB7XG4gIHBhZGRpbmctdG9wOiA1Ni4yNSU7XG59XG5cbi5lbWJlZC1yZXNwb25zaXZlLTRieTM6OmJlZm9yZSB7XG4gIHBhZGRpbmctdG9wOiA3NSU7XG59XG5cbi5lbWJlZC1yZXNwb25zaXZlLTFieTE6OmJlZm9yZSB7XG4gIHBhZGRpbmctdG9wOiAxMDAlO1xufVxuXG4uZmxleC1yb3cge1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LWNvbHVtbiB7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbn1cblxuLmZsZXgtcm93LXJldmVyc2Uge1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1jb2x1bW4tcmV2ZXJzZSB7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXdyYXAge1xuICAtbXMtZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1ub3dyYXAge1xuICAtbXMtZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmZsZXgtd3JhcC1yZXZlcnNlIHtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LWZpbGwge1xuICAtbXMtZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmZsZXgtZ3Jvdy0wIHtcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDAgIWltcG9ydGFudDtcbiAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LWdyb3ctMSB7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxICFpbXBvcnRhbnQ7XG4gIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xufVxuXG4uZmxleC1zaHJpbmstMCB7XG4gIC1tcy1mbGV4LW5lZ2F0aXZlOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXNocmluay0xIHtcbiAgLW1zLWZsZXgtbmVnYXRpdmU6IDEgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDtcbn1cblxuLmp1c3RpZnktY29udGVudC1zdGFydCB7XG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIC1tcy1mbGV4LXBhY2s6IGVuZCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnkgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZSAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24taXRlbXMtc3RhcnQge1xuICAtbXMtZmxleC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWl0ZW1zLWVuZCB7XG4gIC1tcy1mbGV4LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWl0ZW1zLWJhc2VsaW5lIHtcbiAgLW1zLWZsZXgtYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LXN0YXJ0IHtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdGFydCAhaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LWVuZCB7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogZW5kICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1jb250ZW50LWNlbnRlciB7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tY29udGVudC1iZXR3ZWVuIHtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmFsaWduLWNvbnRlbnQtYXJvdW5kIHtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBkaXN0cmlidXRlICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tY29udGVudC1zdHJldGNoIHtcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtYXV0byB7XG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG8gIWltcG9ydGFudDtcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tc2VsZi1zdGFydCB7XG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtZW5kIHtcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmFsaWduLXNlbGYtYmFzZWxpbmUge1xuICAtbXMtZmxleC1pdGVtLWFsaWduOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uYWxpZ24tc2VsZi1zdHJldGNoIHtcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RyZXRjaCAhaW1wb3J0YW50O1xuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZmxleC1zbS1yb3cge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXNtLWNvbHVtbiB7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tcm93LXJldmVyc2Uge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXNtLXdyYXAge1xuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS1ub3dyYXAge1xuICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20td3JhcC1yZXZlcnNlIHtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXNtLWZpbGwge1xuICAgIC1tcy1mbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtc20tZ3Jvdy0wIHtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXNtLWdyb3ctMSB7XG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDEgIWltcG9ydGFudDtcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1zbS1zaHJpbmstMCB7XG4gICAgLW1zLWZsZXgtbmVnYXRpdmU6IDAgIWltcG9ydGFudDtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXNtLXNocmluay0xIHtcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMSAhaW1wb3J0YW50O1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1zbS1zdGFydCB7XG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXNtLWVuZCB7XG4gICAgLW1zLWZsZXgtcGFjazogZW5kICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tY2VudGVyIHtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tYmV0d2VlbiB7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tYXJvdW5kIHtcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtc20tc3RhcnQge1xuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXNtLWVuZCB7XG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1zbS1jZW50ZXIge1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXNtLWJhc2VsaW5lIHtcbiAgICAtbXMtZmxleC1hbGlnbjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtc20tc3RyZXRjaCB7XG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXNtLXN0YXJ0IHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXNtLWVuZCB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBlbmQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXNtLWNlbnRlciB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1zbS1iZXR3ZWVuIHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtc20tYXJvdW5kIHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGRpc3RyaWJ1dGUgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1zbS1zdHJldGNoIHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtc20tYXV0byB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0byAhaW1wb3J0YW50O1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1zbS1zdGFydCB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtc20tZW5kIHtcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXNtLWNlbnRlciB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtc20tYmFzZWxpbmUge1xuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1zbS1zdHJldGNoIHtcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZmxleC1tZC1yb3cge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLWNvbHVtbiB7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbWQtcm93LXJldmVyc2Uge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLXdyYXAge1xuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1ub3dyYXAge1xuICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbWQtd3JhcC1yZXZlcnNlIHtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLWZpbGwge1xuICAgIC1tcy1mbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbWQtZ3Jvdy0wIHtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLWdyb3ctMSB7XG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDEgIWltcG9ydGFudDtcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1tZC1zaHJpbmstMCB7XG4gICAgLW1zLWZsZXgtbmVnYXRpdmU6IDAgIWltcG9ydGFudDtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LW1kLXNocmluay0xIHtcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMSAhaW1wb3J0YW50O1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1tZC1zdGFydCB7XG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LW1kLWVuZCB7XG4gICAgLW1zLWZsZXgtcGFjazogZW5kICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyIHtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlbiB7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtYXJvdW5kIHtcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbWQtc3RhcnQge1xuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLW1kLWVuZCB7XG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1tZC1jZW50ZXIge1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLW1kLWJhc2VsaW5lIHtcbiAgICAtbXMtZmxleC1hbGlnbjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbWQtc3RyZXRjaCB7XG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LW1kLXN0YXJ0IHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LW1kLWVuZCB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBlbmQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LW1kLWNlbnRlciB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1tZC1iZXR3ZWVuIHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtbWQtYXJvdW5kIHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGRpc3RyaWJ1dGUgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1tZC1zdHJldGNoIHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbWQtYXV0byB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0byAhaW1wb3J0YW50O1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1tZC1zdGFydCB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbWQtZW5kIHtcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLW1kLWNlbnRlciB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbWQtYmFzZWxpbmUge1xuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1tZC1zdHJldGNoIHtcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZmxleC1sZy1yb3cge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLWNvbHVtbiB7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctcm93LXJldmVyc2Uge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1sZy1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLXdyYXAge1xuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1sZy1ub3dyYXAge1xuICAgIC1tcy1mbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctd3JhcC1yZXZlcnNlIHtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLWZpbGwge1xuICAgIC1tcy1mbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgtbGctZ3Jvdy0wIHtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLWdyb3ctMSB7XG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDEgIWltcG9ydGFudDtcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC1sZy1zaHJpbmstMCB7XG4gICAgLW1zLWZsZXgtbmVnYXRpdmU6IDAgIWltcG9ydGFudDtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LWxnLXNocmluay0xIHtcbiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMSAhaW1wb3J0YW50O1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC1sZy1zdGFydCB7XG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LWxnLWVuZCB7XG4gICAgLW1zLWZsZXgtcGFjazogZW5kICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctY2VudGVyIHtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctYmV0d2VlbiB7XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeSAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctYXJvdW5kIHtcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbGctc3RhcnQge1xuICAgIC1tcy1mbGV4LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLWxnLWVuZCB7XG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy1sZy1jZW50ZXIge1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLWxnLWJhc2VsaW5lIHtcbiAgICAtbXMtZmxleC1hbGlnbjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMtbGctc3RyZXRjaCB7XG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LWxnLXN0YXJ0IHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LWxnLWVuZCB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBlbmQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LWxnLWNlbnRlciB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1sZy1iZXR3ZWVuIHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQtbGctYXJvdW5kIHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGRpc3RyaWJ1dGUgIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC1sZy1zdHJldGNoIHtcbiAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbGctYXV0byB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogYXV0byAhaW1wb3J0YW50O1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1sZy1zdGFydCB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbGctZW5kIHtcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLWxnLWNlbnRlciB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYtbGctYmFzZWxpbmUge1xuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi1sZy1zdHJldGNoIHtcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZsZXgteGwtcm93IHtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14bC1jb2x1bW4ge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLXJvdy1yZXZlcnNlIHtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtY29sdW1uLXJldmVyc2Uge1xuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14bC13cmFwIHtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtbm93cmFwIHtcbiAgICAtbXMtZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLXdyYXAtcmV2ZXJzZSB7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14bC1maWxsIHtcbiAgICAtbXMtZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5mbGV4LXhsLWdyb3ctMCB7XG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDAgIWltcG9ydGFudDtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14bC1ncm93LTEge1xuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxICFpbXBvcnRhbnQ7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsZXgteGwtc2hyaW5rLTAge1xuICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwICFpbXBvcnRhbnQ7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgfVxuICAuZmxleC14bC1zaHJpbmstMSB7XG4gICAgLW1zLWZsZXgtbmVnYXRpdmU6IDEgIWltcG9ydGFudDtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50O1xuICB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtc3RhcnQge1xuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmp1c3RpZnktY29udGVudC14bC1lbmQge1xuICAgIC1tcy1mbGV4LXBhY2s6IGVuZCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLWNlbnRlciB7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLWJldHdlZW4ge1xuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLWFyb3VuZCB7XG4gICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZSAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXhsLXN0YXJ0IHtcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy14bC1lbmQge1xuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24taXRlbXMteGwtY2VudGVyIHtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1pdGVtcy14bC1iYXNlbGluZSB7XG4gICAgLW1zLWZsZXgtYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWl0ZW1zLXhsLXN0cmV0Y2gge1xuICAgIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC14bC1zdGFydCB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdGFydCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC14bC1lbmQge1xuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogZW5kICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tY29udGVudC14bC1jZW50ZXIge1xuICAgIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQteGwtYmV0d2VlbiB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1jb250ZW50LXhsLWFyb3VuZCB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBkaXN0cmlidXRlICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLWNvbnRlbnQteGwtc3RyZXRjaCB7XG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXhsLWF1dG8ge1xuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGF1dG8gIWltcG9ydGFudDtcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYteGwtc3RhcnQge1xuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXhsLWVuZCB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgfVxuICAuYWxpZ24tc2VsZi14bC1jZW50ZXIge1xuICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1zZWxmLXhsLWJhc2VsaW5lIHtcbiAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBiYXNlbGluZSAhaW1wb3J0YW50O1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFsaWduLXNlbGYteGwtc3RyZXRjaCB7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RyZXRjaCAhaW1wb3J0YW50O1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5mbG9hdC1yaWdodCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uZmxvYXQtbm9uZSB7XG4gIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZmxvYXQtc20tbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICAuZmxvYXQtc20tcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbG9hdC1zbS1ub25lIHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZmxvYXQtbWQtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICAuZmxvYXQtbWQtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbG9hdC1tZC1ub25lIHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuZmxvYXQtbGctbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICAuZmxvYXQtbGctcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIC5mbG9hdC1sZy1ub25lIHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZsb2F0LXhsLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZsb2F0LXhsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICAuZmxvYXQteGwtbm9uZSB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ub3ZlcmZsb3ctYXV0byB7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVyZmxvdy1oaWRkZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5wb3NpdGlvbi1zdGF0aWMge1xuICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG59XG5cbi5wb3NpdGlvbi1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xufVxuXG4ucG9zaXRpb24tYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbn1cblxuLnBvc2l0aW9uLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG59XG5cbi5wb3NpdGlvbi1zdGlja3kge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xufVxuXG4uZml4ZWQtdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDMwO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDMwO1xufVxuXG5Ac3VwcG9ydHMgKChwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kpIG9yIChwb3NpdGlvbjogc3RpY2t5KSkge1xuICAuc3RpY2t5LXRvcCB7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwMjA7XG4gIH1cbn1cblxuLnNyLW9ubHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXI6IDA7XG59XG5cbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsIC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBjbGlwOiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uc2hhZG93LXNtIHtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpICFpbXBvcnRhbnQ7XG59XG5cbi5zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbn1cblxuLnNoYWRvdy1sZyB7XG4gIGJveC1zaGFkb3c6IDAgMXJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4xNzUpICFpbXBvcnRhbnQ7XG59XG5cbi5zaGFkb3ctbm9uZSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnctMjUge1xuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG59XG5cbi53LTUwIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4udy03NSB7XG4gIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcbn1cblxuLnctMTAwIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnctYXV0byB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5oLTI1IHtcbiAgaGVpZ2h0OiAyNSUgIWltcG9ydGFudDtcbn1cblxuLmgtNTAge1xuICBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4uaC03NSB7XG4gIGhlaWdodDogNzUlICFpbXBvcnRhbnQ7XG59XG5cbi5oLTEwMCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaC1hdXRvIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tdy0xMDAge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1oLTEwMCB7XG4gIG1heC1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1pbi12dy0xMDAge1xuICBtaW4td2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG59XG5cbi5taW4tdmgtMTAwIHtcbiAgbWluLWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbn1cblxuLnZ3LTEwMCB7XG4gIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xufVxuXG4udmgtMTAwIHtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuXG4uc3RyZXRjaGVkLWxpbms6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4ubS0wIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0wLFxuLm15LTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tci0wLFxuLm14LTAge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLm1iLTAsXG4ubXktMCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm1sLTAsXG4ubXgtMCB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tLTEge1xuICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTEsXG4ubXktMSB7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTEsXG4ubXgtMSB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItMSxcbi5teS0xIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtMSxcbi5teC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tMiB7XG4gIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yLFxuLm15LTIge1xuICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTIsXG4ubXgtMiB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0yLFxuLm15LTIge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTIsXG4ubXgtMiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tMyB7XG4gIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtMyxcbi5teS0zIHtcbiAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItMyxcbi5teC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0zLFxuLm15LTMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC0zLFxuLm14LTMge1xuICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS00IHtcbiAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTQsXG4ubXktNCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItNCxcbi5teC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTQsXG4ubXktNCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtNCxcbi5teC00IHtcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS01IHtcbiAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC01LFxuLm15LTUge1xuICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci01LFxuLm14LTUge1xuICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTUsXG4ubXktNSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTUsXG4ubXgtNSB7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wLTAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0wLFxuLnB5LTAge1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ucHItMCxcbi5weC0wIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4ucGItMCxcbi5weS0wIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLnBsLTAsXG4ucHgtMCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ucC0xIHtcbiAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMSxcbi5weS0xIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTEsXG4ucHgtMSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTEsXG4ucHktMSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0xLFxuLnB4LTEge1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtMiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMixcbi5weS0yIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHItMixcbi5weC0yIHtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi0yLFxuLnB5LTIge1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0yLFxuLnB4LTIge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucC0zIHtcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtMyxcbi5weS0zIHtcbiAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTMsXG4ucHgtMyB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTMsXG4ucHktMyB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0zLFxuLnB4LTMge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtNCB7XG4gIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtNCxcbi5weS00IHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHItNCxcbi5weC00IHtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi00LFxuLnB5LTQge1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC00LFxuLnB4LTQge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucC01IHtcbiAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtNSxcbi5weS01IHtcbiAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTUsXG4ucHgtNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTUsXG4ucHktNSB7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wbC01LFxuLnB4LTUge1xuICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjEge1xuICBtYXJnaW46IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uMSxcbi5teS1uMSB7XG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uMSxcbi5teC1uMSB7XG4gIG1hcmdpbi1yaWdodDogLTAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW4xLFxuLm15LW4xIHtcbiAgbWFyZ2luLWJvdHRvbTogLTAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW4xLFxuLm14LW4xIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLW4yIHtcbiAgbWFyZ2luOiAtMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uMixcbi5teS1uMiB7XG4gIG1hcmdpbi10b3A6IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLW4yLFxuLm14LW4yIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1uMixcbi5teS1uMiB7XG4gIG1hcmdpbi1ib3R0b206IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW4yLFxuLm14LW4yIHtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjMge1xuICBtYXJnaW46IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uMyxcbi5teS1uMyB7XG4gIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uMyxcbi5teC1uMyB7XG4gIG1hcmdpbi1yaWdodDogLTFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW4zLFxuLm15LW4zIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW4zLFxuLm14LW4zIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLW40IHtcbiAgbWFyZ2luOiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uNCxcbi5teS1uNCB7XG4gIG1hcmdpbi10b3A6IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLW40LFxuLm14LW40IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1uNCxcbi5teS1uNCB7XG4gIG1hcmdpbi1ib3R0b206IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW40LFxuLm14LW40IHtcbiAgbWFyZ2luLWxlZnQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjUge1xuICBtYXJnaW46IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1uNSxcbi5teS1uNSB7XG4gIG1hcmdpbi10b3A6IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uNSxcbi5teC1uNSB7XG4gIG1hcmdpbi1yaWdodDogLTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW41LFxuLm15LW41IHtcbiAgbWFyZ2luLWJvdHRvbTogLTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLW41LFxuLm14LW41IHtcbiAgbWFyZ2luLWxlZnQ6IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLWF1dG8ge1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm10LWF1dG8sXG4ubXktYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1yLWF1dG8sXG4ubXgtYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWItYXV0byxcbi5teS1hdXRvIHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWwtYXV0byxcbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5tLXNtLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS0wLFxuICAubXktc20tMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1zbS0wLFxuICAubXgtc20tMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXNtLTAsXG4gIC5teS1zbS0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLXNtLTAsXG4gIC5teC1zbS0wIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXNtLTEge1xuICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS0xLFxuICAubXktc20tMSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1zbS0xLFxuICAubXgtc20tMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXNtLTEsXG4gIC5teS1zbS0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLXNtLTEsXG4gIC5teC1zbS0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXNtLTIge1xuICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXNtLTIsXG4gIC5teS1zbS0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXItc20tMixcbiAgLm14LXNtLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXNtLTIsXG4gIC5teS1zbS0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwtc20tMixcbiAgLm14LXNtLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1zbS0zIHtcbiAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtc20tMyxcbiAgLm15LXNtLTMge1xuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXItc20tMyxcbiAgLm14LXNtLTMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1zbS0zLFxuICAubXktc20tMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1zbS0zLFxuICAubXgtc20tMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1zbS00IHtcbiAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS00LFxuICAubXktc20tNCB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLXNtLTQsXG4gIC5teC1zbS00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1zbS00LFxuICAubXktc20tNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLXNtLTQsXG4gIC5teC1zbS00IHtcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tc20tNSB7XG4gICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXNtLTUsXG4gIC5teS1zbS01IHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLXNtLTUsXG4gIC5teC1zbS01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItc20tNSxcbiAgLm15LXNtLTUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwtc20tNSxcbiAgLm14LXNtLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtc20tMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1zbS0wLFxuICAucHktc20tMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHItc20tMCxcbiAgLnB4LXNtLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucGItc20tMCxcbiAgLnB5LXNtLTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBsLXNtLTAsXG4gIC5weC1zbS0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucC1zbS0xIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXNtLTEsXG4gIC5weS1zbS0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wci1zbS0xLFxuICAucHgtc20tMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1zbS0xLFxuICAucHktc20tMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGwtc20tMSxcbiAgLnB4LXNtLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXNtLTIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1zbS0yLFxuICAucHktc20tMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wci1zbS0yLFxuICAucHgtc20tMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXNtLTIsXG4gIC5weS1zbS0yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBsLXNtLTIsXG4gIC5weC1zbS0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXNtLTMge1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtc20tMyxcbiAgLnB5LXNtLTMge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByLXNtLTMsXG4gIC5weC1zbS0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXNtLTMsXG4gIC5weS1zbS0zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wbC1zbS0zLFxuICAucHgtc20tMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtc20tNCB7XG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXNtLTQsXG4gIC5weS1zbS00IHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByLXNtLTQsXG4gIC5weC1zbS00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItc20tNCxcbiAgLnB5LXNtLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGwtc20tNCxcbiAgLnB4LXNtLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtc20tNSB7XG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1zbS01LFxuICAucHktc20tNSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHItc20tNSxcbiAgLnB4LXNtLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItc20tNSxcbiAgLnB5LXNtLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBsLXNtLTUsXG4gIC5weC1zbS01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1zbS1uMSB7XG4gICAgbWFyZ2luOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS1uMSxcbiAgLm15LXNtLW4xIHtcbiAgICBtYXJnaW4tdG9wOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1zbS1uMSxcbiAgLm14LXNtLW4xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXNtLW4xLFxuICAubXktc20tbjEge1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLXNtLW4xLFxuICAubXgtc20tbjEge1xuICAgIG1hcmdpbi1sZWZ0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXNtLW4yIHtcbiAgICBtYXJnaW46IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtc20tbjIsXG4gIC5teS1zbS1uMiB7XG4gICAgbWFyZ2luLXRvcDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1zbS1uMixcbiAgLm14LXNtLW4yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItc20tbjIsXG4gIC5teS1zbS1uMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1zbS1uMixcbiAgLm14LXNtLW4yIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXNtLW4zIHtcbiAgICBtYXJnaW46IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXNtLW4zLFxuICAubXktc20tbjMge1xuICAgIG1hcmdpbi10b3A6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLXNtLW4zLFxuICAubXgtc20tbjMge1xuICAgIG1hcmdpbi1yaWdodDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItc20tbjMsXG4gIC5teS1zbS1uMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwtc20tbjMsXG4gIC5teC1zbS1uMyB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tc20tbjQge1xuICAgIG1hcmdpbjogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1zbS1uNCxcbiAgLm15LXNtLW40IHtcbiAgICBtYXJnaW4tdG9wOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLXNtLW40LFxuICAubXgtc20tbjQge1xuICAgIG1hcmdpbi1yaWdodDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1zbS1uNCxcbiAgLm15LXNtLW40IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLXNtLW40LFxuICAubXgtc20tbjQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tc20tbjUge1xuICAgIG1hcmdpbjogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtc20tbjUsXG4gIC5teS1zbS1uNSB7XG4gICAgbWFyZ2luLXRvcDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXItc20tbjUsXG4gIC5teC1zbS1uNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1zbS1uNSxcbiAgLm15LXNtLW41IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1zbS1uNSxcbiAgLm14LXNtLW41IHtcbiAgICBtYXJnaW4tbGVmdDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1zbS1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXQtc20tYXV0byxcbiAgLm15LXNtLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubXItc20tYXV0byxcbiAgLm14LXNtLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1zbS1hdXRvLFxuICAubXktc20tYXV0byB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1zbS1hdXRvLFxuICAubXgtc20tYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm0tbWQtMCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLTAsXG4gIC5teS1tZC0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLW1kLTAsXG4gIC5teC1tZC0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubWItbWQtMCxcbiAgLm15LW1kLTAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAubWwtbWQtMCxcbiAgLm14LW1kLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbWQtMSB7XG4gICAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLTEsXG4gIC5teS1tZC0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLW1kLTEsXG4gIC5teC1tZC0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbWQtMSxcbiAgLm15LW1kLTEge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwtbWQtMSxcbiAgLm14LW1kLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbWQtMiB7XG4gICAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbWQtMixcbiAgLm15LW1kLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1tZC0yLFxuICAubXgtbWQtMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbWQtMixcbiAgLm15LW1kLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1tZC0yLFxuICAubXgtbWQtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLW1kLTMge1xuICAgIG1hcmdpbjogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1tZC0zLFxuICAubXktbWQtMyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1tZC0zLFxuICAubXgtbWQtMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLW1kLTMsXG4gIC5teS1tZC0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLW1kLTMsXG4gIC5teC1tZC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLW1kLTQge1xuICAgIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLTQsXG4gIC5teS1tZC00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXItbWQtNCxcbiAgLm14LW1kLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLW1kLTQsXG4gIC5teS1tZC00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwtbWQtNCxcbiAgLm14LW1kLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1tZC01IHtcbiAgICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbWQtNSxcbiAgLm15LW1kLTUge1xuICAgIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXItbWQtNSxcbiAgLm14LW1kLTUge1xuICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1tZC01LFxuICAubXktbWQtNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1tZC01LFxuICAubXgtbWQtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1tZC0wIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LW1kLTAsXG4gIC5weS1tZC0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wci1tZC0wLFxuICAucHgtbWQtMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1tZC0wLFxuICAucHktbWQtMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuICAucGwtbWQtMCxcbiAgLnB4LW1kLTAge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wLW1kLTEge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbWQtMSxcbiAgLnB5LW1kLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByLW1kLTEsXG4gIC5weC1tZC0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLW1kLTEsXG4gIC5weS1tZC0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wbC1tZC0xLFxuICAucHgtbWQtMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbWQtMiB7XG4gICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LW1kLTIsXG4gIC5weS1tZC0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByLW1kLTIsXG4gIC5weC1tZC0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItbWQtMixcbiAgLnB5LW1kLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGwtbWQtMixcbiAgLnB4LW1kLTIge1xuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbWQtMyB7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1tZC0zLFxuICAucHktbWQtMyB7XG4gICAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHItbWQtMyxcbiAgLnB4LW1kLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItbWQtMyxcbiAgLnB5LW1kLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBsLW1kLTMsXG4gIC5weC1tZC0zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1tZC00IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbWQtNCxcbiAgLnB5LW1kLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHItbWQtNCxcbiAgLnB4LW1kLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1tZC00LFxuICAucHktbWQtNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wbC1tZC00LFxuICAucHgtbWQtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1tZC01IHtcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LW1kLTUsXG4gIC5weS1tZC01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wci1tZC01LFxuICAucHgtbWQtNSB7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1tZC01LFxuICAucHktbWQtNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGwtbWQtNSxcbiAgLnB4LW1kLTUge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLW1kLW4xIHtcbiAgICBtYXJnaW46IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLW4xLFxuICAubXktbWQtbjEge1xuICAgIG1hcmdpbi10b3A6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLW1kLW4xLFxuICAubXgtbWQtbjEge1xuICAgIG1hcmdpbi1yaWdodDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbWQtbjEsXG4gIC5teS1tZC1uMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwtbWQtbjEsXG4gIC5teC1tZC1uMSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbWQtbjIge1xuICAgIG1hcmdpbjogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1tZC1uMixcbiAgLm15LW1kLW4yIHtcbiAgICBtYXJnaW4tdG9wOiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLW1kLW4yLFxuICAubXgtbWQtbjIge1xuICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1tZC1uMixcbiAgLm15LW1kLW4yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLW1kLW4yLFxuICAubXgtbWQtbjIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbWQtbjMge1xuICAgIG1hcmdpbjogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbWQtbjMsXG4gIC5teS1tZC1uMyB7XG4gICAgbWFyZ2luLXRvcDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXItbWQtbjMsXG4gIC5teC1tZC1uMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1tZC1uMyxcbiAgLm15LW1kLW4zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1tZC1uMyxcbiAgLm14LW1kLW4zIHtcbiAgICBtYXJnaW4tbGVmdDogLTFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1tZC1uNCB7XG4gICAgbWFyZ2luOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LW1kLW40LFxuICAubXktbWQtbjQge1xuICAgIG1hcmdpbi10b3A6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXItbWQtbjQsXG4gIC5teC1tZC1uNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLW1kLW40LFxuICAubXktbWQtbjQge1xuICAgIG1hcmdpbi1ib3R0b206IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwtbWQtbjQsXG4gIC5teC1tZC1uNCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1tZC1uNSB7XG4gICAgbWFyZ2luOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1tZC1uNSxcbiAgLm15LW1kLW41IHtcbiAgICBtYXJnaW4tdG9wOiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1tZC1uNSxcbiAgLm14LW1kLW41IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLW1kLW41LFxuICAubXktbWQtbjUge1xuICAgIG1hcmdpbi1ib3R0b206IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLW1kLW41LFxuICAubXgtbWQtbjUge1xuICAgIG1hcmdpbi1sZWZ0OiAtM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLW1kLWF1dG8ge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1tZC1hdXRvLFxuICAubXktbWQtYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1tZC1hdXRvLFxuICAubXgtbWQtYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLW1kLWF1dG8sXG4gIC5teS1tZC1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLW1kLWF1dG8sXG4gIC5teC1tZC1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubS1sZy0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctMCxcbiAgLm15LWxnLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXItbGctMCxcbiAgLm14LWxnLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1sZy0wLFxuICAubXktbGctMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1sZy0wLFxuICAubXgtbGctMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubS1sZy0xIHtcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctMSxcbiAgLm15LWxnLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXItbGctMSxcbiAgLm14LWxnLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1sZy0xLFxuICAubXktbGctMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1sZy0xLFxuICAubXgtbGctMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1sZy0yIHtcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1sZy0yLFxuICAubXktbGctMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLWxnLTIsXG4gIC5teC1sZy0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1sZy0yLFxuICAubXktbGctMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLWxnLTIsXG4gIC5teC1sZy0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbGctMyB7XG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LWxnLTMsXG4gIC5teS1sZy0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLWxnLTMsXG4gIC5teC1sZy0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbGctMyxcbiAgLm15LWxnLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwtbGctMyxcbiAgLm14LWxnLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbGctNCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctNCxcbiAgLm15LWxnLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1sZy00LFxuICAubXgtbGctNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbGctNCxcbiAgLm15LWxnLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1sZy00LFxuICAubXgtbGctNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLWxnLTUge1xuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1sZy01LFxuICAubXktbGctNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1sZy01LFxuICAubXgtbGctNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLWxnLTUsXG4gIC5teS1sZy01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLWxnLTUsXG4gIC5teC1sZy01IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLWxnLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHQtbGctMCxcbiAgLnB5LWxnLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByLWxnLTAsXG4gIC5weC1sZy0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLWxnLTAsXG4gIC5weS1sZy0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wbC1sZy0wLFxuICAucHgtbGctMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAtbGctMSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1sZy0xLFxuICAucHktbGctMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHItbGctMSxcbiAgLnB4LWxnLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGItbGctMSxcbiAgLnB5LWxnLTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBsLWxnLTEsXG4gIC5weC1sZy0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1sZy0yIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbGctMixcbiAgLnB5LWxnLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHItbGctMixcbiAgLnB4LWxnLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1sZy0yLFxuICAucHktbGctMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wbC1sZy0yLFxuICAucHgtbGctMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC1sZy0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LWxnLTMsXG4gIC5weS1sZy0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wci1sZy0zLFxuICAucHgtbGctMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi1sZy0zLFxuICAucHktbGctMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGwtbGctMyxcbiAgLnB4LWxnLTMge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLWxnLTQge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC1sZy00LFxuICAucHktbGctNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wci1sZy00LFxuICAucHgtbGctNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLWxnLTQsXG4gIC5weS1sZy00IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBsLWxnLTQsXG4gIC5weC1sZy00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLWxnLTUge1xuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQtbGctNSxcbiAgLnB5LWxnLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByLWxnLTUsXG4gIC5weC1sZy01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLWxnLTUsXG4gIC5weS1sZy01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wbC1sZy01LFxuICAucHgtbGctNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbGctbjEge1xuICAgIG1hcmdpbjogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctbjEsXG4gIC5teS1sZy1uMSB7XG4gICAgbWFyZ2luLXRvcDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXItbGctbjEsXG4gIC5teC1sZy1uMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi1sZy1uMSxcbiAgLm15LWxnLW4xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1sZy1uMSxcbiAgLm14LWxnLW4xIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1sZy1uMiB7XG4gICAgbWFyZ2luOiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LWxnLW4yLFxuICAubXktbGctbjIge1xuICAgIG1hcmdpbi10b3A6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXItbGctbjIsXG4gIC5teC1sZy1uMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLWxnLW4yLFxuICAubXktbGctbjIge1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwtbGctbjIsXG4gIC5teC1sZy1uMiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS1sZy1uMyB7XG4gICAgbWFyZ2luOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC1sZy1uMyxcbiAgLm15LWxnLW4zIHtcbiAgICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1sZy1uMyxcbiAgLm14LWxnLW4zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLWxnLW4zLFxuICAubXktbGctbjMge1xuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLWxnLW4zLFxuICAubXgtbGctbjMge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLWxnLW40IHtcbiAgICBtYXJnaW46IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQtbGctbjQsXG4gIC5teS1sZy1uNCB7XG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci1sZy1uNCxcbiAgLm14LWxnLW40IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbGctbjQsXG4gIC5teS1sZy1uNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC1sZy1uNCxcbiAgLm14LWxnLW40IHtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLWxnLW41IHtcbiAgICBtYXJnaW46IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LWxnLW41LFxuICAubXktbGctbjUge1xuICAgIG1hcmdpbi10b3A6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLWxnLW41LFxuICAubXgtbGctbjUge1xuICAgIG1hcmdpbi1yaWdodDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWItbGctbjUsXG4gIC5teS1sZy1uNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwtbGctbjUsXG4gIC5teC1sZy1uNSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tbGctYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LWxnLWF1dG8sXG4gIC5teS1sZy1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLWxnLWF1dG8sXG4gIC5teC1sZy1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWItbGctYXV0byxcbiAgLm15LWxnLWF1dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWwtbGctYXV0byxcbiAgLm14LWxnLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubS14bC0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtMCxcbiAgLm15LXhsLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubXIteGwtMCxcbiAgLm14LXhsLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14bC0wLFxuICAubXkteGwtMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC14bC0wLFxuICAubXgteGwtMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubS14bC0xIHtcbiAgICBtYXJnaW46IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtMSxcbiAgLm15LXhsLTEge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXIteGwtMSxcbiAgLm14LXhsLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14bC0xLFxuICAubXkteGwtMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC14bC0xLFxuICAubXgteGwtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS14bC0yIHtcbiAgICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14bC0yLFxuICAubXkteGwtMiB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLXhsLTIsXG4gIC5teC14bC0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14bC0yLFxuICAubXkteGwtMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLXhsLTIsXG4gIC5teC14bC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teGwtMyB7XG4gICAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXhsLTMsXG4gIC5teS14bC0zIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLXhsLTMsXG4gIC5teC14bC0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWIteGwtMyxcbiAgLm15LXhsLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwteGwtMyxcbiAgLm14LXhsLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teGwtNCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtNCxcbiAgLm15LXhsLTQge1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci14bC00LFxuICAubXgteGwtNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWIteGwtNCxcbiAgLm15LXhsLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC14bC00LFxuICAubXgteGwtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXhsLTUge1xuICAgIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14bC01LFxuICAubXkteGwtNSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci14bC01LFxuICAubXgteGwtNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXhsLTUsXG4gIC5teS14bC01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLXhsLTUsXG4gIC5teC14bC01IHtcbiAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXhsLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAucHQteGwtMCxcbiAgLnB5LXhsLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByLXhsLTAsXG4gIC5weC14bC0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXhsLTAsXG4gIC5weS14bC0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wbC14bC0wLFxuICAucHgteGwtMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnAteGwtMSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC14bC0xLFxuICAucHkteGwtMSB7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHIteGwtMSxcbiAgLnB4LXhsLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGIteGwtMSxcbiAgLnB5LXhsLTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBsLXhsLTEsXG4gIC5weC14bC0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC14bC0yIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQteGwtMixcbiAgLnB5LXhsLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHIteGwtMixcbiAgLnB4LXhsLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi14bC0yLFxuICAucHkteGwtMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wbC14bC0yLFxuICAucHgteGwtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucC14bC0zIHtcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnB0LXhsLTMsXG4gIC5weS14bC0zIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wci14bC0zLFxuICAucHgteGwtMyB7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYi14bC0zLFxuICAucHkteGwtMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucGwteGwtMyxcbiAgLnB4LXhsLTMge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXhsLTQge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wdC14bC00LFxuICAucHkteGwtNCB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wci14bC00LFxuICAucHgteGwtNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXhsLTQsXG4gIC5weS14bC00IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBsLXhsLTQsXG4gIC5weC14bC00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wLXhsLTUge1xuICAgIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAucHQteGwtNSxcbiAgLnB5LXhsLTUge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByLXhsLTUsXG4gIC5weC14bC01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBiLXhsLTUsXG4gIC5weS14bC01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5wbC14bC01LFxuICAucHgteGwtNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teGwtbjEge1xuICAgIG1hcmdpbjogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtbjEsXG4gIC5teS14bC1uMSB7XG4gICAgbWFyZ2luLXRvcDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXIteGwtbjEsXG4gIC5teC14bC1uMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tYi14bC1uMSxcbiAgLm15LXhsLW4xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC14bC1uMSxcbiAgLm14LXhsLW4xIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS14bC1uMiB7XG4gICAgbWFyZ2luOiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXhsLW4yLFxuICAubXkteGwtbjIge1xuICAgIG1hcmdpbi10b3A6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXIteGwtbjIsXG4gIC5teC14bC1uMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXhsLW4yLFxuICAubXkteGwtbjIge1xuICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwteGwtbjIsXG4gIC5teC14bC1uMiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubS14bC1uMyB7XG4gICAgbWFyZ2luOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tdC14bC1uMyxcbiAgLm15LXhsLW4zIHtcbiAgICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci14bC1uMyxcbiAgLm14LXhsLW4zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLXhsLW4zLFxuICAubXkteGwtbjMge1xuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1sLXhsLW4zLFxuICAubXgteGwtbjMge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXhsLW40IHtcbiAgICBtYXJnaW46IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubXQteGwtbjQsXG4gIC5teS14bC1uNCB7XG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tci14bC1uNCxcbiAgLm14LXhsLW40IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWIteGwtbjQsXG4gIC5teS14bC1uNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tbC14bC1uNCxcbiAgLm14LXhsLW40IHtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tLXhsLW41IHtcbiAgICBtYXJnaW46IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXhsLW41LFxuICAubXkteGwtbjUge1xuICAgIG1hcmdpbi10b3A6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLXhsLW41LFxuICAubXgteGwtbjUge1xuICAgIG1hcmdpbi1yaWdodDogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWIteGwtbjUsXG4gIC5teS14bC1uNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubWwteGwtbjUsXG4gIC5teC14bC1uNSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0teGwtYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm10LXhsLWF1dG8sXG4gIC5teS14bC1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1yLXhsLWF1dG8sXG4gIC5teC14bC1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWIteGwtYXV0byxcbiAgLm15LXhsLWF1dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAubWwteGwtYXV0byxcbiAgLm14LXhsLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnRleHQtbW9ub3NwYWNlIHtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWltcG9ydGFudDtcbn1cblxuLnRleHQtanVzdGlmeSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbn1cblxuLnRleHQtd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLnRleHQtbm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC10cnVuY2F0ZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnRleHQtc20tbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIC50ZXh0LXNtLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIC50ZXh0LXNtLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC50ZXh0LW1kLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICAudGV4dC1tZC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICAudGV4dC1tZC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudGV4dC1sZy1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRleHQtbGctcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRleHQtbGctY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC50ZXh0LXhsLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICAudGV4dC14bC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICAudGV4dC14bC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG59XG5cbi50ZXh0LWxvd2VyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLnRleHQtdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jYXBpdGFsaXplIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtd2VpZ2h0LWxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC13ZWlnaHQtbGlnaHRlciB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LXdlaWdodC1ub3JtYWwge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LXdlaWdodC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC13ZWlnaHQtYm9sZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuYS50ZXh0LXByaW1hcnk6aG92ZXIsIGEudGV4dC1wcmltYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICMwMDU2YjMgIWltcG9ydGFudDtcbn1cblxuLnRleHQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcbn1cblxuYS50ZXh0LXNlY29uZGFyeTpob3ZlciwgYS50ZXh0LXNlY29uZGFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjNDk0ZjU0ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuXG5hLnRleHQtc3VjY2Vzczpob3ZlciwgYS50ZXh0LXN1Y2Nlc3M6Zm9jdXMge1xuICBjb2xvcjogIzE5NjkyYyAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1pbmZvIHtcbiAgY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcbn1cblxuYS50ZXh0LWluZm86aG92ZXIsIGEudGV4dC1pbmZvOmZvY3VzIHtcbiAgY29sb3I6ICMwZjY2NzQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtd2FybmluZyB7XG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG5cbmEudGV4dC13YXJuaW5nOmhvdmVyLCBhLnRleHQtd2FybmluZzpmb2N1cyB7XG4gIGNvbG9yOiAjYmE4YjAwICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbmEudGV4dC1kYW5nZXI6aG92ZXIsIGEudGV4dC1kYW5nZXI6Zm9jdXMge1xuICBjb2xvcjogI2E3MWQyYSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1saWdodCB7XG4gIGNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG5cbmEudGV4dC1saWdodDpob3ZlciwgYS50ZXh0LWxpZ2h0OmZvY3VzIHtcbiAgY29sb3I6ICNjYmQzZGEgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZGFyayB7XG4gIGNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XG59XG5cbmEudGV4dC1kYXJrOmhvdmVyLCBhLnRleHQtZGFyazpmb2N1cyB7XG4gIGNvbG9yOiAjMTIxNDE2ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWJvZHkge1xuICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWJsYWNrLTUwIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC13aGl0ZS01MCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLnRleHQtaGlkZSB7XG4gIGZvbnQ6IDAvMCBhO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4udGV4dC1kZWNvcmF0aW9uLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRleHQtYnJlYWsge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtcmVzZXQge1xuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxuLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBhOm5vdCguYnRuKSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgYWJiclt0aXRsZV06OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiAoXCIgYXR0cih0aXRsZSkgXCIpXCI7XG4gIH1cbiAgcHJlIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcbiAgfVxuICBwcmUsXG4gIGJsb2NrcXVvdGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZGI1YmQ7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG4gIHRoZWFkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG4gIH1cbiAgdHIsXG4gIGltZyB7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG4gIHAsXG4gIGgyLFxuICBoMyB7XG4gICAgb3JwaGFuczogMztcbiAgICB3aWRvd3M6IDM7XG4gIH1cbiAgaDIsXG4gIGgzIHtcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcbiAgfVxuICBAcGFnZSB7XG4gICAgc2l6ZTogYTM7XG4gIH1cbiAgYm9keSB7XG4gICAgbWluLXdpZHRoOiA5OTJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIG1pbi13aWR0aDogOTkycHggIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5iYWRnZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgfVxuICAudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgIWltcG9ydGFudDtcbiAgfVxuICAudGFibGUgdGQsXG4gIC50YWJsZSB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG4gIC50YWJsZS1ib3JkZXJlZCB0aCxcbiAgLnRhYmxlLWJvcmRlcmVkIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRhYmxlLWRhcmsge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG4gIC50YWJsZS1kYXJrIHRoLFxuICAudGFibGUtZGFyayB0ZCxcbiAgLnRhYmxlLWRhcmsgdGhlYWQgdGgsXG4gIC50YWJsZS1kYXJrIHRib2R5ICsgdGJvZHkge1xuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbiAgfVxuICAudGFibGUgLnRoZWFkLWRhcmsgdGgge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlci1jb2xvcjogI2RlZTJlNjtcbiAgfVxufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Ym9vdHN0cmFwLmNzcy5tYXAgKi8iXX0= */", "@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap\");\nbody[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: #0c0c0c;\n  background-color: #ffffff;\n  overflow-x: hidden;\n}\n.layout_padding[_ngcontent-%COMP%] {\n  padding: 90px 0;\n}\n.layout_padding2[_ngcontent-%COMP%] {\n  padding: 75px 0;\n}\n.layout_padding2-top[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.layout_padding2-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 75px;\n}\n.layout_padding-top[_ngcontent-%COMP%] {\n  padding-top: 90px;\n}\n.layout_padding-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 90px;\n}\n.heading_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.heading_container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  font-weight: bold;\n  margin-bottom: 0;\n}\n.heading_container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #00bbf0;\n}\n.heading_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n.heading_container.heading_center[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  color: initial;\n}\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none;\n}\n\n.hero_area[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.hero_area[_ngcontent-%COMP%]   .hero_bg_box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  overflow: hidden;\n  z-index: -1;\n}\n.hero_area[_ngcontent-%COMP%]   .hero_bg_box[_ngcontent-%COMP%]   .bg_img_box[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n}\n.hero_area[_ngcontent-%COMP%]   .hero_bg_box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n}\n.sub_page[_ngcontent-%COMP%]   .hero_area[_ngcontent-%COMP%] {\n  min-height: auto;\n  background: linear-gradient(130deg, #231a6f, #0f054c);\n}\n.sub_page[_ngcontent-%COMP%]   .hero_area[_ngcontent-%COMP%]   .hero_bg_box[_ngcontent-%COMP%] {\n  display: none;\n}\n.header_section[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n.header_section[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  color: #ffffff;\n}\n.custom_nav-container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 20px;\n  color: #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%], .custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #00bbf0;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .nav_search-btn[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  padding: 0;\n  border: none;\n  color: #ffffff;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .nav_search-btn[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  outline: none;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 37px;\n  height: 42px;\n  transition: all 0.3s;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 35px;\n  height: 4px;\n  background-color: #ffffff;\n  margin: 7px 0;\n  transition: all 0.3s;\n  position: relative;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #ffffff;\n  top: -10px;\n  border-radius: 5px;\n  transition: all 0.3s;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  top: 10px;\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[aria-expanded=\"true\"][_ngcontent-%COMP%] {\n  transform: rotate(360deg);\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[aria-expanded=\"true\"][_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[aria-expanded=\"true\"][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .custom_nav-container[_ngcontent-%COMP%]   .navbar-toggler[aria-expanded=\"true\"][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  transform: rotate(90deg);\n  top: 0;\n}\n\n\n.slider_section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: 45px 0 145px 0;\n}\n.slider_section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.slider_section[_ngcontent-%COMP%]   #customCarousel1[_ngcontent-%COMP%] {\n  width: 100%;\n  position: unset;\n}\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%] {\n  color: #00204a;\n}\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  color: #ffffff;\n}\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fefefe;\n  font-size: 14px;\n}\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 -5px;\n  margin-top: 25px;\n}\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-align: center;\n  width: 165px;\n}\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   .btn1[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: #00bbf0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: all 0.3s;\n  border: none;\n}\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   .btn1[_ngcontent-%COMP%]:hover {\n  background-color: #007fa4;\n}\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   .btn2[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: #000000;\n  color: #ffffff;\n  border-radius: 0;\n  transition: all 0.3s;\n  border: none;\n}\n.slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   .btn2[_ngcontent-%COMP%]:hover {\n  background-color: black;\n}\n.slider_section[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  margin: 45px 0;\n}\n.slider_section[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -webkit-animation: upDown 5s infinite;\n          animation: upDown 5s infinite;\n}\n@-webkit-keyframes upDown {\n  0% {\n    transform: translateY(-45px);\n  }\n  50% {\n    transform: translateY(45px);\n  }\n  100% {\n    transform: translateY(-45px);\n  }\n}\n@keyframes upDown {\n  0% {\n    transform: translateY(-45px);\n  }\n  50% {\n    transform: translateY(45px);\n  }\n  100% {\n    transform: translateY(-45px);\n  }\n}\n.slider_section[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  position: unset;\n  margin: 0;\n  justify-content: center;\n  align-items: center;\n}\n.slider_section[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  opacity: 1;\n}\n.slider_section[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background-color: #00bbf0;\n}\n.service_section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-top: 45px;\n  background-color: #f8f8f9;\n  padding: 20px;\n  border-radius: 5px;\n}\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 125px;\n  min-width: 75px;\n  height: 75px;\n  margin-bottom: 15px;\n}\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  transition: all 0.3s;\n}\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00204a;\n  font-weight: 600;\n}\n.service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n.service_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 45px;\n}\n.service_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #00bbf0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: all 0.3s;\n  border: none;\n}\n.service_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #007fa4;\n}\n.about_section[_ngcontent-%COMP%] {\n  background-color: #00204a;\n  color: #ffffff;\n}\n.about_section[_ngcontent-%COMP%]   .heading_container[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.about_section[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.about_section[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.about_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.about_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.about_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #00bbf0;\n  color: #ffffff;\n  border-radius: 0px;\n  transition: all 0.3s;\n  border: none;\n  margin-top: 15px;\n}\n.about_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #007fa4;\n}\n.why_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.why_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 120px;\n  height: 120px;\n  min-width: 120px;\n  min-height: 120px;\n  border-radius: 100%;\n  border: 5px solid #00204a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.why_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 55px;\n  height: auto;\n  fill: #00204a;\n}\n.why_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.why_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.why_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 45px;\n}\n.why_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 45px;\n  background-color: #00bbf0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: all 0.3s;\n  border: none;\n}\n.why_section[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #007fa4;\n}\n\n.team_section[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #00204a;\n  color: #ffffff;\n}\n.team_section[_ngcontent-%COMP%]   .heading_container[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  padding: 35px 0 0 0;\n  border-radius: 5px;\n  overflow: hidden;\n  transition: all .1s;\n  margin-top: 45px;\n  background: linear-gradient(to bottom, #002759, #002b64);\n}\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  border-radius: 100%;\n  border: 5px solid #ffffff;\n}\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%] {\n  margin: 25px 0;\n}\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #00bbf0;\n  font-weight: 600;\n  position: relative;\n}\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .social_box[_ngcontent-%COMP%] {\n  padding: 10px 45px 20px 45px;\n  display: flex;\n  justify-content: space-between;\n}\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .social_box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 22px;\n}\n.team_section[_ngcontent-%COMP%]   .team_container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .social_box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n\n\n.client_section[_ngcontent-%COMP%]   .heading_container[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n}\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  margin-bottom: -50px;\n  margin-left: 25px;\n  position: relative;\n}\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .client_id[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .client_id[_ngcontent-%COMP%]   .client_info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .client_id[_ngcontent-%COMP%]   .client_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 15px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);\n  padding: 75px 25px 25px 25px;\n}\n.client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #00204a;\n  margin-bottom: 10px;\n}\n.client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 45px;\n}\n.client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%], .client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  background-color: #ffffff;\n  color: #000000;\n  outline: none;\n  bottom: 0px;\n  font-size: 24px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);\n}\n.client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%]:hover, .client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%]:hover {\n  color: #00204a;\n}\n\n.info_section[_ngcontent-%COMP%] {\n  background-color: #00204a;\n  color: #ffffff;\n  padding: 45px 0 15px 0;\n}\n.info_section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.info_section[_ngcontent-%COMP%]   .info_col[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.info_section[_ngcontent-%COMP%]   .info_contact[_ngcontent-%COMP%]   .contact_link_box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.info_section[_ngcontent-%COMP%]   .info_contact[_ngcontent-%COMP%]   .contact_link_box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  color: #ffffff;\n}\n.info_section[_ngcontent-%COMP%]   .info_contact[_ngcontent-%COMP%]   .contact_link_box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.info_section[_ngcontent-%COMP%]   .info_contact[_ngcontent-%COMP%]   .contact_link_box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n.info_section[_ngcontent-%COMP%]   .info_social[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n.info_section[_ngcontent-%COMP%]   .info_social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  border-radius: 100%;\n  margin-right: 10px;\n  font-size: 24px;\n}\n.info_section[_ngcontent-%COMP%]   .info_social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n.info_section[_ngcontent-%COMP%]   .info_links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n.info_section[_ngcontent-%COMP%]   .info_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  color: #ffffff;\n}\n.info_section[_ngcontent-%COMP%]   .info_links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #00bbf0;\n}\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 1px solid #ffffff;\n  background-color: transparent;\n  width: 100%;\n  height: 45px;\n  color: #ffffff;\n  outline: none;\n}\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #ffffff;\n}\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #ffffff;\n}\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #ffffff;\n}\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: inline-block;\n  padding: 10px 55px;\n  background-color: #00bbf0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: all 0.3s;\n  border: none;\n  margin-top: 15px;\n}\n.info_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #007fa4;\n}\n\n.footer_section[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #ffffff;\n  text-align: center;\n}\n.footer_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #00204a;\n  padding: 25px 0;\n  margin: 0;\n}\n.footer_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n/*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,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 */", "@media (max-width: 1300px) {}\r\n\r\n@media (max-width: 1120px) {}\r\n\r\n@media (max-width: 992px) {\r\n  .hero_area[_ngcontent-%COMP%] {\r\n    min-height: auto;\r\n  }\r\n\r\n  .hero_area[_ngcontent-%COMP%] {\r\n    background: linear-gradient(130deg, #231a6f, #0f054c);\r\n  }\r\n\r\n  .hero_area[_ngcontent-%COMP%]   .hero_bg_box[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .slider_section[_ngcontent-%COMP%] {\r\n    padding: 45px 0 75px 0;\r\n  }\r\n\r\n  .custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n    align-items: center;\r\n  }\r\n\r\n\r\n  .custom_nav-container[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    padding: 5px 25px;\r\n    margin: 5px 0;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .about_section[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\r\n    margin-bottom: 45px;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .header_section[_ngcontent-%COMP%]   .header_top[_ngcontent-%COMP%]   .contact_nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n\r\n  .client_section[_ngcontent-%COMP%]   .client_container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .client_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  .owl-nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 45px;\r\n  }\r\n\r\n  .client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%], .client_section[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\r\n    position: unset;\r\n    margin: 0 2.5px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .slider_section[_ngcontent-%COMP%]   .detail-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .track_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .track_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .track_section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 10px 60px;\r\n    margin-top: 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 420px) {\r\n  .service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .service_section[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n    margin-bottom: 15px;\r\n  }\r\n}\r\n\r\n@media (max-width: 376px) {}\r\n\r\n@media (min-width: 1200px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    max-width: 1170px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3BvbnNpdmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0Qjs7QUFFNUIsNEJBQTRCOztBQUU1QjtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UscURBQXFEO0VBQ3ZEOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7O0VBR0E7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmOzs7QUFHRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7OztFQUdBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJyZXNwb25zaXZlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHt9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7fVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmhlcm9fYXJlYSB7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmhlcm9fYXJlYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCAjMjMxYTZmLCAjMGYwNTRjKTtcclxuICB9XHJcblxyXG4gIC5oZXJvX2FyZWEgLmhlcm9fYmdfYm94IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyX3NlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNDVweCAwIDc1cHggMDtcclxuICB9XHJcblxyXG4gIC5jdXN0b21fbmF2LWNvbnRhaW5lciAubmF2YmFyLW5hdiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmN1c3RvbV9uYXYtY29udGFpbmVyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYWJvdXRfc2VjdGlvbiAuaW1nLWJveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5oZWFkZXJfc2VjdGlvbiAuaGVhZGVyX3RvcCAuY29udGFjdF9uYXYgYSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNsaWVudF9zZWN0aW9uIC5jbGllbnRfY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNsaWVudF9zZWN0aW9uIC5ib3gge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLm93bC1uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICB9XHJcblxyXG4gIC5jbGllbnRfc2VjdGlvbiAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtcHJldixcclxuICAuY2xpZW50X3NlY3Rpb24gLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHQge1xyXG4gICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgbWFyZ2luOiAwIDIuNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnNsaWRlcl9zZWN0aW9uIC5kZXRhaWwtYm94IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC50cmFja19zZWN0aW9uIGZvcm0ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLnRyYWNrX3NlY3Rpb24gZm9ybSBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50cmFja19zZWN0aW9uIGZvcm0gYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHggNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAuc2VydmljZV9zZWN0aW9uIC5ib3gge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5zZXJ2aWNlX3NlY3Rpb24gLmJveCAuaW1nLWJveCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NnB4KSB7fVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgfVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map