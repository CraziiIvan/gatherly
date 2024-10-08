export const fetcher = (url: string) => fetch(url).then(res => res.json());

export const setToken = (token: string) => {
    sessionStorage.setItem('token', token);
  };
  
  export const getToken = () => {
    return sessionStorage.getItem('token');
  };
  
  export const removeToken = () => {
    sessionStorage.removeItem('token');
  };

export const capitalize = (str: string): string => {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

