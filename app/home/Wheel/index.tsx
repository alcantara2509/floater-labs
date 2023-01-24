'use client';

import { useState } from 'react';

function Wheel() {
  const [angle, setAngle] = useState(0);

  return (
    <div className="p-20">
      <div style={{
        transform: `rotate(${angle}deg)`, position: 'fixed', transition: 'transform 1s',
      }}
      >
        rodinha legal
      </div>
      <button type="button" className="mt-20" onClick={() => setAngle(angle - 72)}>-</button>
      <button type="button" className="mt-20 ml-6" onClick={() => setAngle(angle + 72)}>+</button>
    </div>
  );
}

export default Wheel;
