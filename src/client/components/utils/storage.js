const storage = {
  /** saveDataToStorage
   * @param key (String): name of the localstorage item to be saved
   * @param data (Object): contents of the data to be saved
   */
  saveDataToStorage: (key, data) => {
    if (typeof data === 'object') {
      localStorage.setItem(key, JSON.stringify({ ...data }));
    }
  },

  /**
   * getDataFromStorage
   * @param key (String): name of the key to be returned from localStorage
   */
  getDataFromStorage: key => {
      const data = JSON.parse(localStorage.getItem(key));
      if (!data) return null;
      return data;
  },

  /** updateDataInStorage
   * @param key (String): name of the localstorage item to be updated
   * @param data (Object): contents of the data to be updated
   */
  updateDataInStorage: (key, data) => {
    if (typeof data === 'object') {
      const existingData = storage.getDataFromStorage(key);
      const storageData = { ...existingData, ...data };

      Object.keys(storageData).forEach(item => {
        if (typeof storageData[item] === 'string' && !storageData[item]) {
          delete storageData[item];
        }
      });
      storage.saveDataToStorage(key, { ...storageData });
    }
  },

  /**
   * delete
   * @param key (String): name of the instance to be removed
   */
  delete: key => {
    if (typeof key === 'string') {
      localStorage.removeItem(key);
    }
  },
};

export default storage;
