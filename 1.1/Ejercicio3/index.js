const CheckPar = require('./numeros');
const lp = require("logplease");
const Logger = require('logplease');
const logger = Logger.create('utils');

console.log(CheckPar.esPar(2));
console.log(CheckPar.esPar(3));

function showLogs (num){
    if (CheckPar.esPar(num)){
        logger.log(`El número es par`);
    } else {
        logger.error(`El número no es par`);
    }
};

showLogs(2);
showLogs(3);
showLogs(101);
showLogs(201);
showLogs(202);
showLogs(100);



