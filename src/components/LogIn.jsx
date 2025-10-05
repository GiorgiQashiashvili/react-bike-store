import { useState } from "react"

function LogIn() {
    const [login, setLogin] = useState(false)

    const toggleLogin = () => {
        setLogin(!login)
    }

    return (

        <div className="login">

            <button className="account-btn" onClick={toggleLogin}>Log in</button>

            {login && (
                <div className="login-container">

                    <a href=""  className="registration">Registration</a>
                    <a href="" className="registration">Log in</a>

                </div>
            )}

        </div>


    )

}

export default LogIn