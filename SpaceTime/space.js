// Create a new p5.js instance
new p5(function(sketch) {

  let angle;

  sketch.setup = function() {
    // Get canvas dimensions from the specified HTML element (box5 container)
    const canvasDiv = document.getElementById('box5');
    // Create canvas and assign it to the 'box5' container
    let cnv2 = sketch.createCanvas(canvasDiv.offsetWidth+20, canvasDiv.offsetHeight, sketch.WEBGL);
    cnv2.parent('box5');  // Attach canvas to the div with id 'box5'
    
    // Set up initial properties
    sketch.background('gray');
  };

  sketch.draw = function() {
    sketch.background('black');  // Reset background to black in each frame
    //sketch.orbitControl();  // Allow user to interact with the scene

    // Create rotating boxes
    sketch.push();
    sketch.fill(sketch.color(255, 255, 100, 255));
    sketch.rotateX(sketch.millis() / 10000);
    sketch.rotateY(sketch.millis() / 10000);
    sketch.noStroke();
    sketch.box(55);
    sketch.pop();
    
    sketch.push();
    sketch.fill(sketch.color(255, 150, 0, 100));
    sketch.rotateX(sketch.millis() / 10000);
    sketch.rotateY(sketch.millis() / 10000);
    sketch.noStroke();
    sketch.box(70);
    sketch.pop();

    // Create planet system
    let earth = new Planet(sketch, 1000, [0, 200, 40], 200, 0, 0, 10000, sketch.color(0, 150, 255), 20);
    earth.addMoon('white', [0, 10, 1], 500, 20, 0, 0, 5);
    earth.createPlanet();

    let venus = new Planet(sketch, 1200, [0, 200, 40], 0, 0, 150, 1000, sketch.color(205, 150, 50), 15);
    venus.addMoon('gray', [1, 0, 1], 400, 20, 0, 0, 5);
    venus.createPlanet();

    let mercury = new Planet(sketch, 1500, [0, 100, 40], 0, 0, 75, 500, sketch.color(150, 23, 10), 5);
    mercury.createPlanet();

    let mars = new Planet(sketch, 1500, [0, 100, -10], 0, 0, 175, 1000, sketch.color(150, 23, 10), 15);
    mars.createPlanet();

    let jupiter = new Planet(sketch, 5000, [0, 100, 10], 0, 0, 400, 500, sketch.color(200, 103, 10), 80);
    jupiter.addMoon('blue', [0, 20, 0], 700, 70, 0, 0, 10);
    jupiter.createPlanet();

    let saturn = new Planet(sketch, 5000, [10, 100, 0], 600, 0, 450, 700, sketch.color(200, 163, 10), 60);
    saturn.addMoon('yellow', [0, 60, 0], 700, 70, 0, 0, 10);
    saturn.createPlanet();

    let neptune = new Planet(sketch, 5000, [10, 100, 0], 200, 0, -500, 700, sketch.color(60, 20, 200), 55);
    neptune.addMoon('yellow', [0, 0, 60], 700, 70, 0, 0, 10);
    neptune.createPlanet();

    let uranus = new Planet(sketch, 5000, [10, 100, 0], 900, 500, 550, 700, sketch.color(20, 163, 200), 40);
    uranus.addMoon('yellow', [40, 10, 0], 700, 70, 0, 0, 10);
    uranus.createPlanet();

    sketch.push();
      sketch.translate(sketch.mouseX - sketch.width / 2, sketch.mouseY - sketch.height / 2, 0);
      sketch.rotateX(sketch.millis() * 0.001);
      sketch.rotateY(sketch.millis() * 0.001);
      sketch.noFill();
      sketch.stroke('white');
      sketch.box(12);
      sketch.fill(sketch.color(255, 255, 255, 100));
    sketch.pop();
  };

  // Planet class defined within the p5 instance
  class Planet {
    constructor(sketch, speed, axis, x, y, z, rotation, col, size) {
      this.sketch = sketch;
      this.speed = speed;
      this.axis = axis;
      this.x = x;
      this.y = y;
      this.z = z;
      this.rotation = rotation;
      this.col = col;
      this.size = size;
      this.hasMoon = false;
      this.hasGlow = false;
    }

    addMoon(mcol, maxis, mspeed, mx, my, mz, msize) {
      this.hasMoon = true;
      this.mcol = mcol;
      this.maxis = maxis;
      this.mspeed = mspeed;
      this.mx = mx;
      this.my = my;
      this.mz = mz;
      this.msize = msize;
    }

    createMoon() {
      if (this.hasMoon) {
        this.sketch.fill(this.mcol);
        this.sketch.rotate(this.sketch.millis() / this.mspeed, this.maxis);
        this.sketch.translate(this.mx, this.my, this.mz);
        this.sketch.box(this.msize);
      }
    }

    addGlow(gsize, gopacity, gfill) {
      this.hasGlow = true;
      this.gsize = gsize;
      this.gfill = gfill;
      this.gopacity = gopacity;
    }

    createGlow() {
      if (this.hasGlow) {
        this.sketch.fill(this.gfill);
        this.sketch.rotate(this.sketch.millis() / this.speed, this.axis);
        this.sketch.translate(this.x, this.y, this.z);
        this.sketch.rotateY(this.sketch.millis() / this.rotation);
      }
    }

    createPlanet() {
      this.sketch.push();
      this.sketch.noStroke();
      this.sketch.rotate(this.sketch.millis() / this.speed, this.axis);
      this.sketch.translate(this.x, this.y, this.z);
      this.sketch.rotateY(this.sketch.millis() / this.rotation);
      this.sketch.fill(this.col);
      this.sketch.box(this.size);
      this.createMoon();
      this.sketch.pop();
    }
  }

  // Resize canvas if the window size changes
  sketch.windowResized = function() {
    const canvasDiv = document.getElementById('box5');
    sketch.resizeCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
  };

});
