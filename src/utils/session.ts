// set data in session storage
export const setSession = (name: string, data: string | object | boolean) => {
  window.sessionStorage.setItem(name, JSON.stringify(data));
};

// get data from session storage
export const getSession = (name: string) => {
  const data = window.sessionStorage.getItem(name);
  if (data !== null) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return null;
    }
  }
  return null;
};

// check if data is present in session storage
export const getSessionInfoBool = (name: string) => {
  const data = window.sessionStorage.getItem(name);
  if (data) return true;
  return false;
};

// remove session from session storage
export const removeSession = (name: string) => {
  window.sessionStorage.removeItem(name);
};
