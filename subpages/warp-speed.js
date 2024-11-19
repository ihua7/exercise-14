var d = function(sketch) {
  let angle;

  sketch.setup = function() {
      // Get the container element
      var canvasDiv = document.getElementById('box6');
      var cnv = sketch.createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight, sketch.WEBGL);
      sketch.angleMode(sketch.DEGREES);
      sketch.noStroke();
      sketch.frameRate(60);
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
          let radius = n * 0.4;
          let x = Math.cos(sketch.radians(angle)) * radius;
          let y = Math.sin(sketch.radians(angle)) * radius;
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
          sketch.sphere(0.5, 2);
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

//var box6 = new p5(d, 'p5sketch4');