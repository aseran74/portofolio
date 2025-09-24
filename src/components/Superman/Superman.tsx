import React from 'react';
import './Superman.css';

export function Superman() {
  return (
    <div className="superman-wrapper">
      <div className="superman-container">
        {/* Phase 1: Clark Kent starting to change */}
        <div className="superman-phase-1">
          <img src="/Images/1super.png" alt="Superman Phase 1" />
        </div>
        
        {/* Phase 2: More Superman-like */}
        <div className="superman-phase-2">
          <img src="/Images/2super.png" alt="Superman Phase 2" />
        </div>

        {/* Phase 3: Even more Superman-like */}
        <div className="superman-phase-3">
          <img src="/Images/3super.png" alt="Superman Phase 3" />
        </div>

        {/* Phase 4: Full Superman, flies up */}
        <div className="superman-phase-4">
          <img src="/Images/4super.png" alt="Superman Phase 4" />
        </div>

        {/* Glow Effect */}
        <div className="superman-glow">
          <div className="glow-effect"></div>
        </div>
      </div>
      <div className="superman-shadow"></div>
    </div>
  );
}
