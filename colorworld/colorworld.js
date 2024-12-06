//start of code

var clicked1 = false;
var clicked2 = false;

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
    p.x, p.y; // Square position
    p.velY = 0; // Vertical velocity
    p.accY = 0.5; // Gravity acceleration
    p.bounce = 0.3; // Reduced bounciness factor
    p.isClicked = false; // Flag to check if the square is clicked

    p.setup = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.rectMode(p.CENTER);
        let cnv = p.createCanvas(p.w + 17, p.h);
        cnv.parent(p.boxID);
        
        // Initial position of the square at the top center of the canvas
        p.x = p.w / 2;
        p.y = p.h / 2;
    };
  
    p.draw = function() {
        p.background(100, 255, 255);
        
        // Check if the square is being clicked
        if (p.mouseIsPressed && !p.isClicked) {
            let d = p.dist(p.mouseX, p.mouseY, p.x, p.y);
            if (d < 25) { 
                p.velY = -10; 
                p.isClicked = true;
            }
        }
        
        if (!p.isClicked) {
        
            p.push();
            p.translate(p.x, p.y); 
            p.rotate(p.frameCount / 40);
            p.noStroke();
            p.fill(p.color(0, 0, 255));
            p.square(0, 0, 50); // Draw the square with a size of 50
            p.pop();
            clicked1 = true;
        } else {
          
            p.velY += p.accY; 
            p.y += p.velY;
            
          
            if (p.y >= p.h - 25) { 
                p.y = p.h - 25;
                p.velY *= -p.bounce; 
            }

         
            p.noStroke();
            p.fill(p.color(0, 0, 255));
            p.square(p.x, p.y, 50); 
        }
    };

    p.windowResized = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.resizeCanvas(p.w, p.h);
    };
};


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
        cnv.mousePressed(doStuff);

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

    function doStuff(){
        if(clicked1&&clicked2){
            window.location.href = "/web-adventure/gameland";
        }
    }
  
    p.draw = function() {
        p.background(0);
        let z = 10;
        for (let n = 0; n < 1300; n++) {
            angle = n * 132.5;
            let speedof = 0.05;
            
            
            let radius = n * 0.9; 
            let x = p.cos(angle) * radius;
            let y = p.sin(angle) * radius;
        
            
            let rotatedX = x * p.cos(p.millis() * speedof) - y * p.sin(p.millis() * speedof);
            let rotatedY = x * p.sin(p.millis() * speedof) + y * p.cos(p.millis() * speedof);
        
            
            let t = (n / 1300 + p.millis() * 0.0005) % 1;
            
            if(clicked1 && clicked2){
                z = 200;
            }
            
            let colorIndex = p.floor(t * (p.palette.length - 1));
            let nextColorIndex = (colorIndex + 1) % p.palette.length;
            let lerpAmount = t * (p.palette.length - 1) - colorIndex;
        
            
            let sphereColor = p.lerpColor(p.palette[colorIndex], p.palette[nextColorIndex], lerpAmount);
        
            p.fill(sphereColor);
            p.noStroke();
            p.push();
            p.translate(rotatedX, rotatedY, z); 
            p.rotateY(90);
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

var sketch5 = function(p){
    p.boxID = 'box5';
    p.w;
    p.h;

    let xOffset = 10; 
    let amplitude = 25; 
    let frequency = 0.03; 
    let waveSpeed = 3;
    let xpos = p.w/2;
    let ypos = p.h/2;


    p.setup = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.rectMode(p.CENTER);
        let cnv = p.createCanvas(p.w+17, p.h).parent(canvasDiv);
        
        cnv.parent(p.boxID); 
        //cnv.mousePressed(doStuff);
        p.noStroke();
        xpos = p.w/2;
        ypos = p.h/2;
    };
    
    function doStuff(){
        //clicker = true;
    }


    p.draw = function() {
        p.background(0);
        p.push();
        
        let targetX;
        let targetY;
        let easing = 0.1;
        
        if (p.mouseX >= 0 && p.mouseX <= p.w && p.mouseY >= 0 && p.mouseY <= p.h) {
          // If the mouse is within bounds, follow the mouse
          targetX = p.mouseX;
          targetY = p.mouseY;
        } else {
          // If the mouse is out of bounds, center the ellipse inside the div
          targetX = p.w/2;
          targetY = p.h/2;
        }

        if(p.mouseX>p.w*5/6){
            if(p.mouseIsPressed){
                clicked2 = true;
            }
        }else if(p.mouseX<p.w*5/6){
            if(p.mouseIsPressed){
                clicked2 = false;
            }
        }
        if(clicked2){
            targetX = p.w*4/5;
            targetY = p.h/2;
        }

        // Calculate distance and apply easing
        let dx = targetX - xpos;
        xpos += dx * easing;
        let dy = targetY - ypos;
        ypos += dy * easing;
        
        p.translate(xpos, ypos); 
        p.rotate(p.frameCount/20);
        p.noStroke();
        p.fill(p.color(255,255,255))
        p.square(0,0,70);
        p.pop();

        for (let x = 0; x < p.width * 2 / 3; x++) {
            let y = p.height / 2 + p.sin((x + xOffset) * frequency) * amplitude;
      
            let redColor = p.sin((x + xOffset) * 0.005) * 127 + 128;
            let greenColor = p.sin((x + xOffset) * 0.005 + 2) * 127 + 128;
            let blueColor = p.sin((x + xOffset) * 0.005 + 4) * 127 + 128; 
      
            p.fill(redColor, greenColor, blueColor);
      
      
            p.ellipse(x, y, 5, 5);

            if(x >= p.width * 2 / 3 - 1){
                p.fill('white');
                p.square(x, y, 4);
            }
        }

        xOffset += waveSpeed;
    };

    p.windowResized=function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.resizeCanvas(p.w, p.h);
    };
}
var box5 = new p5(sketch5);

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