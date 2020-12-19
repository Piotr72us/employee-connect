import React from "react";
import EmployeeCard from "./EmployeeCard";

function UsersView(props) {

  return (<div>
    {console.log(props.employees)}
    <h1>Users View</h1>
    <EmployeeCard employees={props.employees} />
    </div>);
}

export default UsersView;