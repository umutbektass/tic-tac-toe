import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import {WINNING_COMBINATIONS} from './winning-combinations'
function driveActivePlayer(gameTurns){
    let currentPlayer = 'X';
    if(gameTurns.length>0 && gameTurns[0].player === 'X'){
      currentPlayer = '0'
    }
    return currentPlayer;
}
function App() {
  const [gameTurns,setGameTurns] = useState([])

  const activePlayer = driveActivePlayer(gameTurns)

  function handleSelectSquare (rowIndex,colIndex) {
   
    setGameTurns(prevTurns=>{
      const currentPlayer = driveActivePlayer(prevTurns)
      const updatedTurns = [
        {square:{row:rowIndex,col:colIndex},player:currentPlayer}
        ,...prevTurns]
        console.log("updatedTurns",updatedTurns)
        return updatedTurns;
    })
  }
  return (
   <main>
    <div id="game-container">
    <ol id="players" className="highlight-player">
   <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
   <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
    </ol>
   <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
    </div>
    <Log turns={gameTurns}/>
   </main>
  )
}

export default App
