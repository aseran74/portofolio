import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    
    .image-container {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.05);
      }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        filter: grayscale(0);
        transition: filter 0.5s;
      }
    }
    
    .yellow-circle {
      background: linear-gradient(135deg, #FFD700, #FFA500);
      box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
    }
    
    .purple-circle {
      background: linear-gradient(135deg, #8A2BE2, #9932CC);
      box-shadow: 0 8px 25px rgba(138, 43, 226, 0.3);
    }
    
    .iron-man-container {
      display: none;
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      gap: 1.5rem;
      
      .image-container {
        width: 150px;
        height: 150px;
      }
      
      .iron-man-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      max-width: 100%;
      gap: 1.5rem;
      
      .image-container {
        width: 180px;
        height: 180px;
      }
      
      .iron-man-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
      }
    }
  }

`