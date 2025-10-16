import { Link } from "react-router-dom"
import Input from "../inputs/Input"

function AccountLog() {
    return (
        <div className="login-main">
            <div className="login-div">
                <div className="login-form">
                    <h1>Login</h1>
                </div>
                <div className="login-inputs">
                    <div>
                        <p>Email</p>
                        <Input />
                    </div>
                    <div>
                        <p>Password</p>
                        <Input />
                    </div>
                </div>
                <div className="login-btn-links">
                <div className="forgot">
                    <a href="">Forgot password?</a>
                </div>
                <div className="login-btn">
                    <Link to="/">Login</Link>
                </div>
                <div className="signup-link">
                    <p>Don't have an account?</p>
                    <Link to="/signup">Signup</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AccountLog