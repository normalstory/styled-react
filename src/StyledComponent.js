import React from "react";
import styled, { css } from "styled-components";

/** */
const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phablet: 572,
  phone: 376,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
/** */
const Wrap = styled.div`
  ${media.desktop`padding: 0 100px;`}
  ${media.tablet`padding: 0 50px;`}
  ${media.phablet`padding: 0 10px;`}
  ${media.phone`padding: 0 3px;`}
`;

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
  //justify-content: space-around;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column; /**flex 정말 flex하다  */
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    /**와, 완전 좋아! 대박 */
    background: gray;
    color: white;
  }

  ${(props /**와, 완전 좋아! 대박 */) =>
    props.inverted && //inverted가 트루일때 실행
    css`
      color: greenyellow;
      border: 2px solid white;
      &:hover {
        background: skyblue;
        color: black;
      }
    `};
  & + button,
  & + p {
    margin-left: 1rem;
  }
`;

const Button2 = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "pink")};
  color: ${(props) => (props.primary ? "pink" : "palevioletred")};
  & + p {
    height: 100px;
  }
`;

const StyledComponent = () => {
  return (
    <div>
      <Wrap>
        <Box color="green">
          <Button>
            <p>hello</p>
            <p>world</p>
          </Button>
          <Button inverted={true}>안녕, 월드</Button>
          <p>hi </p>
          there
        </Box>
        <Box>
          <p>hi</p>
          <p>hello</p>
          <span>world</span>
          <Button2 primary>Primary</Button2>
        </Box>
      </Wrap>
    </div>
  );
};

export default StyledComponent;
