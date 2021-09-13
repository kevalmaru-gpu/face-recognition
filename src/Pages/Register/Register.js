import React from "react"
import './Register.css'

const Register = ({onMasterRouteChange}) => {
    return(
        <div className='reg-main main-container'>
            <div className='reg-box box-container'>
                <div className='title'>REGISTER</div>
                <div className='field'>
                    <input type='tex' placeholder='Email' className='input-field'></input>
                    <input type='tex' placeholder='Username' className='input-field'></input>
                    <input type='password' placeholder='Password' className='input-field'></input>
                </div>
                <button className='reg-button' onClick={() => onMasterRouteChange('login')}>Register</button>
                <div className='div-line'></div>
                <div className='reg-page-links'>
                    <a href='#' onClick={()=>onMasterRouteChange('login')}>already have an account ?</a>
                </div>
            </div>
        </div>
    )
}

export default Register