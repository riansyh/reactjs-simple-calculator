import React, { useReducer } from 'react';
import './App.css';
import ButtonGroup from './components/ButtonGroup';
import Screen from './components/Screen';
import { initialState, reducer } from './script/reducer';

export const CalculatorContext = React.createContext();

function App() {
  const [calculator, dispatch] = useReducer(reducer, initialState);
  return (
    <CalculatorContext.Provider
      value={{ state: calculator, calculatorDispatch: dispatch }}
    >
      <div className="App">
        <div class="container">
          <header>
            <h1 class="title">calc</h1>
          </header>
          <main>
            <div class="screen-display">
              <Screen />
            </div>
            <div class="keypad">
              <ButtonGroup />
            </div>
          </main>
        </div>

        <div className="container"></div>
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;
