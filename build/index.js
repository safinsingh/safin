#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = __importStar(require("inquirer"));
var open_1 = __importDefault(require("open"));
var chalk_1 = require("chalk");
var logger_1 = require("./logger");
var constants_1 = require("./constants");
var queries_1 = require("./queries");
var util_1 = require("./util");
constants_1.log(chalk_1.green(constants_1.intro));
constants_1.log(chalk_1.blue(constants_1.header));
inquirer
    .prompt({
    type: 'list',
    message: 'Select action',
    name: 'action',
    choices: [
        'Check out my latest projects',
        'Connect with me on LinkedIn',
        'Go to my website',
        'Done!',
    ],
})
    .then(function (answers) {
    switch (answers.action) {
        case 'Go to my website':
            logger_1.success('Opened safinsingh.tech!');
            open_1.default('https://safinsingh.tech/');
            break;
        case 'Check out my latest projects':
            queries_1.getRecent()
                .then(function (res) {
                util_1.prettifyProjects(res.data.user.repositories.edges);
            })
                .catch(function (err) { return logger_1.fail(err); });
            break;
        case 'Connect with me on LinkedIn':
            logger_1.success('Opened linkedin.com!');
            open_1.default('https://www.linkedin.com/in/safin-singh-b2630918a/');
            break;
        case 'Done!':
            logger_1.success('Thanks for checking this out! See you later 😎');
            process.exit(0);
            break;
        default:
            logger_1.fail("It seems like you've chosen an invalid option somehow. Please open an issue!");
    }
})
    .catch(function (err) {
    logger_1.fail(err);
});
