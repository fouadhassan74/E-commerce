import React from "react";
import styled from "styled-components";
import "../Reigster/Register.scss";
const Wrapper = styled.div({
  width: "40%",
  padding: "20px",
  backgroundColor: "white",
});
const Title = styled.h1({
  fontSize: "24px",
  fontWeight: "300",
});
const Form = styled.form({
  display: "flex",
  flexWrap: "wrap",
});
const Input = styled.input({
  flex: "1",
  minWidth: "40%",
  margin: "20px 10px 0px 0px",
  padding: "10px",
});
const Agreement = styled.span({ fontSize: "20px", margin: "20px 0px" });
const Button = styled.button({
  width: "40%",
  border: "none",
  padding: "15px 20px",
  backgroundColor: "teal",
  cursor: "pointer",
  color: "white",
});
function Register() {
  return (
    <div className='RegisterContainer'>
      <Wrapper>
        <Title>Create An Acoount</Title>
        <Form>
          <Input placeholder='First Name' />
          <Input placeholder='Last Nmae' />
          <Input placeholder=' Username' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </div>
  );
}

export default Register;
