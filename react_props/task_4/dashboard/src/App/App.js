import logo from '/src/assets/Holberton_Logo.jpg';
import './App.css'
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className='App-body'>
          <Login />
        </div>
        <footer className='App-footer'>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
