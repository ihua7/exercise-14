export function init3DScene(containerId, config = {}) {
    return new p5((sketch) => {
      sketch.setup = function() {
        // Retrieve canvas dimensions from the specified HTML element, if provided
        let canvasWidth, canvasHeight;
        if (config.canvasDiv) {
          canvasWidth = config.canvasDiv.offsetWidth;
          canvasHeight = config.canvasDiv.offsetHeight;
        } else {
          // Fallback to default full window size if no element is specified
          canvasWidth = config.width || sketch.windowWidth;
          canvasHeight = config.height || sketch.windowHeight;
        }
  
        const bgColor = config.background || 'gray';
        const frameRate = config.frameRate || 60;
  
        // Set up the canvas and other settings
        sketch.createCanvas(canvasWidth, canvasHeight, sketch.WEBGL);
        sketch.background(bgColor);
        sketch.frameRate(frameRate);
  
        if (config.debugMode) {
          sketch.debugMode();
        }
      };
  
      sketch.draw = function() {
        sketch.background(config.background || 'gray');
        sketch.orbitControl();
  
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
  
        let p1 = new Planet(sketch, 1000, [0, 200, 30], 100, 0, 100, 1000, 'white', 40);
        p1.addMoon('blue', [30, 0, 0], 500, 70, 0, 0, 10);
        p1.createPlanet();
  
        let earth = new Planet(sketch, 1000, [0, 200, 40], 200, 0, 0, 10000, sketch.color(0, 150, 255), 20);
        earth.addMoon('white', [0, 10, 1], 500, 20, 0, 0, 5);
        earth.createPlanet();
      };
  
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
    }, containerId);
  }
  