(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-detail/employee-detail.component */ "./src/app/employee-detail/employee-detail.component.ts");
/* harmony import */ var _base_view_base_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-view/base-view.component */ "./src/app/base-view/base-view.component.ts");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
/* harmony import */ var _manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manager-dashboard/manager-dashboard.component */ "./src/app/manager-dashboard/manager-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'empdetails', component: _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeDetailComponent"] },
    { path: 'dashboard', component: _base_view_base_view_component__WEBPACK_IMPORTED_MODULE_3__["BaseViewComponent"],
        children: [
            { path: '', redirectTo: 'mgrdashboard', pathMatch: 'full' },
            { path: 'mgrdashboard', component: _manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["ManagerDashboardComponent"] },
            { path: 'request', component: _request_request_component__WEBPACK_IMPORTED_MODULE_4__["RequestComponent"] },
        ]
    },
    { path: '**', component: _base_view_base_view_component__WEBPACK_IMPORTED_MODULE_3__["BaseViewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-detail/employee-detail.component */ "./src/app/employee-detail/employee-detail.component.ts");
/* harmony import */ var _base_view_base_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-view/base-view.component */ "./src/app/base-view/base-view.component.ts");
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request/request.component */ "./src/app/request/request.component.ts");
/* harmony import */ var _manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manager-dashboard/manager-dashboard.component */ "./src/app/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generic-dialog/generic-dialog.component */ "./src/app/generic-dialog/generic-dialog.component.ts");
/* harmony import */ var _display_data_dialog_display_data_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./display-data-dialog/display-data-dialog.component */ "./src/app/display-data-dialog/display-data-dialog.component.ts");
/* harmony import */ var _request_dialog_request_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./request-dialog/request-dialog.component */ "./src/app/request-dialog/request-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailComponent"],
                _base_view_base_view_component__WEBPACK_IMPORTED_MODULE_6__["BaseViewComponent"],
                _request_request_component__WEBPACK_IMPORTED_MODULE_7__["RequestComponent"],
                _manager_dashboard_manager_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["ManagerDashboardComponent"],
                _generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GenericDialogComponent"],
                _display_data_dialog_display_data_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DisplayDataDialogComponent"],
                _request_dialog_request_dialog_component__WEBPACK_IMPORTED_MODULE_15__["RequestDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_10__["MaterialModules"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            entryComponents: [_generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_13__["GenericDialogComponent"], _display_data_dialog_display_data_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DisplayDataDialogComponent"], _request_dialog_request_dialog_component__WEBPACK_IMPORTED_MODULE_15__["RequestDialogComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base-view/base-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/base-view/base-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/base-view/base-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/base-view/base-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  base-view works!\r\n</p>\r\n<app-employee-detail></app-employee-detail>\r\n<mat-divider></mat-divider>\r\n<nav mat-tab-nav-bar>\r\n  <a mat-tab-link\r\n     *ngFor=\"let link of navLinks\"\r\n     [routerLink]=\"link.path\"\r\n     routerLinkActive #rla=\"routerLinkActive\"\r\n     [active]=\"rla.isActive\">\r\n    {{link.label}}\r\n  </a>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/base-view/base-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/base-view/base-view.component.ts ***!
  \**************************************************/
/*! exports provided: BaseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseViewComponent", function() { return BaseViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseViewComponent = /** @class */ (function () {
    function BaseViewComponent() {
        this.navLinks = [{ path: './mgrdashboard', label: 'Manager Dashboard' },
            { path: './request', label: 'Request' }];
    }
    BaseViewComponent.prototype.ngOnInit = function () {
    };
    BaseViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-base-view',
            template: __webpack_require__(/*! ./base-view.component.html */ "./src/app/base-view/base-view.component.html"),
            styles: [__webpack_require__(/*! ./base-view.component.css */ "./src/app/base-view/base-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BaseViewComponent);
    return BaseViewComponent;
}());



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: requestStatusMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestStatusMap", function() { return requestStatusMap; });
var requestStatusMap = new Map();
requestStatusMap.set('OPEN', 'OPEN');
requestStatusMap.set('PENDING', 'PENDING');
requestStatusMap.set('APPROVED', 'APPROVED');
requestStatusMap.set('REJECTED', 'REJECTED');
requestStatusMap.set('INACTIVATED', 'INACTIVATED');


/***/ }),

/***/ "./src/app/display-data-dialog/display-data-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/display-data-dialog/display-data-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/display-data-dialog/display-data-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/display-data-dialog/display-data-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Request Description</h1>\r\n<div mat-dialog-content>\r\n  {{data.value}}\r\n</div>\r\n<div mat-dialog-actions align=\"end\">  \r\n  <button mat-button [mat-dialog-close]=\"false\">OK</button>\r\n</div>"

/***/ }),

