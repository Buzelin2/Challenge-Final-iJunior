import "./App.css";


//import LeftNavBar from "./components/LeftNavBar";

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      
      <Outlet />
    </div>
  );
}

export default App;
