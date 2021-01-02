var btnTranslate = document.querySelector("#btn-translate")
var textInput=document.querySelector("textarea")
var textOutput=document.querySelector("#txt-output")



btnTranslate.addEventListener("click",eventHandler)

function eventHandler(){
    console.log("clicked")
    textOutput.innerText = textInput.value
}