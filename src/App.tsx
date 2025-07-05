import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import One from "./pages/ReactPDF";
import Two from "./pages/Two";
import Three from "./pages/Three";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main_container">
        <Sidebar />
        <main className="main_screen">
          <Routes>
            <Route path="/react-pdf" element={<One />} />
            <Route path="/two" element={<Two />} />
            <Route path="/three" element={<Three />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
