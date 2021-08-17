function user(num1,num2){
    this.numx=num1,
    this.numy=num2,
  
    this.sum=function(){
        this.sum=this.numx+this.numy;
        alert('sum of number='+this.sum);
    },
    this.sub=function(){
        this.subb=this.numx-this.numy;
        alert('substraction of number='+this.subb);
    },
    this.mul=function(){
        this.multi=this.numx*this.numy;
        alert('multiplication of number='+this.multi);
    } 
    this.division=function(){
        this.div=this.numx/this.numy;
        alert('division of number'+this.div);
    }
     this.squar=function(){
        this.sq=this.numx**2;
        alert('square of number'+this.sq);
    };
}
let user1=new user(25 ,25);
user1.sum();
console.log(user1.sum);
let substract=new user(25 ,25);
substract.sub();
console.log(substract.subb);
let mul1=new user(2,2);
mul1.mul();
console.log(mul1.multi);
let div1=new user(4,2);
div1.division();
console.log(div1.div);
let squr=new user(4,2);
squr.squar();
console.log(squr.sq);
