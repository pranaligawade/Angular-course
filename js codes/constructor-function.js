// function user(){
//     this.name='pranu gawade',
//     this.age=20,
//     this.gender='female',
//     this.greet=function(){
//         alert('hello'+this.name);
//     };
// }
// let user1=new user();
// // console.log(user1.gender);
// user.greet();
// ...................................................................................
function user(username,age,gender){
    this.name=username,
    this.age=age,
    this.gender=gender,
    this.greet=function(){
        alert('hello'+this.name);
    };
}
let user1=new user('push',25,'female');
console.log(user1.name);
user1.greet();
let user2=new user('pushpa',15,'female');
console.log(user2.name);
user2.greet();