const { spy } = require("chai");

function receivesAFunction(callback) {
    callback (spy);
}
receivesAFunction(spy);

function returnsANamedFunction() {
   var fn;
   return function Fxn() {
       console.log("");
   } ;
}

function returnAnAnonymousFunction() {
    //var fn;
    return function() {
        return "Unnamed function!"
    }
};
returnAnAnonymousFunction();