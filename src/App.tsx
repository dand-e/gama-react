import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Router from './routes';

/*import FunctionalComponents from './components/FunctionComponents';
import ClassComponents from './components/ClassComponents';
import PartOne from './Hooks';

const App: React.FC = ():any => {
  function hello(){
    alert('Olá!!!')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Listando nossos componentes</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <FunctionalComponents />
        <ClassComponents />
        <PartOne />
        <br/>
        <button onClick={hello}>
          Clica nimim
        </button>
      </header>
    </div>
  );
}*/

const App: React.FC = ():any => {
  return <Router />
}

export default App;
