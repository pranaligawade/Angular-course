// console.log(`
// - Introduction to Event an Event Handing in JS
// - Adding Event using HTML & JS
// - Submmitting a Form in JS`
// );

// What is Event?

// Events are nothing but action/reaction to particular interaction
// What could be a event
// a user clicking a button
// a form submission
// Text selection
// a response to a particular program


// Predefined Event(Syetem Event) and User-defined Event(Custom Event)
// Predefined Event -> Example. Cliking a Button, Summittig a form

/* writing an event 2 Ways
1. Embbed in HTML(static way)
2. Add it from JS(dynamic way)
*/


//Embbeding a Event in html
// Syntax
// <htmlElement eventName="functionName()"> </>

// {
{/* <button class="btn" onclick="alert('This is my first Event')">Click Me!</button> */}
// // console.log('btn');
// }
// buttonClick=(e)=>{
//     alert('alert from js');
//     console.dir(e.target.style)
//     e.target.innerHTML ="dynamic text"
// e.target.style.backgroundColor ="red";
// console.log(e)
// }
let bv =document.getElementById('myBtn');

btn.addEventListener('click',(bhushan) =>{
    bhushan.target.innerHTML  ="dynamic text"
    bhushan.target.style.backgroundColor ="red";
    console.log('thid is and log');
})

// function myfunction(){
//     document.getElementById('myBtn').innerHTML="hi";
//  }
//  function removeHandler(){   
// btn.removeEventListener('click',myfunction,false);

// console.log('element click removed');
// }         


// 











