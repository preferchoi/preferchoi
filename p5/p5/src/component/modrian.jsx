import { useRef, useEffect } from "react";
import p5 from "p5";

function Mondrian() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(400, 400);
        p.background(0);
      };

      p.draw = () => {
        p.rectMode(p.CORNERS);
        p.fill(p.random(0, 255), p.random(0, 255), p.random(0, 255), 40);
        p.rect(p.random(0, 400), p.random(0, 400), p.random(0, 400), p.random(0, 400));
      };
    };
    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove();
    };  
  }, []);

  return <div ref={sketchRef}></div>;
}

export default Mondrian;
