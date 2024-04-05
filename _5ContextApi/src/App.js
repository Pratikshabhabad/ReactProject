
import UserContextProvider from "./context/UserProviderContext";
import Login from "./components/Login"
import Profile from "./components/Profile";

function App() {

  return (
  <UserContextProvider>

      <Login/>
      <Profile/>
  </UserContextProvider>
  
  );
}

export default App;
