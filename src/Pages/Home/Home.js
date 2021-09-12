import React from "react";
import './Home.css'
import Navigation from './Components/Navigation/Navigation'
import Description from "./Components/Description/Description";
import HomeForm from "./Components/HomeForm/HomeForm";
import LinkImage from "./Components/LinkImage/LinkImage";

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
        const { onMasterRouteChange, onFindButton, onImageLinkChange, imageLink, box} = this.props

        return(
            <div className='home-main'>
                <Navigation changeRoute={this.changeRoute} onMasterRouteChange={onMasterRouteChange}/>
                {
                    this.state.route === 'form'
                    ?
                        <div>
                            <HomeForm onFindButton={onFindButton} onImageLinkChange={onImageLinkChange}/>
                            <LinkImage imageLink={imageLink} box={box}/>
                        </div>
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