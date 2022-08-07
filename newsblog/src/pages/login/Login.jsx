import "./login.css"
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email" />
                <label>Password</label>
                <input type="Password" className="loginInput" placeholder="Enter your Password" />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
            <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>Register</Link>
            </button>
        </div>
    )
}
