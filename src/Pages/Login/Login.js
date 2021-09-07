import React from "react";
import './Login.css'

const Login = ({onMasterRouteChange}) => {
    return(
        <div className='login-main main-container'>
            <div className='login-box box-container'>
                <h1 className='title'>LOGIN</h1>
                <div className='field'>
                    <input type='tex' placeholder='Username' className='input-field'></input>
                    <input type='password' placeholder='Password' className='input-field'></input>
                </div>
                <button className='login-button'>Login</button>
                <div className='div-line'></div>
                <div className='login-page-links'>
                    <a href='#' onClick={()=>onMasterRouteChange('forgotPass')}>Forgot password ?</a>
                    <a href='#' onClick={()=>onMasterRouteChange('register')}>New user ?</a>
                </div>
            </div>
        </div>
    )
}

export default Login