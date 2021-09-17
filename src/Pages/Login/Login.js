import React from "react";
import './Login.css'

class Login extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      username:"",
      password:""
    }
  }

  updateUsername = (event) => {
    this.setState({username:event.target.value})
  }
  updatePassword = (event) => {
    this.setState({password:event.target.value})
  }
  onSubmit = () => {
    fetch("http://localhost:200/login", {
      method:"post",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({
        username:this.state.username,
        password:this.state.password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data === "success"){
        this.props.onMasterRouteChange("home")
      }
      else{
        alert(data)
      }
    })

  }

  render(){
    const { onMasterRouteChange } = this.props

    return(
        <div className='login-main main-container'>
            <div className='login-box box-container'>
                <h1 className='title'>LOGIN</h1>
                <div className='field'>
                    <input id='username' type='tex' placeholder='Username' className='input-field' onChange = {this.updateUsername}></input>
                    <input id='password' type='password' placeholder='Password' className='input-field' onChange = {this.updatePassword}></input>
                </div>
                <button className='login-button' onClick={this.onSubmit}>Login</button>
                <div className='div-line'></div>
                <div className='login-page-links'>
                    <a className='normal-link' onClick={()=>onMasterRouteChange('forgotPass')}>Forgot password ?</a>
                    <a className='normal-link' onClick={()=>onMasterRouteChange('register')}>New user ?</a>
                </div>
            </div>
        </div>
    )
  }
}

export default Login
