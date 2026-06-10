//Sync Function
function srun(){

    console.log("step1");
    console.log("step2");
    console.log("step3")
}

srun();

console.log("=========")

// Async Function
function arun(){
    console.log("stepl");

    setTimeout(() => {
        console.log("step2")
    }, 1000);

    console.log("step3");
}

arun();