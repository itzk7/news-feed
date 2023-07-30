import './App.css';
import { Route,   Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Stories from './component/stories';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path = "/" element={Stories} />
      <Route exact path = "/favourties" element={Stories} />
    </Routes>
    </>
  );
}

export default App;
