import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';

import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage'
import { useState } from 'react';
import Login from './components/Login';
import OrderPage from './components/OrderPage';

function App() {
  const specialsData = [
      {
        id: 1,
        image: require('./assets/icons_assets/greek-salad.jpg'),
        title: 'Greek Salad',
        price: 12.99,
        description: 'The famous greek salad of crispy lettuces, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
      },
      {
        id: 2,
        image: require('./assets/icons_assets/bruchetta.png'),
        title: 'Bruschetta',
        price: 5.99,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
      },
      {
        id: 3,
        image: require('./assets/icons_assets/lemon-dessert.jpg'),
        title: 'Lemon Dessert',
        price: 5.00,
        description: 'This comes straight from grandma’s recipe book, every last ingredient is locally sourced and is as authentic as can be imagined.'
      }
    ];
  return (
    <BrowserRouter>
      <Nav/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage specialsData={specialsData}/>}/>
          <Route path="/Booking" element={<BookingPage/>}/>
          <Route path="/Ordering" element={<OrderPage specialsData={specialsData}/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </BrowserRouter>
  );
}


export default App;
