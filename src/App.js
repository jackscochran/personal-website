import './App.css';

import NavBar from './components/NavBar';
import HomePage from './components/home/HomePage';
import ProjectPage from './components/project/ProjectPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
