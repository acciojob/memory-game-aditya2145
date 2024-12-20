import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        cards: [],
        flipped: [],
        matched: [],
        tries: 0,
        level: '',
    },
    reducers: {
        setCards: (state, action) => {
            state.cards = action.payload;
        },
        resetFlippedCards: (state) => {
            state.flipped = [];
        },
        flippedCards: (state, action) => {
            state.flipped.push(action.payload);
        },
        matchedCards: (state, action) => {
            state.matched.push(...action.payload);
        },
        incrementTries: (state) => {
            state.tries += 1;
        },
        resetGame: (state, action) => {
            state.cards = action.payload;
            state.flipped = [];
            state.matched = [];
            state.tries = 0;
        },
        setLevel: (state, action) => {
            state.level = action.payload;
        },
    }
})

export const {setCards, resetFlippedCards, flippedCards, matchedCards, incrementTries, resetGame, setLevel} = gameSlice.actions;
export default gameSlice.reducer;
