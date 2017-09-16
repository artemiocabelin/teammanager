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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_manager_add_add_component__ = __webpack_require__("../../../../../src/app/player-manager/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_manager_list_list_component__ = __webpack_require__("../../../../../src/app/player-manager/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_manager_game_three_game_three_component__ = __webpack_require__("../../../../../src/app/status-manager/game-three/game-three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__status_manager_game_two_game_two_component__ = __webpack_require__("../../../../../src/app/status-manager/game-two/game-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_manager_game_one_game_one_component__ = __webpack_require__("../../../../../src/app/status-manager/game-one/game-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__status_manager_status_manager_component__ = __webpack_require__("../../../../../src/app/status-manager/status-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_manager_player_manager_component__ = __webpack_require__("../../../../../src/app/player-manager/player-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/players/list' },
    { path: 'players', component: __WEBPACK_IMPORTED_MODULE_6__player_manager_player_manager_component__["a" /* PlayerManagerComponent */], children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_1__player_manager_list_list_component__["a" /* ListComponent */] },
            { path: 'addplayer', component: __WEBPACK_IMPORTED_MODULE_0__player_manager_add_add_component__["a" /* AddComponent */] },
        ] },
    { path: 'status/game', component: __WEBPACK_IMPORTED_MODULE_5__status_manager_status_manager_component__["a" /* StatusManagerComponent */], children: [
            { path: '1', component: __WEBPACK_IMPORTED_MODULE_4__status_manager_game_one_game_one_component__["a" /* GameOneComponent */] },
            { path: '2', component: __WEBPACK_IMPORTED_MODULE_3__status_manager_game_two_game_two_component__["a" /* GameTwoComponent */] },
            { path: '3', component: __WEBPACK_IMPORTED_MODULE_2__status_manager_game_three_game_three_component__["a" /* GameThreeComponent */] },
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "<a [routerLink]=\"['players','list']\">Manage Players</a>\n<a [routerLink]=\"['status','game','1']\">Manage Players</a>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players_service__ = __webpack_require__("../../../../../src/app/players.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_manager_player_manager_component__ = __webpack_require__("../../../../../src/app/player-manager/player-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__status_manager_status_manager_component__ = __webpack_require__("../../../../../src/app/status-manager/status-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__status_manager_game_one_game_one_component__ = __webpack_require__("../../../../../src/app/status-manager/game-one/game-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__status_manager_game_two_game_two_component__ = __webpack_require__("../../../../../src/app/status-manager/game-two/game-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__status_manager_game_three_game_three_component__ = __webpack_require__("../../../../../src/app/status-manager/game-three/game-three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__player_manager_list_list_component__ = __webpack_require__("../../../../../src/app/player-manager/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__player_manager_add_add_component__ = __webpack_require__("../../../../../src/app/player-manager/add/add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- Import FormsModule
 // <-- Import HttpModule









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__player_manager_player_manager_component__["a" /* PlayerManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__status_manager_status_manager_component__["a" /* StatusManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_9__status_manager_game_one_game_one_component__["a" /* GameOneComponent */],
            __WEBPACK_IMPORTED_MODULE_10__status_manager_game_two_game_two_component__["a" /* GameTwoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__status_manager_game_three_game_three_component__["a" /* GameThreeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__player_manager_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__player_manager_add_add_component__["a" /* AddComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/player-manager/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player-manager/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add works!\n</p>\n<fieldset>\n  <form (submit) = \"onSubmit()\">\n    <label>Player Name:\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"player.name\" />\n    </label>\n    <label>Preferred Position:\n      <input type=\"text\" name=\"pref_position\" [(ngModel)]=\"player.pref_position\" />\n    </label>\n    <input type=\"submit\" value=\"ADD\" />\n  </form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/player-manager/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players_service__ = __webpack_require__("../../../../../src/app/players.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = (function () {
    function AddComponent(_playersService, router) {
        this._playersService = _playersService;
        this.router = router;
        this.player = {
            name: '',
            pref_position: '',
            game1Status: 'undecided',
            game2Status: 'undecided',
            game3Status: 'undecided'
        };
    }
    AddComponent.prototype.onSubmit = function () {
        console.log('saving Player');
        this._playersService.createPlayer(this.player);
        this.player = {
            name: '',
            pref_position: '',
            game1Status: 'undecided',
            game2Status: 'undecided',
            game3Status: 'undecided'
        };
        this.router.navigate(['players', 'list']);
    };
    AddComponent.prototype.ngOnInit = function () {
    };
    return AddComponent;
}());
AddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-add',
        template: __webpack_require__("../../../../../src/app/player-manager/add/add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player-manager/add/add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AddComponent);

var _a, _b;
//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ "../../../../../src/app/player-manager/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player-manager/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  list works!\n</p>\n\n<table>\n  <tr>\n    <th>Team Name</th>\n    <th>Preferred Position</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor = \"let player of playerList\">\n    <td><a href=\"#\">{{player.name}}</a></td>\n    <td>{{player.pref_position}}</td>\n    <td><button (click)=\"deletePlayer(player._id)\">Delete</button></td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/player-manager/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players_service__ = __webpack_require__("../../../../../src/app/players.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = (function () {
    function ListComponent(_playersService) {
        this._playersService = _playersService;
        this.playerList = [];
        this.getAllPlayers();
    }
    ListComponent.prototype.getAllPlayers = function () {
        var _this = this;
        this._playersService.retrieveAllPlayers()
            .then(function (response) {
            console.log('success then');
            _this.playerList = response;
            console.log(_this.playerList);
        })
            .catch(function (errors) {
            console.log('errors catch');
            console.log(errors);
        });
    };
    ListComponent.prototype.deletePlayer = function (playerId) {
        var _this = this;
        var pId = { id: playerId };
        this._playersService.removePlayerById(pId)
            .then(function () {
            console.log('sadfasfasdf');
            _this.getAllPlayers();
            console.log(_this.playerList);
        });
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/player-manager/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player-manager/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */]) === "function" && _a || Object])
], ListComponent);

var _a;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/player-manager/player-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player-manager/player-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  player-manager works!\n</p>\n\n<a [routerLink]=\"['list']\">List</a>\n<a [routerLink]=\"['addplayer']\">Add Player</a>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/player-manager/player-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerManagerComponent = (function () {
    function PlayerManagerComponent() {
    }
    PlayerManagerComponent.prototype.ngOnInit = function () {
    };
    return PlayerManagerComponent;
}());
PlayerManagerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-player-manager',
        template: __webpack_require__("../../../../../src/app/player-manager/player-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player-manager/player-manager.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PlayerManagerComponent);

//# sourceMappingURL=player-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/players.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersService = (function () {
    function PlayersService(_http) {
        this._http = _http;
    }
    PlayersService.prototype.retrieveAllPlayers = function () {
        return this._http.get('/api/players')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    PlayersService.prototype.createPlayer = function (newPlayerData) {
        console.log('hello');
        console.log(newPlayerData);
        return this._http.post('/api/players/create', newPlayerData)
            .map(function (response) { return response.json(); }).toPromise();
    };
    PlayersService.prototype.removePlayerById = function (playerId) {
        console.log('This is the player Id:');
        console.log(playerId);
        return this._http.post('/api/players/remove', playerId)
            .map(function (response) { return response.json(); }).toPromise();
    };
    PlayersService.prototype.setGame1StatusByPlayer = function (order) {
        console.log('service update game 1');
        console.log(order);
        return this._http.post('/api/players/game/1/update', order)
            .map(function (response) { return response.json(); }).toPromise();
    };
    PlayersService.prototype.setGame2StatusByPlayer = function (order) {
        console.log('service update game 2');
        console.log(order);
        return this._http.post('/api/players/game/2/update', order)
            .map(function (response) { return response.json(); }).toPromise();
    };
    PlayersService.prototype.setGame3StatusByPlayer = function (order) {
        console.log('service update game 3');
        console.log(order);
        return this._http.post('/api/players/game/3/update', order)
            .map(function (response) { return response.json(); }).toPromise();
    };
    return PlayersService;
}());
PlayersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PlayersService);

