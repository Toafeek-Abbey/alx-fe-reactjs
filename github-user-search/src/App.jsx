import About from './pages/About'
import Landing from './pages/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}


export default App
