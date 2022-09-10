
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';
function App() {
  return (
     <React.Fragment>
       <NavBar/>
       <main className='container'>
          <Counters/>
       </main>
     </React.Fragment>
  );
}

export default App;
