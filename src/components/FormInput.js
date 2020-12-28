import React from "react";

function FormInput (props) {

  console.log(props)

    return (
      <div>
        <p>
          Hello {props.searchTerm}
        </p>
        <form className="form">
          <input
            value={props.searchTerm}
            name="searchTerm"
            onChange={props.handleInputChange}
            type="text"
            placeholder="First Name / Last Name"
          />
        </form>
      </div>
    );
}

export default FormInput;
