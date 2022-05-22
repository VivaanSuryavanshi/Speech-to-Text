var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();

function StartRec(){
    document.getElementById("TextA").innerHTML="";
    Recognition.start();
}

Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("TextA").innerHTML=content;
}