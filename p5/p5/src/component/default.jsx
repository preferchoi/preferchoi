import { useRef, useEffect } from "react";
import p5 from "p5";

function Rain() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {

      p.setup = () => {

      }

      p.draw = () => {

      }
    };

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove();
    };  
  }, []);

  return <div ref={sketchRef}></div>;
}

export default Rain;
