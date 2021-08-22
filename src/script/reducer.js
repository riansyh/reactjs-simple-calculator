import { calculate } from './calculate';

const initialState = {
  displayNumber: '0',
  firstNumber: null,
  operator: null,
  waitForSecondNumber: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'APPEND_NUMBER':
      if (action.number === '.') {
        if (state.displayNumber.includes('.')) {
          return { ...state };
        } else {
          return {
            ...state,
            displayNumber: state.displayNumber + action.number,
          };
        }
      } else {
        return state.displayNumber === '0'
          ? { ...state, displayNumber: action.number }
          : { ...state, displayNumber: state.displayNumber + action.number };
      }
    case 'DELETE':
      return state.displayNumber.length === 1
        ? { ...state, displayNumber: '0' }
        : { ...state, displayNumber: state.displayNumber.slice(0, -1) };

    case 'RESULT':
      break;

    case 'CLEAR':
      return initialState;

    case 'OPERATOR':
      if (state.firstNumber === null) {
        return {
          ...state,
          firstNumber: state.displayNumber,
          displayNumber: '',
          operator: action.operation,
          waitForSecondNumber: true,
        };
      } else {
        return {
          ...state,
        };
      }

    case 'CALCULATION':
      if (
        state.waitForSecondNumber &&
        state.operator !== null &&
        state.displayNumber !== ''
      ) {
        return {
          ...state,
          displayNumber: calculate(
            state.operator,
            state.firstNumber,
            state.displayNumber
          ).toString(),
          operator: null,
          firstNumber: null,
          waitForSecondNumber: false,
        };
      } else {
        return {
          ...state,
        };
      }

    default:
      break;
  }
};

export { initialState, reducer };
