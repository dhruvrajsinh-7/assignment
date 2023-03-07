import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./pages/home";
import Addcard from "./pages/addcard";
import Editcard from "./pages/editcard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <Routes>
        <Route path="/addcard" element={<Addcard />} exact />
      </Routes>
      <Routes>
        <Route path="/editcard/:id" element={<Editcard />} exact />
      </Routes>
    </div>
  );
}

export default App;
