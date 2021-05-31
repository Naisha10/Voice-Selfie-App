var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if(content == "take my selfie")
    {
        speak();
        console.log("Taking selfie");
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speakdata = "Take your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(
        function(){
            take_snapshot();
            save();

        },5000
    );
}

camera = document.getElementById("camera");

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });

  
  
function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("results").innerHTML = '<img id="selfie_img" src="'+data_uri +'"/>;'
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}