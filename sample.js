"use strict";
//put async before function and see promise outut
async function add(a, b) {
    return a + b;
}
async function main() {
    const result = await add(333, 567);
    console.log(result);
}
main();
