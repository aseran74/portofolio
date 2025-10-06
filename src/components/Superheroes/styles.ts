import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  background: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  transition: background 0.5s ease;
  
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
    
    .game-controls {
      margin-bottom: 2rem;
      
      .start-game-btn {
        background: linear-gradient(45deg, #ff6b35, #f7931e);
        color: white;
        border: none;
        padding: 15px 30px;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }
      }
    }
    
    .game-start {
      margin-bottom: 2rem;
      text-align: center;
      
      h3 {
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      
      p {
        font-size: 1.2rem;
        color: #ff6b35;
        margin-bottom: 2rem;
      }
      
      .start-btn {
        background: linear-gradient(45deg, #ff6b35, #f7931e);
        color: white;
        border: none;
        padding: 15px 30px;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }
      }
    }
    
    .superheroes-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
      
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
      
      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
      
      .superhero-card {
        background: #1a1a1a;
        border: 2px solid #333;
        border-radius: 15px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
        
        &:hover {
          border-color: #ff6b35;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
        }
        
        h3 {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .superhero-animation {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
      }
    }
    
    .game-end {
      text-align: center;
      margin-bottom: 2rem;
      
      .victory, .defeat {
        margin-bottom: 2rem;
        
        h3 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        p {
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 1rem;
        }
        
        .accuracy {
          font-size: 1.1rem;
          color: #00ff00;
          font-weight: bold;
          background: rgba(0, 255, 0, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 10px;
          border: 1px solid #00ff00;
          display: inline-block;
        }
      }
      
      .victory h3 {
        color: #00ff00;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      
      .defeat h3 {
        color: #ff0000;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      
      .reset-btn {
        background: linear-gradient(45deg, #ff6b35, #f7931e);
        color: white;
        border: none;
        padding: 15px 30px;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        transition: all 0.3s ease;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }
      }
    }
    
    @keyframes projectileMove {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    
    .superheroes-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      margin-top: 2rem;
      
      @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
    
    .superhero-card {
      background: #1a1a1a;
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
    
    .villain-section {
      margin-top: 4rem;
      padding: 2rem;
      background: #0d0d0d;
      border-radius: 20px;
      border: 2px solid #ff6b35;
      box-shadow: 0 8px 32px rgba(255, 107, 53, 0.2);
      
      h3 {
        font-size: 2.5rem;
        color: #ff6b35;
        margin-bottom: 2rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        text-align: center;
        
        @media (max-width: 768px) {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }
      }
      
      .villain-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 250px;
        background: #1a1a1a;
        border-radius: 15px;
        border: 2px solid #333;
        overflow: hidden;
      }
    }
  }
`;
