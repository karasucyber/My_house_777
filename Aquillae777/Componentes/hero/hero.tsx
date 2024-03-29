
import NavBar from "../navbar/Navbar";
import Who from "../who/who";
import styled from "styled-components";
import {GoOctoface} from "react-icons/go";
import IMG from "../../../Img/Meu projeto.png"
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere, } from "@react-three/drei";
import { RingGeometry } from "three";
import {NavLink} from "react-router-dom"
import  Ubuntu from "../Obuntu/interface"
import Obuntu from "../Obuntu/interface";

const Section = styled.div`
height: 200vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 780px) {
  height: 200vh;
}
`;

const Container = styled.div`
height: 100%;   
scroll-snap-align: center;
width: 1400px;
display: flex;


justify-content: space-between;

@media only screen and (max-width: 780px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media only screen and (max-width: 780px) {
  flex: 1;
  align-items: center;

}
`;

const Right = styled.div`
flex: 3;
position: relative;
@media only screen and (max-width: 768px) {
  flex: 1;
  width: 80%;
  height: 80%;
}
`;

const Title = styled.h1`
font-size: 74px
 @media only screen and (max-width: 768px){
  text-aling: center;
 }
 animation: title 5s infinite ease alternate ;
@keyframes title {
  to {
    transform: translateY(30px);
  }
}
`;

const Whatwedo = styled.div`
   display: flex;
   aling-items: center;
   gap: 10px
   

`;

const SUbtitle = styled.h2`
font-size: 20px;
color: white;
animation: SUbtitle 5s infinite ease alternate ;
@keyframes SUbtitle  {
  to {
    transform: translateY(40px);
  }
}

`;


const Desc = styled.p`
 font-size: 20px;
 @media only screen(max-witdh: 768px){
  padding: 20px;
  text-aling: center;

`;

const Button = styled.button`
background-color: black;
color: white;
width: 120px;
height: 30px;
border-radius: 10px;
box-shadow: 4px 3px lightblue;
font-size: 20px;
animation: button 5s infinite ease alternate ;
@keyframes button {
  to {
    transform: translateY(50px);
  }
}

`;

const Line = styled.img`
height: 5px;

`;

const Img = styled.img`
width: 780px;
height: 780px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;
pointer-events: none;

@media only screen and (max-width: 768px) {
 max-width: 100%;
 max-height: 100%;
 display: block ;
}



`;


const Container12 = styled.div`
border: ;
background: b;


`;




export const Hero = () => {
    return (

        <Section>
            <NavBar/>
            <Container>
              
              <Left> 
                <Container12>
                  <Obuntu></Obuntu>

                
              <Button><NavLink className={Button} to={"https://github.com/Aquillae777"} target="_blank">GitHub<GoOctoface/> </NavLink>
 </Button>


                </Container12>
              
              </Left>
              <Right> 
              <Canvas>
                
       
              <OrbitControls enableZoom={false} enableRotate={false}  />
              <ambientLight intensity={1} />
              <Sphere args={[0.6, 10, 100]} scale={2}>
                <MeshDistortMaterial color="black" speed={10} reflectivity={1} /> 
                 <ringGeometry args={[0.5, 0.9 , 100]}></ringGeometry>  </Sphere>          
          </Canvas>
          
          <Img src={IMG} />

              </Right>
            </Container>
        </Section>


    )
}
export default Hero;