import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from './components/Navbar'
import Home from "./components/Home";
import { useAuth } from './context/AuthContext'


function App() {
  const { user } = useAuth()
  return <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/signup' element= {!user ? <Signup /> : <Navigate to='/' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
