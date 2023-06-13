import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import MovieDetail from './pages/movieDetail';
import Header from './components/Header';

import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      < Header/>
     <Routes>
    
      <Route path='/' element={ <MainPage/>}/>   
      <Route path='/movie/:movieId' element={ <MovieDetail/>}/> 

     </Routes>
    
     
     </BrowserRouter>
    </div>
  );
}

export default App;
