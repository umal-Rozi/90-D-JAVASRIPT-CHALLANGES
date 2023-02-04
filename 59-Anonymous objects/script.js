
// anonymous object = object without a name  
//  not directly referenced
// less syntax. no need for unique names

class card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
}
let cards = [ new card("A", "he")];
              new card("A", "aa");
              new card("A", "heh");
              new card("A", "fj");
              new card("A", "far");
              new card("A", "bah");
              new card("A", "ew");
              new card("A", "jah");
console.log(cards[0].value +cards[0].suit);

cards.forEach(card => console.log(`${card.value} ${card.suit}`));