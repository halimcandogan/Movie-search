import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './index.css';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
