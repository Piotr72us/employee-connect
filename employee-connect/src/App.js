import React from "react";
import "./App.css";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import FormCard from "./components/FormCard";
import UsersView from "./components/UsersView";
import API from "./utils/API";

// function FormInput() {
//   return <div>Form Input</div>;
// }

// function UsersView( props) {
//    // props: users (filteredUsers)
//    // button to filter by name 
//       // onClick -> this.sortUsers
//   return <div>Users View</div>;
// }
// const [people, setPeople] = useState([]);
// console.log("Here are our users")


// useEffect(() => {
//   API.getUsers().then(employees => {
//     setPeople(employees.data.results)
//   })
// }, []) 

class App extends React.Component {
  state = {
    allUsers: [],
    filteredUsers: [],
    searchTerm: "",
    firstName: "",
    lastName: "",
    password: ""
  }
  // component did mount
  // call API (utils)
  // setState
  // allUsers: [],
  // filteredUsers: [],
  // handleInputChange
  // change (setState) searchTerm
  // filter users based on searchTerm
  // sort if relevant
  // sortUsers
  // using js sort (by string, or if you want to sort by number (DOB))
  // optionally implement, up or down

  componentDidMount() {
    API.getUsers().then(employees => {
      this.setState({ allUsers: employees.data.results})
    })
  }


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;


    // Updating the input's state
    this.setState({
      [name]: value
    })
    console.log(value)
  };


  render() {
    return (
      <div className="App">
        <Header />
        <FormInput   />
        <FormCard handleInputChange={this.handleInputChange} firstName={this.state.firstName} lastName={this.state.lastName} />
        <UsersView employees={this.state.allUsers} />
      </div>
    );
  }
}
export default App;