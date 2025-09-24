import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  background: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  
  .superheroes-content {
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    
    h2 {
      font-size: 3rem;
      color: #fff;
      margin-bottom: 3rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
    }
    
    .superheroes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
      margin-top: 2rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
    
    .superhero-card {
      background: #212121;
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 2rem;
      border: 2px solid #333;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
      }
      
      h3 {
        font-size: 1.8rem;
        color: #fff;
        margin-bottom: 1.5rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      }
      
      .superhero-animation {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 300px;
        position: relative;
        overflow: hidden;
        
        /* Estilos para que las animaciones se vean bien */
        .wrapper,
        .hulk-wrapper,
        .superman-wrapper {
          transform: scale(0.8);
        }
        
        .placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          border: 2px dashed rgba(255, 255, 255, 0.3);
          
          p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.2rem;
            font-style: italic;
          }
        }
      }
    }
  }
`;
