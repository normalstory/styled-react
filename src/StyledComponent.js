import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  //display: inline-flex;
  display: flex;
  //flex-direction: row-reverse;
  //flex-direction: column-reverse;
  //justify-content: flex-end;
  //justify-content: center;
  //justify-content: space-between;
  justify-content: space-around;
`;

const Button = styled.button`
  ${(props) =>
    props.inverted &&
    css`
      color: white;
    `};
`;

const StyledComponent = () => {
  return (
    <div>
      <Box color="green">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
      </Box>
      <Box>hi</Box>
    </div>
  );
};

export default StyledComponent;
