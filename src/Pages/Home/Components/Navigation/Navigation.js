import React from "react";
import './Navigation.css'

const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: '43c8acfc16d44abd8913ceb2884e0422'
});

class Navigation extends React.Component{
    constructor(prop){
        super(prop)
    }

    toggleMenu = () =>{
        const navBarLinks = document.getElementsByClassName("navbar-links")[0]
        const navBar = document.getElementsByTagName("nav")[0]

        navBarLinks.classList.toggle('active')
        navBar.classList.toggle('active')
    }

    render(){
        const { changeRoute, onMasterRouteChange} = this.props

        return(
            <div className='home-nav'>
                <nav>
                    <div className='title'>Faceiotic</div>
                    <a href='#' onClick={this.toggleMenu} className='toggle-button'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </a>
                    <div className='navbar-links'>
                        <ul>
                            <li><a href='#' onClick={() => changeRoute('desc')}>Description</a></li>
                            <li><a href='#' onClick={() => changeRoute('form')}>Face Recognition</a></li>
                            <li><a href='#' onClick={() => onMasterRouteChange('login')}>Sign out</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation