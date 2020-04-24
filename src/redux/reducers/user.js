const init_state = {
  id: "",
  username: "",
  fullName: "",
  password: "",
  role: "",
  isLoggedIn: false,
  errMsg: ""
};

export default (state = init_state, action) => {
  if (action.type == "ON_LOGIN_SUCCESS") {
    const { id, username, fullName, password, role } = action.payload;
    return {
      ...state,
      id,
      username,
      fullName,
      password,
      role,
      isLoggedIn: true
    };
  } else if (action.type == "ON_LOGIN_FAIL") {
    return { ...state, errMsg: action.payload };
  } else if (action.type == "ON_REGISTER_SUCCESS") {
    const { id, username, fullName, password, role } = action.payload;
    return {
      ...state,
      id,
      username,
      fullName,
      password,
      role,
      isLoggedIn: true
    };
  } else if (action.type == "ON_LOGOUT_SUCCESS") {
    return { ...init_state };
  }
  return { ...state };
};