var _a;
//# sourceMappingURL=players.service.js.map

/***/ }),

/***/ "../../../../../src/app/status-manager/game-one/game-one.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".undecided {\n    background: yellow;\n}\n.playing {\n    background: green;\n}\n.not-playing {\n    background: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status-manager/game-one/game-one.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  game-one works!\n</p>\n\n<table>\n  <tr>\n    <th>Team Name</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor=\"let player of playerList\" >\n    <td><a href=\"#\">{{player.name}}</a></td>\n    <td>\n      <button (click)=\"updateGame1Status('playing', player._id)\" [ngClass]=\"{ 'playing': player.game1Status === 'playing' }\">Playing</button>\n      <button (click)=\"updateGame1Status('not-playing', player._id)\" [ngClass]=\"{ 'not-playing': player.game1Status === 'not-playing' }\">Not Playing</button>\n      <button (click)=\"updateGame1Status('undecided', player._id)\" [ngClass]=\"{ 'undecided': player.game1Status === 'undecided' }\">Undecided</button>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/status-manager/game-one/game-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players_service__ = __webpack_require__("../../../../../src/app/players.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameOneComponent = (function () {
    function GameOneComponent(_playersService) {
        this._playersService = _playersService;
        this.playerList = [];
        this.getAllPlayers();
    }
    GameOneComponent.prototype.getAllPlayers = function () {
        var _this = this;
        this._playersService.retrieveAllPlayers()
            .then(function (response) {
            console.log('success then');
            _this.playerList = response;
            console.log(_this.playerList);
        })
            .catch(function (errors) {
            console.log('errors catch');
            console.log(errors);
        });
    };
    GameOneComponent.prototype.updateGame1Status = function (status, player) {
        var _this = this;
        console.log('initiating update');
        console.log(status);
        console.log(player);
        var changeStatusOrder = { status: status, playerId: player };
        this._playersService.setGame1StatusByPlayer(changeStatusOrder)
            .then(function () {
            console.log('getting another list');
            _this.getAllPlayers();
        });
    };
    GameOneComponent.prototype.ngOnInit = function () {
    };
    return GameOneComponent;
}());
GameOneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-game-one',
        template: __webpack_require__("../../../../../src/app/status-manager/game-one/game-one.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status-manager/game-one/game-one.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */]) === "function" && _a || Object])
], GameOneComponent);

