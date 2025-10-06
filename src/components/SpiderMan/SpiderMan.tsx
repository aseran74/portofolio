import React, { useState, useEffect } from 'react';
import './SpiderMan.css';

interface SpiderManProps {
  gameStarted: boolean;
  onHit: (damage?: number) => void;
  onSpecialAttack: () => void;
  specialAttack: boolean;
}

export function SpiderMan({ gameStarted, onHit, onSpecialAttack, specialAttack }: SpiderManProps) {
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
        <div 
          className={`spiderman-phase-4 ${gameStarted ? 'game-active' : ''} ${isAttacking ? 'attacking' : ''} ${specialAttack ? 'special-attack' : ''}`}
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
          <img src="/Images/Spider5.png" alt="Spider-Man Phase 4" />
          {gameStarted && (
            <div className="attack-hint">
              Clic: Ataque | Doble clic: Especial
            </div>
          )}
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
