import { Route, Routes } from "react-router-dom";
import "../CSS/App.css"
import LoginPage from "./LoginPage";

import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="app-container">

      <Routes>
        <Route index element = {<LoginPage/>} />
          <Route path={"/userProfile"} element = {<UserProfile redirectUri="http://localhost:3000/login"/>} />
      </Routes>

    </div>
  );
}

export default App;
