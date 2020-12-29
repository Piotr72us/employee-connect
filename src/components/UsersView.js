import React from "react";
import EmployeeCard from "./EmployeeCard";
// import API from "../utils/API";
import FormInput from "./FormInput";


class UsersView extends React.Component {

  state = {
    searchTerm: "",
    filteredEmployees: []
};
  // componentDidMount() {
  //   // call API (utils)
  //   API.getUsers().then(employees => {
  //     this.setState({ allUsers: employees.data.results})
  //   })
  // }

    componentDidMount() {
      if (this.state.filteredEmployees.length < 1) {
          this.setState({
              filteredEmployees: this.props.employees
          })
      }
    }

    handleInputChange = event => {
      this.setState({
          searchTerm: event.target.value
      });
      let userTyped = event.target.value;
      const filteredList = this.props.employees.filter((item) => {
          let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age + item.email + item.cell;
          return values.indexOf(userTyped) !== -1;

      });

      this.setState({
          filteredEmployees: filteredList

      });
  }





render () {
  return (<div>
    <FormInput handleInputChange={this.handleInputChange} searchTerm={this.state.searchTerm} />
    {/* {console.log(props.employees)} */}
    
    <EmployeeCard employees={this.state.filteredEmployees} />
    </div>);
  }
}

export default UsersView;