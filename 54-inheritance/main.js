
// inhirtance = children classes can inherit all the 
//methods and properties form onther class

class animal{
    altive= true;
    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }

}

class rabbits extends animal{
    
    name= "rabbit";

   
    run(){
        console.log(`this ${this.name} is running`);
    }
}


class fish extends animal{
    
    name= "fish";

    swin(){
        console.log(`this ${this.name} is swin`);
    }
}

class hawk extends animal{
    
    name= "hawk";
    fly(){
        console.log(`this ${this.name} is flying`);
    }
}

const rabbit = new rabbits();
const fish = new fish();
const hawk= new hawk();

console.log(rabbit.altive);
rabbit.eat();
rabbit.sleep();
rabbit.sleep();

