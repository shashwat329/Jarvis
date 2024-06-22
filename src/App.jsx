import React from 'react';
import './App.css';
import SearchBar from "./components/SearchBar"
import Display from './components/Display';
import Welcome from './components/Welcome';

function App() {
  return (
    <main className=" bg-gradient-to-bl from-slate-800 via-sky-900 to-slate-950 w-full h-screen flex 
flex-col items-center">
      <Welcome/>
      <Display/> 
      <SearchBar/>
    </main>
  );
}

export default App;

