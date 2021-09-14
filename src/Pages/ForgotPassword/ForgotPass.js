import React from "react";
import './ForgotPass.css'

const ForgotPass = ({onMasterRouteChange}) => {
    return(
        <div className='fp-main main-container'>
            <div className='fp-box box-container'>
                <div className='field'>
                    <input type='tex' placeholder='Username' className='input-field'></input>
                </div>
                <button className='fp-button'>Find</button>
                <div className='div-line'></div>
                <div className='fp-page-links'>
                    <a href='/#' onClick={ ()=>onMasterRouteChange('login') }>back to login</a>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass
