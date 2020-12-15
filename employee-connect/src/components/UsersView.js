import React from "react";
import getUsers from "../utils/API"

function UsersView(props) {
  console.log("Here are our users", getUsers)
  // console.log("Here are our users", getUsers.results[0].name.first)
   // props: users (filteredUsers)
  
   // button to filter by name 
      // onClick -> this.sortUsers
  return (<div>
    <h1>Users View</h1>
    <h2>
      <p>
        {/* {getUsers.results[0].name.first} */}
      </p>
    </h2>
    </div>);
}

export default UsersView;