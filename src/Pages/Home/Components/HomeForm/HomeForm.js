import React from "react";
import './HomeForm.css'

class HomeForm extends React.Component{
    render(){
        return(
            <div className='hf-main'>
                <input type='tex' placeholder='Image Link' className='input-field'/>
                <button>Find</button>
            </div>
        )
    }
}

export default HomeForm