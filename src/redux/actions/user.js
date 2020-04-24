export const loginHandler = () => {
  // Sebelum pake dispatch pastiin import applyMiddleware di src/index.js, karena dispatch ini asalnya dari redux-thunk
  return dispatch => {
    dispatch({
      type: "ON_LOGIN_SUCCESS",
      payload: "Halo Dunia"
    });

    dispatch({
      type: "ON_LOGIN_FAILED",
      payload: "Halo dunia juga"
    });
  };

  // return {
  //   type: "ON_LOGIN_SUCCESS",
  //   payload: "Keganti"
  // };
};
