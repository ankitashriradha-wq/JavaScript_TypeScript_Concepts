//put async before function and see promise outut

async function add(a:any, b:any){
    return a+b;

}
const result = add(333, 567); //--> it will give promise output that is future output without squence
console.log(result); // to fix this we need to use async and await as below used


async function main(){

    const result = await add(333,567);

    console.log(result);
}
main();