import React from "react"
import './ImageBody.css';

const ImageBody = ({ data,search }) => {


    return (
        <React.Fragment>
            <h4> Serach results : <b>{search}</b></h4>
            <header className="wrapper">

            {data.map((image) => {

                return (
                        <div key="image.id" className="container">
                            <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} />
                                  <h5>Image Farm : {image.farm}</h5>
                              <h5>Image Server  :{image.server}</h5>
                              <h5> Image secret :{image.secret}</h5>
                        </div>
                )
            })}


</header>







        </React.Fragment>
    )
}

export default ImageBody;