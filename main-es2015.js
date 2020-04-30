(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");



class AppComponent {
    constructor() {
        this.title = 'pocemon';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-container");
    } }, directives: [_components_container_container_component__WEBPACK_IMPORTED_MODULE_1__["ContainerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _components_pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pokemon/pokemon.component */ "./src/app/components/pokemon/pokemon.component.ts");
/* harmony import */ var _components_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pokemon-details/pokemon-details.component */ "./src/app/components/pokemon-details/pokemon-details.component.ts");
/* harmony import */ var _directives_type_color_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/type-color.directive */ "./src/app/directives/type-color.directive.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_container_container_component__WEBPACK_IMPORTED_MODULE_6__["ContainerComponent"],
        _components_pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_7__["PokemonComponent"],
        _components_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_8__["PokemonDetailsComponent"],
        _directives_type_color_directive__WEBPACK_IMPORTED_MODULE_9__["TypeColorDirective"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_container_container_component__WEBPACK_IMPORTED_MODULE_6__["ContainerComponent"],
                    _components_pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_7__["PokemonComponent"],
                    _components_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_8__["PokemonDetailsComponent"],
                    _directives_type_color_directive__WEBPACK_IMPORTED_MODULE_9__["TypeColorDirective"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/container/container.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/container/container.component.ts ***!
  \*************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_server_relationship_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/server-relationship.service */ "./src/app/services/server-relationship.service.ts");
/* harmony import */ var src_app_services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pokemon-details.service */ "./src/app/services/pokemon-details.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pokemon-details/pokemon-details.component */ "./src/app/components/pokemon-details/pokemon-details.component.ts");
/* harmony import */ var _pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pokemon/pokemon.component */ "./src/app/components/pokemon/pokemon.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");









function ContainerComponent_app_pokemon_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pokemon", 31);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pokemonItem", item_r1);
} }
class ContainerComponent {
    constructor(serverService, detailsService) {
        this.serverService = serverService;
        this.detailsService = detailsService;
        this.pokemonArr = [];
    }
    ngOnInit() {
        this.getList();
        this.select = 'any';
    }
    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }
    getList() {
        this.subscriber = this.serverService.getPokemonList()
            .subscribe((data) => {
            this.serverService.nextPageUrl = data.next;
            this.pokemonArr = data.results;
        }, (error) => {
            console.log(error);
        });
    }
    getNextList() {
        this.detailsService.pokemonDetails.display = 'none';
        this.select = 'any';
        this.subscriber.unsubscribe();
        this.serverService.url = this.serverService.nextPageUrl;
        this.getList();
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_server_relationship_service__WEBPACK_IMPORTED_MODULE_1__["ServerRelationshipService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_2__["PokemonDetailsService"])); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 62, vars: 5, consts: [[1, "container"], [1, "row", "filterWrapper"], [1, "filter", "col-6"], ["name", "select", 1, "col-6", "btn-info", 3, "ngModel", "ngModelChange"], ["value", "any", "selected", "selected"], ["value", "normal"], ["value", "fighting"], ["value", "flying"], ["value", "poison"], ["value", "ground"], ["value", "rock"], ["value", "bug"], ["value", "ghost"], ["value", "steel"], ["value", "fire"], ["value", "water"], ["value", "grass"], ["value", "electric"], ["value", "psychic"], ["value", "ice"], ["value", "dragon"], ["value", "dark"], ["value", "fairy"], ["value", "unknown"], ["value", "shadow"], [1, "row"], [1, "pokedex", "col-md-4", "offset-md-4", "col-sm-4", "offset-sm-4", "col-xs-12"], [1, "pokemonList", "col-sm-6", "col-xs-12"], ["class", "col-5 offset-1 col-xl-4 offset-xl-0 col-lg-4 offset-lg-0 col-md-5 offset-md-0 col-sm-10 ", 3, "pokemonItem", 4, "ngFor", "ngForOf"], [1, "pokemonCard", "col-6", "col-xs-12"], [1, "btn", "btn-info", "col-sm-6", "col-xs-12", 3, "click"], [1, "col-5", "offset-1", "col-xl-4", "offset-xl-0", "col-lg-4", "offset-lg-0", "col-md-5", "offset-md-0", "col-sm-10", 3, "pokemonItem"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter by type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContainerComponent_Template_select_ngModelChange_5_listener($event) { return ctx.select = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " fighting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " flying");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "poison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ground");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "rock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "bug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ghost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "steel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "fire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "water");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "grass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "electric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "psychic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "ice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "dragon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "fairy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "unknown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "shadow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "pokedex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ContainerComponent_app_pokemon_55_Template, 1, 1, "app-pokemon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-pokemon-details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContainerComponent_Template_button_click_60_listener() { return ctx.getNextList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Load More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.select);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](56, 2, ctx.pokemonArr, ctx.select));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_5__["PokemonDetailsComponent"], _pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_6__["PokemonComponent"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"]], styles: [".filterWrapper[_ngcontent-%COMP%] {\n  height: 40px;\n  background-color: black;\n}\n.filterWrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-family: tinos;\n  text-align: center;\n}\nselect[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  font-family: tinos;\n  color: white;\n  height: 40px;\n  font-size: 24px;\n}\n.pokedex[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  min-width: 210px;\n  border: 1px solid black;\n}\n.pokedex[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: black;\n  font-family: tinos;\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%] {\n  height: 40px;\n  color: white;\n  margin-bottom: 30px;\n  line-height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvRjpcXFZvdmFcXHdvcmtcXHBva2Vtb25fY29weVxccG9rZW1vbl9jb3B5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWluZXJcXGNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0E7QURBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRUo7QURBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDR0o7QURGSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJUjtBRERBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyV3JhcHBlcntcclxuaGVpZ2h0OiA0MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5oMntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiB0aW5vcztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG59XHJcbnNlbGVjdCwgb3B0aW9ue1xyXG4gICAgZm9udC1mYW1pbHk6IHRpbm9zO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5wb2tlZGV4e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBoMXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LWZhbWlseTogdGlub3M7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiLmZpbHRlcldyYXBwZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmZpbHRlcldyYXBwZXIgaDIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiB0aW5vcztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zZWxlY3QsIG9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiB0aW5vcztcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnBva2VkZXgge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtaW4td2lkdGg6IDIxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5wb2tlZGV4IGgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogdGlub3M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container',
                templateUrl: './container.component.html',
                styleUrls: ['./container.component.scss']
            }]
    }], function () { return [{ type: src_app_services_server_relationship_service__WEBPACK_IMPORTED_MODULE_1__["ServerRelationshipService"] }, { type: src_app_services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_2__["PokemonDetailsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pokemon-details/pokemon-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/pokemon-details/pokemon-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: PokemonDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailsComponent", function() { return PokemonDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/pokemon-details.service */ "./src/app/services/pokemon-details.service.ts");



const _c0 = ["pokemonDetailsWrapper"];
const _c1 = ["pokemonImg"];
class PokemonDetailsComponent {
    constructor(detailsService, renderer) {
        this.detailsService = detailsService;
        this.renderer = renderer;
    }
    ngOnInit() { }
    ngDoCheck() {
        this.renderer.setStyle(this.item.nativeElement, 'display', this.detailsService.pokemonDetails.display);
        this.renderer.setAttribute(this.itemImg.nativeElement, 'src', this.detailsService.pokemonDetails.img);
    }
}
PokemonDetailsComponent.ɵfac = function PokemonDetailsComponent_Factory(t) { return new (t || PokemonDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_1__["PokemonDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PokemonDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonDetailsComponent, selectors: [["app-pokemon-details"]], viewQuery: function PokemonDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.item = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemImg = _t.first);
    } }, decls: 54, vars: 11, consts: [[1, "cardWrapper"], ["pokemonDetailsWrapper", ""], [1, "pictureWrapper"], [1, "itemImg"], ["pokemonImg", ""], [1, "pokemonName"], [1, "pokemonTableWrapper"], [1, "container-fluid"], [1, "row"], [1, "col-7"], [1, "col-5"]], template: function PokemonDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Defense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "HP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "SP Attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "SP Defense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Total moves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.detailsService.pokemonDetails.displayDetailsName, " #", ctx.detailsService.pokemonDetails.displayDetailsId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailsService.pokemonDetails.displayDetailsType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailsService.pokemonDetails.attack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailsService.pokemonDetails.defense);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailsService.pokemonDetails.hp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailsService.pokemonDetails.spAttack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailsService.pokemonDetails.spDefense);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailsService.pokemonDetails.speed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailsService.pokemonDetails.weight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detailsService.pokemonDetails.totalMoves);
    } }, styles: [".cardWrapper[_ngcontent-%COMP%] {\n  width: 306px;\n  height: 596px;\n  border: 2px solid black;\n  padding: 22px;\n  margin-bottom: 44px;\n  margin-left: 6vw;\n}\n.cardWrapper[_ngcontent-%COMP%]   .pictureWrapper[_ngcontent-%COMP%] {\n  max-width: 262px;\n  height: 262px;\n  border: 2px solid black;\n  overflow: hidden;\n}\n.cardWrapper[_ngcontent-%COMP%]   .pictureWrapper[_ngcontent-%COMP%]   .itemImg[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  min-height: 100%;\n}\n.cardWrapper[_ngcontent-%COMP%]   .pokemonName[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n  text-transform: Capitalize;\n  margin-bottom: 20px;\n}\n.cardWrapper[_ngcontent-%COMP%]   .pokemonTableWrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n}\n.cardWrapper[_ngcontent-%COMP%]   .pokemonTableWrapper[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n@media screen and (max-width: 768px) {\n  .cardWrapper[_ngcontent-%COMP%] {\n    margin-left: -3vw;\n  }\n}\n@media screen and (max-width: 640px) {\n  .cardWrapper[_ngcontent-%COMP%] {\n    margin-left: -11vw;\n  }\n}\n@media screen and (max-width: 575px) {\n  .cardWrapper[_ngcontent-%COMP%] {\n    margin-left: calc(46vw - 153px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uLWRldGFpbHMvRjpcXFZvdmFcXHdvcmtcXHBva2Vtb25fY29weVxccG9rZW1vbl9jb3B5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxwb2tlbW9uLWRldGFpbHNcXHBva2Vtb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uLWRldGFpbHMvcG9rZW1vbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0daO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0VSO0FERFE7RUFDSSx1QkFBQTtBQ0daO0FEQ0E7RUFDSTtJQUNJLGlCQUFBO0VDRU47QUFDRjtBREFBO0VBQ0k7SUFDSSxrQkFBQTtFQ0VOO0FBQ0Y7QURBQTtFQUNJO0lBQ0ksK0JBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uLWRldGFpbHMvcG9rZW1vbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRXcmFwcGVyIHtcclxuICAgIHdpZHRoOiAzMDZweDtcclxuICAgIGhlaWdodDogNTk2cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZ2dztcclxuICAgIC5waWN0dXJlV3JhcHBlcntcclxuICAgICAgICBtYXgtd2lkdGg6IDI2MnB4O1xyXG4gICAgICAgIGhlaWdodDogMjYycHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAuaXRlbUltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBva2Vtb25OYW1le1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBDYXBpdGFsaXplO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucG9rZW1vblRhYmxlV3JhcHBlcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICAgIHRke1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jYXJkV3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zdnc7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5jYXJkV3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMXZ3O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAuY2FyZFdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDQ2dncgLSAxNTNweCk7XHJcbiAgICB9XHJcbn1cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuLy8gICAgIC5jYXJkV3JhcHBlciB7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoNDR2dyAtIDE1M3B4KTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iLCIuY2FyZFdyYXBwZXIge1xuICB3aWR0aDogMzA2cHg7XG4gIGhlaWdodDogNTk2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICBtYXJnaW4tbGVmdDogNnZ3O1xufVxuLmNhcmRXcmFwcGVyIC5waWN0dXJlV3JhcHBlciB7XG4gIG1heC13aWR0aDogMjYycHg7XG4gIGhlaWdodDogMjYycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmRXcmFwcGVyIC5waWN0dXJlV3JhcHBlciAuaXRlbUltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5jYXJkV3JhcHBlciAucG9rZW1vbk5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBDYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNhcmRXcmFwcGVyIC5wb2tlbW9uVGFibGVXcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHg7XG59XG4uY2FyZFdyYXBwZXIgLnBva2Vtb25UYWJsZVdyYXBwZXIgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcmRXcmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTN2dztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmNhcmRXcmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTExdnc7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5jYXJkV3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNDZ2dyAtIDE1M3B4KTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon-details',
                templateUrl: './pokemon-details.component.html',
                styleUrls: ['./pokemon-details.component.scss']
            }]
    }], function () { return [{ type: src_app_services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_1__["PokemonDetailsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pokemonDetailsWrapper', { static: true }]
        }], itemImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pokemonImg', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pokemon/pokemon.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pokemon/pokemon.component.ts ***!
  \*********************************************************/
/*! exports provided: PokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonComponent", function() { return PokemonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_server_relationship_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/server-relationship.service */ "./src/app/services/server-relationship.service.ts");
/* harmony import */ var src_app_services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/pokemon-details.service */ "./src/app/services/pokemon-details.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_type_color_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/type-color.directive */ "./src/app/directives/type-color.directive.ts");






const _c0 = ["itemImg"];
function PokemonComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", type_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r4);
} }
class PokemonComponent {
    constructor(serverService, renderer, detailsService) {
        this.serverService = serverService;
        this.renderer = renderer;
        this.detailsService = detailsService;
        this.types = [];
        this.subscriber = null;
    }
    ngOnInit() {
        this.pokemonItem.types = 'none';
        const slashArr = this.pokemonItem.url.split('/');
        this.pokemonId = slashArr[(slashArr.length - 2)];
        this.subscriber = this.serverService.getPokemon(this.pokemonId)
            .subscribe((pokemonDetails) => {
            this.pokemonDetails = pokemonDetails;
            for (const pokemonType of pokemonDetails.types) {
                this.types.push(pokemonType.type.name);
            }
            this.pokemonItem.types = this.types;
            const imageUrl = pokemonDetails.sprites.front_default;
            this.renderer.setAttribute(this.itemImg.nativeElement, 'src', `${imageUrl}`);
        }, (error) => {
            console.log(error);
        });
    }
    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }
    setDetails() {
        this.detailsService.showDisplay();
        this.detailsService.pokemonDetails.img = this.pokemonDetails.sprites.front_default;
        this.detailsService.pokemonDetails.displayDetailsName = this.pokemonItem.name;
        this.detailsService.pokemonDetails.displayDetailsId = this.pokemonId;
        this.detailsService.pokemonDetails.displayDetailsType = this.types;
        this.detailsService.pokemonDetails.attack = this.pokemonDetails.stats[4].base_stat;
        this.detailsService.pokemonDetails.defense = this.pokemonDetails.stats[3].base_stat;
        this.detailsService.pokemonDetails.hp = this.pokemonDetails.stats[5].base_stat;
        this.detailsService.pokemonDetails.spAttack = this.pokemonDetails.stats[2].base_stat;
        this.detailsService.pokemonDetails.spDefense = this.pokemonDetails.stats[1].base_stat;
        this.detailsService.pokemonDetails.speed = this.pokemonDetails.stats[0].base_stat;
        this.detailsService.pokemonDetails.weight = this.pokemonDetails.weight;
        this.detailsService.pokemonDetails.totalMoves = this.pokemonDetails.moves.length;
    }
}
PokemonComponent.ɵfac = function PokemonComponent_Factory(t) { return new (t || PokemonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_server_relationship_service__WEBPACK_IMPORTED_MODULE_1__["ServerRelationshipService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_2__["PokemonDetailsService"])); };
PokemonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokemonComponent, selectors: [["app-pokemon"]], viewQuery: function PokemonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemImg = _t.first);
    } }, inputs: { pokemonItem: "pokemonItem" }, decls: 8, vars: 3, consts: [[1, "cardWrapper", 3, "click"], [1, "pictureWrapper"], [1, "itemImg"], ["itemImg", ""], [1, "pokemonName"], [1, "pokemonTypeWrapper"], ["class", "pokemonType", "appTypeColor", "", 3, "type", 4, "ngFor", "ngForOf"], ["appTypeColor", "", 1, "pokemonType", 3, "type"]], template: function PokemonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PokemonComponent_Template_div_click_0_listener() { return ctx.setDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PokemonComponent_span_7_Template, 2, 2, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.pokemonItem.name, " #", ctx.pokemonId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _directives_type_color_directive__WEBPACK_IMPORTED_MODULE_4__["TypeColorDirective"]], styles: [".cardWrapper[_ngcontent-%COMP%] {\n  width: 153px;\n  height: 243px;\n  border: 1px solid black;\n  padding: 11px;\n  margin-bottom: 22px;\n}\n.cardWrapper[_ngcontent-%COMP%]   .pictureWrapper[_ngcontent-%COMP%] {\n  width: 131px;\n  height: 131px;\n  border: 1px solid black;\n  overflow: hidden;\n}\n.cardWrapper[_ngcontent-%COMP%]   .pictureWrapper[_ngcontent-%COMP%]   .itemImg[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  min-height: 100%;\n}\n.cardWrapper[_ngcontent-%COMP%]   .pokemonName[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n  text-transform: Capitalize;\n  margin-bottom: 10px;\n}\n.cardWrapper[_ngcontent-%COMP%]   .pokemonType[_ngcontent-%COMP%] {\n  height: 20px;\n  padding: 4px;\n  margin: 7px;\n  border-radius: 10%;\n  text-align: center;\n}\n@media screen and (max-width: 485px) {\n  .cardWrapper[_ngcontent-%COMP%] {\n    margin-left: -5vw;\n  }\n}\n@media screen and (max-width: 420px) {\n  .cardWrapper[_ngcontent-%COMP%] {\n    margin-left: -8vw;\n  }\n}\n@media screen and (max-width: 350px) {\n  .cardWrapper[_ngcontent-%COMP%] {\n    margin-left: -12vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uL0Y6XFxWb3ZhXFx3b3JrXFxwb2tlbW9uX2NvcHlcXHBva2Vtb25fY29weS9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9rZW1vblxccG9rZW1vbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb2tlbW9uL3Bva2Vtb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0FDR1o7QURBSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRENBO0VBQ0k7SUFDSSxpQkFBQTtFQ0VOO0FBQ0Y7QURBQTtFQUNJO0lBQ0ksaUJBQUE7RUNFTjtBQUNGO0FEQUE7RUFDSTtJQUNJLGtCQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZW1vbi9wb2tlbW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRXcmFwcGVyIHtcclxuICAgIHdpZHRoOiAxNTNweDtcclxuICAgIGhlaWdodDogMjQzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG4gICAgLnBpY3R1cmVXcmFwcGVye1xyXG4gICAgICAgIHdpZHRoOiAxMzFweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLml0ZW1JbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wb2tlbW9uTmFtZXtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogQ2FwaXRhbGl6ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnBva2Vtb25UeXBle1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luOiA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODVweCkge1xyXG4gICAgLmNhcmRXcmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTV2dztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgLmNhcmRXcmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTh2dztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgLmNhcmRXcmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEydnc7XHJcbiAgICB9XHJcbn0iLCIuY2FyZFdyYXBwZXIge1xuICB3aWR0aDogMTUzcHg7XG4gIGhlaWdodDogMjQzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxMXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuLmNhcmRXcmFwcGVyIC5waWN0dXJlV3JhcHBlciB7XG4gIHdpZHRoOiAxMzFweDtcbiAgaGVpZ2h0OiAxMzFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZFdyYXBwZXIgLnBpY3R1cmVXcmFwcGVyIC5pdGVtSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLmNhcmRXcmFwcGVyIC5wb2tlbW9uTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IENhcGl0YWxpemU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FyZFdyYXBwZXIgLnBva2Vtb25UeXBlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbjogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg1cHgpIHtcbiAgLmNhcmRXcmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTV2dztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNhcmRXcmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTh2dztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgLmNhcmRXcmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTEydnc7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pokemon',
                templateUrl: './pokemon.component.html',
                styleUrls: ['./pokemon.component.scss']
            }]
    }], function () { return [{ type: src_app_services_server_relationship_service__WEBPACK_IMPORTED_MODULE_1__["ServerRelationshipService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: src_app_services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_2__["PokemonDetailsService"] }]; }, { pokemonItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemImg', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/directives/type-color.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/type-color.directive.ts ***!
  \****************************************************/
/*! exports provided: TypeColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeColorDirective", function() { return TypeColorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TypeColorDirective {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() {
        switch (this.type) {
            case ('grass'):
                this.element.nativeElement.style.backgroundColor = 'rgb(155,204,80)';
                break;
            case ('poison'):
                this.element.nativeElement.style.backgroundColor = 'rgb(185,127,201)';
                break;
            case ('fire'):
                this.element.nativeElement.style.backgroundColor = 'rgb(253,125,36)';
                break;
            case ('flying'):
                this.element.nativeElement.style.backgroundColor = 'rgb(61,199,239)';
                break;
            case ('water'):
                this.element.nativeElement.style.backgroundColor = 'rgb(69,146,196)';
                break;
            case ('bug'):
                this.element.nativeElement.style.backgroundColor = 'rgb(114,159,63)';
                break;
            case ('normal'):
                this.element.nativeElement.style.backgroundColor = 'rgb(164,172,175)';
                break;
            case ('electric'):
                this.element.nativeElement.style.backgroundColor = 'rgb(238,213,53)';
                break;
            case ('ground'):
                this.element.nativeElement.style.backgroundColor = 'rgb(171,152,66)';
                break;
            case ('fairy'):
                this.element.nativeElement.style.backgroundColor = 'rgb(253,185,233)';
                break;
            case ('fighting'):
                this.element.nativeElement.style.backgroundColor = 'rgb(213,103,35)';
                break;
            case ('psychic'):
                this.element.nativeElement.style.backgroundColor = 'rgb(243,102,185)';
                break;
            case ('rock'):
                this.element.nativeElement.style.backgroundColor = 'rgb(163,140,33)';
                break;
            case ('steel'):
                this.element.nativeElement.style.backgroundColor = 'rgb(158,183,184)';
                break;
            case ('ice'):
                this.element.nativeElement.style.backgroundColor = 'rgb(81,196,231)';
                break;
            case ('ghost'):
                this.element.nativeElement.style.backgroundColor = 'rgb(123,98,163)';
                break;
            case ('dragon'):
                this.element.nativeElement.style.backgroundColor = 'rgb(241,110,87)';
                break;
            case ('dark'):
                this.element.nativeElement.style.backgroundColor = 'rgb(112,112,112)';
                break;
            default: this.element.nativeElement.style.backgroundColor = 'rgb(185,185,185)';
        }
    }
}
TypeColorDirective.ɵfac = function TypeColorDirective_Factory(t) { return new (t || TypeColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TypeColorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TypeColorDirective, selectors: [["", "appTypeColor", ""]], inputs: { type: "type" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypeColorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTypeColor]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pokemon-details.service */ "./src/app/services/pokemon-details.service.ts");



class FilterPipe {
    constructor(detailsService) {
        this.detailsService = detailsService;
    }
    transform(pokemonArr, searchInputWord) {
        if (searchInputWord === 'any') {
            return pokemonArr;
        }
        else {
            this.detailsService.pokemonDetails.display = 'none';
            return pokemonArr.filter((element) => element.types.includes(`${searchInputWord}`));
        }
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_1__["PokemonDetailsService"])); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], function () { return [{ type: _services_pokemon_details_service__WEBPACK_IMPORTED_MODULE_1__["PokemonDetailsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pokemon-details.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/pokemon-details.service.ts ***!
  \*****************************************************/
/*! exports provided: PokemonDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailsService", function() { return PokemonDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PokemonDetailsService {
    constructor() {
        this.pokemonDetails = {
            display: 'none',
            img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            displayDetailsName: 'none',
            displayDetailsId: 'none',
            displayDetailsType: 'none',
            attack: 'none',
            defense: 'none',
            hp: 'none',
            spAttack: 'none',
            spDefense: 'none',
            speed: 'none',
            weight: 'none',
            totalMoves: 'none'
        };
    }
    showDisplay() {
        this.pokemonDetails.display = 'block';
    }
}
PokemonDetailsService.ɵfac = function PokemonDetailsService_Factory(t) { return new (t || PokemonDetailsService)(); };
PokemonDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PokemonDetailsService, factory: PokemonDetailsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/server-relationship.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/server-relationship.service.ts ***!
  \*********************************************************/
/*! exports provided: ServerRelationshipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerRelationshipService", function() { return ServerRelationshipService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ServerRelationshipService {
    constructor(http) {
        this.http = http;
        this.url = 'http://pokeapi.co/api/v2/pokemon/?limit=12';
    }
    getPokemonList() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(this.url, { headers });
    }
    getPokemon(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-type', 'application/json');
        const url = 'http://pokeapi.co/api/v2/pokemon/' + id + '/';
        return this.http.get(url, { headers });
    }
}
ServerRelationshipService.ɵfac = function ServerRelationshipService_Factory(t) { return new (t || ServerRelationshipService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ServerRelationshipService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServerRelationshipService, factory: ServerRelationshipService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerRelationshipService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Vova\work\pokemon_copy\pokemon_copy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map