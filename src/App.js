import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product/:productId/:productName" element={<Product/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
