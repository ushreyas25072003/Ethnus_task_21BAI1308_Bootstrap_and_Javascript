// //TASK 1

// let reverseFunction=function(reverse){
// let numbers=reverse;
// let string=numbers.toString();
// let reversed=string.split('').reverse().join('');
// console.log(Number(reversed));
// }

// reverseFunction(32243);



// //TASK 2



// let alphaOrder=function(value){
//     let stringText=value.toString();
//     console.log(stringText.split('').reverse().join(''));
// }

// alphaOrder('webmaster');



//TASK 3


// let multiplyButton=document.querySelector('.multiply');
// let divideButton=document.querySelector('.Divide');
// let result=document.querySelector('.resultvalue');

// multiplyButton.addEventListener('click',()=>{
//     let value1=document.querySelector('.numberinput1').value;
//     let value2=document.querySelector('.numberinput2').value;
//     if(value1!=='' && value2!==''){
//         let output=value1*value2;
//         result.textContent=output;
//     }
// })

// divideButton.addEventListener('click',()=>{
//     let value1=document.querySelector('.numberinput1').value;
//     let value2=document.querySelector('.numberinput2').value;
//     if(value1!=='' && value2!==''){
//         let output=value1/value2;
//         result.textContent=output;
//     }
// })





//TASK 4

// let showDate=document.querySelector('.showdate');
// let showTime=document.querySelector('.showtime');
// let para1=document.querySelector('.date');
// let para2=document.querySelector('.dateandtime');


// let a=new Date();
// console.log(a);

// showTime.addEventListener('click',()=>{
//     para2.textContent=a;
// })


// const currentDate = new Date();

// const year = currentDate.getFullYear();
// const month = (currentDate.getMonth() + 1).toString().padStart(2,'0')
// const day = currentDate.getDate().toString()

// console.log(`${day}/${month}/${year}`)

// showDate.addEventListener('click',()=>{
//     para1.textContent=`${day}/${month}/${year}`;
// })


//TASK 5

// let name=document.querySelector('.name');
// let email=document.querySelector('.email');
// let website=document.querySelector('.website');
// let message=document.querySelector('.message');

// let nameError=document.querySelector('.nameerror');
// let emailError=document.querySelector('.emailerror');
// let websiteError=document.querySelector('.websiteerror');
// let messageError=document.querySelector('.messageerror');

// name.addEventListener('input',()=>{
//     if(name.value===''){
//         nameError.textContent="This Field is Required";
//     }else{
//         nameError.textContent='';
//     }
// })

// email.addEventListener('input',()=>{
//     if(!email.value.includes('@')){
//         emailError.textContent="A Valid Email Address Is Required";
//     }else{
//         emailError.textContent='';
//     }
// })


// website.addEventListener('input',()=>{
//      if(!website.value.includes('.')){
//         websiteError.textContent="A Valid URL Is Required"
//      }else{
//         websiteError.textContent='';
//      }
// })

// message.addEventListener('input',()=>{
//     if(message.value===''){
//         messageError.textContent="This Field Is Required"
//      }else{
//         messageError.textContent='';
//      }
// })


let some = new Promise(function(resolve, reject) {
    let a=20;
  if (a === 23) {
    resolve("good one");
  } else {
    reject("bad guess");
  }
});

some
  .then((e) => {
    console.log(e); // This will be executed if the Promise is resolved
  })
  .catch((err) => {
    console.error(err); // This will be executed if the Promise is rejected
  });
