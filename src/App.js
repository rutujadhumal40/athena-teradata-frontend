import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Data from "./components/Data/Data";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/getData").then((data) => {
      console.log("DATA", data.data);
      setData(data.data);
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getData" element={<Data data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
