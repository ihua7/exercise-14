//start of code

var x;
var rise1 = false;
var rise2 = false;


//a standardized p5sketch func to cop/past
var sketch1 = function(p){
    p.w;
    p.h;
    p.setup = function() {
        var canvasDiv = document.getElementById('box1');
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.rectMode(p.CENTER);
        let cnv = p.createCanvas(p.w+5, p.h);
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
        let cnv = p.createCanvas(p.w+15, p.h);
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

var sketch3 = function(p) {
    p.boxID = 'box3';
    p.w;
    p.h;
    p.y;
    p.velX = 0;
    p.velY = 0;
    p.accY = 0.5;
    p.bounce = 0.3;
    p.speed = 5;
    p.isJumping = false;
    p.bg;
    p.platforms = []; 
    var mySound;

    p.setup = function() {
        //mySound = loadSound('jump.wav');
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.rectMode(p.CENTER);
        let cnv = p.createCanvas(p.w + 15, p.h);
        cnv.parent(p.boxID);

        x = p.w / 2;
        p.y = p.h / 2;

        p.bg = p.loadImage('background.png');
        p.platforms = [
            { x: p.w /2 + 50, y: p.h - 200, w: 150, h: 10 },
            { x: (p.w / 2 - 100), y: p.h - 100, w: 150, h: 10 }
        ];
    };

    p.draw = function() {
        p.background(p.bg);

        
        p.velY += p.accY;
        p.y += p.velY;

        
        if (p.keyIsDown(p.LEFT_ARROW) || p.keyIsDown(65)) { // Left Arrow or 'A'
            p.velX = -p.speed;
        } else if (p.keyIsDown(p.RIGHT_ARROW) || p.keyIsDown(68)) { // Right Arrow or 'D'
            p.velX = p.speed;
        } else {
            p.velX = 0; 
        }
        x += p.velX;

        
        x = p.constrain(x, 25, p.w - 25);

        
        if (p.y >= p.h - 25) {
            p.y = p.h - 25;
            p.velY *= -p.bounce;
            p.isJumping = false; 
        }

        // Check for platform collisions
        p.platforms.forEach(platform => {
            if (
                x > platform.x - platform.w / 2 &&
                x < platform.x + platform.w / 2 &&
                p.y + 25 > platform.y - platform.h / 2 &&
                p.y < platform.y && // Check from above
                p.velY > 0 // Ensure falling onto the platform
            ) {
                p.y = platform.y - 30;
                p.velY = 0;
                p.isJumping = false;
            }
        });
        
        // Draw the character
        p.noStroke();
        if(p.y>0){
            
            p.fill(p.color(0, 0, 255));
            p.square(x, p.y, 50);
        }
        else if(p.y<0){
            p.accY = 0;
            rise1 = true;
        }
        

        // Draw the platforms
        p.stroke(p.color(0,100,0))
        p.strokeWeight(3)
        p.fill(p.color(160, 230, 0));
        p.platforms.forEach(platform => {
            p.rect(platform.x, platform.y, platform.w, platform.h);
        });
    };

    p.keyPressed = function() {
        // Jumping logic
        if ((p.keyCode === p.UP_ARROW || p.key === 'w') && !p.isJumping) {
            p.velY = -12; // Apply upward force
            p.isJumping = true;
        }
    };

    p.windowResized = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.resizeCanvas(p.w, p.h);

        // Recalculate platform positions on resize
        p.platforms = [
            { x: p.w / 4, y: p.h - 250, w: 150, h: 5 },
            { x: (p.w / 4) * 3, y: p.h - 350, w: 150, h: 5 }
        ];
    };
};



var box3 = new p5(sketch3);

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