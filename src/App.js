import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Shoes from './components/Shoes';
import ShoeList from './components/ShoeList';
import Message from './components/Message';
import NotFound from './components/NotFound';
import ShoeDetail from "./components/ShoeDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ShoeList />}>
          <Route path="/" element={<Shoes />} />
          <Route path=":slug" element={<ShoeDetail/>}/>
        </Route>
        <Route path="msg" element={<Message />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
