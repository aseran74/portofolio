import React, { useState, useEffect } from 'react';
import './Hulk.css';

interface HulkProps {
  gameStarted: boolean;
  onHit: (damage?: number) => void;
  onSpecialAttack: () => void;
  specialAttack: boolean;
}

export function Hulk({ gameStarted, onHit, onSpecialAttack, specialAttack }: HulkProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAttacking, setIsAttacking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gameStarted) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    if (gameStarted) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [gameStarted]);

  const handleAttack = () => {
    if (gameStarted && !isAttacking) {
      setIsAttacking(true);
      onHit(10);
      setTimeout(() => setIsAttacking(false), 500);
    }
  };

  const handleSpecialAttack = () => {
    if (gameStarted && !isAttacking) {
      setIsAttacking(true);
      onSpecialAttack();
      setTimeout(() => setIsAttacking(false), 1000);
    }
  };
  return (
    <div className="hulk-wrapper">
      <div className="hulk-container">
        {/* Phase 1: Hulk starting transformation */}
        <div className="hulk-phase-1">
          <img src="/Images/hulk1.png" alt="Hulk Phase 1" />
        </div>
        
        {/* Phase 2: More Hulk-like */}
        <div className="hulk-phase-2">
          <img src="/Images/hulk2.png" alt="Hulk Phase 2" />
        </div>

        {/* Phase 3: Even more Hulk-like */}
        <div className="hulk-phase-3">
          <img src="/Images/hulk3.png" alt="Hulk Phase 3" />
        </div>

        {/* Phase 4: Full Hulk */}
        <div 
          className={`hulk-phase-4 ${gameStarted ? 'game-active' : ''} ${isAttacking ? 'attacking' : ''} ${specialAttack ? 'special-attack' : ''}`}
          style={gameStarted ? {
            position: 'fixed',
            left: mousePosition.x - 25,
            top: mousePosition.y - 25,
            zIndex: 1000,
            pointerEvents: 'none'
          } : {}}
          onClick={handleAttack}
          onDoubleClick={handleSpecialAttack}
        >
          <img src="/Images/hulk4.png" alt="Hulk Phase 4" />
          {gameStarted && (
            <div className="attack-hint">
              Clic: Ataque | Doble clic: Especial
            </div>
          )}
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
