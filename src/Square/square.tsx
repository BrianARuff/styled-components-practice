import * as React from "react";

type ISquare = {
  color: string;
  number: number;
};

export default function Square(props: ISquare) {
  return (
    <div>
      <p>{props.color}</p>
    </div>
  );
}
