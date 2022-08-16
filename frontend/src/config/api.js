import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
export const api = axios.create({
  baseURL: BASE_URL,
})

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await api.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
