import styled from "styled-components";

export const Wrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  border: solid 2px #333;
  border-radius: 1rem;

  &:hover {
    background-color: #333;
  }

  &:hover svg {
    fill: #fff;
  }
`;
