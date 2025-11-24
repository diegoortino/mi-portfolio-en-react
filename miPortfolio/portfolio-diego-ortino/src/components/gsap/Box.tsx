import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import './Box.css';

const Box = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(".box", { 
        rotation: 360,
        x: '600px',
        xPercent: -100,
        // special properties
        duration: 2, // how long the animation lasts
        repeat: 2, // the number of repeats - this will play 3 times
        yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
        });
  }, []);

  return <div ref={boxRef} className="box" />;
};

export default Box;