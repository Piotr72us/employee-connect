import React from "react";
import "./App.css";
import Header from "./components/Header";
import UsersView from "./components/UsersView";
import API from "./utils/API";


class App extends React.Component {
  state = {
    allUsers: [],
  }

  // component did mount
  componentDidMount() {
    // call API (utils)
    API.getUsers().then(employees => {
      this.setState({ allUsers: employees.data.results })
      console.log(employees);
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.allUsers.length > 0 &&
          <UsersView employees={this.state.allUsers} />
        }
      </div>
    );
  }
}
export default App;