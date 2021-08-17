const  tparray=['one','two','three','four'];
console.log(tparray.length)//finding length of array
let  fy= tparray[0];
console.log(fy);
let last=tparray[tparray.length -1];
console.log(last);// finding index using  array ithem
let addend=tparray.push('yellow');
console.log(addend);
console.log(tparray);//adding end of array -push
let reend=tparray.pop('yellow');
console.log(reend);
console.log(tparray);// remove item of end-pop
let rebegin=tparray.shift();
console.log(rebegin);
console.log(tparray);// remove begining array item-shift
let addbegin=tparray.unshift('red');
console.log(addbegin);
console.log(tparray);// add the begin-unshift
