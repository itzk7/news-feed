import './App.css';
import { BrowserRouter, Route,   Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Stories from './components/stories';

function App() {
  return (
    <div className='main'>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Stories />} />
        <Route exact path="/favourites" element={<Stories />} />
      </Routes>
    </div>
  );

}

export default App;
