import Overview from "./pages/overview/Overview";
import Jira from "./pages/jira/Jira"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./style/dark.scss" 
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


function App() {

const {darkMode} = useContext(DarkModeContext)


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* To import the pages */}
            <Route index element={<Overview />} /> 
            <Route path="jira" element={<Jira/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
