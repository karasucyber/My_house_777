import React from "react-dom";
import styled from "styled-components";



const Section = styled.div`
  height: 50vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  z-index: 30;
  animation: animate 3s infinite ease alternate;


@keyframes animate {
  to {
    transform: translateY(15px);
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
  animation: Button 3s infinite ease alternate;


  @keyframes Button {
    to {
      transform: translateX(50px);
    }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  z-index: -0;
  animation: Button 3s infinite ease alternate;


  @keyframes Button {
    to {
      transform: translateX(50px);
    }
`;

const TextArea = styled.textarea`
  padding: 25px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  animation: Button 3s infinite ease alternate;


  @keyframes Button {
    to {
      transform: translateX(50px);
    }
`;

const Button = styled.button`
 width: 150px;
  background-color: blue;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  animation: Button 3s infinite ease alternate;


  @keyframes Button {
    to {
      transform: translateX(50px);
    }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;



 


const Contact = () => {
 return(
    <Section>
    <Container>
      <Left>
        <Form>
          <Title> Contato </Title>
          <Form  >
            <Input placeholder="Nome" />
            <Input placeholder="Email" />
            <TextArea placeholder="Olá..." />
          </Form>
          <Button> enviar </Button>
        </Form>
      </Left>
      <Right>
      </Right>
    </Container>
  </Section>
 )

};

export default Contact;






