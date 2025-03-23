import { contactsInitialState } from './constants';

const getContactInitialState = () => {
  const localData = localStorage.getItem('contacts');
  if (localData) {
    return JSON.parse(localData);
  }
  return contactsInitialState;
};

export default getContactInitialState;
