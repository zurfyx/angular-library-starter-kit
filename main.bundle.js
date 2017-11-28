webpackJsonp(["main"],{

/***/ "../../../../../config/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../example/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../example/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <div class=\"dropdown\" #myDropdown=dropdown dropdown>\n    <h1 class=\"fake-link dropdown-toggle greetings\" dropdownToggle>Angular Custom Dropdown ▼</h1>\n    <ul class=\"dropdown-menu\" dropdownMenu>\n      <li><a class=\"neat\" href=\"https://github.com/zurfyx/angular-custom-modal\" rel=\"noopener\" target=\"_blank\">Check it out @ GitHub</a></li>\n      <li><a class=\"neat\" href=\"#\">...</a></li>\n    </ul>\n  </div>\n  <!--\n  Classes are optional. But highly recommended. The ones above feature Bootstrap-like classes.\n  <div dropdown>\n    <h1 dropdownToggle>Angular Custom Dropdown ▼</h1>\n    <ul dropdownMenu>\n      <li>Check it out @ GitHub</li>\n    </ul>\n  </div>\n  -->\n  <!-- \n  References can also be used to access dropdown methods. Either from template or component.\n  <div #myDropdown=dropdown dropdown>\n    <h1 class=\"fake-link\" (click)=\"myDropdown.toggle()\">Angular Custom Dropdown ▼</h1>\n    ...\n  </div>\n  -->\n</div>"

/***/ }),

/***/ "../../../../../example/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat|Open+Sans);", ""]);

// module
exports.push([module.i, "/* Dropdown specific styles */\n.dropdown {\n  position: relative; }\n\n.dropdown-menu {\n  position: absolute;\n  display: block;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  width: 80%;\n  opacity: 0;\n  margin: -.25rem 0 0 10%;\n  padding: 0.25rem;\n  list-style-type: none;\n  background-color: #fff;\n  border-radius: 4px;\n  transition: .2s all ease-in; }\n\n.dropdown-menu li {\n  padding: .5rem .5rem; }\n\n.dropdown-menu li + li {\n  border-top: 1px solid #e1e1e1;\n  padding-top: .5rem; }\n\n.dropdown-menu li > a {\n  display: block;\n  border-radius: 4px;\n  padding: 1rem 1.5rem;\n  transition: .2s background-color ease-in; }\n\n.dropdown-menu li > a:hover {\n  background-color: #e9e9e9; }\n\n.dropdown.open .dropdown-menu {\n  opacity: 1;\n  margin-top: 0; }\n\na.neat {\n  color: inherit;\n  text-decoration: none; }\n\n/* /Dropdown specific styles */\nhtml, body {\n  color: #444;\n  font-family: 'Open Sans', sans-serif;\n  background: #4ac95a;\n  background: linear-gradient(135deg, #4ac95a 0%, #7db9e8 100%);\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%; }\n\nh1 {\n  font-family: 'Montserrat';\n  font-weight: 200;\n  padding: 30px;\n  margin: 0; }\n\na.neat {\n  color: inherit;\n  text-decoration: none; }\n\n.greetings {\n  color: #fff; }\n\n.center {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center; }\n\n.fake-link {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.myDropdown.statusChange()
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (status) {
            var statusValue;
            /* tslint:disable:no-console */
            if (status === __WEBPACK_IMPORTED_MODULE_2__src__["c" /* TOGGLE_STATUS */].OPEN) {
                statusValue = 'Opened';
            }
            else if (status === __WEBPACK_IMPORTED_MODULE_2__src__["c" /* TOGGLE_STATUS */].CLOSE) {
                statusValue = 'Closed';
            }
            console.info("Dropdown status changed to \"" + statusValue + "\".");
            /* tslint:enable:no-console */
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next(),
            this.ngUnsubscribe.complete();
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('myDropdown'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__src__["a" /* DropdownDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__src__["a" /* DropdownDirective */]) === "function" && _a || Object)
], AppComponent.prototype, "myDropdown", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../example/app/app.component.html"),
        styles: [__webpack_require__("../../../../../example/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../example/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__src__["b" /* DropdownModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../example/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../example/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_environment__ = __webpack_require__("../../../../../config/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__config_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/dropdown-menu.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownMenuDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_status__ = __webpack_require__("../../../../../src/toggle-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_directive__ = __webpack_require__("../../../../../src/dropdown.directive.ts");
/* tslint:disable:directive-selector */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var DropdownMenuDirective = (function () {
    function DropdownMenuDirective(dropdown, elementRef) {
        this.dropdown = dropdown;
        this.elementRef = elementRef;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    DropdownMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.dropdown.statusChange()
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (newStatus) {
            if (newStatus === __WEBPACK_IMPORTED_MODULE_3__toggle_status__["a" /* TOGGLE_STATUS */].OPEN) {
                // Listen to click events to realise when to close the dropdown.
                document.addEventListener('click', _this.onDocumentClick.bind(_this), true);
            }
            else {
                document.removeEventListener('click', _this.onDocumentClick, true);
            }
        });
    };
    DropdownMenuDirective.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        document.removeEventListener('click', this.onDocumentClick, true);
    };
    DropdownMenuDirective.prototype.onDocumentClick = function (event) {
        var target = event.target;
        if (target instanceof HTMLElement && target.hasAttribute('dropdownToggle')) {
            // Ignore dropdownToggle element, even if it's outside the menu.
            return;
        }
        var isInsideClick = this.elementRef.nativeElement.contains(target);
        if (!isInsideClick || target instanceof HTMLElement && target.hasAttribute('href')) {
            this.dropdown.close();
        }
        else {
            this.dropdown.open();
        }
    };
    return DropdownMenuDirective;
}());
DropdownMenuDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[dropdownMenu]',
        exportAs: 'dropdownMenu',
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__dropdown_directive__["a" /* DropdownDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dropdown_directive__["a" /* DropdownDirective */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object])
], DropdownMenuDirective);

