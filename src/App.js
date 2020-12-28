import React from "react";
import "./App.css";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import UsersView from "./components/UsersView";
import API from "./utils/API";


class App extends React.Component {
  state = {
    allUsers: [],
    filteredUsers: [],
    searchTerm: "",
  }

    // change (setState) searchTerm
      // filter users based on searchTerm
      // sort if relevant
    // sortUsers
      // using js sort (by string, or if you want to sort by number (DOB))
      // optionally implement, up or down

  // component did mount
  componentDidMount() {
    // call API (utils)
    API.getUsers().then(employees => {
      this.setState({ allUsers: employees.data.results})
    })
  }

  // handleInputChange
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state = setState
    this.setState({
      [name]: value
    })
    // console.log(value)
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FormInput handleInputChange={this.handleInputChange} searchTerm={this.state.searchTerm} />
        <UsersView employees={this.state.allUsers} />
      </div>
    );
  }
}
export default App;