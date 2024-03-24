
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Card from './Card/Card';
import "./sass/index.scss"
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("")
  return (
    <div className="App">
      <Header setTitle={setTitle} />
      <Navbar />
      <Card  title={title}/>
      
    </div>
  );
}

export default App;