/***/ "./src/app/display-data-dialog/display-data-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/display-data-dialog/display-data-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: DisplayDataDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDataDialogComponent", function() { return DisplayDataDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DisplayDataDialogComponent = /** @class */ (function () {
    function DisplayDataDialogComponent(data) {
        this.data = data;
    }
    DisplayDataDialogComponent.prototype.ngOnInit = function () {
    };
    DisplayDataDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-data-dialog',
            template: __webpack_require__(/*! ./display-data-dialog.component.html */ "./src/app/display-data-dialog/display-data-dialog.component.html"),
            styles: [__webpack_require__(/*! ./display-data-dialog.component.css */ "./src/app/display-data-dialog/display-data-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [String])
    ], DisplayDataDialogComponent);
    return DisplayDataDialogComponent;
}());



/***/ }),

/***/ "./src/app/employee-detail/employee-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employee-detail/employee-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employee-detail/employee-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/employee-detail/employee-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  employee-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/employee-detail/employee-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-detail/employee-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function() { return EmployeeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeDetailComponent = /** @class */ (function () {
    function EmployeeDetailComponent() {
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
    };
    EmployeeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-detail',
            template: __webpack_require__(/*! ./employee-detail.component.html */ "./src/app/employee-detail/employee-detail.component.html"),
            styles: [__webpack_require__(/*! ./employee-detail.component.css */ "./src/app/employee-detail/employee-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());



/***/ }),

/***/ "./src/app/generic-dialog/generic-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/generic-dialog/generic-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 0;\r\n}"

/***/ }),

/***/ "./src/app/generic-dialog/generic-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/generic-dialog/generic-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Discussion Comment</h2>\r\n\r\n<mat-dialog-content>\r\n  <mat-form-field>\r\n    <textarea matInput placeholder=\"Please enter here...\" maxlength=\"500\" [formControl]=\"comment\" required></textarea>\r\n    <mat-error *ngIf=\"comment.invalid\">{{getErrorMessage()}}</mat-error>\r\n  </mat-form-field>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions  align=\"end\">\r\n  <button mat-button [mat-dialog-close]=\"false\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"true\" [disabled]=\"comment.invalid\" (click)=\"onSubmit()\">Submit</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/generic-dialog/generic-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/generic-dialog/generic-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: GenericDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericDialogComponent", function() { return GenericDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenericDialogComponent = /** @class */ (function () {
    function GenericDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    GenericDialogComponent.prototype.ngOnInit = function () {
    };
    GenericDialogComponent.prototype.getErrorMessage = function () {
        return this.comment.hasError('required') ? 'You must enter a value' : '';
    };
    // onClose(): void {
    //   this.dialogRef.close('done');
    // }
    GenericDialogComponent.prototype.onSubmit = function () {
        this.dialogRef.close('true');
        this.onAdd.emit(this.comment.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onAdd'),
        __metadata("design:type", Object)
    ], GenericDialogComponent.prototype, "onAdd", void 0);
    GenericDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generic-dialog',
            template: __webpack_require__(/*! ./generic-dialog.component.html */ "./src/app/generic-dialog/generic-dialog.component.html"),
            styles: [__webpack_require__(/*! ./generic-dialog.component.css */ "./src/app/generic-dialog/generic-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], GenericDialogComponent);
    return GenericDialogComponent;
}());



/***/ }),

/***/ "./src/app/manager-dashboard/manager-dashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/manager-dashboard/manager-dashboard.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n\r\n.manager-icons{\r\n  padding: 0px 14px;\r\n  white-space: nowrap;\r\n}"

/***/ }),

/***/ "./src/app/manager-dashboard/manager-dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/manager-dashboard/manager-dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- ID Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Request Description Column -->\r\n    <ng-container matColumnDef=\"reqDesc\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Request Description </th>\r\n      <td mat-cell *matCellDef=\"let row\"><button mat-button color=\"primary\" (click)=\"viewReqDescription(row)\"> {{row.requestDescription | slice:0:25}} </button></td>\r\n    </ng-container>\r\n\r\n    <!-- Raised By Column -->\r\n    <ng-container matColumnDef=\"empId\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Raised By </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.employee.firstName}} {{row.employee.lastName}}</td>\r\n    </ng-container>\r\n\r\n    <!-- Staus Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Staus </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.requestStatus}} </td>\r\n    </ng-container>\r\n    <!-- Action Column -->\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\r\n      <td mat-cell *matCellDef=\"let row\" class=\"manager-icons\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"onAccept(row)\" [disabled]=\"!(row.requestStatus==requestStatusMap.get('OPEN') || row.requestStatus==requestStatusMap.get('PENDING'))\">\r\n          <mat-icon >thumb_up_alt</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"warn\" (click)=\"onReject(row)\" [disabled]=\"!(row.requestStatus==requestStatusMap.get('OPEN') || row.requestStatus==requestStatusMap.get('PENDING'))\">\r\n          <mat-icon >thumb_down_alt</mat-icon>\r\n        </button>\r\n        <button mat-icon-button color=\"accent\" (click)=\"onMeet(row)\" [disabled]=\"!(row.requestStatus==requestStatusMap.get('OPEN'))\">\r\n          <mat-icon >people</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/manager-dashboard/manager-dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/manager-dashboard/manager-dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: ManagerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerDashboardComponent", function() { return ManagerDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generic-dialog/generic-dialog.component */ "./src/app/generic-dialog/generic-dialog.component.ts");
/* harmony import */ var _display_data_dialog_display_data_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display-data-dialog/display-data-dialog.component */ "./src/app/display-data-dialog/display-data-dialog.component.ts");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManagerDashboardComponent = /** @class */ (function () {
    function ManagerDashboardComponent(dialog, requestService) {
        this.dialog = dialog;
        this.requestService = requestService;
        this.displayedColumns = ['id', 'reqDesc', 'empId', 'status', 'action'];
        this.requestStatusMap = _constants__WEBPACK_IMPORTED_MODULE_5__["requestStatusMap"];
    }
    ManagerDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.requestService.getRequests(1001).subscribe(function (result) {
            _this.reqData = result;
            console.log(_this.reqData);
            // Assign the data to the data source for the table to render
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.reqData);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    ManagerDashboardComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ManagerDashboardComponent.prototype.onSubmit = function (request, action) {
        var _this = this;
        var dialogRef = this.dialog.open(_generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_2__["GenericDialogComponent"], {
            height: '250px',
            width: '600px',
        });
        dialogRef.componentInstance.onAdd.subscribe(function (data) {
            _this.comment = data;
        });
        dialogRef.afterClosed().subscribe(function (result) {
            dialogRef.componentInstance.onAdd.unsubscribe();
            if (result) {
                console.log(_this.comment);
                request.requestStatus = action;
            }
        });
    };
    ManagerDashboardComponent.prototype.onAccept = function (request) {
        this.onSubmit(request, _constants__WEBPACK_IMPORTED_MODULE_5__["requestStatusMap"].get('APPROVED'));
    };
    ManagerDashboardComponent.prototype.onReject = function (request) {
        this.onSubmit(request, _constants__WEBPACK_IMPORTED_MODULE_5__["requestStatusMap"].get('REJECTED'));
    };
    ManagerDashboardComponent.prototype.onMeet = function (request) {
        this.onSubmit(request, _constants__WEBPACK_IMPORTED_MODULE_5__["requestStatusMap"].get('PENDING'));
    };
    ManagerDashboardComponent.prototype.viewReqDescription = function (row) {
        var dialogRef = this.dialog.open(_display_data_dialog_display_data_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DisplayDataDialogComponent"], {
            data: { value: row.requestDescription }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ManagerDashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ManagerDashboardComponent.prototype, "sort", void 0);
    ManagerDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manager-dashboard',
            template: __webpack_require__(/*! ./manager-dashboard.component.html */ "./src/app/manager-dashboard/manager-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./manager-dashboard.component.css */ "./src/app/manager-dashboard/manager-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]])
    ], ManagerDashboardComponent);
    return ManagerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModules", function() { return MaterialModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModules = /** @class */ (function () {
    function MaterialModules() {
    }
    MaterialModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"]
            ],
            exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"]
            ]
        })
    ], MaterialModules);
    return MaterialModules;
}());



/***/ }),

/***/ "./src/app/request-dialog/request-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/request-dialog/request-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 0;\r\n}"

/***/ }),

/***/ "./src/app/request-dialog/request-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/request-dialog/request-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Request</h2>\n\n<mat-dialog-content [formGroup]=\"form\">\n  <mat-form-field>\n    <textarea matInput placeholder=\"Please enter here...\" maxlength=\"500\" [formControl]=\"comment\" required></textarea>\n    <mat-error *ngIf=\"comment.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions  align=\"end\">\n  <button mat-button [mat-dialog-close]=\"false\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" [disabled]=\"comment.invalid\" (click)=\"onSubmit()\">Add</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/request-dialog/request-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/request-dialog/request-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: RequestDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDialogComponent", function() { return RequestDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestDialogComponent = /** @class */ (function () {
    function RequestDialogComponent(dialogRef, fb) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    RequestDialogComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({});
    };
    RequestDialogComponent.prototype.getErrorMessage = function () {
        return this.comment.hasError('required') ? 'You must enter a value' : '';
    };
    RequestDialogComponent.prototype.onSubmit = function () {
        this.dialogRef.close('true');
        this.onAdd.emit(this.comment.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onAdd'),
        __metadata("design:type", Object)
    ], RequestDialogComponent.prototype, "onAdd", void 0);
    RequestDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-dialog',
            template: __webpack_require__(/*! ./request-dialog.component.html */ "./src/app/request-dialog/request-dialog.component.html"),
            styles: [__webpack_require__(/*! ./request-dialog.component.css */ "./src/app/request-dialog/request-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RequestDialogComponent);
    return RequestDialogComponent;
}());



/***/ }),

/***/ "./src/app/request/request.component.css":
/*!***********************************************!*\
  !*** ./src/app/request/request.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/request/request.component.html":
/*!************************************************!*\
  !*** ./src/app/request/request.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\r\n<button mat-fab color=\"primary\" (click)=\"onAddRequest()\">\r\n    <mat-icon >add</mat-icon>\r\n </button>\r\n  \r\n<table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n  \r\n\r\n    <!-- Request Description Column -->\r\n    <ng-container matColumnDef=\"reqDesc\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Request Description </th>\r\n      <td mat-cell *matCellDef=\"let row\"><button mat-button color=\"primary\" (click)=\"viewReqDescription(row)\"> {{row.reqDesc | slice:0:25}} </button></td>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <!-- Status Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n      <td mat-cell *matCellDef=\"let row\"> {{row.status}} </td>\r\n    </ng-container>\r\n    <!-- Action Column -->\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\r\n      <td mat-cell *matCellDef=\"let row\" class=\"manager-icons\">\r\n        <button mat-icon-button color=\"primary\" (click)=\"onCancel(row)\" [disabled]=\"!(row.status==='open' || row.status==='pending')\">\r\n          <mat-icon >cancel</mat-icon>\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </tr>\r\n  </table>\r\n  \r\n  \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/request/request.component.ts":
/*!**********************************************!*\
  !*** ./src/app/request/request.component.ts ***!
  \**********************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generic-dialog/generic-dialog.component */ "./src/app/generic-dialog/generic-dialog.component.ts");
/* harmony import */ var _display_data_dialog_display_data_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display-data-dialog/display-data-dialog.component */ "./src/app/display-data-dialog/display-data-dialog.component.ts");
/* harmony import */ var _request_dialog_request_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request-dialog/request-dialog.component */ "./src/app/request-dialog/request-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestComponent = /** @class */ (function () {
    function RequestComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['reqDesc', 'status', 'action'];
        // Create 100 users
        this.reqData = [
            { reqDesc: 'Seat change request', status: 'open' },
            { reqDesc: 'PC not working.', status: 'inactivated' },
            { reqDesc: 'Project discussion.', status: 'inactivated' }
        ];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.reqData);
        //    this.dataSource = this.reqData;
    }
    RequestComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    RequestComponent.prototype.onSubmit = function (request, action) {
        var _this = this;
        var dialogRef = this.dialog.open(_generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_2__["GenericDialogComponent"], {
            height: '250px',
            width: '600px',
        });
        this.testinglog = "1";
        dialogRef.afterClosed().subscribe(function (result) {
            dialogRef.componentInstance.onAdd.unsubscribe();
            _this.testinglog = result;
            if (result) {
                _this.testinglog = result;
                request.status = action;
            }
        });
    };
    RequestComponent.prototype.onCancel = function (request) {
        this.onSubmit(request, "inactivated");
    };
    RequestComponent.prototype.viewReqDescription = function (row) {
        var dialogRef = this.dialog.open(_display_data_dialog_display_data_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DisplayDataDialogComponent"], {
            data: { value: row.reqDesc }
        });
    };
    RequestComponent.prototype.onAddRequest = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '250px';
        dialogConfig.width = '600px';
        var dialogRef = this.dialog.open(_request_dialog_request_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RequestDialogComponent"], dialogConfig);
        dialogRef.componentInstance.onAdd.subscribe(function (data) {
            _this.comment = data;
        });
        dialogRef.afterClosed().subscribe(function (result) {
            dialogRef.componentInstance.onAdd.unsubscribe();
            console.log(result);
            if (result) {
                _this.testinglog = _this.comment;
                _this.reqData.push({ reqDesc: _this.comment, status: 'open' });
                //        this.dataSource = new MatTableDataSource(this.reqData);
                _this.dataSource.data = _this.reqData;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], RequestComponent.prototype, "sort", void 0);
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.css */ "./src/app/request/request.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.requestsUrl = 'api/requests/';
        this.requestUrl = 'api/request/';
    }
    RequestService.prototype.getRequests = function (empId) {
        return this.http.get(this.requestsUrl + ("" + empId))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return console.log("inside service" + result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRequest', [])));
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    RequestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\SpringBootAngular6Integration\src\main\web-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map