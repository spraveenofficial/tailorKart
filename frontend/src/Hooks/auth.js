import { useReducer } from "react";
import { loginReducer, signupReducer } from "../Reducers/auth";

export const useLogin = () => {
  const initialState = {
    loading: false,
    success: false,
    message: "",
  };
  const [state, dispatch] = useReducer(loginReducer, initialState);
  return {
    loading: state.loading,
    success: state.success,
    message: state.message,
    dispatch,
  };
};

export const useSignup = () => {
  const initialState = {
    loading: false,
    success: false,
    message: "",
  };
  const [state, dispatch] = useReducer(signupReducer, initialState);
  return {
    loading: state.loading,
    success: state.success,
    message: state.message,
    dispatch,
  };
};
