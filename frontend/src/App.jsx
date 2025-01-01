import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Adminpage from './pages/Adminpage';
import Registerpage from './pages/Registerpage';
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Adminpage" element={<Adminpage />} />
        <Route path="/Registerpage" element={<Registerpage />} />
      </Routes>
    </Router>
  );
};

export default App;
