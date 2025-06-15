import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';

import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage'
import { useState } from 'react';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <header>

      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
        </Routes>
      </main>
      <footer>

      </footer>
  </BrowserRouter>
  );
}


export default App;
