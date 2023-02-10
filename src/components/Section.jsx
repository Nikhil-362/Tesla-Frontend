import React from 'react';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";

function Section({title, description, bgimage, lb, rb}) {
  return (
    <Wrap bg={bgimage}>

        <Fade cascade duration="3000" >
       <Mid>
            <h1>{title}</h1>
            <p>{description}</p>
        </Mid>
        </Fade>
    <Buttons>

        <Fade cascade duration="1000"> 
          <ButtonGroup>

              <LeftButton>{lb}</LeftButton>
              {rb && <RightButton>{rb}</RightButton>}
  
          </ButtonGroup>
        </Fade>
  
          <DownArrow src="./images/down-arrow.svg"/>
      </Buttons>
    </Wrap>

      
  
  );
}

export default Section;

const Wrap = styled.div`
    text-align: center;
    width: 100vw;
    height: 100vh;

    background-image: url("./public/images/model-s.jpg");
    background-image: ${props =>
                                `url("./images/${props.bg}")`  };
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display:flex ;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`


const Mid = styled.div`
    padding-top: 15vh;
    text-align: center;
    font-weight: 300;


    h1{
        padding-bottom: 10px;
        font-size: 40px;
    }

`

const ButtonGroup = styled.div`
    display: flex;
    text-align: center;
    margin-bottom: 50px;
    font-family: "Rubik" , sans-serif;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`

const LeftButton = styled.div`
    background-color: #222428;
    padding: 11px;
    height: 40px;
    width: 250px;
    color: #ffffffd7;
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    opacity: 0.85;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`

const DownArrow = styled.img`
    height: 40px;
    margin-bottom: 10px;
    overflow-x: hidden;
    animation: bounce infinite 1.5s;

`

const Buttons = styled.div`

`
