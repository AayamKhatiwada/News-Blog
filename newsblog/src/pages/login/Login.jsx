import "./login.css"
import { Link } from 'react-router-dom'
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const { user, dispatch, isFetching } = useContext(Context);


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" })

        try {
            const res = await axios.post("/auth/login", {
                userName: userRef.current.value,
                password: passwordRef.current.value,
            })

            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    }

    console.log(user)

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>User name</label>
                <input type="text" className="loginInput" placeholder="Enter your User name" ref={userRef} />
                <label>Password</label>
                <input type="Password" className="loginInput" placeholder="Enter your Password" ref={passwordRef} />
                <button className="loginButton" disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>Register</Link>
            </button>
        </div>
    )
}
