import Storage from './storage';

export const getDataFromStorage = () => Storage.getDataFromStorage('signIn');

export const removeDataFromStorage = () => Storage.delete('signIn');

export const setDataToStorage = data => {
  Storage.saveDataToStorage('signIn', data);
};
