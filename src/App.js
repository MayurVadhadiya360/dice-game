import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import DiceGame from './components/DiceGame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/game' element={<DiceGame/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
