"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettifyProjects = void 0;
var cli_table3_1 = __importDefault(require("cli-table3"));
exports.prettifyProjects = function (p) {
    var table = new cli_table3_1.default({
        head: ['Name', 'Description', 'Language'],
        colWidths: [20, 50, 20],
    });
    p.forEach(function (el) {
        if (el.node.name === 'safinsingh')
            return;
        table.push([
            el.node.name,
            el.node.description,
            el.node.primaryLanguage.name,
        ]);
    });
    console.log(table.toString());
};
