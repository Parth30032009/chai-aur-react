import UserContextProvider from "./context/userContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
};

export default App;
