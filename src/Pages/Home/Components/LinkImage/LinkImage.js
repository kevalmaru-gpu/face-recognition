import react from "react";
import './LinkImage.css'

const LinkImage = ({imageLink, box}) => {
    return(
        <div className='image-container'>
            <div className='image-child-container'>
                <img id='inputImage' src={imageLink}/>
                <div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow,left:box.leftCol}}></div>
            </div>
        </div>
    )
}

export default LinkImage