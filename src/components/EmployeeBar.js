import React from 'react';
import Card from "./EmployeeCard";

class EmployeeBar extends React.Component {

  state = {
    alphabetical: true,
    sortedEmployees: [],
    employees: []
  }

  componentDidMount() {
    if (this.state.sortedEmployees.length < 1) {
      this.setState({
        sortedEmployees: this.props.presorted
      })
    }
    console.log(this.state.sortedEmployees)
  }

  componentDidUpdate(earlierProps) {
    if (this.props.presorted !== earlierProps.presorted) {
      this.setState({
        sortedEmployees: this.props.presorted
      })
    }
  }

  sortName = () => {
    let sortEmp = [];
    if (this.state.alphabetical) {
      sortEmp = this.props.presorted.sort((a, b) => {
        var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
    } else {
      sortEmp = this.props.presorted.sort((a, b) => {
        var nameA = a.name.last.toLowerCase(), nameB = b.name.last.toLowerCase();
        if (nameA > nameB)
          return -1
        if (nameA < nameB)
          return 1
        return 0
      })
    }
    this.setState({
      alphabetical: !this.state.alphabetical,
      sortedEmployees: sortEmp
    })
  }


  render() {

    return (
      <div>

        <div className="empBar">
          <div className="row">
            <div className="col-sm">
              <div className="img-container">
                <p><strong>Image:</strong></p>
              </div>
            </div>
            <div className="col-sm">
              <p onClick={this.sortName}><strong>Name:</strong></p>
            </div>
            <div className="col-sm">
              <p><strong>Email:</strong></p>
            </div>
            <div className="col-sm">
              <p><strong>Cell phone:</strong></p>
            </div>
          </div>
        </div>

        {
          this.state.sortedEmployees.length > 0 &&
          <Card employees={this.state.sortedEmployees}
          />
        }

      </div>
    )
  }
}

export default EmployeeBar;