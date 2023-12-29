
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import ItemDisplay from './ItemDisplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route default path="/menu"
          element={<Menu />} />
        <Route path="/products/:title/:id"
          element={<ItemDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
