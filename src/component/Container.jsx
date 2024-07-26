import React,{useEffect, useState} from 'react'
import Board from './Board'
import { GameInfo } from './GameInfo'

const Container = () => {
  const [tiles,setTiles] = useState(3)
  const [choosePlayer,setChoosePlayer] = useState("computer")
  console.log("from container", tiles)
  return (
    <div className='w-[70%] bg-white flex items-center justify-around h-[70%] drop-shadow-xl'>
        <GameInfo tiles={tiles} setTiles={setTiles} setChoosePlayer={setChoosePlayer} choosePlayer={choosePlayer}/>
        <Board tiles={tiles} setTiles={setTiles} setChoosePlayer={setChoosePlayer} choosePlayer={choosePlayer}  />
    </div>
  )
}

export default Container