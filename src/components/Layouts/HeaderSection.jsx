import React from "react";
import styled from "styled-components";
import CustomButton from "../Custom/CustomButton";

const Container = styled.section`

`;

const Wrapper = styled.div`

`;

const Logo = styled.section`

`;

const Image = styled.img`
  width: 5em;
`;

const HeaderSection = () => {
    return (
      <Container>
        <Wrapper>
          <Logo>
            <Image src="assets/images/logos/zephyr.png" alt="logo"/>
          </Logo>
          <CustomButton/>
        </Wrapper>
      </Container>
    );
  };


export default HeaderSection;