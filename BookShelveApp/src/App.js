
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Navbar from './components/Navbar';
import FavoriteBook from './pages/FavoriteBook';
import HomePage from './pages/HomePage';
import {useState} from 'react'


function App() {
  const[favorite,setFavorite] = useState([])
 function addToFavorites(item){
  setFavorite([...favorite,item])
  console.log(item)
 }

  return (
    
    <div className="App">
            <Navbar/>
     <Routes>
    <Route path="/" element={<HomePage addToFavorites={addToFavorites}/>}/>
    <Route path='/favorites' element={<FavoriteBook favorite={favorite}/>}/>
    <Route path='/about' element={<About/>}/>
     </Routes>
 
    </div>
    
  );
}

export default App;
