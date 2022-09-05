import "./App.css";
import { Routes, Route } from "react-router-dom";
// import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/:id" element={<DetailPage />} /> */}
      </Routes>
      {/* <FooterUser /> */}
    </div>
  );
}

export default App;
