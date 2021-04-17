import * as React from "react";
import chessBoard from "./ChessBoardDataModel";
import Grid from "@material-ui/core/Grid";
import Square from "../Square/square";

export default function ChessBoard(): any {
  console.log(chessBoard);
  let count = 1;
  let name = "a";
  return chessBoard.map((row) => {
    return (
      <Grid container>
        {row.map((square, index) => {
          index++;
          if (index > 9) {
            index = 1;
          }
          return (
            <Grid item>
              <Square number={index} color={square} />
            </Grid>
          );
        })}
      </Grid>
    );
  });
}
