#!/usr/bin/env node
'use strict';

var cli = require('commander');
var child_process = require('child_process');
var path = require('path');
var fs = require('fs');

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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

var tslib_1 = /*#__PURE__*/Object.freeze({
    __extends: __extends,
    get __assign () { return __assign; },
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault
});

var version = "1.0.0";

var NestGenerator = /** @class */ (function () {
    function NestGenerator() {
    }
    NestGenerator.run = function (basePath, moduleName) {
        return new Promise(function (resolve, reject) {
            child_process.exec("cd \"" + basePath + "\" && nest g module " + moduleName + " && nest g controller " + moduleName + " && nest g service " + moduleName, function (err) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    return NestGenerator;
}());

var prettier = require('prettier');
var ORMOption;
(function (ORMOption) {
    ORMOption[ORMOption["None"] = 0] = "None";
    ORMOption[ORMOption["TypeORM"] = 1] = "TypeORM";
})(ORMOption || (ORMOption = {}));
function isTypeORM(cli) {
    return cli.orm.replace(/\s/g, '').toLowerCase() === 'typeorm';
}
function dasherize(str) {
    return str.replace(/[A-Z]/g, function (char, index) {
        return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
}
function capitalize(str) {
    return str[0].toUpperCase() + str.substr(1, str.length - 1);
}
function prettyPrint(str) {
    return prettier.format(str, { parser: 'typescript' });
}

var entityTemplate = (function (_a) {
    var cli = _a.cli, cName = _a.cName, dName = _a.dName;
    return "\n    " + (isTypeORM(cli) && "import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'") + "\n    import { IsNotEmpty } from 'class-validator';\n    \n    " + (isTypeORM(cli) && '@Entity()') + "\n    export class " + cName + " {\n        " + (isTypeORM(cli) && '@PrimaryGeneratedColumn()') + "\n        id: number;\n        \n        " + (isTypeORM(cli) && '@Column()') + "\n        @IsNotEmpty()\n        foo: string;\n    }\n";
});

var HandlerBase = /** @class */ (function () {
    function HandlerBase() {
    }
    HandlerBase.run = function (basePath, moduleName, cli, prefix) {
        var _this = this;
        var fileName = dasherize(moduleName) + "." + prefix + ".ts";
        var path$1 = path.join(basePath, dasherize(moduleName), fileName);
        return new Promise(function (resolve, reject) {
            fs.writeFile(path$1, _this.makeContent(moduleName, cli), function (err) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    HandlerBase.makeContent = function (moduleName, cli) {
        return '';
    };
    return HandlerBase;
}());

var EntityHandler = /** @class */ (function (_super) {
    __extends(EntityHandler, _super);
    function EntityHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntityHandler.makeContent = function (moduleName, cli) {
        return prettyPrint(entityTemplate({
            cli: cli,
            cName: capitalize(moduleName),
            dName: dasherize(moduleName)
        }));
    };
    return EntityHandler;
}(HandlerBase));

var serviceTemplate = (function (_a) {
    var cli = _a.cli, cName = _a.cName, dName = _a.dName;
    return "\n    " + (isTypeORM(cli) &&
        "\n      import { InjectRepository } from '@nestjs/typeorm';\n      import { Repository } from 'typeorm';") + "\n    import { Injectable } from '@nestjs/common';\n    import { " + cName + " } from './" + dName + ".entity';\n\n    @Injectable()\n    export class " + cName + "Service {\n        constructor(\n            @InjectRepository(" + cName + ")\n            private readonly repository: Repository<" + cName + ">,\n        ) {}\n\n        findAll() {\n            return this.repository.find();\n        }\n\n        findById(id: number) {\n            return this.repository.findOne(id);\n        }\n\n        create(data: " + cName + ") {\n            const item = new " + cName + "();\n            item.foo = 'bar';\n            return this.repository.save(item);\n        }\n\n        update(id: number, data: " + cName + ") {\n            return this.repository.update(id, data);\n        }\n\n        delete(id: number) {\n            return this.repository.delete(id);\n        }\n    }\n";
});

var ServiceHandler = /** @class */ (function (_super) {
    __extends(ServiceHandler, _super);
    function ServiceHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceHandler.makeContent = function (moduleName, cli) {
        return prettyPrint(serviceTemplate({
            cli: cli,
            cName: capitalize(moduleName),
            dName: dasherize(moduleName)
        }));
    };
    return ServiceHandler;
}(HandlerBase));

var controllerTemplate = (function (_a) {
    var cli = _a.cli, cName = _a.cName, dName = _a.dName;
    return "\n    import { Controller, Param, Body, Get, Post, Put, Patch, Delete } from '@nestjs/common';\n    import { " + cName + "Service } from './" + dName + ".service';\n    import { " + cName + " } from './" + dName + ".entity';\n\n    @Controller('" + dName + "')\n    export class " + cName + "Controller {\n        constructor(private readonly service: " + cName + "Service) {}\n\n        @Get()\n        findAll() {\n            return this.service.findAll();\n        }\n\n        @Get(':id')\n        findById(@Param('id') id: string) {\n            return this.service.findById(Number(id));\n        }\n\n        @Post()\n        create(@Body() data: " + cName + ") {\n            return this.service.create(data);\n        }\n\n        @Put(':id')\n        @Patch(':id')\n        update(@Param('id') id: string, @Body() data: " + cName + ") {\n            return this.service.update(Number(id), data);\n        }\n\n        @Delete(':id')\n        delete(@Param('id') id: string) {\n            return this.service.delete(Number(id));\n        }\n    }\n";
});

var ControllerHandler = /** @class */ (function (_super) {
    __extends(ControllerHandler, _super);
    function ControllerHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerHandler.makeContent = function (moduleName, cli) {
        return prettyPrint(controllerTemplate({
            cli: cli,
            cName: capitalize(moduleName),
            dName: dasherize(moduleName)
        }));
    };
    return ControllerHandler;
}(HandlerBase));

var moduleTemplate = (function (_a) {
    var cli = _a.cli, cName = _a.cName, dName = _a.dName;
    return "\n    import { Module } from '@nestjs/common';\n    import { " + cName + "Service } from './" + dName + ".service';\n    import { " + cName + "Controller } from './" + dName + ".controller';\n    " + (isTypeORM(cli) && "import { TypeOrmModule } from '@nestjs/typeorm';") + "\n    import { " + cName + " } from './" + dName + ".entity';\n\n    @Module({\n        imports: [" + (isTypeORM(cli) && "TypeOrmModule.forFeature([" + cName + "])") + "],\n        providers: [" + cName + "Service],\n        controllers: [" + cName + "Controller],\n    })\n    export class " + cName + "Module {}\n";
});

var ModuleHandler = /** @class */ (function (_super) {
    __extends(ModuleHandler, _super);
    function ModuleHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModuleHandler.makeContent = function (moduleName, cli) {
        return prettyPrint(moduleTemplate({
            cli: cli,
            cName: capitalize(moduleName),
            dName: dasherize(moduleName)
        }));
    };
    return ModuleHandler;
}(HandlerBase));

var ora = require('ora');
var basePath = process.cwd();
cli.version(version)
    .option('-d, --dto', 'Use and generate DTOs')
    .option('-o, --orm <orm>', 'Process all files in the directory and output a single d.ts')
    .option('-e, --entity', 'Prompt for entity fields')
    .arguments('<name>')
    .action(function (name) {
    run(name);
})
    .parse(process.argv);
function run(name) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, runStep('Running nest cli', function () { return NestGenerator.run(basePath, name); })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, runStep('Generating entity file', function () { return EntityHandler.run(basePath, name, cli, 'entity'); })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, runStep('Generating service file', function () {
                            return ServiceHandler.run(basePath, name, cli, 'service');
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, runStep('Generating controller file', function () {
                            return ControllerHandler.run(basePath, name, cli, 'controller');
                        })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, runStep('Generating module file', function () { return ModuleHandler.run(basePath, name, cli, 'module'); })];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.log(error_1);
                    console.log('Something went wrong. Exiting...');
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function runStep(title, func) {
    return __awaiter(this, void 0, void 0, function () {
        var spinner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    spinner = ora(title).start();
                    return [4 /*yield*/, func().catch(function (v) {
                            spinner.fail();
                            return Promise.reject(v);
                        })];
                case 1:
                    _a.sent();
                    spinner.succeed();
                    return [2 /*return*/];
            }
        });
    });
}
