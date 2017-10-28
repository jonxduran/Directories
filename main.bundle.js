webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n\t<li><a routerLink=\"/\">Home</a></li>\n\t<li><a routerLink=\"/videos\">Videos</a></li>\n</ul> -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_root_root_component__ = __webpack_require__("../../../../../src/app/components/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_dirlisting_service__ = __webpack_require__("../../../../../src/app/services/dirlisting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    /* TODO: make these dynamic from service */
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_root_root_component__["a" /* RootComponent */] },
    { path: 'photos', component: __WEBPACK_IMPORTED_MODULE_5__components_root_root_component__["a" /* RootComponent */] },
    { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_5__components_root_root_component__["a" /* RootComponent */] },
    { path: 'vacations', component: __WEBPACK_IMPORTED_MODULE_5__components_root_root_component__["a" /* RootComponent */] },
    { path: 'expenses', component: __WEBPACK_IMPORTED_MODULE_5__components_root_root_component__["a" /* RootComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_5__components_root_root_component__["a" /* RootComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_root_root_component__["a" /* RootComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_dirlisting_service__["a" /* DirlistingService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/root/root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#headerbar {\r\n\tbackground-color: slategrey;\r\n}\r\n\r\n\t#home-container {\r\n\t\twidth: 50px;\r\n\t\theight: 50px;\r\n\t\tposition: absolute;\r\n\t\tbackground-color: rgba(178, 235, 255, 0.4);\r\n\t}\r\n\r\n\t#home-a-container {\r\n\t\tmargin: 21px auto 0;\r\n\t}\r\n\t\r\n\t\t#homeicon {\r\n\t\t\tbackground: white;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\theight: 10px;\r\n\t\t\tmargin-top: 5px;\r\n\t\t\tmargin-left: 1px;\r\n\t\t\tposition: relative;\r\n\t\t\twidth: 20px;\r\n\t\t}\r\n\t\t#homeicon:before {\r\n\t\t\tborder-bottom: 12px solid white;\r\n\t\t\tborder-left: 10px solid transparent;\r\n\t\t\tborder-right: 10px solid transparent;\r\n\t\t\tcontent: \"\";\r\n\t\t\theight: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: -12px;\r\n\t\t\twidth: 0;\r\n\t\t}\r\n\r\n\t\t#title-container {\r\n\t\t\t-webkit-box-flex: 1;\r\n\t\t\t    -ms-flex-positive: 1;\r\n\t\t\t        flex-grow: 1;\r\n\t\t\theight: 50px;\r\n\t\t\tfont-size: 24px;\r\n\t\t\tcolor: white;\r\n\t\t}\r\n\r\n\r\n#app-left {\r\n\twidth: 180px;\r\n}\r\n\r\n.router-directories {\r\n\twidth: 90%;\r\n\tmargin: 20px auto;\r\n\tpadding: 10px;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n}\r\n\r\n\t.dirdiv-a {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\r\n\t.dirdiv-files {\r\n\t\twidth: 90%;\r\n\t}\r\n\t\t.dirdiv-file-container {\r\n\t\t\tmargin: 5px auto;\r\n\t\t\tpadding: 5px;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t\t.dirdiv-file-container.open {\r\n\t\t\tbackground-color: rgba(138, 171, 188, 0.7);\r\n\t\t}\r\n\t\t.dirdiv-file-container:hover {\r\n\t\t\tbackground-color: rgba(112, 128, 144, 0.45);\r\n\t\t}\r\n\r\n\r\n\r\n#app-right {\r\n\twidth: calc(100% - 180px);\r\n}\r\n\r\n#displayfile {\r\n\tmargin: auto;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\tbackground-color: rgba(255, 255, 255, 0.8);\r\n\twidth: 90%;\r\n\theight: 90%;\r\n}\r\n\r\n\t#displayfile-title {\r\n\t\tpadding: 10px;\r\n\t\twidth: 100%;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t#displayfile-content {\r\n\t\tpadding: 10px 20px;\r\n\t\twidth: calc(100% - 40px);\r\n\t\toverflow-y: scroll;\r\n\t\theight: 390px;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"headerbar\" class=\"displayflex\">\n\t<div id=\"home-container\" class=\"displayflex\">\n\t\t<div id=\"home-a-container\"><a routerLink=\"/\">\n\t\t\t<span id=\"homeicon\"></span>\n\t\t</a></div>\n\t</div>\n\t<div id=\"title-container\" class=\"displayflex\">\n\t\t<div class=\"marginauto\">Directories App</div>\n\t</div>\n</div>\n\n<div id=\"app-body\" class=\"displayflex\">\n\n\t\t<div id=\"app-left\">\n\n\t\t\t<div *ngFor=\"let dirdn of directories\" class=\"router-directories displayflex\" id='router-{{dirdn.dirName}}'>\n\t\t\t\t\n\t\t\t\t<a routerLink='/{{dirdn.dirName}}' class=\"dirdiv-a\" > {{dirdn.displayName}} </a> <!-- (click)='openFile(dirdn.dirName)' -->\n\t\t\t\t\n\t\t\t\t<ng-container *ngFor=\"let fil of allfiles\">\n\t\t\t\t\t<div *ngIf=\"fil.opened == true && fil.dirName == dirdn.dirName\" class=\"dirdiv-files marginauto\" id='router-{{dirdn.dirName}}-files'>\n\t\t\t\t\t\t<div *ngFor=\"let file of fil.files\" (click)='openFile(dirdn.dirName, file.id)' class=\"dirdiv-file-container\" id='{{dirdn.dirName}}-file-{{file.id}}'> \n\t\t\t\t\t\t\t<div class=\"files-title\"> {{ file.fileName }} </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div id=\"app-right\" class=\"displayflex\">\n\t\t\t<div *ngIf=\"(currfile | json) != '{}'\" id=\"displayfile\" class=\"displayflex\">\n\t\t\t\t<div id=\"displayfile-title\"> {{currfile.fileName}} </div>\n\t\t\t\t<div id=\"displayfile-content\"> {{currfile.content}} </div>\n\t\t\t</div>\n\t\t</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dirlisting_service__ = __webpack_require__("../../../../../src/app/services/dirlisting.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RootComponent = (function () {
    function RootComponent(dirListingService, router) {
        this.dirListingService = dirListingService;
        this.directories = [];
        this.files = {};
        this.allfiles = [];
        this.currfile = {};
        this.routerpath = router.url.slice(1);
    }
    RootComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dirListingService.getDirListing().subscribe(function (direc) {
            direc.forEach(function (dr) { return _this.directories.push(dr); });
        });
        this.dirListingService.getFiles().subscribe(function (fil) {
            _this.files = fil;
            /* fil.forEach(fl => this.files.push(fl)); */
        });
        this.dirListingService.getAllFiles().subscribe(function (fil) {
            fil.forEach(function (fl) {
                fl['opened'] = (fl.dirName == _this.routerpath) ? true : false;
                _this.allfiles.push(fl);
            });
        });
    };
    RootComponent.prototype.getDirectories = function () {
        return this.directories;
    };
    RootComponent.prototype.openFile = function (ro, i) {
        var _this = this;
        var currdirfiles = this.allfiles.filter(function (adir) { return (adir['dirName'] == ro); })[0]['files'];
        console.log(currdirfiles);
        var clickedfile = currdirfiles.filter(function (afil) { return (afil['id'] == i); })[0];
        Object.keys(clickedfile).forEach(function (obj) {
            _this.currfile[obj] = clickedfile[obj];
        });
        console.log(Object.keys(this.currfile));
        var group = document.getElementById('router-' + ro + '-files');
        var clicked = document.getElementById(ro + '-file-' + i);
        if (!clicked.classList.contains('open')) {
            for (var i_1 = 0; i_1 < group.children.length; i_1++) {
                group.children[i_1].classList.remove('open');
            }
            clicked.classList.add('open');
        }
    };
    return RootComponent;
}());
RootComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dirroot',
        template: __webpack_require__("../../../../../src/app/components/root/root.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/root/root.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_dirlisting_service__["a" /* DirlistingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dirlisting_service__["a" /* DirlistingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], RootComponent);

var _a, _b;
//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/dirlisting.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirlistingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DirlistingService = (function () {
    function DirlistingService(http) {
        this.http = http;
        /* console.log('dirlistingservice connected'); */
    }
    DirlistingService.prototype.getDirListing = function () {
        return this.http.get("./../../assets/dir_listing.json").map(function (res) { return res.json(); });
    };
    DirlistingService.prototype.getFiles = function () {
        return this.http.get("./../../assets/file.json").map(function (res) { return res.json(); });
    };
    DirlistingService.prototype.getAllFiles = function () {
        return this.http.get("./../../assets/allfiles.json").map(function (res) { return res.json(); });
    };
    return DirlistingService;
}());
DirlistingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DirlistingService);

var _a;
//# sourceMappingURL=dirlisting.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map