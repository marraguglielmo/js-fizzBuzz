const limit = 100;
const container = document.querySelector(".container");

for(let i = 1; i <= limit; i++){
    
    console.log(i);
    
    if(i % 3 === 0){
        let result = "Fizz";
        let box = document.querySelector(".box");
        box.innerHTML = result;
    }
    if(i % 5 === 0){
        let result = "Buzz";
        console.log(result);
    }
    if(i % 3 === 0 & i % 5 === 0){
        let result = "FizzBuzz";
        console.log(result);
    }
    
    container.innerHTML += `
    <div class="box">${i}</div>
    `
}