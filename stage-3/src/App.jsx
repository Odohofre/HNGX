import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Auth />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
