import * as React from "react";
import chessBoard from "./ChessBoardDataModel";
import Grid from "@material-ui/core/Grid";
import Square from "../Square/square";

export default function ChessBoard(): any {
  function setRowName(rowNameIndex: number): string {
    switch (rowNameIndex) {
      case 0:
        return "a";
      case 1:
        return "b";
      case 2:
        return "c";
      case 3:
        return "d";
      case 4:
        return "e";
      case 5:
        return "f";
      case 6:
        return "g";
      case 7:
        return "h";
      default:
        return "";
    }
  }

  return chessBoard.map((row, rowNameIndex) => {
    return (
      <Grid container>
        {row.map((square, sqaureIndex) => {
          sqaureIndex++; /* must increment it the first time to avoid a sqaure's number being 0 */
          if (sqaureIndex > 9) {
            sqaureIndex = 1; /* set back to 1 to ensure each row count starts from 1 and extends to 8 for each square */
          }
          return (
            <Grid className="row" item style={{ border: "1px solid black" }}>
              <Square
                row={setRowName(rowNameIndex)}
                number={sqaureIndex}
                piece={square}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  });
}
