import './App.css';
import { BrowserRouter, Route,   Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Stories from './components/stories';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Stories />} />
        <Route exact path="/favourites" element={<Stories />} />
      </Routes>
    </>
  );

}

export default App;
