import React, { useState, useEffect } from 'react';
import './Wolverine.css';

interface WolverineProps {
  gameStarted: boolean;
  onHit: (damage?: number) => void;
  onSpecialAttack: () => void;
  specialAttack: boolean;
}

export function Wolverine({ gameStarted, onHit, onSpecialAttack, specialAttack }: WolverineProps) {
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
        <div 
          className={`wolverine-phase-3 ${gameStarted ? 'game-active' : ''} ${isAttacking ? 'attacking' : ''} ${specialAttack ? 'special-attack' : ''}`}
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
          <img src="/Images/Wolf3.png" alt="Wolverine Phase 3" />
          {gameStarted && (
            <div className="attack-hint">
              Clic: Ataque | Doble clic: Especial
            </div>
          )}
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
