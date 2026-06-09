let maxnum = parseInt(prompt("Welcome! Enter your max number:"));
while(!maxnum){
    maxnum = parseInt(prompt("Enter a valid number"));
}
let num = Math.floor(Math.random()*maxnum)+1; // the target will be chosen randomly from 1 to maxnum
let input = parseInt(prompt("Guess the number:"));
let i=0;
while(true){
    if(input.toLowerCase()==="q"){
        console.log("Game quit!");
        break;
    }
    else if(input<num){
        input = prompt("Too low! Guess again");
        i++;
    }
    else if(input>num){
        input = prompt("Too high! Guess again");
        i++;
    }
    else if(input==num){
        console.log(`You took ${i+1} guesses`);
        break;
    }
    else{
        input = prompt("Please enter number only!");
    }
}