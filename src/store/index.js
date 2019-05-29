import { createStore } from 'redux';

// Reducer
const INITIAL_STATE = ['Fazer café', 'Estudar React Native'];

// Actions

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.text];
  }

  return state;
}

const store = createStore(reducer);

export default store;