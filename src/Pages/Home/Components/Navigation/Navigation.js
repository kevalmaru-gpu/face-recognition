import React from "react";
import './Navigation.css'

class Navigation extends React.Component{
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
                    <a onClick={this.toggleMenu} className='toggle-button'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </a>
                    <div className='navbar-links'>
                        <ul>
                            <li><a onClick={() => changeRoute('desc')}>Description</a></li>
                            <li><a onClick={() => changeRoute('form')}>Face Recognition</a></li>
                            <li><a onClick={() => onMasterRouteChange('login')}>Sign out</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation
