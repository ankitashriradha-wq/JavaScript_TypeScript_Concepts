"use strict";
//Sync Function
function s_run() {
    console.log("step1");
    console.log("step2");
    console.log("step3");
}
s_run();
console.log("=========");
// Async Function
function a_run() {
    console.log("stepl");
    setTimeout(() => {
        console.log("step2");
    }, 1000);
    console.log("step3");
}
a_run();
