import styled from "styled-components";

export const Container = styled.section`
  display: none;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 300px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .iron-man-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    height: 250px;
    position: relative;
  }

  /* Solo visible en móvil */
  @media (max-width: 960px) {
    display: flex;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
    min-height: 250px;
    
    .iron-man-wrapper {
      height: 200px;
      max-width: 300px;
    }
  }
`;
