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
    }else if(i % 5 == 0){
        box.innerHTML = "Buzz";
    }else if(i % 3 === 0){
        box.innerHTML = "Fizz";
    }else{
        box.innerHTML = i;
    }
    
}