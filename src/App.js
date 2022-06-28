import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userdata from "./Components/Userdata/Userdata";
import Home from "./Components/Home/Home";
import Paginationpage from "./Components/Pagination/Paginationpage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/userdata/:id" element={<Userdata />}></Route>
            {/* <Paginationpage /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
