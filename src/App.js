import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
           <Route path='/' element={<Login  />} exact/>     
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
