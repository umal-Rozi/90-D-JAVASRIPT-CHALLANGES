
// card game

let cards =[ "A", "2", "4", "5" ,"6","7","8","9","10"  ,"J" , "Q" ,"k" ];

shuffle(cards);
//console.log(cards);
cards.forEach(card => console.log(cards));

function shuffle(array) {
    let currenIndex =array.length;

    while (currenIndex !=0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currenIndex-=1;


        let temp =array[currenIndex];
        array[currenIndex] =array[randomIndex];
        array[randomIndex]= temp;
    }
    return array;
}