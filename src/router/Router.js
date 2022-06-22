import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../components/main/Main";
import Header from "../components/header/Header";
import Add from "../components/add/Add";
import App from "../components/App";
import LoginPopup from "../components/pop-up/LoginPopup";
import AddPopup from "../components/pop-up/AddPopup";

function Router() {
  return (
    <BrowserRouter>
        <App/>
      <Routes>
        <Route path="/login" element={<LoginPopup/>}/>
        <Route path="/create" element={<AddPopup/>}/>
      </Routes>
        <Add/>
    </BrowserRouter>
  );
}

export default Router;
