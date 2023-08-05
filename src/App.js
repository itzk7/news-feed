import './App.css';
import { Route,   Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Stories from './components/stories';
import FavoriteStories from './components/favourites';
import { FavoriteIDsContext } from './components/context';
import { useState } from 'react';

function App() {
  const [favIds, setFavIds] = useState([])
  return (
    <>
    <FavoriteIDsContext.Provider value={[favIds, setFavIds]}>
          <BrowserRouter>
          <Navbar/>
            <div className='main'>
              <Routes>
                  <Route exact path="/" element={<Stories />} />
                  <Route exact path="/favorites" element={<FavoriteStories />} />
              </Routes>
            </div>
          </BrowserRouter>
    </FavoriteIDsContext.Provider>
    </>
  );

}

export default App;
