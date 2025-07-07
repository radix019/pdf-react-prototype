import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import One from './pages/ReactPDF';
import './App.css';

function App() {
  return (
    <Router>
      <div className="main_container">
        <Sidebar />
        <main className="main_screen">
          <Routes>
            <Route
              path="/"
              element={
                <h2>Welcome! Choose the prototype from the left sidebar.</h2>
              }
            />
            <Route path="/react-pdf" element={<One />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
