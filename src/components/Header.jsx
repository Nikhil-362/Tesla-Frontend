import React from 'react';
import styled from "styled-components"
import { Fade } from "react-awesome-reveal";
import { useState } from 'react';

function Header() {

    const[close, setClose] = useState(false);

  return (
    <Fade cascade>
    <Container>

       <TeslaLogo>
      <a> <img  src='./images/logo.svg'/> </a>
      </TeslaLogo> 
     <Menu>

        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
      <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      <a href='#'>Solar Roof</a>
        <a href='#'>Solar Panels</a>

     </Menu>
     
     <RightMenu>
         <p><a href='#'>Shop</a></p>
          <p><a href='#'>Account</a></p>
          <p><a  onClick={()=>setClose(true)}>Menu</a></p>
          
     </RightMenu>
        
     <button id='home' onClick={()=>setClose(true)}>Menu</button>
   
  <Bmenu show={close} >
     <Close > <img src='./images/close.svg' onClick={()=>setClose(false)} /></Close>
     
     <Mob show={close} >
     <li><a href=""> Model S</a></li>
     <li><a href="">Model 3</a></li>
     <li><a href=""> Model x</a></li>
     <li><a href=""> Model y</a></li>
     <li><a href=""> Solar Roof</a></li>
     <li><a href=""> Solar Panels</a></li>

     </Mob>
     
     <li><a href=""> Existing Inventory</a></li>
     <li><a href=""> Used Inventory</a></li>
     <li><a href=""> Trade-In</a></li>
     <li><a href=""> Demo Drive</a></li>
     <li><a href=""> Insurance</a></li>
     <li><a href=""> Powerwall</a></li>
     <li><a href=""> Commercial Energy</a></li>
     <li><a href=""> Utilities</a></li>
     <li><a href=""> Charging</a></li>
     <li><a href=""> Find Us</a></li>
     <li><a href=""> Support</a></li>
     <li><a href=""> Investor Relations</a></li>
     <li><a href="">Shop </a></li>
     <li><a href="">Account </a></li>

     <li><a href="">More  </a></li>



     <D><img src='./images/globe.svg'/><a href=""> India</a></D>
  </Bmenu>
    </Container>
     </Fade>

    
  ); 
}

export default Header;

const Container = styled.div`
    align-items: center;
    justify-content: space-between;
    height: 60px;
    position: fixed;
    padding: 0 20px;
    display: flex;
    top: 0;
    left: 0;
    right: 0;

    #home{
      color: black;
      background-color: transparent;
      border-radius: 10px;
      width: 80px;
      height: 35px;
      text-align: center;
      border-color: transparent;
      font-weight: 600;
      font-size: medium;
      padding: 1px;
      display: block;
      visibility: visible;
      display: none;
    }

    button{
      color: black;
      background-color: transparent;
      border-radius: 10px;
      width: 80px;
      height: 35px;
      text-align: center;
      border-color: transparent;
      font-weight: 600;
      font-size: medium;
      padding: 1px;
      display: block;
      visibility: visible;
    }

    


    @media (max-width:1200px) {

      #home{
      color: black;
      background-color: #ffffff23;
      border-radius: 10px;
      width: 80px;
      height: 35px;
      text-align: center;
      border-color: transparent;
      font-weight: 600;
      font-size: medium;
      padding: 1px;
      display: block;
      visibility: visible;

      }
}

`

const TeslaLogo = styled.div`
padding-left: 15px;
img{
    width: 120px;
    height: 14px;

}
`


const Menu = styled.div`
    display: flex;

    a{
      padding: 10px;
      flex-wrap: nowrap;
    }

    a:hover{
            background-color: #9ca4ac42;
            text-decoration-style: wavy;
            padding: 10px;
            border-radius: 11px;
           transition:  color 1s ease-in;
    }
    
      @media (max-width:1200px) {
        display: none;
            }
    

`
const RightMenu = styled.div`
 display: flex;
 text-align: center;
 align-items: center;

    a{
          font-weight: 600;
          padding: 10px;
          flex-wrap: nowrap;
        }

        @media (max-width:1200px) {
        display: none;
            }

`

const Bmenu = styled.div`
    position:fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    font-size: 15px;
    width: 280px;
    padding:20px ;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transform: ${props => props.show? "translateY(0)" :"translateX(100%)"  };
    transition: transform 0.5s ease-in;


    li{
      padding: 12px 30px;
      font-weight: 600;
    }
    
    img{
      width: 20px;
    }

    a:hover{
            background-color: #9ca4ac24;
            text-decoration-style: wavy;
            padding: 10px;
            border-radius: 13px;
           transition:  color 1s ease-in;
    }

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
    
`



const Close = styled.div` 
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
`

const D = styled.div`
  display: flex;
  font-weight: 600;
  padding: 12px 40px;

  a{
    padding: 0 20px;
  }

`

const Mob = styled.div`
    display: none;

   
	

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
    }
`