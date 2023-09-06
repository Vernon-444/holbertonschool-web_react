import logo from './Holberton_Logo.jpg';
import './App.css';

/* App.js returns
a header div with a class named App-header containing the Holberton logo and a h1 with the text School dashboard
a body div with a class named App-body containing at least one paragraph with the text Login to access the full dashboard
a footer div with a class named App-footer containing at least one paragraph with the text Copyright 2020 - holberton School*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="logo" alt="logo"/>
        <p id="header-id">School dashboard</p>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyrigth 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
