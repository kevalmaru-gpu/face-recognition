import React from 'react';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ForgotPass from './Pages/ForgotPassword/ForgotPass';
import Home from './Pages/Home/Home';
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: "43c8acfc16d44abd8913ceb2884e0422"
})

class App extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {
      route: 'login',
      imageLink: '',
      box: {}
    }
  }

  componentDidMount(){
    fetch("http://localhost:200/")
    .then(res => res.json())
    .then(data => console.log(data))
  }

  onMasterRouteChange = (route) => {
    this.setState({route:route})
  }

  onImageLinkChange = (event) => {
    this.setState({imageLink:event.target.value})
  }

  calculateFaceData = (data) => {
    const faceData = data.outputs[0].data.regions[0].region_info.bounding_box
    const inputImage = document.getElementById('inputImage')
    const width = Number(inputImage.width)
    const height = Number(inputImage.height)

    return{
      leftCol: (faceData.left_col * width + 10),
      topRow: (faceData.top_row * height) - 10,
      rightCol: (width - (faceData.right_col * width)),
      bottomRow: (height - (faceData.bottom_row * height))
    }
  }
  displayFaceBox = (boxData) => {
    console.log(boxData)
    this.setState({box:boxData})
  }

  onFindButton = () => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b",this.state.imageLink)
    .then(res => this.displayFaceBox(this.calculateFaceData(res)))
    .catch(err => alert(err))
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
            <Home onMasterRouteChange={this.onMasterRouteChange} onFindButton={this.onFindButton} onImageLinkChange={this.onImageLinkChange} imageLink={this.state.imageLink} box={this.state.box}/>
          :
            <Login onMasterRouteChange={this.onMasterRouteChange}/>
        }
      </div>
    );
  }
}

export default App
