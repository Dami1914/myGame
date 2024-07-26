import React, { useState, useEffect } from "react";
import { checkWin } from "../static/util_func";

const Board = ({tiles,choosePlayer}) => {
  const [winState,setWinState] = useState(0)
  const [turn, setTurn] = useState(true);
  const [userPlay,setUserPlay] = useState(false)
  const [player,setPlayer] = useState({
    player1:"X",
    player2:"O"
  })

 console.log(tiles)
  const [gameState, setGameState] = useState([]);

  function possibleMoves(board){
    const currentState = JSON.parse(JSON.stringify(board))
    const moves = [] 
    for(let i = 0; i < currentState.length;i++){
      for(let s = 0; s < currentState.length;s++){
        if(currentState[i][s].value === ""){
            moves.push([i,s])
        }
      }
    }
    console.log(moves)
    return moves
  }

  function bestMoves(board,symbol){
    const scenerioBoard = JSON.parse(JSON.stringify(board))
    const moves = possibleMoves(scenerioBoard)
    for(let move of moves){
      scenerioBoard[move[0]][move[1]].value = symbol 
    }
    console.log(scenerioBoard)
    return checkWin(scenerioBoard,symbol)
  }

  

  function computerPlayer(gameState){
    setUserPlay(false)
    const moves = bestMoves(gameState,"X")
    console.log(moves)

        /*setGameState(prev=>(
          prev.map((ele,rindex)=>(
            rindex === moves[0]?
            ele.map((elem,cindex)=>(
              cindex===moves[1]?
              {...elem,value:"X"}:elem
            ))
          :ele))
        ))*/
    return
  } 
 

  function placeValue(turn,gameState,clickedIndex,containerIndex) {
    setUserPlay(true)
    const currPlayer = userPlay? "player1":"player2"
    console.log(containerIndex,clickedIndex)
    setGameState((prev) => {
      return prev.map((container,cindex)=>(
        containerIndex === cindex
        ? container.map((elem,eindex)=>(
          eindex === clickedIndex && elem["value"] === ""
          ? {...elem,value:player[currPlayer]}:elem
        ))
      :container))
    });
    if(gameState[containerIndex][clickedIndex].value === "") setTurn(prev=>!prev)
    console.log(gameState)
  }
  useEffect(() => {
    setGameState(
      Array.from({ length: tiles }, () => Array.from({ length: tiles }, () => ({ value: "" })))
    );
  }, [tiles]);
  
  /*useEffect(() => {
    checkWin(gameState,setGameState,winState,setWinState);
  },[gameState]);*/

  useEffect(()=>{
    if(choosePlayer === "computer" && userPlay ){
      computerPlayer(gameState)
    }
  },[userPlay])

  console.log(winState)
  return (
    <div className="w-[40%] h-[80%] gap-2 p-2 drop-shadow-sm flex-col rounded-xl border flex">
      {gameState.map((ele, containerIndex) => (
        <div className="w-full flex h-full gap-2" key={containerIndex}>
          {ele.map((elem, clickedIndex) => (
            <div
              className="w-full cursor-pointer text-6xl font-bold h-full border rounded-md flex justify-center items-center"
              key={elem.value + clickedIndex}
              onClick={()=>placeValue(turn,gameState,clickedIndex,containerIndex)}
            >
              {elem.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
