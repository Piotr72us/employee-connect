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

        <div className="empBar">
            <div className="row">
              <div className="col-sm">
                <div className="img-container">
                <p><strong>Image:</strong></p>
                </div>
              </div>
              <div className="col-sm">
                <p><strong>Name:</strong></p>
              </div>
              <div className="col-sm">
                <p><strong>Email:</strong></p>
              </div>
              <div className="col-sm">
              <p><strong>Cell phone:</strong></p>
              </div>
            </div>
          </div>

      </div>
    );
}

export default FormInput;
