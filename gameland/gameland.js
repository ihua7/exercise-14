//start of code

var x;
var rise1 = false;
var rise2 = false;


//a standardized p5sketch func to cop/past
var sketch1 = function(p) {
    p.boxID = 'box1';
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
    let whiteBallX,whiteBallY,whiteBallRadius;


    

    p.setup = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.rectMode(p.CENTER);
        let cnv = p.createCanvas(p.w + 15, p.h);
        cnv.parent(p.boxID);

        x = p.w / 2;
        p.y = p.h / 2;
        whiteBallX = p.w/2; // X position of the white ball
        whiteBallY = p.h/2; // Y position of the white ball
        whiteBallRadius = 25; // Radius of the white ball
    };

    p.draw = function() {
        p.background(p.color(255, 50, 100));

        p.velY += p.accY;
        p.y += p.velY;

        if (p.keyIsDown(p.LEFT_ARROW) || p.keyIsDown(65)) {
            p.velX = -p.speed;
        } else if (p.keyIsDown(p.RIGHT_ARROW) || p.keyIsDown(68)) {
            p.velX = p.speed;
        } else {
            p.velX = 0;
        }

        if (p.keyIsDown(p.DOWN_ARROW) || p.keyIsDown(83)) {
            // Crouch logic if needed
        }

        x += p.velX;
        x = p.constrain(x, 25, p.w - 25);

        if (p.y >= p.h - 25) {
            p.y = p.h - 25;
            p.velY *= -p.bounce;
            p.isJumping = false;
        }

        if (rise2 && rise1) {
            p.noStroke();
            p.fill(p.color(0, 0, 255));
            p.square(x + 50, p.y, 50);
        }

        p.fill(255); // White ball
        p.noStroke();
        p.ellipse(whiteBallX, whiteBallY, whiteBallRadius * 2);

        // Collision detection with the white ball
        if (rise1 && rise2 &&
            x > whiteBallX - whiteBallRadius &&
            x < whiteBallX + whiteBallRadius &&
            p.y > whiteBallY - whiteBallRadius &&
            p.y < whiteBallY + whiteBallRadius
        ) {

            
            // Insert custom script here
            window.location.href = "/web-adventure";
            // You can replace the line above with any script you'd like to run
        }
    };

    p.keyPressed = function() {
        if ((p.keyCode === p.UP_ARROW || p.key === 'w') && !p.isJumping) {
            p.velY = -12;
            p.isJumping = true;
        }
    };

    p.windowResized = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.resizeCanvas(p.w, p.h);
    };
};



var box1 = new p5(sketch1);

var sketch2 = function(p) {
    p.boxID = 'box2';
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
    p.rectangle = { x: p.w/2, y: p.w/2, w: 50, h: 1000 };

    p.setup = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.rectMode(p.CENTER);
        let cnv = p.createCanvas(p.w + 15, p.h);
        cnv.parent(p.boxID);

        x = p.w / 2;
        p.y = p.h - 20;
        p.bg = p.loadImage('minecraft.png');
        p.platforms = [
            { x: p.w/2+5, y: p.h-25, w: p.w+25, h: 50 },
        ];
    };

    p.draw = function() {
        p.background(p.bg);

        p.velY += p.accY;
        p.y += p.velY;

        if (p.keyIsDown(p.LEFT_ARROW) || p.keyIsDown(65)) {
            p.velX = -p.speed;
        } else if (p.keyIsDown(p.RIGHT_ARROW) || p.keyIsDown(68)) {
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

        p.platforms.forEach(platform => {
            if (
                x > platform.x - platform.w / 2 &&
                x < platform.x + platform.w / 2 &&
                p.y + 25 > platform.y - platform.h / 2 &&
                p.y < platform.y &&
                p.velY > 0
            ) {
                p.y = platform.y - 50;
                p.velY = 0;
                
                p.isJumping = false;
            }
        });

        if ( x > p.w*3/4-100 && x < p.w*3/4+100 ) {
            rise2 = true;
            p.y = -1000; 
            p.accY = 0;
        }

        p.fill(0);
        p.rect(p.w*3/4, p.h/2, 150, 250);
        p.fill(p.color(170,0,255));
        p.rect(p.w*3/4, p.h/2-15, 100, 150);

        if (rise1 && p.y > -1000) {
            p.noStroke();
            p.fill(p.color(0, 0, 255));
            p.square(x, p.y, 50);
        }

        p.fill(p.color(60, 120, 60));
        p.platforms.forEach(platform => {
            p.rect(platform.x, platform.y, platform.w, platform.h);
        });
    };

    p.keyPressed = function() {
        if ((p.keyCode === p.UP_ARROW || p.key === 'w') && !p.isJumping) {
            p.velY = -12;
            p.isJumping = true;
        }
    };

    p.windowResized = function() {
        var canvasDiv = document.getElementById(p.boxID);
        p.w = canvasDiv.offsetWidth;
        p.h = canvasDiv.offsetHeight;
        p.resizeCanvas(p.w, p.h);
    };
};

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

    p.setup = function() {
        
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