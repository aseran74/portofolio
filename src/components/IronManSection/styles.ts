import styled from "styled-components";

export const Container = styled.section`
  display: none;
  padding: 2rem;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  .iron-man-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    position: relative;
  }

  /* Solo visible en móvil */
  @media (max-width: 960px) {
    display: flex;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 150px;
    
    .iron-man-wrapper {
      height: 150px;
    }
  }
`;
