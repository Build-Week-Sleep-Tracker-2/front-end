import React from 'react'
import { Redirect } from "react-router-dom";

const Logoff = () => {
    localStorage.removeItem("token");

    return (
        <div>
            <Redirect to="/" />;
        </div>
    )
}


export default Logoff;