// src/components/gsap/Line.tsx
import React, { forwardRef } from "react";
import "./Line.css";

const Line = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    return <div ref={ref} className="line" {...props} />;
  }
);

export default Line;
