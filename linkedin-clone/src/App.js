import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={
              <>
                <Home /> <Header />{" "}
              </>
            }
          />
          {/* <Route exact path="/home" element={<Header />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
