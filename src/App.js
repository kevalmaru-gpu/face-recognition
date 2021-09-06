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

  onRouteChange = (route) => {
    this.setState({route:route})
  }

  render(){
    return (
      <div>
        {
          this.state.route === 'login'
          ?
            <Login onRouteChange={this.onRouteChange}/>
          :
          this.state.route === 'register'
          ?
            <Register onRouteChange={this.onRouteChange}/>
          :
          this.state.route === 'forgotPass'
          ?
            <ForgotPass onRouteChange={this.onRouteChange}/>
          :
          this.state.route === 'home'?
            <Home onRouteChange={this.onRouteChange}/>
          :
            <Login onRouteChange={this.onRouteChange}/>
        }
      </div>
    );
  }
}

export default App
