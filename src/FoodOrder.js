import React, { useState } from "react"
import MovieInfo from './MoviesList'
import styles from './FoodOrder.module.scss';
import TestComponent from './TestComponent';
import Footer from './Footer'

const FoodOrder = () => {
  //const [show, setShow,] = useState(false);

  return (
    <React.Fragment>

    <div className="container"> 
     
        <div className={styles.content_head}>
          <div className="row ">

            <div className="col-md-4 ">
              <TestComponent />

            </div>
            <div className="col-md-4" >

             

            </div>
            <div className=" col-md-4 content_head">
              <TestComponent />
            </div>
            <div className=" col-md-4 content_head">
             
            </div>
            <div className=" col-md-4 content_head">
              <TestComponent />
            </div>
            <div className=" col-md-4 content_head">
              <TestComponent />
            </div>
            <div className=" col-md-4 content_head">
              <TestComponent />
            </div>
            <div className=" col-md-4 content_head">
             
            </div>
            <div className=" col-md-4 content_head">
              <TestComponent />
            </div>
            <div className=" col-md-4 content_head">
              <TestComponent />
            </div>
            <div className=" col-md-4 content_head">
              <TestComponent />
            </div>
            <div className=" col-md-4 content_head">
              
            </div>

            <div className=" col-md-4 content_head">
              <TestComponent />
            </div><div className=" col-md-4 content_head">
             
            </div>
            <div className=" col-md-4 content_head">
              <TestComponent />
            </div>
            <div className=" col-md-4 content_head">
             
            </div>

          </div>
        </div>

      </div>
       <Footer/>
    </React.Fragment>

  )

}

export default FoodOrder;
