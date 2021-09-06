import React from "react";
import './Home.css'
import Navigation from './Components/Navigation/Navigation'
import Description from "./Components/Description/Description";
import HomeForm from "./Components/HomeForm/HomeForm";

class Home extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {
            route:''
        }
    }

    changeRoute = (route) => {
        this.setState({route:route})
    }

    render(){
        const { changeMasterRoute } = this.props

        return(
            <div className='home-main'>
                <Navigation changeRoute={this.changeRoute} changeMasterRoute={changeMasterRoute}/>
                {
                    this.state.route === 'form'
                    ?
                        <HomeForm/>
                    :
                    this.state.route === 'desc'
                    ?
                        <Description changeRoute={this.changeRoute}/>
                    :
                        <Description changeRoute={this.changeRoute}/>
                }
            </div>
        )
    }
}

export default Home