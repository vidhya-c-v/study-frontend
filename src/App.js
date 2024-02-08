import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import View from './components/View';
import Search from './components/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/> 
        <Route path='/v' element={<View/>}/> 
        <Route path='/s' element={<Search/>}/> 


      </Routes>
      </BrowserRouter>
     
        
    </div>
  );
}

export default App;
