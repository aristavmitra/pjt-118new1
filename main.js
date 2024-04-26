function preload(){ 
    classifier = ml5.imageClassifier("DoodleNet")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    background("white") 
    canvas = createCanvas(300,300); 
    canvas.mouseReleased(classifycanvas)
}
function draw(){
   strokeWeight(7)
   stroke("black")
   if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
}
}
function classifycanvas(){
    classifier.classify(canvas,gotResults)
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);

        document.getElementById("identify").innerHTML = "Label : " + results[0].label
        document.getElementById("confidence").innerHTML = "Confidence : " + Math.round(results[0].confidence * 100) + "%"
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }
}
