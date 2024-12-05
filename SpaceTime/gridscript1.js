var keyblue = false;
var keygreen = false;
var keyred = false;

function isActivated(){
    if(keyblue && keygreen && keyred)
        return true;
}

var ass = function(p){
    p.starx = [];
    p.stary = [];
  
    p.setup = function() {
        var canvasDiv = document.getElementById('boxone');
        let box1w = canvasDiv.offsetWidth;
        let box1h = canvasDiv.offsetHeight;
        p.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
        //p.createCanvas(400, 400);
        for (let i = 0; i < 1000; i++) {
            p.starx[i] = p.random(-10*box1w, box1w*10);
            p.stary[i] = p.random(-10*box1h, box1h*10);
        }
    };
  
    p.draw = function() {
      p.background(0);
      for (let i = 0; i < 1000; i++) {
        p.fill('white');
        p.noStroke();
        p.square(p.starx[i]-p.mouseX, p.stary[i]-p.mouseY, 1.0);
      }
    };

    p.windowResized=function() {
        var canvasDiv = document.getElementById('boxone');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        p.resizeCanvas(w, h);
    };
}
var box1 = new p5(ass, 'p5sketch1');
var b = function(b){
    b.starx = [];
    b.stary = [];
  
    b.setup = function() {
        var canvasDiv = document.getElementById('box2');
        let box1w = canvasDiv.offsetWidth;
        let box1h = canvasDiv.offsetHeight;
        b.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
        //p.createCanvas(400, 400);
        for (let i = 0; i < 1000; i++) {
            b.starx[i] = b.random(-10*box1w, box1w*10);
            b.stary[i] = b.random(-10*box1h, box1h*10);
        }
    };
  
    b.draw = function() {
        b.background(0);
        for (let i = 0; i < 1000; i++) {
            b.fill('white');
            b.noStroke();
            b.square(b.starx[i]-b.mouseX, b.stary[i]-b.mouseY, 1.0);
        }
    
        b.textSize(30);
        b.text('🚀', b.mouseX,b.mouseY);
      
    };

    b.windowResized=function() {
        var canvasDiv = document.getElementById('box2');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        b.resizeCanvas(w, h);
    };
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



var e = function(sketch){
    sketch.setup=function(){
        var canvasDiv = document.getElementById('box7');
        var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
        sketch.background('black');
        cnv.mousePressed(doStuff);
        sketch.frameRate(60);
        sketch.noStroke();
    }   
    var bgB = 'black';
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
        sketch.background(bgB);
        let dx = targetX - x;
        x += dx * easing;
        let dy = targetY - y;
        y += dy * easing;
        sketch.ellipse(x-w/2, y-h/2, 20, 20);
        sketch.resizeCanvas(w, h);
    }

    function doStuff(){
        if(bgB != 'black'){
            bgB = 'black';
            keyblue = false;
        }
        else{
            bgB = sketch.color(0,0,255);
            keyblue = true;
        }
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
    var bgGreen = 'black';  
    let x = .5;
    let y = .5;
    let easing = .25;
    let a = 0;
    sketch.draw=function(){ 
        var canvasDiv = document.getElementById('box8');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        var targetX = sketch.mouseX;
        var targetY = sketch.mouseY;
        sketch.background(bgGreen);
        let dx = targetX - x;
        x += dx * easing;
        let dy = targetY - y;
        y += dy * easing;
        sketch.fill(sketch.color(250,250,100));
        sketch.ellipse(x-w/2, y-h/2, 66, 66);
        sketch.resizeCanvas(w, h);
    }

    function doStuff(){
        if(bgGreen != 'black'){
            bgGreen = 'black';
            keygreen = false;
        }
        else{
            bgGreen = sketch.color(0,255,0);
            keygreen = true;
        }
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
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight+1;
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
        if(bgCol != 'black'){
            bgCol = 'black';
            keyred = false;
        }
        else{
            bgCol = sketch.color(255,0,0);
            keyred = true;
        }
    }
    sketch.windowResized=function() {
        var canvasDiv = document.getElementById('box9');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        sketch.resizeCanvas(w, h);
    }

}
var box9 = new p5(g, 'p5sketch7');


$(document).ready(function(){
    let click=0;
    $("#box8").hover(function(){
            //$("#author").fadeToggle(500);
    });
    /*
    $("#box6").click(function(e) {
        if (IsActivated()==true) {
            // Replace with your desired link
            window.location.href = "butt.com";
        } else {
            e.preventDefault(); // Prevents default behavior if not activated
        }
    });
*/
    
});