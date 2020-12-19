import React from "react";

function FormInput (props) {

  console.log(props)

    return (
      <div>
        <p>
          Hello {props.firstName} {props.lastName}
        </p>
        <form className="form">
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button onClick={props.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
}

export default FormInput;
