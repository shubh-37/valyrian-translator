var inputTxt = document.querySelector("#input-txt");
var btnTranslate = document.querySelector("#btn-translate");
var outputTxt = document.querySelector("#output-txt");

var serverUrl = "https://api.funtranslations.com/translate/valyrian.json";


function createInputUrl(text){
    return serverUrl + "?"+"text=" + text;
}

function errorHandler(error){
    console.log(error + " error occured!1!1!1");
    alert("Oops sorry!1!1 Something is wrong with the server right now!! Please try again in sometime.");
}

function clickEventHandler(){
    //taking input from the user
   var inputText = inputTxt.value;
   //processing the input
   fetch(createInputUrl(inputText))
   .then(response => response.json())
   .then(json => {
    //rendering the output
    var translatedText = json.contents.translated;
    outputTxt.innerHTML = translatedText;
})
   .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);