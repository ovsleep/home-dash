webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CableChannel = (function () {
    function CableChannel() {
    }
    return CableChannel;
}());
exports.CableChannel = CableChannel;
//# sourceMappingURL=cable-channel.js.map

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var directv_service_1 = __webpack_require__(55);
var remote_service_1 = __webpack_require__(17);
var ChannelSelectorComponent = (function () {
    function ChannelSelectorComponent(directvService, remoteService) {
        this.directvService = directvService;
        this.remoteService = remoteService;
    }
    ChannelSelectorComponent.prototype.ngOnInit = function () {
        this.getChannels();
    };
    ChannelSelectorComponent.prototype.getChannels = function () {
        var _this = this;
        this.directvService.getCableChannels().subscribe(function (channels) { return _this.channels = channels; });
    };
    ChannelSelectorComponent.prototype.watchChannel = function (channel) {
        this.remoteService.watchChannel(channel);
    };
    return ChannelSelectorComponent;
}());
ChannelSelectorComponent = __decorate([
    core_1.Component({
        selector: 'app-channel-selector',
        template: __webpack_require__(186),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof directv_service_1.DirectvService !== "undefined" && directv_service_1.DirectvService) === "function" && _a || Object, typeof (_b = typeof remote_service_1.RemoteService !== "undefined" && remote_service_1.RemoteService) === "function" && _b || Object])
], ChannelSelectorComponent);
exports.ChannelSelectorComponent = ChannelSelectorComponent;
var _a, _b;
//# sourceMappingURL=channel-selector.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CommandData = (function () {
    function CommandData() {
    }
    return CommandData;
}());
exports.CommandData = CommandData;
var WatchCommand = (function (_super) {
    __extends(WatchCommand, _super);
    function WatchCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WatchCommand;
}(CommandData));
exports.WatchCommand = WatchCommand;
var ChangeCommand = (function (_super) {
    __extends(ChangeCommand, _super);
    function ChangeCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChangeCommand;
}(CommandData));
exports.ChangeCommand = ChangeCommand;
var OffCommand = (function (_super) {
    __extends(OffCommand, _super);
    function OffCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OffCommand;
}(CommandData));
exports.OffCommand = OffCommand;
var ACCommand = (function (_super) {
    __extends(ACCommand, _super);
    function ACCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ACCommand;
}(CommandData));
exports.ACCommand = ACCommand;
var KeyCommand = (function (_super) {
    __extends(KeyCommand, _super);
    function KeyCommand(device, key) {
        var _this = _super.call(this) || this;
        _this.device = device;
        _this.key = key;
        return _this;
    }
    return KeyCommand;
}(CommandData));
exports.KeyCommand = KeyCommand;
var Command = (function () {
    function Command() {
    }
    return Command;
}());
exports.Command = Command;
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var remote_service_1 = __webpack_require__(17);
var DeviceSelectorComponent = (function () {
    function DeviceSelectorComponent(remoteService) {
        this.remoteService = remoteService;
        console.log('hola');
    }
    DeviceSelectorComponent.prototype.ngOnInit = function () {
        console.log('init');
        this.getDeviceSources();
    };
    DeviceSelectorComponent.prototype.getDeviceSources = function () {
        var _this = this;
        this.remoteService.getDeviceSources().then(function (sources) { return _this.sources = sources; });
    };
    DeviceSelectorComponent.prototype.watchSource = function (source) {
        console.log("watching " + source.name);
        this.remoteService.watchDeviceSource(source);
    };
    return DeviceSelectorComponent;
}());
DeviceSelectorComponent = __decorate([
    core_1.Component({
        selector: 'app-device-selector',
        template: __webpack_require__(187),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof remote_service_1.RemoteService !== "undefined" && remote_service_1.RemoteService) === "function" && _a || Object])
], DeviceSelectorComponent);
exports.DeviceSelectorComponent = DeviceSelectorComponent;
var _a;
//# sourceMappingURL=device-selector.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DeviceSource = (function () {
    function DeviceSource(id, dispayName, name, active) {
        this.id = id;
        this.dispayName = dispayName;
        this.name = name;
        this.active = active;
    }
    DeviceSource.prototype.img = function () {
        var ret = "/assets/img/" + this.name;
        if (this.active) {
            ret += '-a';
        }
        ret += '.png';
        return ret;
    };
    return DeviceSource;
}());
exports.DeviceSource = DeviceSource;
//# sourceMappingURL=device-source.js.map

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var device_source_1 = __webpack_require__(104);
exports.DEVICE_SOURCES = [
    new device_source_1.DeviceSource(1, 'TV', 'tv', false),
    new device_source_1.DeviceSource(2, 'Chrome', 'chrome', false),
    new device_source_1.DeviceSource(3, 'Cable', 'cable', false),
    new device_source_1.DeviceSource(4, 'XBox', 'xbox', false),
    new device_source_1.DeviceSource(5, 'Pi', 'pi', false),
];
//# sourceMappingURL=mock-device-sources.js.map

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var remote_service_1 = __webpack_require__(17);
var command_1 = __webpack_require__(102);
var RcComponent = (function () {
    function RcComponent(remoteService) {
        this.remoteService = remoteService;
    }
    RcComponent.prototype.getDeviceSources = function () {
        var _this = this;
        this.remoteService.getDeviceSources().then(function (sources) { return _this.sources = sources; });
    };
    RcComponent.prototype.ngOnInit = function () {
        this.getDeviceSources();
    };
    RcComponent.prototype.selectSource = function (source) {
        this.source = source;
        this.remoteService.setActiveDevice(source.id);
    };
    RcComponent.prototype.sendKey = function (key, device) {
        var deviceSelected = device || this.source.name;
        var cmd = new command_1.Command();
        cmd.command = "key";
        cmd.data = new command_1.KeyCommand(deviceSelected, key);
        console.log('sending command ' + cmd);
        this.remoteService.sendCommand(cmd);
    };
    return RcComponent;
}());
RcComponent = __decorate([
    core_1.Component({
        selector: 'app-rc',
        template: __webpack_require__(188),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof remote_service_1.RemoteService !== "undefined" && remote_service_1.RemoteService) === "function" && _a || Object])
], RcComponent);
exports.RcComponent = RcComponent;
var _a;
//# sourceMappingURL=rc.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
__webpack_require__(214);
var SlickSliderComponent = (function () {
    function SlickSliderComponent(el) {
        this.el = el;
        this.defaultOptions = {
            dots: false,
            infinite: false,
            speed: 300,
            //slidesToShow: 4,
            //slidesToScroll: 2,
            //adaptiveHeight: false,
            variableWidth: true,
        };
    }
    SlickSliderComponent.prototype.ngAfterContentInit = function () {
        for (var key in this.options) {
            this.defaultOptions[key] = this.options[key];
        }
        this.$element = jQuery(this.el.nativeElement).slick(this.defaultOptions);
    };
    return SlickSliderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SlickSliderComponent.prototype, "options", void 0);
SlickSliderComponent = __decorate([
    core_1.Component({
        selector: 'app-slick-slider',
        template: "\n        <ng-content></ng-content>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], SlickSliderComponent);
exports.SlickSliderComponent = SlickSliderComponent;
var _a;
//# sourceMappingURL=slick-slider.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".right-col{\r\n    max-width: 400px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(32);
var mock_device_sources_1 = __webpack_require__(105);
var environment_1 = __webpack_require__(33);
__webpack_require__(69);
var RemoteService = (function () {
    function RemoteService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.remoteUrl;
        //baseUrl = 'http://localhost:9589/api/remote';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ;
    RemoteService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    RemoteService.prototype._sendCommand = function (command) {
        var url = "" + this.baseUrl;
        return this.http
            .post(url, JSON.stringify(command), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().message == "OK!"; })
            .catch(this.handleError);
    };
    RemoteService.prototype.sendCommand = function (command) {
        var url = "" + this.baseUrl;
        return this.http
            .post(url, JSON.stringify(command), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().message == "OK!"; })
            .catch(this.handleError);
    };
    /* ***** Select Device ******* */
    RemoteService.prototype.getDeviceSources = function () {
        return Promise.resolve(mock_device_sources_1.DEVICE_SOURCES);
    };
    RemoteService.prototype.setActiveDevice = function (id) {
        mock_device_sources_1.DEVICE_SOURCES.map(function (i) { console.log(id); i.active = i.id == id; });
    };
    RemoteService.prototype.watchDeviceSource = function (source) {
        var command = {
            'command': 'watch',
            'data': {
                'device': source.name
            }
        };
        this.setActiveDevice(source.id);
        return this._sendCommand(command);
    };
    RemoteService.prototype.watchChannel = function (channel) {
        var command = {
            'command': 'change',
            'data': {
                'channel': channel.number
            }
        };
        return this._sendCommand(command);
    };
    /* ***** AC ******* */
    RemoteService.prototype.setAc = function (mode, temp) {
        var command = {
            'command': 'ac',
            'data': {
                'mode': mode,
                'temp': temp
            }
        };
        return this._sendCommand(command);
    };
    RemoteService.prototype.off = function (device) {
        var command = {
            'command': 'off',
            'data': {
                'device': device
            }
        };
        return this._sendCommand(command);
    };
    return RemoteService;
}());
RemoteService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], RemoteService);
exports.RemoteService = RemoteService;
var _a;
//# sourceMappingURL=remote.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".cable-channel{\r\n    width: 100%;\r\n    text-align: left;\r\n    margin-bottom: 5px;\r\n    background-color: #F6F6F6;\r\n    overflow: hidden;\r\n}\r\n.cable-channel span{\r\n    width: 95%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.cable-channel img{\r\n    margin-right: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".btn-group{\r\n    width: 100%;\r\n    max-width: 330px;\r\n}\r\n.btn-source{\r\n    padding: 0.5rem;\r\n    width: 20%;\r\n}\r\n.btn-source img{\r\n    width: 100%;\r\n    max-width: 60px;\r\n}\r\n.pad{\r\n    margin-top: 20px;\r\n}\r\n.pad .btn{\r\n    width: 80px;\r\n}\r\n.pad .volume{\r\n    margin-left: 10px;\r\n}\r\n.pad .volume .btn{\r\n    width: 45px;\r\n    height: 58px;\r\n}\r\n\r\n.pad .playback{\r\n    margin-top: 5px;\r\n}\r\n\r\n.pad .playback .btn{\r\n    width: 57px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block text-xs-center\">\r\n\t<div class=\"card-title\">\r\n\t\t<h4>AC</h4>\r\n\t\t<a class=\"btn btn-danger btn-card-close\" (click)=\"turnOff()\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a>\r\n\t</div>\r\n\t<div class=\"card-text\">\r\n\t\t<div class=\"form-group text-xs-center\">\r\n\t\t\t<input type=\"text\" class=\"form-control m-x-auto\" [(ngModel)]=\"temp\" placeholder=\"Temperature\" />\r\n\t\t</div>\r\n\t\t<div class=\"form-group text-xs-center\">\r\n\t\t\t<switch [onText]=\"'HOT'\" [offText]=\"'COLD'\" [(status)]=\"mode\" [onColor]=\"'red'\" [offColor]=\"'blue'\" ></switch>\r\n\t\t\t<br/>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<a href=\"#\" class=\"btn btn-primary\" (click)=\"sendCommand()\">Send</a>\r\n\r\n</div>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <app-device-selector></app-device-selector>\r\n        <div class=\"col-xs-12 col-md-6\">\r\n            <app-channel-selector></app-channel-selector></div>\r\n        <div class=\"col-xs-12 col-md-6 right-col\">\r\n            <app-rc></app-rc>\r\n            <app-ac></app-ac>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div \r\n      (mouseenter)=\"setStatus(true, $event)\"\r\n      (mouseleave)=\"setStatus(false, $event)\"\r\n      (touchstart)=\"setStatus(true, $event)\"\r\n      (touchend)=\"setStatus(false, $event)\"\r\n      [@statusChange]=\"statusStr\">\r\n          <ng-content></ng-content>\r\n  <div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block\">\r\n    <div class=\"card-title\">\r\n        <h3>On DirecTV</h3>\r\n    </div>\r\n    <div class=\"card-text\">\r\n        <div *ngFor=\"let channel of channels\">\r\n            <div class=\"btn btn-secondary cable-channel row\" (click)=\"watchChannel(channel)\">\r\n                <img src=\"https://d1oq4398v5395a.cloudfront.net/Thumbnail.ashx?image=LOGOS/canales/UY/{{channel.number}}.png&width=40&height=32\"/>\r\n                <span>{{channel.current}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<app-slick-slider *ngIf=\"sources\">\r\n\t<div *ngFor=\"let source of sources\">\r\n\t\t<app-auto-grow><img class=\"btn btn-lg\" (click)=\"watchSource(source)\"  [src]=\"source.img()\"  /></app-auto-grow>\r\n\t</div>\r\n</app-slick-slider>\r\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block\">\n    <div class=\"card-title\">\n        <h3>Remote</h3>\n        <a class=\"btn btn-danger btn-card-close\"><i class=\"fa fa-power-off\" aria-hidden=\"true\"></i></a>\n    </div>\n    <div class=\"card-text\">\n        <div  class=\"btn-group\"  *ngIf=\"sources\">\n          <button *ngFor=\"let source of sources\" class=\"btn btn-secondary btn-source\">\n            <img class=\"img-responsive\" (click)=\"selectSource(source)\" [src]=\"source.img()\" />\n          </button>\n        </div>\n        <div class=\"pad container\">\n          <table class=\"pull-left\">\n            <tr>\n              <td><button class=\"btn\" (click)=\"sendKey()\">Exit</button></td>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_UP')\"><i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i></button></td>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_GUIDE')\">Guide</button></td>\n            </tr>\n            <tr>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_LEFT')\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button></td>\n              <td><button class=\"btn\" (click)=\"sendKey('key_ok')\">OK</button></td>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_RIGHT')\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></button></td>\n            </tr>\n            <tr>\n              <td><button class=\"btn\" (click)=\"sendKey()\"><i class=\"fa fa-rotate-left\" aria-hidden=\"true\"></i></button></td>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_DOWN')\"><i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i></button></td>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_MUTE','denon')\"><i class=\"fa fa-microphone-slash\" aria-hidden=\"true\"></i></button></td>\n            </tr>\n          </table>\n          <table class=\"volume\">\n            <tr>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_VOLUMEUP','denon')\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button></td>\n            </tr>\n            <tr>\n              <td><button class=\"btn\"  (click)=\"sendKey('KEY_VOLUMEDOWN','denon')\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button></td>\n            </tr>\n          </table>\n\n          <table class=\"playback\">\n            <tr>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_REWIND')\"><i class=\"fa fa-fast-backward\" aria-hidden=\"true\"></i></button></td>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_PAUSE')\"><i class=\"fa fa-pause\" aria-hidden=\"true\"></i></button></td>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_PLAY')\"><i class=\"fa fa-play\" aria-hidden=\"true\"></i></button></td>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_FASTFORWARD')\"><i class=\"fa fa-fast-forward\" aria-hidden=\"true\"></i></button></td>\n              <td><button class=\"btn\" (click)=\"sendKey('KEY_RECORD')\"><i class=\"fa fa-stop-circle\" aria-hidden=\"true\"></i></button></td>\n            </tr>\n          </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    remoteUrl: 'http://192.168.1.131:9589/api/remote',
    directvUrl: 'http://192.168.1.131:9588/api/directv'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(32);
var environment_1 = __webpack_require__(33);
var cable_channel_1 = __webpack_require__(100);
__webpack_require__(69);
__webpack_require__(192);
__webpack_require__(191);
var DirectvService = (function () {
    function DirectvService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.directvUrl;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DirectvService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    DirectvService.prototype.extractTasksResponse = function (response) {
        var res = response.json();
        var array = [];
        res.forEach(function (t) {
            var task = Object.create(cable_channel_1.CableChannel.prototype);
            array.push(Object.assign(task, t));
        });
        return array;
    };
    /* ***** Select Device ******* */
    DirectvService.prototype.getCableChannels = function () {
        return this.http.get(this.baseUrl + "/fav")
            .map(this.extractTasksResponse)
            .catch(this.handleError);
    };
    return DirectvService;
}());
DirectvService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], DirectvService);
exports.DirectvService = DirectvService;
var _a;
//# sourceMappingURL=directv.service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 78;


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var platform_browser_dynamic_1 = __webpack_require__(94);
var app_module_1 = __webpack_require__(98);
var environment_1 = __webpack_require__(33);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var remote_service_1 = __webpack_require__(17);
var AcComponent = (function () {
    function AcComponent(remoteService) {
        this.remoteService = remoteService;
        this.temp = 24;
        this.mode = true;
    }
    AcComponent.prototype.sendCommand = function () {
        console.log("setting " + this.mode + " - " + this.temp);
        this.remoteService.setAc(this.mode ? 'hot' : 'cold', this.temp);
    };
    AcComponent.prototype.turnOff = function () {
        console.log("turn off ac");
        this.remoteService.off("ac");
    };
    return AcComponent;
}());
AcComponent = __decorate([
    core_1.Component({
        selector: 'app-ac',
        template: __webpack_require__(183),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof remote_service_1.RemoteService !== "undefined" && remote_service_1.RemoteService) === "function" && _a || Object])
], AcComponent);
exports.AcComponent = AcComponent;
var _a;
//# sourceMappingURL=ac.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var remote_service_1 = __webpack_require__(17);
var directv_service_1 = __webpack_require__(55);
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(184),
        styles: [__webpack_require__(168)],
        providers: [remote_service_1.RemoteService, directv_service_1.DirectvService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(16);
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(93);
var http_1 = __webpack_require__(32);
var app_component_1 = __webpack_require__(97);
var auto_grow_component_1 = __webpack_require__(99);
var slick_slider_component_1 = __webpack_require__(107);
var ac_component_1 = __webpack_require__(96);
var channel_selector_component_1 = __webpack_require__(101);
var device_selector_component_1 = __webpack_require__(103);
var components_1 = __webpack_require__(108);
var rc_component_1 = __webpack_require__(106);
var animations_1 = __webpack_require__(95);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            auto_grow_component_1.AutoGrowComponent,
            slick_slider_component_1.SlickSliderComponent,
            ac_component_1.AcComponent,
            channel_selector_component_1.ChannelSelectorComponent,
            device_selector_component_1.DeviceSelectorComponent,
            components_1.SwitchComponent,
            rc_component_1.RcComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            animations_1.BrowserAnimationsModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var AutoGrowComponent = (function () {
    function AutoGrowComponent() {
        this.status = false;
        this.log = '';
    }
    Object.defineProperty(AutoGrowComponent.prototype, "statusStr", {
        get: function () {
            return this.status.toString();
        },
        enumerable: true,
        configurable: true
    });
    AutoGrowComponent.prototype.setStatus = function (value, event) {
        if (!this.lastEventType) {
            this.lastEventType = event.type.startsWith('mouse') ? 'mouse' : 'touch';
        }
        if (this.lastEventType == 'touch') {
            if (event.type.startsWith('mouse')) {
                return; //ignore event if the previous was a touch event
            }
            else {
                this.lastEventType = 'touch';
            }
        }
        this.status = value;
    };
    return AutoGrowComponent;
}());
AutoGrowComponent = __decorate([
    core_1.Component({
        selector: 'app-auto-grow',
        template: __webpack_require__(185),
        styles: [__webpack_require__(169)],
        animations: [
            core_1.trigger('statusChange', [
                core_1.state('false', core_1.style({ transform: 'scale(1)' })),
                core_1.state('true', core_1.style({ transform: 'scale(1.2)' })),
                core_1.transition('true <=> false', core_1.animate('200ms'))
            ])
        ]
    })
], AutoGrowComponent);
exports.AutoGrowComponent = AutoGrowComponent;
//# sourceMappingURL=auto-grow.component.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.bundle.js.map