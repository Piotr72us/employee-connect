import React from "react";

function EmployeeCard(props) {
  return (
    <>
      {props.employees.length > 0 ? props.employees.map((employee, index) => {
        return (

          <div className="container empCard" key={index}>
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


          // <div className="card" key={index}>
          //   <div className="img-container">
          //     <img alt={employee.name.first} src={employee.picture.medium}/>
          //   </div>
          //   <div className="content">
          //     <ul style={{listStyleType: "none"}}>
          //       <li>
          //         <strong>Name:</strong> {employee.name.first} {employee.name.last}
          //       </li>
          //       <li>
          //         <strong>Email:</strong> {employee.email}
          //       </li>
          //       <li>
          //         <strong>Cell phone:</strong> {employee.cell}
          //       </li>
          //     </ul>
          //   </div>
          //   <span className="remove"></span>
          // </div>

        )
      }) : "no search found"}
    </>
  );
}

export default EmployeeCard;