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
  onSubmit = () => {
    fetch("http://localhost:200/register", {
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

  render(){
    const { onMasterRouteChange } = this.props
    return(
        <div className='reg-main main-container'>
            <div className='reg-box box-container'>
                <div className='title'>REGISTER</div>
                <div className='field'>
                    <input type='tex' placeholder='Email' className='input-field' onChange={this.updateEmail}></input>
                    <input type='tex' placeholder='Username' className='input-field' onChange={this.updateUsername}></input>
                    <input type='password' placeholder='Password' className='input-field' onChange={this.updatePassword}></input>
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
