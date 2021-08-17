console.log('welcome to in second week - one day-oops ');
// let user={
//     name:'pranali gawade',
//     age : 21,
//     gender: 'female'

// };
// alert('hello' +user.name);// dot method
// alert( user['age']);
///////////////////////////////////////////////////////
let userob ={
    name:'pranali gawade',
    age : 21,
    gender: 'female',
    greet(){
alert('hello' + this.name+ 'your' + this.age+' year old')
    },
    printThis(){
        //normal fun
        this.greet();
        console.log(this);
    },
    printThisWithArrow:() => {
// arrow fun
console.log(this);
    }

}
// function greet(){
//     alert('hello' +user.name);
// }
// adding function  to a object
// userob.greetuser=greet;
userob.greet();
// userob.printThis();
userob.printThisWithArrow();
//when ever we write e  fun as a expresion[arrow  fun] we dont access to this
//concept of this -> this basically contains all the  data inside ythe block.