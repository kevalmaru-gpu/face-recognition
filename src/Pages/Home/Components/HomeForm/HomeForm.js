import React from "react";
import './HomeForm.css'

class HomeForm extends React.Component{
    render(){
        const { onFindButton, onImageLinkChange} = this.props

        return(
            <div className='hf-main'>
                <input type='tex' placeholder='Image Link' className='input-field' onChange={onImageLinkChange}/>
                <button onClick={onFindButton}>Find</button>
            </div>
        )
    }
}

export default HomeForm