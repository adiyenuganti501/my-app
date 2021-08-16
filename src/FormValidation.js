import React, { useState } from 'react'
import './FormValidation.css'
import { Button, Modal } from 'react-bootstrap';

let formElement = [{
  label: "Name",
  key: "name"
},
{
  label: "Phone Number",
  key: "phone"
},
{
  label: "Email",
  key: "email"
}]

const FormValidation = () => {

  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({});

  const changeHandler = (value, key) => {
    setFormData({ ...formElement, ...{ key: value } })
  }


  const submit = () => {
    alert(JSON.stringify(formData));

  }

  const openModal = () => {

    setShow(true);
  }
  const closeModal = () => {
    setShow(false)
  }
  return (
    <React.Fragment>
      <div> <h2>Form Validation</h2></div>


      <form>
        {formElement.map((elements) => {
          return <table>
            <div>
              <label>
                <tr>  <td> <p>{elements.label}</p> </td> <td>:</td>   <td>  <input value={formData[elements.key]}
                  className="Form_style"
                  onChange={(e) => {
                    changeHandler(e.target.value, elements.key)
                  }} /> </td> </tr>



              </label>

            </div> </table>
        })}
        <br></br>
        <button onClick={(e) => { e.preventDefault(); submit() }} > Submit</button>
      </form>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal show={show}>
          <Modal.Header closeButton onClick={closeModal}>
            Hello Modal Header
          </Modal.Header>
          <Modal.Body>
            <h4>{JSON.stringify(formData[1])}</h4>
          </Modal.Body>
          <Modal.Footer>

            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

    </React.Fragment>
  )
}

export default FormValidation