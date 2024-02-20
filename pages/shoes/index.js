import React from "react";
import Image from "next/image";
import {styled } from 'baseui';

const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});


const Shoes = () => {
  return (
    <Container>
      <h1>Shoes</h1>
      <p>Shoes are great! I have a lot of them.</p>
      <Image src="https://via.assets.so/shoe.png?id=1&q=95&w=640&h=640&fit=fill" width={640} height={640} alt="A shoe" />
    </Container>
  );
};

export default Shoes;
