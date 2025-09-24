import React from 'react';
import './Wolverine.css';

export function Wolverine() {
  return (
    <div className="wolverine-wrapper">
      <div className="wolverine-container">
        {/* Phase 1: Wolf 1 */}
        <div className="wolverine-phase-1">
          <img src="/Images/wolf1.png" alt="Wolverine Phase 1" />
        </div>
        
        {/* Phase 2: Wolf 2 */}
        <div className="wolverine-phase-2">
          <img src="/Images/Wolf2.png" alt="Wolverine Phase 2" />
        </div>

        {/* Phase 3: Wolf 3 */}
        <div className="wolverine-phase-3">
          <img src="/Images/Wolf3.png" alt="Wolverine Phase 3" />
        </div>

        {/* Glow Effect */}
        <div className="wolverine-glow">
          <div className="glow-effect"></div>
        </div>
      </div>
      <div className="wolverine-shadow"></div>
    </div>
  );
}
