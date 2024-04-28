const btn= document.querySelector('#click-btn')
const textinput= document.querySelector('#text-input')
const outputDiv=document.querySelector('#output')

function newFunction() {
    const url=`https://api.funtranslations.com/translate/minion.json?text=${textinput.value}`

    
    fetch(url).then(response=>response.json()).then(json=>
    
        outputDiv.innerText = json.contents.translated)
}; 


btn.addEventListener("click", newFunction);


