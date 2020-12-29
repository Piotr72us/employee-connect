import React from "react";

function EmployeeCard(props) {
  return (
    <>
      {props.employees.length > 0 ? props.employees.map((employee, index) => {
        return (

          <div className="empCard" key={index}>
            <div className="row">
              <div className="col-sm">
                <div className="img-container">
                  <img className="headshot" alt={employee.name.first} src={employee.picture.large}/>
                </div>
              </div>
              <div className="col-sm center">
                <p><strong>{employee.name.first} {employee.name.last}</strong></p>
              </div>
              <div className="col-sm center">
                <p>{employee.email}</p>
              </div>
              <div className="col-sm center">
                <p>{employee.cell}</p>
              </div>
            </div>
          </div>
        )
      }) : "No search results found"}
    </>
  );
}

export default EmployeeCard;