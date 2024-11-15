import { init3DScene } from './space.js';

var ass = function(sketch){
    sketch.setup=function(){
        var canvasDiv = document.getElementById('boxone');
        sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
        //sketch.background(0);
    }
    sketch.draw=function(){ 
        var canvasDiv = document.getElementById('boxone');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        sketch.background(0);

        let x = sketch.map(sketch.mouseX, 0, w, 100, 150);
        let y = sketch.map(sketch.mouseY, 0, h, -30,30);

        sketch.rotateY(x/40);
        sketch.rotateX(y/40);
        sketch.strokeWeight(1);
        sketch.stroke(255);
        sketch.noFill();
        sketch.box(w/4);

        sketch.resizeCanvas(w, h);
    }
    sketch.windowResized=function() {
        var canvasDiv = document.getElementById('boxone');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        sketch.resizeCanvas(w, h);
    }
}
var box1 = new p5(ass, 'p5sketch1');
var b = function(sketch){
    sketch.setup=function(){
        var canvasDiv = document.getElementById('box2');
        var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
        sketch.background('white');
        cnv.mousePressed(doStuff);
    }   

    sketch.draw=function(){ 
        var canvasDiv = document.getElementById('box2');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        //sketch.background(255);
        var x = sketch.mouseX;
        var y = sketch.mouseY;
        sketch.noFill();
        sketch.ellipse(x-w/2,y-h/2, h/3);
        /*if(sketch.mouseIsPressed){
            sketch.background(255);
            console.log("mouse was pressed")
        }*/
    }

    function doStuff(){
        sketch.background(255);
    }
    sketch.windowResized=function() {
        var canvasDiv = document.getElementById('box2');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        sketch.resizeCanvas(w, h);
    }

}
var box2 = new p5(b, 'p5sketch2');

var c = function(sketch){
    sketch.setup=function(){
        var canvasDiv = document.getElementById('box5');
        var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
        sketch.background('blue');
        cnv.mousePressed(doStuff);
        sketch.frameRate(24);
    }   

    sketch.draw=function(){ 
        var canvasDiv = document.getElementById('box5');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        //sketch.background(255);
        var x = sketch.mouseX;
        var y = sketch.mouseY;
        sketch.noStroke();
        sketch.fill((sketch.random(0,255)),(sketch.random(0,255)),(sketch.random(0,255)))
        sketch.translate(x-w/2,y-h/2, sketch.random(-100,50))
        sketch.rotateZ(sketch.random(0,360));
        sketch.rotateY(sketch.random(0,360));
        sketch.rotateX(sketch.random(0,360));
        sketch.box(sketch.random(10,60));

    }

    function doStuff(){
        sketch.background(255);
    }
    sketch.windowResized=function() {
        var canvasDiv = document.getElementById('box5');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        sketch.resizeCanvas(w, h);
    }

}
const customConfig = {
    
    canvasDiv: document.getElementById('box5'),
    background: 'black',
    frameRate: 30,
    debugMode: false,
  };

var box3 = init3DScene('p5sketch3', customConfig);

var d = function(sketch) {
    let angle;

    sketch.setup = function() {
        // Get the container element
        var canvasDiv = document.getElementById('box6');
        var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, sketch.WEBGL);
        sketch.angleMode(sketch.DEGREES);
        sketch.noStroke();
        sketch.frameRate(30);
        sketch.background(0);
    };

    sketch.draw = function() {
        // Get the container dimensions (for reference, not resizing)
        var canvasDiv = document.getElementById('box6');
        var w = canvasDiv.offsetWidth, h = canvasDiv.offsetHeight;

        // Render the spiral animation
        sketch.background(0);
        //sketch.orbitControl();

        for (let n = 0; n < 1300; n++) {
            angle = n * 137.5; // Adjust angle for spiral pattern

            // Calculate initial position
            let radius = n * 0.6;
            let x = Math.cos(sketch.degrees(angle)) * radius;
            let y = Math.sin(sketch.degrees(angle)) * radius;
            let rotationSpeed = 0.000000005;
            // Apply vortex rotation
            let rotatedX = x * Math.cos(sketch.frameCount/20 * rotationSpeed) - y * Math.sin(sketch.frameCount/20 * rotationSpeed);
            let rotatedY = x * Math.sin(sketch.frameCount/20 * rotationSpeed) + y * Math.cos(sketch.frameCount/20 * rotationSpeed);

            // Oscillate z position
            let z = Math.sin(sketch.frameCount * 0.09 + n * 0.8) * (n * 0.7);

            sketch.fill(n % 255, 180, 255);
            sketch.push();
            sketch.translate(rotatedX, rotatedY, z);
            sketch.rotateY(sketch.millis() * 0.05);
            sketch.sphere(1, 2);
            sketch.pop();
        }
    };

    sketch.windowResized = function() {
        // Resize canvas only when the window size changes
        var canvasDiv = document.getElementById('box6');
        var w = canvasDiv.offsetWidth, h = canvasDiv.offsetHeight;
        sketch.resizeCanvas(w, h);
    };
};


