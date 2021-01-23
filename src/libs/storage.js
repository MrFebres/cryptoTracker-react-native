import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  static instance = new Storage();

  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error('[STR-ERR] ', e);
    }
  };

  get = async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.error('[GET-ERR] ', e);
      throw new Error(e);
    }
  };

  getAll = async (keys) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (e) {
      console.error('[ALL] ', e);
      throw new Error();
    }
  };

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (e) {
      console.error('[GT-KEYS] ', e);
      throw new Error();
    }
  };

  remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('[RM-ERR] ', e);
      throw new Error(e);
    }
  };
}
