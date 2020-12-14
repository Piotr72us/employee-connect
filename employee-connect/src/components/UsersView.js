import React from "react";
import getUsers from "../utils/API"

function UsersView(props) {
  console.log("Here are our users", getUsers)
  // console.log("Here are our users", getUsers.results[0].name.first)
   // props: users (filteredUsers)
   // button to filter by name 
      // onClick -> this.sortUsers
  return <div>Users View</div>;
}

export default UsersView;