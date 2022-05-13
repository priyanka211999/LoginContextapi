//import "./App.css";
import Auth from "./container/Auth";
import Header from "./container/Header";
import LoginForm from "./container/LoginForm";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <div className="ui container">
      <LoginForm />
      <UserContextProvider>
        <Header />
        <Auth />
        
      </UserContextProvider>
    </div>
  );
}

export default App;