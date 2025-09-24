import React from 'react';
import './SpiderMan.css';

export function SpiderMan() {
  return (
    <div className="spiderman-wrapper">
      <div className="spiderman-container">
        {/* Phase 1: Spider-Man pose 1 */}
        <div className="spiderman-phase-1">
          <img src="/Images/spider2.png" alt="Spider-Man Phase 1" />
        </div>

        {/* Phase 2: Spider-Man pose 2 */}
        <div className="spiderman-phase-2">
          <img src="/Images/spider3.png" alt="Spider-Man Phase 2" />
        </div>

        {/* Phase 3: Spider-Man pose 3 */}
        <div className="spiderman-phase-3">
          <img src="/Images/Spider4.png" alt="Spider-Man Phase 3" />
        </div>

        {/* Phase 4: Spider-Man pose 4 */}
        <div className="spiderman-phase-4">
          <img src="/Images/Spider5.png" alt="Spider-Man Phase 4" />
        </div>

        {/* Glow Effect */}
        <div className="spiderman-glow">
          <div className="glow-effect"></div>
        </div>
      </div>
      <div className="spiderman-shadow"></div>
    </div>
  );
}
