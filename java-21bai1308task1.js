let input=document.querySelector('.numberinput');
let h3=document.querySelector('.outputtext');

input.addEventListener('input',()=>{
    let value=input.value;
    let output=value.split('').reverse().join('');
    h3.textContent=`OUTPUT: ${output}`;
})