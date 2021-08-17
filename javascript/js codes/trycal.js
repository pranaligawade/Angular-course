function user(num1,num2){
    this.numx=num1,
    this.numy=num2,
  
    this.calculator=function(){
        this.sum = this.numx+this.numy;
        this.subb = this.numx-this.numy;
        this.multi = this.numx*this.numy;
        this.div = this.numx/this.numy;
        this.sq = this.numx**2;
        alert('sum of number='+this.sum +
        'substraction of number='+this.subb  
        +'¬multiplication of number='+this.multi+'division of number'+this.div+
        'square of number'+this.sq);
  
    };
}
let user1=new user(25 ,25);

user1.calculator();
console.log(user1.sum);
console.log(user1.subb);
console.log(user1.multi);
console.log(user1.div);
console.log(user1.sq);


