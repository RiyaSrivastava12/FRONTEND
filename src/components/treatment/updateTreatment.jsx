import React, { Component } from "react";
import axios from "axios";

class UpdateTreatment extends React.Component {
  state = {
    treatment: {
      reports: "",
      medicines: "",
      description: "",
    },
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8080/treatments/${this.props.match.params.tid}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ treatment: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    //logic to update state object
    // console.log(student);
    // console.log(event.target.name); // name of field - fullName
    // console.log(event.target.value); // value entered in the field -a
    // student[fullName] = a;
    // student.fullName = a;

    // copy state student object to local variable student
    const treatment = { ...this.state.treatment };

    // update local student object with values entered by user
    treatment[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ treatment: treatment });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    axios
      .put(
        `http://localhost:8080/treatments/${this.props.match.params.tid}`,
        this.state.treatment
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated treatment " + this.state.treatment.dname + " successfully!"
        );
        this.props.history.push("/treatments");
      })
      .catch((err) => console.log(err));
  };
  render() {
    // Object Destructuring
    const { reports, medicines, description } = this.state.treatment;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="reports" className="form-label">
              Reports
            </label>
            <input
              type="text"
              className="form-control"
              id="reports"
              aria-describedby="emailHelp"
              value={reports}
              name="reports"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="medicines" className="form-label">
              Medicines
            </label>
            <input
              type="text"
              className="form-control"
              id="medicines"
              aria-describedby="emailHelp"
              value={medicines}
              name="medicines"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              aria-describedby="emailHelp"
              value={description}
              name="description"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateTreatment;
