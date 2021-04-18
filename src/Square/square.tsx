import * as React from "react";
import styled from "styled-components";

const StyledSquareContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ISquare = {
  piece: string;
  number: number;
  row: string;
};

export default function Square(props: ISquare) {
  return (
    <StyledSquareContainer className="square">
      <img src="" alt={props.piece} draggable />
    </StyledSquareContainer>
  );
}
