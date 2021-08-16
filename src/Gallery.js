import React, { useState } from 'react'
import ImageBody from "./ImageBody"
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const Gallery = () => {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    const changeHandler = (e) => {
        setSearch(e.target.value)
        //console.log(search)

    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (search)

            fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
                result => result.json().then(

                    res => {
                        setData(res.photos.photo)
                    }
                )

            ).catch(
                error => {
                    throw (error);
                }
            )
        console.log(search);

    }


    return (

        <React.Fragment>
            <h4>Gallery   App</h4>
            <form onSubmit={submitHandler}>
                <input type="text" value={search} onChange={changeHandler} />  <input type="submit" value="Search" />

            </form>
            {data.length >= 1 ? <ImageBody data={data} search={search} /> : <h5>Data not yet loaded</h5>}
            <div>

            </div>

        </React.Fragment>
    )
}

export default Gallery;