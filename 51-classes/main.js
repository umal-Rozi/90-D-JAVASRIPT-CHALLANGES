
// class= a blue for creating objects 
// define what properties and methods they have 
// use a constructor for unique properties.

class player{
    score=0;
    
    pause(){
        console.log("you passed this");
    }
    exit(){
        console.log("you exited");
    }
}
const player1 = new player();
const player2 = new player();

player1.score+=1;

console.log(player1.score);
console.log(player2.score);


player1.pause();
player2.exit();