var box6 = new p5(d, 'p5sketch4');

var e = function(sketch){
    sketch.setup=function(){
        var canvasDiv = document.getElementById('box7');
        var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
        sketch.background('black');
        cnv.mousePressed(doStuff);
        sketch.frameRate(60);
        sketch.noStroke();
    }   
    let x = .5;
    let y = .5;
    let easing = .25;
    let trail = [];
    let a = 0;
    sketch.draw=function(){ 
        var canvasDiv = document.getElementById('box7');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        var targetX = sketch.mouseX;
        var targetY = sketch.mouseY;
        sketch.background('black');
        let dx = targetX - x;
        x += dx * easing;
        let dy = targetY - y;
        y += dy * easing;
        sketch.ellipse(x-w/2, y-h/2, 20, 20);
        sketch.resizeCanvas(w, h);
    }

    function doStuff(){
        sketch.background('red');
    }
    sketch.windowResized=function() {
        var canvasDiv = document.getElementById('box7');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        sketch.resizeCanvas(w, h);
    }


}
var box7 = new p5(e, 'p5sketch5');
var f = function(sketch){
    
    sketch.setup=function(){
        var canvasDiv = document.getElementById('box8');
        var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
        sketch.background('black');
        cnv.mousePressed(doStuff);
        sketch.frameRate(60);
        sketch.noStroke();
    }   
    let x = .5;
    let y = .5;
    let easing = .25;
    let trail = [];
    let a = 0;
    sketch.draw=function(){ 
        var canvasDiv = document.getElementById('box8');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        var targetX = sketch.mouseX;
        var targetY = sketch.mouseY;
        sketch.background('black');
        let dx = targetX - x;
        x += dx * easing;
        let dy = targetY - y;
        y += dy * easing;
        sketch.fill(sketch.color(250,250,100));
        sketch.ellipse(x-w/2, y-h/2, 66, 66);
        sketch.resizeCanvas(w, h);
    }

    function doStuff(){
        sketch.background('green');
    }
    sketch.windowResized=function() {
        var canvasDiv = document.getElementById('box8');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        sketch.resizeCanvas(w, h);
    }


}


var box8 = new p5(f, 'p5sketch6');

//box 9
var g = function(sketch){
    
    sketch.setup=function(){
        var canvasDiv = document.getElementById('box9');
        var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
        sketch.background('black');
        cnv.mousePressed(doStuff);
        sketch.frameRate(60);
        sketch.noStroke();
    }   
    let x = .5;
    let y = .5;
    let easing = .25;
    let trail = [];
    let a = 0;
    var bgCol = 'black';
    sketch.draw=function(){ 
        var canvasDiv = document.getElementById('box9');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        var targetX = sketch.mouseX;
        var targetY = sketch.mouseY;
        
        sketch.background(bgCol);
        let dx = targetX - x;
        x += dx * easing;
        let dy = targetY - y;
        y += dy * easing;
        sketch.translate(x-w/2, y-h/2);
        sketch.rotateX(sketch.frameCount * 0.01);
        sketch.rotateY(sketch.frameCount * 0.01);
        sketch.fill('white');
        sketch.noStroke();
        sketch.box(20);
        sketch.fill(sketch.color(255,255,255,100));
        sketch.box(30);
        //sketch.ellipse(x-w/2, y-h/2, 45, 45);
        sketch.resizeCanvas(w, h);
    }

    function doStuff(){
        if(bgCol == 'black')
            bgCol = 'red';
        else
            bgCol = 'black';
        
    }
    sketch.windowResized=function() {
        var canvasDiv = document.getElementById('box9');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        sketch.resizeCanvas(w, h);
    }

}
var box9 = new p5(g, 'p5sketch7');

$(document).ready(function(){
    $("#boxone").click(function(){
        $("#p5sketch1").fadeToggle(500);
    });
    let click=0;
    $("#box8").hover(function(){
            //$("#author").fadeToggle(500);
    });
    let click5=0;
    
});