//constructor without   parameter
class user {
    //classs
    constructor(){
        // constructor without   parameter
        this.name="jiyqa";
        this.age="age";
        this.gender="female";

    }
    greet(){
        alert('hey'+this.name)
    }
}
let pranali=new user();
console.log('pranali name:'+pranali.name);
let sam=new user();
console.log('samname :'+sam.name);

pranali.greet();
//---------------------------------------------------------------------------------------------

//constructor with   parameter
class user {
    //classs
    constructor( name, agee,gen){
        // constructor with   parameter
        this.name=name;
        this.age=agee;
        this.gender=gen;

    }
    greet(){
        alert('hey'+this.name)
    }
}
let pranali=new user('push',20,'female');
console.log('name:'+pranali.name +  'age:'+pranali.age );
let sam=new user('riya',21,'female');
console.log('samname :'+sam.name);
sam.greet();
pranali.greet();