import React from "react";
import FormInput from "./FormInput";
import EmployeeBar from "./EmployeeBar";

class UsersView extends React.Component {

  state = {
    searchTerm: "",
    filteredEmployees: []
  };

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
      let values = item.name.first + item.name.last + item.email + item.cell;
      return values.indexOf(userTyped) !== -1;
    });

    this.setState({
      filteredEmployees: filteredList
    });
  }

  render() {
    return (<div>
      <FormInput handleInputChange={this.handleInputChange} searchTerm={this.state.searchTerm} />

      {this.state.filteredEmployees.length > 0 &&
        <EmployeeBar presorted={this.state.filteredEmployees} />}

    </div>);
  }
}

export default UsersView;