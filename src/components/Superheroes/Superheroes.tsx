import React from 'react';
import { SpiderMan } from '../SpiderMan/SpiderMan';
import { Hulk } from '../Hulk/Hulk';
import { Superman } from '../Superman/Superman';
import { Wolverine } from '../Wolverine/Wolverine';
import { Container } from './styles';

export function Superheroes() {
  return (
    <Container id="supertecnologia">
      <div className="superheroes-content">
        <h2>Supertecnología</h2>
        <div className="superheroes-grid">
          <div className="superhero-card">
            <h3>⚛️ React</h3>
            <div className="superhero-animation">
              <SpiderMan />
            </div>
          </div>
          
          <div className="superhero-card">
            <h3>🍃 MongoDB</h3>
            <div className="superhero-animation">
              <Hulk />
            </div>
          </div>
          
          <div className="superhero-card">
            <h3>🅰️ Angular</h3>
            <div className="superhero-animation">
              <Superman />
            </div>
          </div>
          
          <div className="superhero-card">
            <h3>☁️ AWS</h3>
            <div className="superhero-animation">
              <Wolverine />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
