import React from 'react';
import { IronMan } from '../IronMan/IronMan';
import { Container } from './styles';

export function IronManSection() {
  return (
    <Container>
      <div className="iron-man-wrapper">
        <IronMan />
      </div>
    </Container>
  );
}
