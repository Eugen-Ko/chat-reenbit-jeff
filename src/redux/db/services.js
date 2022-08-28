import { toast } from 'react-hot-toast';

const messageBlock = (statMsg, { message, date }) => {
  return {
    statMsg,
    message,
    date,
  };
};

export const addMessage = (statMsg, state, payload) => {
  return {
    ...state,
    contacts: state.contacts.map(el => {
      if (el.id === payload.id) {
        const temp = {
          ...el,
          history: [...el.history, messageBlock(statMsg, payload)],
        };
        return temp;
      }
      return el;
    }),
  };
};

export const updateCurrent = (statMsg, state, payload) => {
  return {
    ...state.currentContact,
    history: [...state.currentContact.history, messageBlock(statMsg, payload)],
  };
};

export const updateLocalStorage = newState => {
  localStorage.setItem('db', JSON.stringify(newState.contacts));
};

export const toaster = (state, payload) => {
  let t = { ...state };
  t = [
    ...state.contacts.map(el => {
      return { ...el };
    }),
  ];
  return t.filter(el => el.id === payload.id)[0].name;
};
