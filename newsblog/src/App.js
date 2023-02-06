import './App.css';
import Topbar from './items/topbar/Topbar';
import Home from "./pages/home/home"
import Register from './pages/register/Register';
import Login from './pages/login/Login'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {user ? <Route exact path="/register" element={<Register />} /> : <Route exact path="/register" element={<Home />} />}
        {user ? <Route exact path="/login" element={<Login />} /> : <Route exact path="/login" element={<Home />} />}
        {user ? <Route exact path="/write" element={<Register />} /> : <Route exact path="/write" element={<Write />} />}
        {user ? <Route exact path="/settings" element={<Settings />} /> : <Route exact path="/settings" element={<Register />} />}
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>

  );
}

export default App;
