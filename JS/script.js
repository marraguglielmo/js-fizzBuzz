const limit = 100;
const container = document.querySelector(".container");

for(let i = 1; i <= limit; i++){
    // creo il box
    const box = document.createElement('div');
    // assegno le classi al box
    box.className = "box"
    // stampo i dentro al div
    box.innerHTML = i;
    // metto il box nel container
    container.append(box);

    if(i % 15 === 0){
        box.innerHTML = "FizzBuzz";
        box.classList.add("red");
    }else if(i % 5 == 0){
        box.innerHTML = "Buzz";
        box.classList.add("green");
    }else if(i % 3 === 0){
        box.innerHTML = "Fizz";
        box.classList.add("blue");
    }else{
        box.innerHTML = i;
    }
    
}