import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './Topbar.css'

export default function Topbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }

  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
          <li className="topListItem"><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>About</Link></li>
          <li className="topListItem">Contact</li>
          <li className="topListItem"><Link to="/write" style={{ textDecoration: "none", color: "inherit" }}>Write</Link></li>
          <li className="topListItem" onClick={handleLogout}>{user && "LogOut"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (<img src={user.profileImg} alt="" className="topImage" />) : (
          <ul className='topList'>
            <li><Link to="/login" className='topListItem' style={{ textDecoration: "none", color: "inherit" }}>Login</Link></li>
            <li><Link to="/register" className='topListItem' style={{ textDecoration: "none", color: "inherit" }}>Register</Link></li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
