import React from "react"
import './Register.css'

class Register extends React.Component{
  constructor(prop){
    super(prop)

    this.state = {
      email:"",
      username:"",
      password:""
    }
  }

  updateEmail = (event) => {
    this.setState({email:event.target.value})
  }
  updateUsername = (event) => {
    this.setState({username:event.target.value})
  }
  updatePassword = (event) => {
    this.setState({password:event.target.value})
  }
  onKeyEnter = (e) => {
    if (e.key === 'Enter'){
      this.onSubmit()
    }
  }
  onSubmit = () => {
    const emailField = document.getElementsByClassName("input-field")[0]
    const passField = document.getElementsByClassName("input-field")[1]
    const usernameField = document.getElementsByClassName("input-field")[2]

    const emailError = document.getElementsByClassName("errorMsg")[0]
    const passError = document.getElementsByClassName("errorMsg")[1]
    const usernameError = document.getElementsByClassName("errorMsg")[2]

    if ((emailField.value.length === 0 && !emailError.classList.contains("active"))){
      emailError.classList.toggle("active")
    }
    else if (emailField.value.length != 0 && emailError.classList.contains("active")){
      emailError.classList.toggle("active")
    }

    if ((usernameField.value.length === 0 && !this.validateUsername(usernameField.value)) && !usernameError.classList.contains("active")){
      usernameError.classList.toggle("active")
    }
    else if ((usernameField.value.length !== 0 && this.validateUsername(usernameField.value)) && usernameError.classList.contains("active")){
      usernameError.classList.toggle("active")
    }

    if (passField.value.length === 0 && !passError.classList.contains("active")){
      passError.classList.toggle("active")
    }
    else if (passField.value.length !== 0 && passError.classList.contains("active")){
      passError.classList.toggle("active")
    }

    if (emailField.value.length !== 0 && usernameField.value.length !== 0 && passField.value.length !== 0 && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailField.value)){
      console.log(this.state)
      fetch("https://safe-taiga-39517.herokuapp.com/register", {
        method:"post",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
          username:this.state.username,
          email:this.state.email,
          password:this.state.password
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data === "success"){
          this.props.onMasterRouteChange("login")
        }
        else{
          alert("Cant register, try again")
        }
      })
    }
  }
  validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){

    }
    else{
      return false
    }
  }
  validateUsername = (username) => {
    return /^[a-z0-9_\.]+$/.exec(username)
  }

  render(){
    const { onMasterRouteChange } = this.props
    return(
        <div className='reg-main main-container'>
            <div className='reg-box box-container'>
                <div className='title'>REGISTER</div>
                <div className='field'>
                    <input type='tex' placeholder='Email' className='input-field' onChange={this.updateEmail} onKeyDown={this.onKeyEnter}></input>
                    <label className='errorMsg'>Invalid email</label>
                    <input type='tex' placeholder='Username' className='input-field' onChange={this.updateUsername} onKeyDown={this.onKeyEnter}></input>
                    <label className='errorMsg'>Invalid username</label>
                    <input type='password' placeholder='Password' className='input-field' onChange={this.updatePassword} onKeyDown={this.onKeyEnter}></input>
                    <label className='errorMsg'>Invalid password</label>
                </div>
                <button className='reg-button' onClick={this.onSubmit}>Register</button>
                <div className='div-line'></div>
                <div className='reg-page-links'>
                    <a className='normal-link' onClick={()=>onMasterRouteChange('login')}>already have an account ?</a>
                </div>
            </div>
        </div>
    )
  }
}

export default Register
