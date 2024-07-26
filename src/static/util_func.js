export function resetBoard(setGameState) {
  setGameState((prev) =>
    prev.map((container) => container.map((items) => ({ ...items, value: "" })))
  );
}

export function checkWin(board, symbol) {
  let bestMove = [];
  console.log("board:",board)
  for (let i = 0; i < board.length; i++) {
    for (let s = 0; s < board.length; s++) {
      if (board[i][s].value === symbol) {
        bestMove.push([i, s]); 
        if(bestMove.length === board.length){
          console.log("bestmove:1",bestMove)
          return bestMove
        }
      } else {
        bestMove = [];
        break
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let s = 0; s < board.length; s++) {
      if (board[s][i].value === symbol) {
        bestMove.push([s, i]);
        if(bestMove.length === board.length){
          console.log("bestmove:2",bestMove)
          return bestMove
        }
      } else {
        bestMove = [];
        break
      }
    }
  }

  for (let s = 0; s < board.length; s++) {
    if (board[s][s].value === symbol) {
      bestMove.push([s, s]);
      if(bestMove.length === board.length){
        console.log("bestmove:3",bestMove)
        return bestMove
      }
    } else {
      bestMove = [];
      break
    }
  }
  for (let s = 0; s < board.length; s++) {
    if (board[s][board.length - 1 - s].value === symbol) {
      bestMove.push([s, board.length - 1 - s]);
      if(bestMove.length === board.length){
        console.log("bestmove4:",bestMove)
        return bestMove
      }
    } else {
      bestMove = [];
      break
    }
  }
}
