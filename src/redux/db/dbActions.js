import { createAction } from '@reduxjs/toolkit';

const initialContactsSuccess = createAction('db/initialContactsSuccess');

const setCurrentContactSuccess = createAction('db/setCurrentContactSuccess');
const setQuerySuccess = createAction('db/setQuerySuccess');
const sendMessageSuccess = createAction('db/sendMessageSuccess');
const sendMessageReceiveSuccess = createAction('db/sendMessageReceiveSuccess');
const clearCurrentContactSuccess = createAction(
  'db/clearCurrentContactSuccess'
);
const createContactSuccess = createAction('db/createContactSuccess');

const dbActions = {
  initialContactsSuccess,
  setCurrentContactSuccess,
  setQuerySuccess,
  sendMessageSuccess,
  sendMessageReceiveSuccess,
  clearCurrentContactSuccess,
  createContactSuccess,
};
export default dbActions;
