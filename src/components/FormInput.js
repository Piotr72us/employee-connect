import React from "react";

function FormInput (props) {

  console.log(props)

    return (
      <div>
        <form className="form">
          <input
            value={props.searchTerm}
            name="searchTerm"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    );
}

export default FormInput;
