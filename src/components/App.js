
import React from "react";
import { Provider } from 'react-redux'
import Landing from './Landing'
import './../styles/App.css';
import store from '../app/store'

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Provider store={store}>
          <Landing />
        </Provider>
    </div>
  )
}

export default App
