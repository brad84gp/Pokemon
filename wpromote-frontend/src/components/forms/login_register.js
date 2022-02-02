import React, { useState } from "react";

import LoginForm from "./login";
import RegisterForm from "./register";

const LoginRegisterFrom = () => {


    const [toggle, setToggle] = useState(true)


    return (
        <div>
            <div>
                <div >
                    <input type="checkbox" name="switch" id="switch" onClick={() => setToggle(!toggle)}/>
                    <label className="slider" for="switch"></label>
                </div>
            </div>
            <div id="loginForm">
                {toggle ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    )
}

export default LoginRegisterFrom