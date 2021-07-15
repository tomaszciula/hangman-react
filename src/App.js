import React from "react";
import "./App.css";
import "../src/components/LetterButton/LetterButton.css";
import Proverb from "./components/Proverb/Proverb";
import HangmanContainer from "./components/HangmanContainer/HangmanContainer";
import { Provider } from "react-redux";
import { createStore } from "redux";

//-----Redux Store i Reducer--------
const initialState = {
  value: "",
};
const rootReducer = (state = initialState, action) => {
  console.log(action);
};
const store = createStore(rootReducer);
// ------------------------------------


function App() {
  return (
    <Provider store={store}>
      <>
        <Proverb />
        <HangmanContainer />
      </>
    </Provider>
  );
}

export default App;
