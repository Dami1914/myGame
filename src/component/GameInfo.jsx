import React from 'react'

export const GameInfo = ({setTiles,tiles,setChoosePlayer}) => {
  return (
    <div className='w-[40%] border flex flex-col gap-3 rounded-lg h-[80%] p-2'>
        <div className="w-full border rounded-lg flex p-2 h-[40%] overflow-hidden">
          <div className='w-full h-full justify-center flex-col flex items-center gap-2'>
            <div className='w-[1.3em] flex-shrink-0 h-[1.3em] flex justify-center text-6xl font-black items-center rounded-[50%]  text-white border bg-gradient-to-tr from-green-600 to-blue-700'>
              X
            </div>
            <div className='w-full flex-shrink-0 text-xl justify-between font-semibold flex rounded-lg border p-1 gap-1'>
                  <div>Player 1:</div>
                  <div>20</div>
            </div>
          </div>
          <div className='h-full flex items-center text-6xl -mt-[8%] font-black'>
            vs
          </div>
          <div className='w-full h-full justify-center  flex-col flex items-center gap-2'>
          <div className='w-[1.3em] flex-shrink-0 h-[1.3em] flex justify-center text-6xl font-black items-center rounded-[50%]  text-white border bg-gradient-to-tr from-green-600 to-blue-700'>
              O
            </div>
            <div className='w-full text-xl flex-shrink-0 justify-between font-semibold flex rounded-lg border p-1 gap-1'>
                  <div>Player 2:</div>
                  <div>20</div>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center text-lg font-semibold p-2 justify-between h-[20%] rounded-lg border'>
            <label htmlFor='chooseplayer' className='w-[30%]'>Choose</label>
            <select onClick={(event)=>setChoosePlayer(event.target.value)}  className='border rounded-lg w-full p-2' name="chooseplayer" id="chooseplayer">
              <option value="Computer">Computer</option>
              <option value="Multiplayer">Multiplayer</option>
            </select>
        </div>
        <div className='w-full flex items-center text-lg font-semibold p-2 justify-between h-[20%] rounded-lg border'>
            <label htmlFor='tiles' className='w-[30%]'>Tiles:</label>
            <select onClick={(event)=> setTiles(Number(event.target.value))} className='border rounded-lg w-full p-2' name="tiles" id="tiles">
              <option value="3">Default 3x3</option>
              <option value="4">4x4</option>
              <option value="5">5x5</option>
            </select>
        </div>
        <div className='w-full p-2 flex h-[20%] justify-center items-center'>
          <button className='w-[50%] bg-gradient-to-tr transition-all border-blue-600 from-green-500 hover:text-green-600  hover:from-transparent hover:to-transparent hover:border  to-blue-600 p-2 rounded-xl text-white font-semibold'>Reset Game</button>
        </div>
    </div>
  )
}
