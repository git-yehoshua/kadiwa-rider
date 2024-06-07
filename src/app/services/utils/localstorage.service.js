export const saveDataToLocal = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
};

export const getDataFromLocal = (key) => {
  try {
    return localStorage.getItem(key) || null;
  } catch (error) {
    console.error("Error getting data from local storage:", error);
    return null;
  }
};

export const removeDataFromLocal = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data from local storage:", error);
  }
};