var _a;
//# sourceMappingURL=game-one.component.js.map

/***/ }),

/***/ "../../../../../src/app/status-manager/game-three/game-three.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".undecided {\n    background: yellow;\n}\n.playing {\n    background: green;\n}\n.not-playing {\n    background: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status-manager/game-three/game-three.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  game-three works!\n</p>\n\n<table>\n  <tr>\n    <th>Team Name</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor=\"let player of playerList\" >\n    <td><a href=\"#\">{{player.name}}</a></td>\n    <td>\n      <button (click)=\"updateGame3Status('playing', player._id)\" [ngClass]=\"{ 'playing': player.game3Status === 'playing' }\">Playing</button>\n      <button (click)=\"updateGame3Status('not-playing', player._id)\" [ngClass]=\"{ 'not-playing': player.game3Status === 'not-playing' }\">Not Playing</button>\n      <button (click)=\"updateGame3Status('undecided', player._id)\" [ngClass]=\"{ 'undecided': player.game3Status === 'undecided' }\">Undecided</button>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/status-manager/game-three/game-three.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameThreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players_service__ = __webpack_require__("../../../../../src/app/players.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameThreeComponent = (function () {
    function GameThreeComponent(_playersService) {
        this._playersService = _playersService;
        this.playerList = [];
        this.getAllPlayers();
    }
    GameThreeComponent.prototype.getAllPlayers = function () {
        var _this = this;
        this._playersService.retrieveAllPlayers()
            .then(function (response) {
            console.log('success then');
            _this.playerList = response;
            console.log(_this.playerList);
        })
            .catch(function (errors) {
            console.log('errors catch');
            console.log(errors);
        });
    };
    GameThreeComponent.prototype.updateGame3Status = function (status, player) {
        var _this = this;
        console.log('initiating update');
        console.log(status);
        console.log(player);
        var changeStatusOrder = { status: status, playerId: player };
        this._playersService.setGame3StatusByPlayer(changeStatusOrder)
            .then(function () {
            console.log('getting another list');
            _this.getAllPlayers();
        });
    };
    GameThreeComponent.prototype.ngOnInit = function () {
    };
    return GameThreeComponent;
}());
GameThreeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-game-three',
        template: __webpack_require__("../../../../../src/app/status-manager/game-three/game-three.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status-manager/game-three/game-three.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */]) === "function" && _a || Object])
], GameThreeComponent);

