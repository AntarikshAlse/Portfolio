var input = document.querySelector("#input");
var btntranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#bn-output");

function translate (){
      var serverURL = "https://api.funtranslations.com/translate/yoda.json" +  "?" + "text=" + input.value ;
    fetch(serverURL)  
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
         output.innerText = translatedText;})
}

btntranslate.addEventListener("click",translate)

