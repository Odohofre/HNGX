import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Auth />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
