var btnTranslate = document.querySelector("#btn-translate")
var textInput=document.querySelector("textarea")
var textOutput=document.querySelector("#output")

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverUrl = "https://api.funtranslations.com/translate/minion.json"


function getTranslateUrl(text){
    return serverUrl+"?text="+text
}

function eventHandler(){
    var text= textInput.value
    var url= getTranslateUrl(text)
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
}



btnTranslate.addEventListener("click",eventHandler)

