import dbActions from './dbActions';
import axios from 'axios';

const initialContacts = contacts => dispatch => {
  dispatch(dbActions.initialContactsSuccess(contacts));
};

const setCurrentContact = contact => dispatch => {
  dispatch(dbActions.setCurrentContactSuccess(contact));
};

const setQuery = query => dispatch => {
  dispatch(dbActions.setQuerySuccess(query));
};

const sendMessage = (id, message, date) => dispatch => {
  dispatch(dbActions.sendMessageSuccess({ id, message, date }));
};

const sendMessageReceive = id => async dispatch => {
  try {
    const message = await axios
      .get('https://api.chucknorris.io/jokes/random')
      .then(data => {
        return data.data.value;
      });
    const date = String(new Date());
    setTimeout(
      () =>
        dispatch(dbActions.sendMessageReceiveSuccess({ id, message, date })),
      5000
    );
  } catch (err) {}
};

const clearCurrentContact = () => dispatch => {
  dispatch(dbActions.clearCurrentContactSuccess());
};

const createContact = contact => dispatch => {
  dispatch(dbActions.createContactSuccess(contact));
};

const dbOperations = {
  initialContacts,
  setCurrentContact,
  setQuery,
  sendMessage,
  sendMessageReceive,
  clearCurrentContact,
  createContact,
};

export default dbOperations;
