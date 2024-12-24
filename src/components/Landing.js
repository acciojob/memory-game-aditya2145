import React, { useState } from 'react'
import Easy from './Easy';
import Medium from './Medium';
import Hard from './Hard';
const Landing = () => {
  const [level, setLevel] = useState(null);
  const [startGame, setStartGame] = useState(false);
  
  const handleStart = () => {
    if(!level) {
      alert("Please select the difficulty level!");
      return;
    }
    setStartGame(true);
  }  

  return (
    <div>
      {
        startGame ?
          (
            level === 'easy' ? <Easy /> : level === 'medium' ? <Medium /> : <Hard />
          )
          :
          <div>
            <h4>Welcome!</h4>
            <div className='levels_container'>
              <input type="radio" id='easy' name='levels' onClick={() => setLevel('easy')} />
              <label htmlFor="easy">Easy</label>
              <input type="radio" id='normal' name='levels' onClick={() => setLevel('medium')} />
              <label htmlFor="normal">Normal</label>
              <input type="radio" id='hard' name='levels' onClick={() => setLevel('hard')} />
              <label htmlFor="hard">Hard</label>
            </div>

            <button id='startBtn' onClick={handleStart}>Start</button>
          </div>
      }
    </div>
  )
}

export default Landing
