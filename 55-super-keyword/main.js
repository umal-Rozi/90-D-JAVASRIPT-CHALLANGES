
// sper = refers to the parent of the class
// commonly used invoke constructor a parent class

class peaple{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

}
class ibinaadm extends peaple{
    constructor(name,email,password){
        super(name,email);
        this.password = password;
    }

}
class ibnuxawa extends peaple{
    constructor(name,email,password){
        super(name,email);
        this.password = password;
    }

}
class dad extends peaple{
    constructor(name,email,password){
        super(name,email);
        this.password = password;
    }

}
const dad = new dad("hud", "umal@gmail.com", "45678");
const ibinaadm = new ibinaadm("mug", "umal@gmail.com", "45678");
const ibnuxawa = new ibnuxawa("wardi", "umal@gmail.com", "45678");

console.log(ibinaadm .name);
console.log(ibinaadm .email);
console.log(ibinaadm .password);

