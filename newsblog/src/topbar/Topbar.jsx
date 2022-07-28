import React from 'react'
import './Topbar.css'

export default function Topbar() {
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ui className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">LogOut</li>
        </ui>
      </div>
      <div className="topRight">
        <img src="https://images.pexels.com/photos/8947692/pexels-photo-8947692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="topImage" />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
