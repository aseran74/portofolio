import React from 'react';
import { SpiderMan } from '../SpiderMan/SpiderMan';
import { Hulk } from '../Hulk/Hulk';
import { Superman } from '../Superman/Superman';
import { Container } from './styles';

export function Superheroes() {
  return (
    <Container id="superheroes">
      <div className="superheroes-content">
        <h2>Superhéroes</h2>
        <div className="superheroes-grid">
          <div className="superhero-card">
            <h3>Spider-Man</h3>
            <div className="superhero-animation">
              <SpiderMan />
            </div>
          </div>
          
          <div className="superhero-card">
            <h3>Hulk</h3>
            <div className="superhero-animation">
              <Hulk />
            </div>
          </div>
          
          <div className="superhero-card">
            <h3>Superman</h3>
            <div className="superhero-animation">
              <Superman />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
