import React from "react"
import './App.css';
import Header from "./components/Header/Header"
import Movies from "./components/Movies/Movies"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends React.Component {
  render() {
  return (
    <div> 
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<h1>Página Inicial</h1>}/>
      <Route path="/programacao" element={<Movies/>}/>           
    </Routes>
    </BrowserRouter>

  </div>
  );
}
}

export default App;
