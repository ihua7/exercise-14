//start of code

//a standardized p5sketch func to cop/past
var sketch1 = function(p){
    p.w;
    p.h;
    p.setup = function() {
        var canvasDiv = document.getElementById('box1');
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.rectMode(p.CENTER);
        let cnv = p.createCanvas(p.w+6, p.h);
        cnv.parent('box1'); 
    };
  
    p.draw = function() {
        p.background(255,100,255);
        p.push();
        p.translate(p.w/2, p.h/2); 
        p.rotate(p.frameCount/40);
        p.noStroke();
        p.fill('red');
        p.square(0,0,50);
        p.pop();

        //p.resizeCanvas(p.w, p.h);
    };

    p.windowResized=function() {
        var canvasDiv = document.getElementById('box1');
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.resizeCanvas(p.w, p.h);
    };
}
var box1 = new p5(sketch1);

var sketch2 = function(p){
    p.boxID = 'box2';
    p.w;
    p.h;
    p.setup = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.rectMode(p.CENTER);
        let cnv = p.createCanvas(p.w+10, p.h);
        cnv.parent(p.boxID); 
    };
  
    p.draw = function() {
        p.background(255,255,100);
        p.push();
        p.translate(p.w/2+6, p.h/2); 
        p.rotate(p.frameCount/40);
        p.noStroke();
        p.fill(p.color(0,255,0))
        p.square(0,0,50);
        p.pop();

        //p.resizeCanvas(p.w, p.h);
    };

    p.windowResized=function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.resizeCanvas(p.w, p.h);
    };
}
var box2 = new p5(sketch2);

var sketch3 = function(p){
    p.boxID = 'box3';
    p.w;
    p.h;
    p.setup = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.rectMode(p.CENTER);
        let cnv = p.createCanvas(p.w+17, p.h);
        cnv.parent(p.boxID); 
    };
  
    p.draw = function() {
        p.background(100,255,255);
        p.push();
        p.translate(p.w/2+12.5, p.h/2); 
        p.rotate(p.frameCount/40);
        p.noStroke();
        p.fill(p.color(0,0,255))
        p.square(0,0,50);
        p.pop();

        //p.resizeCanvas(p.w, p.h);
    };

    p.windowResized=function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.resizeCanvas(p.w, p.h);
    };
}
var box3 = new p5(sketch3);

var sketch4 = function(p){
    p.boxID = 'box4';
    p.w;
    p.h;
    p.pallete;
    p.cnv;
    p.setup = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.rectMode(p.CENTER);
        let cnv = p.createCanvas(p.w+17, p.h, p.WEBGL);
        cnv.parent(p.boxID); 

        p.angleMode(p.DEGREES);
        
        p.palette = [
            p.color(255, 0, 0),   // Red
            p.color(255, 165, 0), // Orange
            p.color(255, 255, 0), // Yellow
            p.color(0, 255, 0),   // Green
            p.color(0, 100, 100), // Teal
            p.color(0, 50, 255),  // Blue
            p.color(75, 0, 130),  // Indigo
            p.color(238, 0, 238), // Violet
            p.color(238, 0, 100)  // Pinkish Violet
        ];
    };
  
    p.draw = function() {
        p.background(0);
        //p.rotateX(20)
        //p.box(45);
        
        for (let n = 0; n < 1300; n++) {
            angle = n * 132.5;
            let speedof = 0.05;
        
            // Calculate the initial position
            let radius = n * 0.9; // Radius of each sphere from the center
            let x = p.cos(angle) * radius;
            let y = p.sin(angle) * radius;
        
            // Add vortex rotation by modifying x and y over time
            let rotatedX = x * p.cos(p.millis() * speedof) - y * p.sin(p.millis() * speedof);
            let rotatedY = x * p.sin(p.millis() * speedof) + y * p.cos(p.millis() * speedof);
        
            // Calculate a cycling parameter based on sphere index and time
            let t = (n / 1300 + p.millis() * 0.0005) % 1;
        
            // Determine which two colors to interpolate between
            let colorIndex = p.floor(t * (p.palette.length - 1));
            let nextColorIndex = (colorIndex + 1) % p.palette.length;
            let lerpAmount = t * (p.palette.length - 1) - colorIndex;
        
            // Interpolate between the two colors
            let sphereColor = p.lerpColor(p.palette[colorIndex], p.palette[nextColorIndex], lerpAmount);
        
            p.fill(sphereColor);
            p.noStroke();
            p.push();
            p.translate(rotatedX, rotatedY, 10); // Apply translation with vortex rotation
            p.rotateY(90); // Rotate each sphere slightly for added effect
            p.sphere(45, 2);
            p.pop();
          }
    };

    p.windowResized=function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.resizeCanvas(p.w, p.h);
    };
}
var box4 = new p5(sketch4);


//Start of JQuery (if needed)
$(document).ready(function(){
    let click=0;
    $("#box").hover(function(){
            //$("#author").fadeToggle(500);
    });
    $("#box6").click(function(e) {
        if (IsActivated()) {
            // Replace with your desired link
            window.location.href = "./colorworld/index.html";
        } else {
            e.preventDefault(); // Prevents default behavior if not activated
        }
    });

    
});