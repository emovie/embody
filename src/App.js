import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  // Carousel

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </header>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
