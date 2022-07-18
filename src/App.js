import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
           <Route path='/' element={<Login  />} exact/>
           <Route path='user/:id' element={<Home />}  />     
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
