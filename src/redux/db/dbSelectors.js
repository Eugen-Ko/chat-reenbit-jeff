const getContacts = state => state.db.dbState.contacts;
const getCurrentContact = state => state.db.dbState.currentContact;
const getQuery = state => state.db.dbState.query;

const raceSelectors = {
  getContacts,
  getCurrentContact,
  getQuery,
};

export default raceSelectors;
