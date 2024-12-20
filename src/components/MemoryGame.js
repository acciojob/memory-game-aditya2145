import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { flippedCards, incrementTries, matchedCards, resetFlippedCards, resetGame, setCards } from '../features/game/gameSlice';

const MemoryGame = ({ totalCards }) => {
  const {cards, flipped, matched, tries} = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleFlip = (index) => {
    if(flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
      dispatch(flippedCards(index));
    }
  };

  const handleNewGame = () => {
    dispatch(resetGame(generateCardNumbers(totalCards)));
  }

  useEffect(() => {
    if(flipped.length === 2) {
      const [first, second] = flipped;
      if(cards[first] === cards[second]) {
        dispatch(matchedCards([first, second]))
      }
      dispatch(incrementTries());
      setTimeout(() => {
        dispatch(resetFlippedCards());
      }, 1000);
    }
  }, [flipped])
  

  const generateCardNumbers = (totalCards) => {
    const uniqueNumbers = Array.from({ length: totalCards / 2 }, (_, i) => i);
    const pairedNumbers = [...uniqueNumbers, ...uniqueNumbers];
    return pairedNumbers.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    dispatch(setCards(generateCardNumbers(totalCards)));
  }, [totalCards])

  return (
    <div>
      <h2>Tries: {tries}</h2>
      {matched.length === totalCards && <h1>ALL SOLVED!</h1>}
      {matched.length === totalCards && <button onClick={handleNewGame}>New Game</button>}
      <div className='cells_container' style={{display: 'grid', gridTemplateColumns: `repeat(4, 1fr)`, gap: '1rem'}}>
        {
          cards.map((number, index) => (
            <div key={index} onClick={() => handleFlip(index)} style={{height: '4rem', width: '4rem', textAlign: 'center', backgroundColor: 'red'}}>
              {
                (flipped.includes(index) || matched.includes(index)) && number
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MemoryGame
