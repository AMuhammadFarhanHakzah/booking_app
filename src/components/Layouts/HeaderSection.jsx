import React from "react";
import styled from "styled-components";
import CustomButton from "../Custom/CustomButton";
import { Person } from "@material-ui/icons";

const Container = styled.section``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 10rem;
`;

const Logo = styled.section``;

const Image = styled.img`
  width: 5em;
`;

const RightNav = styled.div`

`;

const HeaderSection = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src="assets/images/logos/zephyr.png" alt="logo" />
        </Logo>

        <RightNav>
          <CustomButton
            title="List your property"
            borderRadius="3rem"
            padding="0 1.2rem"
            fontSize="1.5rem"
            fontWeight="bold"
          />
          <Person />
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default HeaderSection;
