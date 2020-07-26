export const save_state_locally = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("app_data", JSON.stringify(store.getState()));
  // console.log("save state");
};

// prettier-ignore
export const get_local_state = () => JSON.parse(localStorage.getItem("app_data")) || {};

// prettier-ignore
export const remove_local_state = () => localStorage.removeItem("app_data");
