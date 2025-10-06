import React from 'react';
import './Galactus.css';

interface GalactusProps {
  gameStarted: boolean;
  hits: number;
  health: number;
  combo: number;
}

export function Galactus({ gameStarted, hits, health, combo }: GalactusProps) {
  return (
    <div className="galactus-wrapper">
      <div className="galactus-container">
        <div className={`galactus-phase-1 ${gameStarted ? 'game-active' : ''} ${health <= 0 ? 'defeated' : ''} ${combo > 3 ? 'combo-hit' : ''}`}>
          <img src="/Images/galactus.png" alt="Galactus" />
          {gameStarted && health > 0 && (
            <div className="hit-indicator">
              ¡Haz clic para golpear!
            </div>
          )}
          {health <= 0 && (
            <div className="defeat-message">
              💀 Derrotado 💀
            </div>
          )}
          {combo > 3 && (
            <div className="combo-effect">
              COMBO x{combo}!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
