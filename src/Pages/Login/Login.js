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

  componentDidMount = () => {
    if (sessionStorage.getItem("isLogedIn") === "1"){
      this.login(sessionStorage.getItem("username"),sessionStorage.getItem("password"))
    }
  }

  updateUsername = (event) => {
    this.setState({username:event.target.value})
  }
  updatePassword = (event) => {
    this.setState({password:event.target.value})
  }
  onKeySubmit = (e) => {
    if (e.key === 'Enter'){
      this.onSubmit()
    }
  }
  onSubmit = () => {
    const usernameField = document.getElementsByClassName("input-field")[0];
    const passField = document.getElementsByClassName("input-field")[1];

    const usernameError = document.getElementsByClassName("errorMsg")[0]
    const passError = document.getElementsByClassName("errorMsg")[1]

    if ((usernameField.value.length === 0 && !usernameError.classList.contains("active"))){
      usernameError.classList.toggle("active")
    }
    else if (usernameField.value.length !== 0 && usernameError.classList.contains("active")){
      usernameError.classList.toggle("active")
    }

    if (passField.value.length === 0 && !passError.classList.contains("active")){
      passError.classList.toggle("active")
    }
    else if (passField.value.length !== 0 && passError.classList.contains("active")){
      passError.classList.toggle("active")
    }

    if (usernameField.value.length !== 0 && passField.value.length !== 0){
      this.login(usernameField.value,passField.value)
    }
  }

  login = (username,password) => {
    fetch("https://safe-taiga-39517.herokuapp.com/login", {
      method:"post",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({
        username:username,
        password:password
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
    sessionStorage.setItem("isLogedIn","1")
    sessionStorage.setItem("username",username)
    sessionStorage.setItem("password",password)
  }

  render(){
    const { onMasterRouteChange } = this.props

    return(
        <div className='login-main main-container'>
            <div className='login-box box-container'>
                <h1 className='title'>LOGIN</h1>
                <div className='field'>
                  <input id='username' type='tex' placeholder='Username' onKeyDown={this.onKeySubmit} className='input-field' onChange = {this.updateUsername}></input>
                  <label className='errorMsg'>Invalid email</label>
                  <input id='password' type='password' placeholder='Password' onKeyDown={this.onKeySubmit} className='input-field' onChange = {this.updatePassword}></input>
                  <label className='errorMsg'>Invalid password</label>
                </div>
                <button className='login-button' onClick={this.onSubmit}>Login</button>
                <div className='div-line'></div>
                <div className='login-page-links'>
                    {/* <a className='normal-link' onClick={()=>onMasterRouteChange('forgotPass')}>Forgot password ?</a> */}
                    <a className='normal-link' onClick={()=>onMasterRouteChange('register')}>New user ?</a>
                </div>
            </div>
        </div>
    )
  }
}

export default Login
