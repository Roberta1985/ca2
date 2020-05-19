(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-characters-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"secondary\">\n\t\t<ion-title>Characters</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-list>\n\t\t<ion-item button detail lines=\"inset\" *ngFor=\"let character of characters\"\n\t\t\t(click)=\"openDetails(character)\">\n\t\t\n            <ion-avatar slot=\"start\">\n \t\t\t\t<img src=\"{{ character.img }}\">\n             </ion-avatar>\n \t\t\t\t<!-- The tag avatar will display the image in a rounded icon-->\n                 <!-- Example from https://youtu.be/Nc1RqvDY-B8-->\n \t\t\t\t<ion-label>\n \t\t\t\t\t<p> {{ character.name }} </p>\n \t\t\t\t</ion-label>\n\n\t\t</ion-item>\n\t</ion-list>\n<!-- We have an infinite scroll -->\n<!-- This threshold works when you have 80% of the page loaded, you can load more -->\n<!-- This event will work when you call the loadMore() function-->\n    <ion-infinite-scroll threshold=\"20%\" (ionInfinite)=\"loadMore($event)\">\n \t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading characters\">\n \t\t</ion-infinite-scroll-content>\n \t</ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/characters/characters-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/characters/characters-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CharactersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageRoutingModule", function() { return CharactersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters.page */ "./src/app/pages/characters/characters.page.ts");




const routes = [
    {
        path: '',
        component: _characters_page__WEBPACK_IMPORTED_MODULE_3__["CharactersPage"]
    }
];
let CharactersPageRoutingModule = class CharactersPageRoutingModule {
};
CharactersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharactersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/characters/characters.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/characters/characters.module.ts ***!
  \*******************************************************/
/*! exports provided: CharactersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageModule", function() { return CharactersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters-routing.module */ "./src/app/pages/characters/characters-routing.module.ts");
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters.page */ "./src/app/pages/characters/characters.page.ts");







let CharactersPageModule = class CharactersPageModule {
};
CharactersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersPageRoutingModule"]
        ],
        declarations: [_characters_page__WEBPACK_IMPORTED_MODULE_6__["CharactersPage"]]
    })
], CharactersPageModule);



/***/ }),

/***/ "./src/app/pages/characters/characters.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/characters/characters.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/characters/characters.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/characters/characters.page.ts ***!
  \*****************************************************/
/*! exports provided: CharactersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPage", function() { return CharactersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let CharactersPage = class CharactersPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        //Code from: https://youtu.be/Nc1RqvDY-B8
        //Set of variables
        this.characters = [];
        //This offset is to say first what position of the array I want to start
        this.offset = 0;
        //We have to set the number max of characters 
        this.maximumChars = 64;
    }
    ngOnInit() {
        this.charsLoad();
        //This main method will go to next method 
    }
    charsLoad(event) {
        //This event will load the first characters, as defined in the url in the API
        this.api.getCharacters(this.offset).subscribe(data => {
            console.log("my chararters info:", data);
            this.characters = this.characters.concat(data);
            //This event is to confirm, once the event is done, you can stop the action!  
            if (event) {
                event.target.complete();
            }
        });
    }
    loadMore(event) {
        //Once we have completed the first event, we can open(load) for more characters
        //We then set a new value to the offset, not the first anymore. 
        this.offset = this.offset + 20;
        this.charsLoad(event);
        if (this.offset > this.maximumChars) {
            event.target.disabled = true;
        }
    }
    openDetails(character) {
        let charId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${charId}`);
    }
};
CharactersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
CharactersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-characters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./characters.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./characters.page.scss */ "./src/app/pages/characters/characters.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], CharactersPage);



/***/ })

}]);
//# sourceMappingURL=characters-characters-module-es2015.js.map