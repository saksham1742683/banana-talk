const btn= document.querySelector('#click-btn')
const textinput= document.querySelector('#text-input')
const outputDiv=document.querySelector('#output')


function newFunction() {
  outputDiv.innerText =  "123jdkfndskfskfj"+ textinput.value ;
}; 


btn.addEventListener("click", newFunction);
