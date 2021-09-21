import React from "react";
import './Description.css'

class Description extends React.Component{
    render(){
        const { changeRoute } = this.props

        return(
            <div className='desc-main'>
                <h1>Welcome,</h1>
                <h3>in this webapp you can add picture throgh a link and the AI will detect human face in it. <a className='normal-link' onClick={() => changeRoute('form')}>Try out !</a></h3>
            </div>
        )
    }
}

export default Description
