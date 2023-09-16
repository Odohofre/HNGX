import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import ResultPage from './components/ResultPage';

function NoMatch() {
  return (
    <div>
      <h2>Noting to see here!</h2>
      <p>
        <Link to="/">Go to home page</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/search-results" element={<ResultPage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
