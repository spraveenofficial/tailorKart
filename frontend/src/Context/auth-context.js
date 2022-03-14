import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../Reducers/auth";
const authContext = createContext();

const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    loading: false,
    user: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <authContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        setUser: dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
