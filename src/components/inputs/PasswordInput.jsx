
function PasswordInput({ showPassword }) {

    return (<>
        <input className="input"
            type={showPassword ? "text" : "password"}
        />

    </>
    )
}

export default PasswordInput