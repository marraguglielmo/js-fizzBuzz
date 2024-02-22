const limit = 100;

for(let i = 1; i <= limit; i++){
    console.log(i);

    if(i % 3 === 0){
        console.log("fizz");
    }
    if(i % 5 === 0){
        console.log("Buzz");
    }
    if(i % 3 === 0 & i % 5 === 0){
        console.log("FizzBuzz");
    }
}