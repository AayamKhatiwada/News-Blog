import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your Username" />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email" />
                <label>Password</label>
                <input type="Password" className="registerInput" placeholder="Enter your Password" />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}
