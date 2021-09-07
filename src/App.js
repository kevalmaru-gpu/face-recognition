import React from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ForgotPass from './Pages/ForgotPassword/ForgotPass';
import Home from './Pages/Home/Home';

class App extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {
      route: 'home'
    }
  }

  onMasterRouteChange = (route) => {
    this.setState({route:route})
  }

  render(){
    return (
      <div>
        {
          this.state.route === 'login'
          ?
            <Login onMasterRouteChange={this.onMasterRouteChange}/>
          :
          this.state.route === 'register'
          ?
            <Register onMasterRouteChange={this.onMasterRouteChange}/>
          :
          this.state.route === 'forgotPass'
          ?
            <ForgotPass onMasterRouteChange={this.onMasterRouteChange}/>
          :
          this.state.route === 'home'?
            <Home onMasterRouteChange={this.onMasterRouteChange}/>
          :
            <Login onMasterRouteChange={this.onMasterRouteChange}/>
        }
      </div>
    );
  }
}

export default App
