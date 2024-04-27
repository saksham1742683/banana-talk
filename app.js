const btn= document.querySelector('#click-btn')
const textinput= document.querySelector('#text-input')
console.log(textinput);

function newFunction() {
    console.log('clicked button');
    console.log('input :' , textinput.value);
}; 


btn.addEventListener("click", newFunction);
