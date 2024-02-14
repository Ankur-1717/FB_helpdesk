import Home from './Home'
import Login from './Login'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css'

const App= () => {
  const user = true;
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route 
          path="/login" 
          element={user ? <Navigate to="/"/> : <Login/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App
