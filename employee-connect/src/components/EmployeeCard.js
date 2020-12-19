import React from "react";

function EmployeeCard(props) {
  return (
    <>
    {props.employees.length > 0 ? props.employees.map((employee, index) => {
      return(
      
        <div className="card" key={index}>
        <div className="img-container">

          <img src={employee.picture.medium}/>
        </div>
        <div className="content">
          <ul style={{listStyleType: "none"}}>
            <li>
              <strong>Name:</strong> {employee.name.first} {employee.name.last}
            </li>
            <li>
              <strong>Email:</strong> {employee.email}
            </li>
            <li>
              <strong>Cell phone:</strong> {employee.cell}
            </li>
          </ul>
        </div>
        <span className="remove">
          𝘅
        </span>
      </div>
      
      )
    })  : "no search found"}
    </>
  
  );

}

export default EmployeeCard;