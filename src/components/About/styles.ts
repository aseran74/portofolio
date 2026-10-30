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

  h4{
    margin-top: 1rem;
    font-size: 1.8rem;
    color: #fff;
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .lead {
    font-size: 2rem;
    font-weight: 600;
  }

  .sdd-block,
  .stack-block {
    margin-top: 2.4rem;
  }

  .sdd-steps {
    display: grid;
    gap: 1.4rem;
    margin-top: 1.6rem;
  }

  .sdd-step {
    border-left: 3px solid var(--green);
    padding-left: 1.2rem;

    h4 {
      margin-top: 0;
      color: var(--green);
      font-size: 1.7rem;
    }

    p {
      margin-top: 0.4rem;
      font-size: 1.6rem;
      opacity: 0.92;
    }
  }

  .stack-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
    margin-top: 1.4rem;
  }

  .stack-column {
    .stack-label {
      margin-top: 0.2rem;
      font-size: 1.4rem;
      opacity: 0.75;
    }
  }

  .stack-tags {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin: 1rem 0 0;
    padding: 0;

    li {
      border: 1px solid var(--green);
      color: var(--green);
      border-radius: 999px;
      padding: 0.45rem 1rem;
      font-size: 1.3rem;
      font-weight: 600;
    }

    &.growing li {
      border-color: rgba(255, 255, 255, 0.35);
      color: #fff;
    }
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
        display: none;
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }

    .sdd-step {
      border-left: none;
      border-top: 3px solid var(--green);
      padding-left: 0;
      padding-top: 1rem;
    }

    .stack-columns {
      grid-template-columns: 1fr;
    }

    .stack-tags {
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
        display: none;
      }
    }
  }


`