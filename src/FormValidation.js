import React, { useState } from 'react'
import './FormValidation.css'

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

  const [formData, setFormData] = useState({});

  const changeHandler = (value, key) => {
    setFormData({ ...formElement, ...{ key: value } })
  }


  const submit = () => {
    alert(JSON.stringify(formData))
  }
  return (
    <React.Fragment>
      <div> <h2>Form Validation</h2></div>


      <form>
        {formElement.map((elements) => {
          return                 <table>
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

    </React.Fragment>
  )
}

export default FormValidation