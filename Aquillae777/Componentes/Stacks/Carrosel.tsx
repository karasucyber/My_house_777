import React from "react";
import styled, { Keyframes, keyframes } from "styled-components";

const Section = styled.div`
height: 200vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 780px) {
  height: 200vh;
  display: flex;
  justify-content: space-between;
}

`
const Container = styled.div`
height: 150%;
scroll-snap-align: center;
width: 1400px;
display: block;


justify-content: space-between;

@media only screen and (max-width: 780px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;




const Key = keyframes`

  0% {
      transform: translate(0)
  }
  20% {
      transform: translate(-5px, 5px)
  }
  40% {
      transform: translate(-5px, -5px)
  }
  60% {
      transform: translate(5px, 5px)
  }
  80% {
      transform: translate(5px, -5px)
  }
  to {
      transform: translate(0)
  }
}`


const Button = styled.button`
cursor: pointer;
background: black;
text-transform: uppercase;
outline: transparent;
letter-spacing: 6px;
border: 0;
min-width: 10px;
height: 10px;
line-height: 5px;
transition:  background 0.100s;
transform: translate(-100%, 100%);

text-decoration: none;
color: #fff;

  &:before, &:after {
      display: block;
      content: 'Projects';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: .8;
  } &:after {
      color: #f0f;
      z-index: -2;
  } &:before {
      color: blue;
      z-index: -1;
  }
}
  {
  &:before {
      animation: ${Key} .10s cubic-bezier(.25, .46, .45, .94) both infinite
  }
  &:after {
      animation: ${Key} .10s cubic-bezier(.25, .46, .45, .94) reverse both infinite
  }
}`

const Title = styled.h3`
Font-size: 30px;
height: 200px;
width: 300px;

`


const List = styled.div`

`
const Img = styled.image`
`

const Ferramentas = styled.li`
Font-size: 20px;

`

const ContainerBox = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;



@media only screen and (max-width: 780px) {
  display: inline;
  height: auto;
  display: block;
   
  
}


`

const Box1 = styled.div`
padding: 5px;
margin: 10px;
width:50%;
height: 500px;
border-style: solid;
border-width: 5px;

box-shadow: rgba(240, 46, 170, 0.4) -5px 10px, rgba(240, 46, 170, 0.3) -15px 20px, rgba(240, 46, 170, 0.2) -20px 25px, rgba(240, 46, 170, 0.1) -25px 30px, rgba(240, 46, 170, 0.05) -30px 35px;


animation: box1 1s infinite ease alternate ;
@keyframes box1 {
  to {
    transform: translateY(70px);
  }
}

@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
  

 
}


`

const Box2 = styled.div`
padding: 5px;
margin: 10px;
width:50%;
height: 550px;
border-style: solid;
border-width: 5px;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;


animation: box2 1s infinite ease alternate ;
@keyframes box2 {
  to {
    transform: translateY(70px);
  }
}

@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
}
`



const Box3 = styled.div`
padding: 5px;
margin: 10px;
width:50%;
height: 600px;
border-style: solid;
border-width: 5px;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;

animation: box3 1s infinite ease alternate ;
@keyframes box3 {
  to {display: flex;
    justify-content: space-between;
    transform: translateY(70px);
  }
}
@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
}
`
const Box4 = styled.div`
padding: 5px;
margin: 10px;
height: 650px;
border-style: solid;
border-width: 5px;
width:50%;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;


animation: box4 1s infinite ease alternate ;
@keyframes box4 {
  to {
    transform: translateY(70px);
  }
}
@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
 
}
`

const Box5 = styled.div`
padding: 5px;
margin: 10px;
width:50%;
height: 500px;
border-style: solid;
border-width: 5px;

box-shadow: rgba(240, 46, 170, 0.4) -5px 10px, rgba(240, 46, 170, 0.3) -15px 20px, rgba(240, 46, 170, 0.2) -20px 25px, rgba(240, 46, 170, 0.1) -25px 30px, rgba(240, 46, 170, 0.05) -30px 35px;


animation: box1 1s infinite ease alternate ;
@keyframes box1 {
  to {
    transform: translateY(70px);
  }
}

@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
  

 
}


`

const Box6 = styled.div`
padding: 5px;
margin: 10px;
width:50%;
height: 550px;
border-style: solid;
border-width: 5px;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;


animation: box2 1s infinite ease alternate ;
@keyframes box2 {
  to {
    transform: translateY(70px);
  }
}

@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
}
`



const Box7 = styled.div`
padding: 5px;
margin: 10px;
width:50%;
height: 600px;
border-style: solid;
border-width: 5px;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;

animation: box3 1s infinite ease alternate ;
@keyframes box3 {
  to {display: flex;
    justify-content: space-between;
    transform: translateY(70px);
  }
}
@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
}
`
const Box8 = styled.div`
padding: 5px;
margin: 10px;
height: 650px;
border-style: solid;
border-width: 5px;
width:50%;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;


animation: box4 1s infinite ease alternate ;
@keyframes box4 {
  to {
    transform: translateY(70px);
  }
}
@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
 
}


`



const Carrosel = () => {
  return (
    <Section>
      <Container> 
    
        <ContainerBox>      
          <Box1>
            <Title> Java </Title>
            
            <Img> </Img>

            <List>
            
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
            </List>
            <Button> Projects</Button>
          </Box1>

          <Box2>
            <Title> Typescript </Title>
            <Img> </Img>
            <List>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              
              
            </List>
            <Button> Projects</Button>
          </Box2>


          <Box3>
            <Title> Typescript </Title>
            <Img> </Img>
            <List>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
            </List>
            <Button> Projects</Button>
          </Box3>


          <Box4>
            <Title> Assembly and C </Title>
            <Img> </Img>
            <List>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
            </List>
            <Button> Projects</Button>
          </Box4>

         </ContainerBox> 

         <ContainerBox>      
          <Box5>
            <Title> Java </Title>
            
            <Img> </Img>

            <List>
            
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
            </List>
            <Button> Projects</Button>
          </Box5>

          <Box6>
            <Title> Typescript </Title>
            <Img> </Img>
            <List>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              
              
            </List>
            <Button> Projects</Button>
          </Box6>


          <Box7>
            <Title> Typescript </Title>
            <Img> </Img>
            <List>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
            </List>
            <Button> Projects</Button>
          </Box7>


          <Box8>
            <Title> Assembly and C </Title>
            <Img> </Img>
            <List>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
              <Ferramentas> teste </Ferramentas>
            </List>
            <Button> Projects</Button>
          </Box8>

         </ContainerBox> 
        </Container>
    </Section>)
}
export default Carrosel;