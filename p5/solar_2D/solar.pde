Planet sun;

void setup() {
  size(600, 600);
  sun = new Planet(50, 0, 0);
  sun.spawnMoons(5, 1);
}

void draw() {
  background(0);
  translate(width/2, height/2);
  sun.show();
  sun.orbit();
  
}
