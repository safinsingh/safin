"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaveMessage = exports.helpMessage = exports.logo = void 0;
var chalk_1 = require("chalk");
exports.logo = chalk_1.whiteBright(chalk_1.bold('Welcome')) + " to " + chalk_1.cyan(chalk_1.bold("Safin's")) + " CLI!";
exports.helpMessage = chalk_1.bold('Usage') + ":\n\tsafin [-h/--help] [subcommand]\n\n" + chalk_1.bold('Subcommands') + ":\n\tgithub, g         - open my GitHub profile\n\tlinkedin, l       - open my LinkedIn profile\n\tprojects, p       - display the last couple projects I've been working on\n\ttwitter, t        - open my Twitter profile\n\twebsite, w        - open my website\n\n" + chalk_1.bold('Flags') + ":\n\t-h, --help        - display this help message\n\t-v, --version     - display the current version of this CLI\n\n" + chalk_1.bold('Examples') + ":\n\tsafin\n\tsafin --version\n\tsafin projects\n\n" + chalk_1.bold('Examples') + ":\n\tWhen run without a subcommand, `safin` walks through an interactive\n\tprompt for each subcommand. This is reccomended for first-time users.";
exports.leaveMessage = "Bye!\n";
