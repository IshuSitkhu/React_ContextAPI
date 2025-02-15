import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setUser } = useContext(AuthContext);

  return (
    <button onClick={() => setUser({ name: "John Doe" })}>
      Log In
    </button>
  );
};
