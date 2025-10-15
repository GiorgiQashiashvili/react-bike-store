import { Link } from "react-router"
import Input from "../inputs/Input"

function AccountSignUP() {
    return (
        <div className="login-main">
            <div className="login-div">
                <div className="login-form">
                    <h1>Signup</h1>
                </div>
                <div className="login-inputs">
                    <div>
                        <p>Email</p>
                        <Input />
                    </div>
                    <div>
                        <p>Create password</p>
                        <Input />
                    </div>
                    <div>
                        <p>Confirm password</p>
                        <Input />
                    </div>
                </div>
                <div className="login-btn-links">
                    <div className="login-btn">
                        <Link to="/">Signup</Link>
                    </div>
                    <div className="signup-link">
                        <p>Already have an account?</p>
                        <a href="/login">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSignUP