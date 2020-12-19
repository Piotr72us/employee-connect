import React , { useState, useEffect } from "react";
import API from "../utils/API";
import EmployeeCard from "./EmployeeCard";

function UsersView(props) {
  // const [people, setPeople] = useState([]);
  // console.log("Here are our users")


  // useEffect(() => {
  //   API.getUsers().then(employees => {
  //     setPeople(employees.data.results)
  //   })
  // }, []) 
  // console.log("Here are our users", getUsers.results[0].name.first)
   // props: users (filteredUsers)

   // button to filter by name 
      // onClick -> this.sortUsers
  return (<div>
    {console.log(props.employees)}
    <h1>Users View</h1>
    <h2>
      <p>
        {/* {getUsers.results[0].name.first} */}
      </p>
    </h2>
    <EmployeeCard employees={props.employees} />
    </div>);
}

export default UsersView;