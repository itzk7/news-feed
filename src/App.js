import './App.css';
import { Route,   Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Stories from './components/stories';
import FavoriteStories from './components/favourites';
import ContextLayout from './ContextLayout';

function App() {
  return (
    <div className='main'>
        <Navbar/>
        <Routes>
          <Route element={<ContextLayout />}>
            <Route exact path="/" element={<Stories />} />
            <Route exact path="/favorites" element={<FavoriteStories />} />
          </Route>
        </Routes>
    </div>
  );

}

export default App;
