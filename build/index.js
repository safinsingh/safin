"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&__createBinding(t,e,n);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var inquirer=__importStar(require("inquirer")),open_1=__importDefault(require("open")),chalk_1=require("chalk"),logger_1=require("./logger"),constants_1=require("./constants"),queries_1=require("./queries"),util_1=require("./util");constants_1.log(chalk_1.green(constants_1.intro)),constants_1.log(chalk_1.blue(constants_1.header)),inquirer.prompt({type:"list",message:"Select action",name:"action",choices:["Check out my latest projects","Connect with me on LinkedIn","Go to my website","Done!"]}).then(function(e){switch(e.action){case"Go to my website":logger_1.success("Opened safinsingh.tech!"),open_1.default("https://safinsingh.tech/");break;case"Check out my latest projects":queries_1.getRecent().then(function(e){util_1.prettifyProjects(e.data.user.repositories.edges)}).catch(function(e){return logger_1.fail(e)});break;case"Connect with me on LinkedIn":logger_1.success("Opened linkedin.com!"),open_1.default("https://www.linkedin.com/in/safin-singh-b2630918a/");break;case"Done!":logger_1.success("Thanks for checking this out! See you later 😎"),process.exit(0);break;default:logger_1.fail("It seems like you've chosen an invalid option somehow. Please open an issue!")}}).catch(function(e){logger_1.fail(e)});