var _a, _b;
//# sourceMappingURL=dropdown-menu.directive.js.map

/***/ }),

/***/ "../../../../../src/dropdown-toggle.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__ = __webpack_require__("../../../../../src/dropdown.directive.ts");
/* tslint:disable:directive-selector */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownToggleDirective = (function () {
    function DropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    DropdownToggleDirective.prototype.toggle = function () {
        this.dropdown.toggle();
    };
    return DropdownToggleDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownToggleDirective.prototype, "toggle", null);
DropdownToggleDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[dropdownToggle]',
        exportAs: 'dropdownToggle',
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Host */])()),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a" /* DropdownDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a" /* DropdownDirective */]) === "function" && _a || Object])
], DropdownToggleDirective);

var _a;
//# sourceMappingURL=dropdown-toggle.directive.js.map

/***/ }),

/***/ "../../../../../src/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_status__ = __webpack_require__("../../../../../src/toggle-status.ts");
/* tslint:disable:directive-selector */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DropdownDirective = (function () {
    function DropdownDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.status = __WEBPACK_IMPORTED_MODULE_2__toggle_status__["a" /* TOGGLE_STATUS */].CLOSE;
        this.status$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    DropdownDirective.prototype.setActive = function (active) {
        if (active === void 0) { active = true; }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'active', active);
    };
    DropdownDirective.prototype.toggle = function () {
        if (this.status === __WEBPACK_IMPORTED_MODULE_2__toggle_status__["a" /* TOGGLE_STATUS */].OPEN) {
            this.close();
        }
        else {
            this.open();
        }
    };
    DropdownDirective.prototype.open = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'open', true);
        if (this.status !== __WEBPACK_IMPORTED_MODULE_2__toggle_status__["a" /* TOGGLE_STATUS */].OPEN) {
            this.status$.next(__WEBPACK_IMPORTED_MODULE_2__toggle_status__["a" /* TOGGLE_STATUS */].OPEN);
        }
        this.status = __WEBPACK_IMPORTED_MODULE_2__toggle_status__["a" /* TOGGLE_STATUS */].OPEN;
    };
    DropdownDirective.prototype.close = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'open', false);
        if (this.status !== __WEBPACK_IMPORTED_MODULE_2__toggle_status__["a" /* TOGGLE_STATUS */].CLOSE) {
            this.status$.next(__WEBPACK_IMPORTED_MODULE_2__toggle_status__["a" /* TOGGLE_STATUS */].CLOSE);
        }
        this.status = __WEBPACK_IMPORTED_MODULE_2__toggle_status__["a" /* TOGGLE_STATUS */].CLOSE;
    };
    DropdownDirective.prototype.statusChange = function () {
        return this.status$.asObservable();
    };
    return DropdownDirective;
}());
DropdownDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[dropdown]',
        exportAs: 'dropdown',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */]) === "function" && _b || Object])
], DropdownDirective);

var _a, _b;
//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/dropdown.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__ = __webpack_require__("../../../../../src/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_toggle_directive__ = __webpack_require__("../../../../../src/dropdown-toggle.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_menu_directive__ = __webpack_require__("../../../../../src/dropdown-menu.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DropdownModule = (function () {
    function DropdownModule() {
    }
    return DropdownModule;
}());
DropdownModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_2__dropdown_toggle_directive__["a" /* DropdownToggleDirective */],
            __WEBPACK_IMPORTED_MODULE_3__dropdown_menu_directive__["a" /* DropdownMenuDirective */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_2__dropdown_toggle_directive__["a" /* DropdownToggleDirective */],
            __WEBPACK_IMPORTED_MODULE_3__dropdown_menu_directive__["a" /* DropdownMenuDirective */],
        ],
        providers: [],
    })
], DropdownModule);

//# sourceMappingURL=dropdown.module.js.map

/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_menu_directive__ = __webpack_require__("../../../../../src/dropdown-menu.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__ = __webpack_require__("../../../../../src/dropdown.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__dropdown_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_module__ = __webpack_require__("../../../../../src/dropdown.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__dropdown_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toggle_status__ = __webpack_require__("../../../../../src/toggle-status.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__toggle_status__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/toggle-status.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOGGLE_STATUS; });
var TOGGLE_STATUS;
(function (TOGGLE_STATUS) {
    TOGGLE_STATUS[TOGGLE_STATUS["OPEN"] = 0] = "OPEN";
    TOGGLE_STATUS[TOGGLE_STATUS["CLOSE"] = 1] = "CLOSE";
})(TOGGLE_STATUS || (TOGGLE_STATUS = {}));
//# sourceMappingURL=toggle-status.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map