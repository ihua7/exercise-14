// spiralVisualization.js
export function setupCanvas() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
  }
  
  export function drawSpiral() {
    background(0);
    orbitControl();
  
    for (let n = 0; n < 1300; n++) {
      let angle = n * 137.5; // Change this to 137 for the alternate spiral pattern
  
      // Calculate the initial position
      let radius = n * 0.6; // Radius of each sphere from the center
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
  
      // Add vortex rotation by modifying x and y over time
      let rotatedX = x * cos(millis() * 0.005) - y * sin(millis() * 0.005);
      let rotatedY = x * sin(millis() * 0.005) + y * cos(millis() * 0.005);
  
      // Oscillate z position over time
      let z = sin(millis() * 0.09 + n * 0.8) * (n * 0.7);
  
      fill(n % 255, 180, 255);
      noStroke();
      push();
      translate(rotatedX, rotatedY, z); // Apply translation with vortex rotation and oscillating z
      rotateY(millis() * 0.05); // Rotate each sphere slightly for added effect
      sphere(1, 2);
      pop();
    }
  }
  