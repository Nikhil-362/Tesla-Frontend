import React from 'react';
import styled from 'styled-components'
import Section from './Section';

function Home(props) {
  return (
    <div>
        <Container>
            <Section
            title = "Model 3"
            description = "Leasing starting at $349/mo"
            bgimage= "model-3.jpg"
            lb="Custom Order"
            rb="Demo Drive" 
            />


            <Section
              title = "Model y"
              description = "Order Online for Touchless Delivery"
              bgimage= "model-y.jpg"
              lb="Custom Order"
              rb="Demo Drive" 
            />

            <Section
              title = "Model S"
              description = "Order Online for Touchless Delivery"
              bgimage= "model-s.jpg"
              lb="Custom Order"
              rb="Existing Inventory" 
            />

            <Section
              title = "Model X"
              description = "Schedule a Demo Drive"
              bgimage= "model-x.jpg"
              lb="Custom Order"
              rb="Existing Inventory" 
            />

            <Section
              title = "Solar Panels"
              description = "Lowest Cost Solar Panels in America"
              bgimage= "solar-panel.jpg"
              lb="Custom Order"
              rb="Learn More" 
            />

            <Section
              title = "Solar Roof"
              description = "Produce Clean Energy From your Roof"
              bgimage= "solar-roof.jpg"
              lb="Custom Order"
              rb="Learn More" 
            />

            <Section
              title = "Accessories"
              bgimage= "accessories.jpg"
              lb="Shop Now"
            />

        </Container>
      
    </div>
  );
}


export default Home;

const Container = styled.div`
    height: 100vh;
`