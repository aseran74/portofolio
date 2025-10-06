import React, { useState, useEffect } from 'react';
import './Superman.css';

interface SupermanProps {
  gameStarted: boolean;
  onHit: (damage?: number) => void;
  onSpecialAttack: () => void;
  specialAttack: boolean;
}

export function Superman({ gameStarted, onHit, onSpecialAttack, specialAttack }: SupermanProps) {
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
        <div 
          className={`superman-phase-4 ${gameStarted ? 'game-active' : ''} ${isAttacking ? 'attacking' : ''} ${specialAttack ? 'special-attack' : ''}`}
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
          <img src="/Images/4super.png" alt="Superman Phase 4" />
          {gameStarted && (
            <div className="attack-hint">
              Clic: Ataque | Doble clic: Especial
            </div>
          )}
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
