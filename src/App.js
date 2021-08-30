import React from 'react';
import logo from './logo.svg';
import { Dashboard } from './components/Dashboard/dashboard';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
        <p>
    Dashboard Table
        </p>
        
      </header>
    </div>
  );
}

export default App;
