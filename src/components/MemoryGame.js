import React, { useEffect, useState } from 'react'

const MemoryGame = ({ totalCards }) => {
  const [tries, setTries] = useState(0);
  const [cards, setCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [flipped, setFlipped] = useState([]);

  const handleFlip = (index) => {
    if(flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  const handleNewGame = () => {
    setTries(0);
    setMatched([]);
    setFlipped([]);
    setCards(generateCardNumbers(totalCards));
  }

  useEffect(() => {
    if(flipped.length === 2) {
      const [first, second] = flipped;
      if(cards[first] === cards[second]) {
        setMatched((matched) => [...matched, first, second]);
      }
      setTries(tries + 1);
      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  }, [flipped])
  

  useEffect(() => {
    const generateCardNumbers = (totalCards) => {
      const uniqueNumbers = Array.from({ length: totalCards / 2 }, (_, i) => i);
      const pairedNumbers = [...uniqueNumbers, ...uniqueNumbers];
      return pairedNumbers.sort(() => Math.random() - 0.5);
    };

    setCards(generateCardNumbers(totalCards));
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
