export const setSessionToken = (token) => {
  localStorage.setItem("user_token", token);
};

export const removeSessionToken = () => {
  localStorage.removeItem("user_token");
};

export const isLoggedIn = () => !!localStorage.getItem("user_token");
