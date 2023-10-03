import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Festivals from './pages/Festivals';
import Arraiais from './pages/Arraiais';
import Layout from './pages/Layout';
import Counter from './pages/Counter';

function App() {
  return (
    <>
      <BrowserRouter>
      <Layout/>
      <div className='wrapper'>
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/arraiais" element={<Arraiais />} />
          <Route path="/counter" element={<Counter />} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
