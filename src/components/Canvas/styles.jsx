import styled from "styled-components";

export const Wrapper = styled.canvas`
  --size: 60vh;
  
  width: var(--size);
  height: var(--size);

  max-width: calc(100vw - 2rem);
  max-height: calc(100vw - 2rem);

  min-width: calc(320px - 2rem);
  min-height: calc(320px - 2rem);

  border: solid 2px #333;
  border-radius: 1rem;

  grid-column: -1 / 1;
`;
