function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    debugMode();
  }
  
  function draw() {
    background('gray');
    orbitControl();
    
    push();
    fill(color(255,255,100,255));
    rotateX(millis() / 10000);
    rotateY(millis() / 10000);
    noStroke();
    box(55);
    pop();
    
    push();
    fill(color(255,150,0,100));
    rotateX(millis() / 10000);
    rotateY(millis() / 10000);
    noStroke();
    box(70);
    pop();

    p1 = new Planet(1000,[0,200,30],100,0,100,1000,'white',40);
    p1.addMoon('blue',[30,0,0],500,70,0,0,10);
    p1.createPlanet();

    earth = new Planet(1000,[0,200,40],200,0,0,10000,color(0,150,255),20);
    earth.addMoon('white',[0,10,1],500,20,0,0,5);
    earth.createPlanet();
    
  }
  
  class Planet{
    constructor(speed,axis,x,y,z,rotation,col,size){
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

    addMoon(mcol, maxis, mspeed,mx,my,mz,msize){
      this.hasMoon = true;
      this.mcol = mcol;
      this.maxis = maxis;
      this.mspeed = mspeed;
      this.mx = mx;
      this.my=my;
      this.mz=mz;
      this.msize=msize;
    }
    createMoon(){
      if(this.hasMoon){
        fill(this.mcol)
        rotate(millis()/this.mspeed,this.maxis);
        translate(this.mx,this.my,this.mz);
        box(this.msize);
        }
    }
    addGlow(gsize, gopacity, gfill){
      this.hasGlow = true;
      this.gsize = gsize;
      this.gfill = gfill;
      this.gopacity = gopacity;
    }
    createGlow(){
      if(this.hasGlow){
        fill(this.gfill);
        
        rotate(millis()/this.speed,this.axis);
        translate(this.x,this.y,this.z);
        rotateY(millis() / this.rotation);
        
      }
    }

    createPlanet(){
      push();
      noStroke();
      rotate(millis()/this.speed,this.axis);
      translate(this.x,this.y,this.z);
      rotateY(millis() / this.rotation);
      fill(this.col);
      box(this.size);
      this.createMoon();
      pop();
    }
    
  }