import { useState } from "react"
import user from "../assets/default-avatar-icon-of-social-media-user-vector.jpg"
import { Link } from "react-router-dom"


function LogIn() {
    const [login, setLogin] = useState(false)

    const toggleLogin = () => {
        setLogin(!login)
    }

    return (

        <div className="login">

            <img onClick={toggleLogin} src={user} alt="" />

            {login && (
                <div className="login-container">

                    <Link to="/signup" className="registration">Sign Up</Link>
                    <Link to="/login" className="registration">Log in</Link>

                </div>
            )}

        </div>


    )

}

export default LogIn