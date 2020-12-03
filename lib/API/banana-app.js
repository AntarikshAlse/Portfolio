var input = document.querySelector("#input");
var btntranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#bn-output");

// URL
 //   var serverURL = "https://reqres.in/api/users"  + "/" + input.value;
 //    json.data.first_name +" "+ json.data.last_name;

function translate (){
      var serverURL = "https://api.funtranslations.com/translate/minion.json" +  "?" + "text=" + input.value ;
    fetch(serverURL)  
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
         output.innerText = translatedText;})
}

btntranslate.addEventListener("click",translate)

