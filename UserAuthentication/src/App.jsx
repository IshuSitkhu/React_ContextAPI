import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>React User Authentication</h1>

      {user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <input type="text" placeholder="Username" id="username" />
          <input type="password" placeholder="Password" id="password" />
          <button
            onClick={() => {
              const username = document.getElementById("username").value;
              const password = document.getElementById("password").value;
              login(username, password);
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;
