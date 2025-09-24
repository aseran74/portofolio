import React from 'react';
import './Hulk.css';

export function Hulk() {
  return (
    <div className="hulk-wrapper">
      <div className="hulk-container">
        {/* Phase 1: Iron Man starting to change */}
        <div className="hulk-phase-1">
          <img src="/Images/Transición_a_Hulk_-_Fase_1_1-removebg-preview.png" alt="Hulk Phase 1" />
        </div>
        
        {/* Phase 2: More Hulk-like */}
        <div className="hulk-phase-2">
          <img src="/Images/Transición_a_Hulk_-_Fase_2_1-removebg-preview.png" alt="Hulk Phase 2" />
        </div>

        {/* Phase 3: Even more Hulk-like */}
        <div className="hulk-phase-3">
          <img src="/Images/Transición_a_Hulk_-_Fase_3_1-removebg-preview.png" alt="Hulk Phase 3" />
        </div>

        {/* Phase 4: Full Hulk */}
        <div className="hulk-phase-4">
          <img src="/Images/Transición_a_Hulk_-_Fase_4_1-removebg-preview.png" alt="Hulk Phase 4" />
        </div>

        {/* Glow Effect */}
        <div className="hulk-glow">
          <div className="glow-effect"></div>
        </div>
      </div>
      <div className="hulk-shadow"></div>
    </div>
  );
}
