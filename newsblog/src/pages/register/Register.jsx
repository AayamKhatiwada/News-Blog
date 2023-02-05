import "./register.css"
import { Link } from 'react-router-dom'
import { useState } from "react"
import axios from "axios";

export default function Register() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        setError(false)

        try {
            const res = await axios.post("/auth/register", {
                userName,
                email,
                password
            });

            res.data && window.location.replace("/login")
        } catch (err) {
            setError(true)
        }
    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={submitForm}>
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="Password" className="registerInput" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</Link>
            </button>
            {
                error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong</span>
            }
        </div>
    )
}
