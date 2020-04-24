const init_state = {
  id: "",
  username: "Hallo",
  fullName: "",
  password: "",
  role: "",
  isLoggedIn: false
};

export default (state = init_state, action) => {
  if (action.type == "ON_LOGIN_SUCCESS") {
    return { ...state, username: action.payload };
  } else if (action.type == "ON_LOGIN_FAILED") {
    return { ...state, fullName: action.payload };
  }
  return { ...state };
};
