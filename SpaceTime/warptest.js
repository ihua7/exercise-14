// Create a new p5.js instance
new p5(function(sketch) {

    let angle;
    let clicked = false;
  
    // Travel condition
    function getTravel() {
      if (keyblue && keygreen && keyred) {
        travel = true;
      }
      return travel;
    }
  
    // Setup function for initial setup
    sketch.setup = function() {
      // Attach canvas to a specific div
      let canvasDiv = document.getElementById('box6');
      let cnv = sketch.createCanvas(canvasDiv.offsetWidth + 20, canvasDiv.offsetHeight - 5, sketch.WEBGL);
      cnv.mousePressed(doStuff);
      cnv.parent('box6'); // Attach canvas to the div
      sketch.angleMode(sketch.DEGREES);
    };
    var colo = 255;
    var colo2 = 180;
    var cursor = 'white';
    // Draw function to animate and render
    sketch.draw = function() {
      
  
      if (isActivated() == true) {
        sketch.background('white');
        colo = 0;
        colo2 = 0;
        cursor = 'black';
      }
      else{
        colo = 255;
        colo2 = 180;
        sketch.background(0);
        cursor = 'white';
      }

      
  
      // Create the vortex effect
      for (let n = 0; n < 1300; n++) {
        angle = n * 137.5;
        
        // Calculate the initial position
        let radius = n * 0.6;
        let x = sketch.cos(angle) * radius;
        let y = sketch.sin(angle) * radius;
  
        // Add vortex rotation by modifying x and y over time
        let rotatedX = x * sketch.cos(sketch.millis() * 0.0005) - y * sketch.sin(sketch.millis() * 0.0005);
        let rotatedY = x * sketch.sin(sketch.millis() * 0.0005) + y * sketch.cos(sketch.millis() * 0.0005);
  
        // Oscillate z position over time
        let z = sketch.sin(sketch.millis() * 0.09 + n * 0.8) * (n * 0.7) - 200;
  
        sketch.fill(n % colo, colo2, colo);
        sketch.noStroke();
        sketch.push();
        sketch.translate(rotatedX, rotatedY, z);
        sketch.rotateY(sketch.millis() * 0.05);
        sketch.sphere(1, 2);
        sketch.pop();
      }
  
      // Box following the mouse
      sketch.push();
      sketch.translate(sketch.mouseX - sketch.width / 2, sketch.mouseY - sketch.height / 2);
      sketch.rotateX(sketch.millis() * 0.1);
      sketch.rotateY(sketch.millis() * 0.01);
      sketch.noFill();
      sketch.stroke(cursor);
      sketch.box(12);
      sketch.fill(sketch.color(255, 255, 255, 100));
      sketch.pop();
    };
  
    // Mouse press event to toggle clicked state
    function doStuff() {
      if(isActivated() == true){
        window.location.href = "./colorworld/index.html";

      }
      clicked = true;
    }
  
    // Resize the canvas if the window size changes
    sketch.windowResized = function() {
      const canvasDiv = document.getElementById('box6');
      sketch.resizeCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
    };
  
  });
  