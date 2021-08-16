import React,{useState} from 'react';
import { Button, Modal } from 'react-bootstrap';


const MovieInfo = (props) => {


   

    return (
        <React.Fragment>

            <Modal show={props.show}>
                <Modal.Header closeButton onClick={props.closeModal}>
                    Hello Modal Header
                </Modal.Header>
                <Modal.Body>
                    <h4>Modal Body Here..............!</h4>


                </Modal.Body>
                <Modal.Footer>

                    <Button onClick={props.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment>
    )
}
export default MovieInfo