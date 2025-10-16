import { Link } from "react-router-dom"
import Input from "../inputs/Input"
import { useState } from "react"
import PasswordInput from "../inputs/PasswordInput"

function AccountSignUP() {
    const [showPassword, setShowPassword] = useState(false)

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
                        <PasswordInput showPassword={showPassword}/>
                    </div>
                    <div>
                        <p>Confirm password</p>
                        <PasswordInput showPassword={showPassword}/>
                    </div>
                    <div className="see-password">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <p>Show password</p>
                    </div>
                </div>
                <div className="login-btn-links">
                    <div className="login-btn">
                        <Link to="/">Signup</Link>
                    </div>
                    <div className="signup-link">
                        <p>Already have an account?</p>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSignUP