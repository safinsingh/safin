"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompt = void 0;
var GitHub_1 = require("./commands/GitHub");
var LinkedIn_1 = require("./commands/LinkedIn");
var Projects_1 = require("./commands/Projects");
var Twitter_1 = require("./commands/Twitter");
var Website_1 = require("./commands/Website");
var help_1 = require("./help");
var PromptChoice;
(function (PromptChoice) {
    PromptChoice["PROJECTS"] = "My projects";
    PromptChoice["WEBSITE"] = "My website";
    PromptChoice["GITHUB"] = "My GitHub";
    PromptChoice["TWITTER"] = "My Twitter";
    PromptChoice["LINKEDIN"] = "My LinkedIn";
    PromptChoice["HELP"] = "Help";
    PromptChoice["NONE"] = "Exit";
})(PromptChoice || (PromptChoice = {}));
var prompt = function (toolbox) { return __awaiter(void 0, void 0, void 0, function () {
    var ask, info, question, command, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                ask = toolbox.prompt.ask, info = toolbox.print.info;
                console.log();
                question = {
                    choices: [
                        PromptChoice.PROJECTS,
                        PromptChoice.WEBSITE,
                        PromptChoice.GITHUB,
                        PromptChoice.TWITTER,
                        PromptChoice.LINKEDIN,
                        PromptChoice.HELP,
                        PromptChoice.NONE
                    ],
                    message: 'What would you like to explore?',
                    name: 'command',
                    type: 'select'
                };
                return [4 /*yield*/, ask(question)];
            case 1:
                command = (_b.sent()).command;
                _a = command;
                switch (_a) {
                    case PromptChoice.PROJECTS: return [3 /*break*/, 2];
                    case PromptChoice.WEBSITE: return [3 /*break*/, 4];
                    case PromptChoice.GITHUB: return [3 /*break*/, 6];
                    case PromptChoice.TWITTER: return [3 /*break*/, 8];
                    case PromptChoice.LINKEDIN: return [3 /*break*/, 10];
                    case PromptChoice.HELP: return [3 /*break*/, 12];
                    case PromptChoice.NONE: return [3 /*break*/, 13];
                }
                return [3 /*break*/, 14];
            case 2: return [4 /*yield*/, Projects_1.run(toolbox)];
            case 3:
                _b.sent();
                return [3 /*break*/, 15];
            case 4: return [4 /*yield*/, Website_1.run(toolbox)];
            case 5:
                _b.sent();
                return [3 /*break*/, 15];
            case 6: return [4 /*yield*/, GitHub_1.run(toolbox)];
            case 7:
                _b.sent();
                return [3 /*break*/, 15];
            case 8: return [4 /*yield*/, Twitter_1.run(toolbox)];
            case 9:
                _b.sent();
                return [3 /*break*/, 15];
            case 10: return [4 /*yield*/, LinkedIn_1.run(toolbox)];
            case 11:
                _b.sent();
                return [3 /*break*/, 15];
            case 12:
                info(help_1.helpMessage);
                return [3 /*break*/, 15];
            case 13:
                info(help_1.leaveMessage);
                // eslint-disable-next-line node/no-process-exit
                process.exit(0);
                _b.label = 14;
            case 14: throw new Error('Unhandled option!');
            case 15: return [4 /*yield*/, exports.prompt(toolbox)];
            case 16:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.prompt = prompt;
