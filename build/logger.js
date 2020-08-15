"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = exports.info = exports.warn = exports.fail = void 0;
var chalk_1 = require("chalk");
var constants_1 = require("./constants");
exports.fail = function (message) {
    constants_1.log(chalk_1.red("[-] " + message));
    process.exit(1);
};
exports.warn = function (message) {
    constants_1.log(chalk_1.yellow("[!] " + message));
};
exports.info = function (message) {
    constants_1.log(chalk_1.blue("[*] " + message));
};
exports.success = function (message) {
    constants_1.log(chalk_1.green("[+] " + message));
};
