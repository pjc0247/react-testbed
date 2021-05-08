import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Button = styled.div`
  background-color: green;
  border: 1px solid black;

  padding: 5px 5px;
`;

let st;
export const Page1 = () => {
  console.log(`BeforeRender, timestamp ${Date.now()}`);
  st = Date.now();

  useEffect(() => {
    console.log(`AfterRender, timestamp ${Date.now()}, diff ${st - Date.now()}`);
  }, []);

  return (
    <Container>
      <Button>
        Hello World
      </Button>
    </Container>
  );
};
