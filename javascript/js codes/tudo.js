
// let targetDiv= document.getElementById('')

// buttonClick = () =>{
//     let li=document.createElement('li');
//     let  inputvalue=getElementById('myBtn').value;
//     inputvalue.addEventListener('click',(buttonClick));
//        console.log('hiiii');

// //    type=()=>{

// //    }
//  }
let btn =document.getElementById('myBtn');
let list=document.querySelector('#hello');
let input=document.querySelector('#hi');
let el= document.getElementsByTagName('li');


btn.addEventListener('click',() =>{
 
    let txt = input.value;
    if (txt===""){
        alert('write something');
    }else{
    let li= document.createElement('li');
    li.innerHTML=txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value  ='';
    }

    console.log('this is submitted');
})
list.addEventListener('click',(e)=>{
    if(e.target.tagName =='li'){
        e.target.classList.toggle('checked'); 
    }
}
)