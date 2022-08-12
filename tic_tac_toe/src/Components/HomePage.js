import React, { useState } from 'react'
import Game from './Game';

function HomePage() {
    const [player, setPlayer] = useState({ firstplayer: "", secondplayer: "" });
    const [start, setStart] = useState(false);
  
    function startGame() {
      setStart(true)
    }
  
    return (
      <div style={{ textAlign: "center" }}>
        {start ? (
          <Game val={player} />
        ) : (
          <>
            <h1 style={{ textAlign: "center", fontFamily: "-apple-system" }}>TIC TAC TOE</h1>
            <form>
              <div class="mb-3">
                <label for="text" class="form-label">Player 1</label>
                <input type="text" class="form-control" name="firstplayer" value={player.firstplayer}
                  onChange={(e) => setPlayer({ ...player, [e.target.name]: e.target.value })} />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Player 2</label>
                <input type="text" class="form-control" name="secondplayer" value={player.secondplayer}
                  onChange={(e) => setPlayer({ ...player, [e.target.name]: e.target.value })} />
              </div>
              <button type="submit" class="btn btn-primary" onClick={startGame}>Submit</button>
            </form>
          </>
        )}
      </div>
    )
  }

export default HomePage