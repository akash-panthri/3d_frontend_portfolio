import React from "react";


const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
  });

  
function FireFliesBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      FireFliesBackground
    </div>
  );
}

export default FireFliesBackground;
