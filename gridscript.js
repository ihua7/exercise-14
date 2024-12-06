var clicked1 = false;
var clicked2 = false;

//FORCE UPDATE LINK


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
        sketch.background(255);
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
        sketch.background(255);
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
var box3 = new p5(c, 'p5sketch3');
var d = function(sketch){
    
    sketch.setup=function(){
        var canvasDiv = document.getElementById('box6');
        var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
        sketch.background(255);
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
        var canvasDiv = document.getElementById('box6');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        var targetX = sketch.mouseX;
        var targetY = sketch.mouseY;
        sketch.background(237, 34, 93);
        let dx = targetX - x;
        x += dx * easing;
        let dy = targetY - y;
        y += dy * easing;
        sketch.ellipse(x-w/2, y-h/2, 66, 66);
        sketch.resizeCanvas(w, h);
    }

    function doStuff(){
        sketch.background(255);
    }
    sketch.windowResized=function() {
        var canvasDiv = document.getElementById('box6');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        sketch.resizeCanvas(w, h);
    }

}
var box6 = new p5(d, 'p5sketch4');
var e = function(sketch){
    sketch.setup=function(){
        var canvasDiv = document.getElementById('box7');
        var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
        sketch.background(255);
        cnv.mousePressed(doStuff);
        sketch.frameRate(60);
        sketch.noFill();
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
        sketch.background(43, 51, 126);
        sketch.stroke(255);
        let dx = targetX - x;
        x += dx * easing;
        let dy = targetY - y;
        y += dy * easing;
        var size=55;
        sketch.rotate(sketch.millis()/500);
        sketch.square(x-w/2-size/2, y-h/2-size/2, size, 20);
        sketch.resizeCanvas(w, h);
    }

    function doStuff(){
        sketch.background(255);
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
        sketch.background(255);
        cnv.mousePressed(doStuff);
        sketch.frameRate(60);
        sketch.noFill();
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
        sketch.background(255);
        sketch.stroke(0);
        let dx = targetX - x;
        x += dx * easing;
        let dy = targetY - y;
        y += dy * easing;
        sketch.translate(x-w/2, y-h/2, 0);
        sketch.rotateX(sketch.millis() / 1000);
        sketch.rotateY(sketch.millis() / 1000);
        sketch.rotateZ(sketch.millis() / 1000);
        sketch.box(45);
        sketch.resizeCanvas(w, h);
    }

    function doStuff(){
        sketch.background(255);
    }
    sketch.windowResized=function() {
        var canvasDiv = document.getElementById('box8');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        sketch.resizeCanvas(w, h);
    }

}
var box8 = new p5(f, 'p5sketch6');
var g = function(sketch){
    
    sketch.setup=function(){
        var canvasDiv = document.getElementById('box9');
        var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, this.WEBGL);
        sketch.background(255, 196, 0);
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
        var canvasDiv = document.getElementById('box9');
        var w=canvasDiv.offsetWidth, h= canvasDiv.offsetHeight;
        var targetX = sketch.mouseX;
        var targetY = sketch.mouseY;
        sketch.background(255, 196, 0);
        sketch.fill(255);
        let dx = targetX - x;
        x += dx * easing;
        let dy = targetY - y;
        y += dy * easing;
        sketch.translate(x-w/2, y-h/2, 0);
        sketch.rotateX(sketch.millis() / 1000);
        sketch.rotateY(sketch.millis() / 1000);
        sketch.rotateZ(sketch.millis() / 1000);
        sketch.torus(30, 10);
        sketch.resizeCanvas(w, h);
    }

    function doStuff(){
        if(clicked1 && clicked2){
            window.location.href = "/web-adventure/spacetime";
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
    $("#boxone").click(function(){
        $("#p5sketch1").fadeToggle(500);
    });
    let click=0;
    $("#box3").click(function(){
        if(click%2==0){
            $("#box3").animate({width:"25%", backgroundColor:"red"},200);
            $("#box3").text('( ꒪Д꒪)ノ');
            clicked1 = true;
        }
        else{
            $("#box3").animate({width:"100%", color:"black", backgroundColor:"white"},200);
            $("#box3").text('( ⚆ _ ⚆ )');
        }
        click++;
    });
    let click2=0;
    $("#box4").click(function(){
        if(click2%2==0){
            $("#box4").animate({height:"25%",backgroundColor:"black", color:"white"},200);
            $("#box4").text('Σ(゜ロ゜;)');
            clicked2 = true;
        }
        else{
            $("#box4").animate({height:"100%", backgroundColor:"white", color:"black"},200);
            $("#box4").text('(‘◉⌓◉’)');
        }
        click2++;
    });
    let click3=0;
    $("#box6").click(function(){
        if(click3%2==0){
            $("#col2").animate({width:"25%"},200);
            $("#col3").animate({width:"75%"},200);
            $("#defaultCanvas3").animate({width:"10%"},200);
        }
        else{
            $("#col2").animate({width:"50%"},200);
            $("#col3").animate({width:"50%"},200);
            $("#defaultCanvas3").animate({width:"25%"},200);
        }
        click3++;
    });
    $("#box8").click(function(){
            $("#author").fadeToggle(500);
    });
    let click4=0;
    $("#box9").click(function(){
        
    });
    let click5=0;
});
