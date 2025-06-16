import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';

import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage'
import { useState } from 'react';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Booking" element={<BookingPage/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </BrowserRouter>
  );
}


export default App;
