import { combineReducers } from "@reduxjs/toolkit";
import gameReducer from '../features/game/gameSlice'

const rootReducer = combineReducers({
    game: gameReducer,
})

export default rootReducer
