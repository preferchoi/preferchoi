import { useRef, useEffect } from "react";
import p5 from "p5";

function Rain() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let drops = []; // 물방울 배열 초기화

      p.setup = () => {
        p.createCanvas(640, 360); // 캔버스 크기 설정
        for (let i = 0; i < 500; i++) {
          drops.push(new Drop()); // 500개의 물방울 객체 생성 후 배열에 추가
        }
      }

      p.draw = () => {
        p.background(230, 230, 250); // 배경색 설정
        for (let i = 0; i < drops.length; i++) {
          drops[i].fall(); // 물방울 떨어지는 애니메이션
          drops[i].show(); // 물방울 표시
        }
      }

      class Drop {
        constructor() {
          this.x = p.random(p.width); // 물방울의 x 위치 랜덤 설정
          this.y = p.random(-500, -50); // 물방울의 y 위치 랜덤 설정
          this.z = p.random(0, 20); // 물방울의 z 위치 랜덤 설정 (깊이)
          this.len = p.map(this.z, 0, 20, 10, 20); // z에 따라 물방울 길이 설정
          this.yspeed = p.map(this.z, 0, 20, 1, 20); // z에 따라 속도 설정
        }

        fall() {
          this.y = this.y + this.yspeed; // 물방울 떨어지는 속도 설정
          let grav = p.map(this.z, 0, 20, 0, 0.2); // 중력 설정
          this.yspeed = this.yspeed + grav;

          if (this.y > p.height) {
            this.y = p.random(-200, -100); // 물방울이 화면을 넘어가면 위치 재설정
            this.yspeed = p.map(this.z, 0, 20, 4, 10); // 속도 재설정
          }
        }

        show() {
          let thick = p.map(this.z, 0, 20, 1, 3); // z에 따라 물방울 두께 설정
          p.strokeWeight(thick);
          p.stroke(138, 43, 226); // 물방울 색 설정
          p.line(this.x, this.y, this.x, this.y + this.len); // 물방울 그리기
        }
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
