import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import dbActions from './dbActions';
import {
  addMessage,
  updateCurrent,
  updateLocalStorage,
  toaster,
} from './services';

const cardInitialState = {
  contacts: [],
  currentContact: null,
  query: '',
};

const dbState = createReducer(cardInitialState, {
  [dbActions.initialContactsSuccess]: (state, { payload }) => {
    return { ...state, contacts: [...payload] };
  },
  [dbActions.setCurrentContactSuccess]: (state, { payload }) => {
    return { ...state, currentContact: { ...payload } };
  },
  [dbActions.setQuerySuccess]: (state, { payload }) => {
    return { ...state, query: payload };
  },
  [dbActions.sendMessageSuccess]: (state, { payload }) => {
    const newState = {
      ...addMessage('in', state, payload),
      currentContact: { ...updateCurrent('in', state, payload) },
    };
    updateLocalStorage(newState);
    return { ...newState };
  },
  [dbActions.sendMessageReceiveSuccess]: (state, { payload }) => {
    if (state.currentContact.id !== payload.id)
      toast.success(`incoming message from ${toaster(state, payload)}`, {
        duration: 4000,
      });

    const newState = {
      ...addMessage('out', state, payload),
      currentContact: {
        ...({ ...state.currentContact }.id === payload.id
          ? { ...updateCurrent('out', state, payload) }
          : state.currentContact),
      },
    };
    updateLocalStorage(newState);
    return { ...newState };
  },
  [dbActions.clearCurrentContactSuccess]: (state, { payload }) => {
    return { ...state, currentContact: null, query: '' };
  },
});

// const loading = createReducer(false, {
// });

// const error = createReducer(null, {
// });

export default combineReducers({
  dbState,
  // loading,
  // error,
});