var _a;
//# sourceMappingURL=game-three.component.js.map

/***/ }),

/***/ "../../../../../src/app/status-manager/game-two/game-two.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".undecided {\n    background: yellow;\n}\n.playing {\n    background: green;\n}\n.not-playing {\n    background: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status-manager/game-two/game-two.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  game-two works!\n</p>\n\n<table>\n  <tr>\n    <th>Team Name</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor=\"let player of playerList\" >\n    <td><a href=\"#\">{{player.name}}</a></td>\n    <td>\n      <button (click)=\"updateGame2Status('playing', player._id)\" [ngClass]=\"{ 'playing': player.game2Status === 'playing' }\">Playing</button>\n      <button (click)=\"updateGame2Status('not-playing', player._id)\" [ngClass]=\"{ 'not-playing': player.game2Status === 'not-playing' }\">Not Playing</button>\n      <button (click)=\"updateGame2Status('undecided', player._id)\" [ngClass]=\"{ 'undecided': player.game2Status === 'undecided' }\">Undecided</button>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/status-manager/game-two/game-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players_service__ = __webpack_require__("../../../../../src/app/players.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameTwoComponent = (function () {
    function GameTwoComponent(_playersService) {
        this._playersService = _playersService;
        this.playerList = [];
        this.getAllPlayers();
    }
    GameTwoComponent.prototype.getAllPlayers = function () {
        var _this = this;
        this._playersService.retrieveAllPlayers()
            .then(function (response) {
            console.log('success then');
            _this.playerList = response;
            console.log(_this.playerList);
        })
            .catch(function (errors) {
            console.log('errors catch');
            console.log(errors);
        });
    };
    GameTwoComponent.prototype.updateGame2Status = function (status, player) {
        var _this = this;
        console.log('initiating update');
        console.log(status);
        console.log(player);
        var changeStatusOrder = { status: status, playerId: player };
        this._playersService.setGame2StatusByPlayer(changeStatusOrder)
            .then(function () {
            console.log('getting another list');
            _this.getAllPlayers();
        });
    };
    GameTwoComponent.prototype.ngOnInit = function () {
    };
    return GameTwoComponent;
}());
GameTwoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-game-two',
        template: __webpack_require__("../../../../../src/app/status-manager/game-two/game-two.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status-manager/game-two/game-two.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__players_service__["a" /* PlayersService */]) === "function" && _a || Object])
], GameTwoComponent);

var _a;
//# sourceMappingURL=game-two.component.js.map

/***/ }),

/***/ "../../../../../src/app/status-manager/status-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status-manager/status-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  status-manager works!\n</p>\n\n<a [routerLink]=\"['1']\">Game 1</a>\n<a [routerLink]=\"['2']\">Game 2</a>\n<a [routerLink]=\"['3']\">Game 3</a>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/status-manager/status-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusManagerComponent = (function () {
    function StatusManagerComponent() {
    }
    StatusManagerComponent.prototype.ngOnInit = function () {
    };
    return StatusManagerComponent;
}());
StatusManagerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-status-manager',
        template: __webpack_require__("../../../../../src/app/status-manager/status-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status-manager/status-manager.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StatusManagerComponent);

//# sourceMappingURL=status-manager.component.js.map

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