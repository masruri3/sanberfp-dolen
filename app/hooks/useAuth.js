import { useContext } from "react";
import AuthContext from "../auth/context";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (userDetails) => {
    setUser(userDetails);
  };

  const logOut = () => {
    setUser(null);
  };

  return { user, logIn, logOut };
};
