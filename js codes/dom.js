// document.getElementById('hi').innerHTML="this is dynamcic";
//dom- document object model
/*
one thing is clear in js everything is  an object

window-> it is an global object avialbe is  browser
console.dir(window.document);
 
window ..> there is on property of window...---> document
dom--> document object model
console.dir(document.body)

 */

//accesing HTMl element in js- three way
// 1-document.getElementById()
console.log(document.getElementById('h3'));
document.getElementById('h3').innerHTML="this is dynamic html";
//2-document.getElementsByClassName
  var list=document.getElementsByClassName('first')[0].innerHTML="hello";
  console.log(list)
// 3-  document.getElementsByTagName()
  document.getElementsByTagName('div')[2].innerHTML="i am engineer";
   console.log( document.getElementsByTagName('div')[2]);// used for see on the console-developer tool
   
   
   // changing the element style dynamically
   document.getElementById('h3').style.color="red";
   document.getElementById('h3').style.fontSize="44px";
   document.getElementsByClassName('first')[0].style.color="yellow";
   document.getElementsByTagName('div')[2].style.fontFamily="arial";
   console.dir(document.getElementById('first'));
    

   // adding an HTML ELEMENT TO DOM
   // TO  CREATE  HTML ELEMENT DOM PROVIDE A FUNCTION Called " CREATE ELEMENT"
// SYNTAXT--> document.createElement(tagName)
//eg-1
let div= document.createElement('div');
div.innerHTML="this is an dynamic HTML Element2";
console.log(div)
//eg-2
let h3= document.createElement('h2');
h3.innerHTML="hey,this is an dynamic HTML Element ";
console.log(h3)
// adding attribute  dynamically;
div.setAttribute('id',"dynamicid");
div.setAttribute('class',"dynamic-class");
div.setAttribute('pranali',"custom");
// hasAttribute-for seeing custom attribute
console.log(div.hasAttribute('pranali'))
console.log(div.hasAttribute('pranali1s'))
 // apppend - 
 document.body.appendChild(div)// see the dynamically created div data
 document.body.appendChild(h3)
 //remove attribute
 div.removeAttribute('pranali');
 console.log(div.hasAttribute('pranali'))