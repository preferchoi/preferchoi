import { useRef, useEffect } from "react";
import p5 from "p5";

function Snake() {
  const sketchRef = useRef();

  useEffect(() => {
    let s;
    let scl = 20;
    let food;

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(600, 600);
        s = new Snake();
        window.addEventListener("keydown", keyPressed);
        p.frameRate(10)
        pickLocation();
      };

      p.draw = () => {
        p.background(51);
        s.update();
        s.show();

        if (s.eat(food)) {
          pickLocation()
        }

        p.fill(255,0,100);
        p.rect(food.x, food.y, scl, scl)
      };

      function pickLocation() {
        const cols = p.floor(p.width/scl)
        const rows = p.floor(p.height/scl)
        food = p.createVector(p.floor(p.random(cols)), p.floor(p.random(rows)));
        food.mult(scl);
      }

      function keyPressed(event) {
        if (event.keyCode === p.UP_ARROW) {
          s.dir(0, -1);
        } else if (event.keyCode === p.DOWN_ARROW) {
          s.dir(0, 1);
        } else if (event.keyCode === p.RIGHT_ARROW) {
          s.dir(1, 0);
        } else if (event.keyCode === p.LEFT_ARROW) {
          s.dir(-1, 0);
        }
      }

      class Snake {
        constructor() {
          this.x = 0;
          this.y = 0;
          this.xspeed = 1;
          this.yspeed = 0;
          this.total = 1;
          this.tail = [];
        }

        dir = (x, y) => {
          this.xspeed = x;
          this.yspeed = y;
        };

        eat = (pos) => {
          const d = p.dist(this.x, this.y, pos.x, pos.y)
          this.total += 1;
          if (d < 1) {
            return true; 
          } else {
            return false;
          }
        }

        update = () => {
          for (let i = 0; i < this.total-1; i++) {
            this.tail[i] = this.tail[i + 1]
          }
          this.tail[this.total-1] = p.createVector(this.x, this.y)
          this.x = this.x + this.xspeed * scl;
          this.y = this.y + this.yspeed * scl;

          this.x = p.constrain(this.x, 0, p.width - scl)
          this.y = p.constrain(this.y, 0, p.height - scl)
        };

        show = () => {
          p.fill(255)
          // for (let i = 0; i < this.total; i++) {
          //   p.rect(this.tail[i].x, this.tail[i].y, scl, scl)
            
          // }
          p.fill(255);
          p.rect(this.x, this.y, scl, scl);
        };
      }
    };

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      window.removeEventListener("keydown", sketch.keyPressed);
      myP5.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
}

export default Snake;
