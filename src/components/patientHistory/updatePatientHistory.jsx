import React, { Component } from "react";
import axios from "axios";

class UpdatePatientHistory extends React.Component {
  state = {
    patientHistory: {
      disease: "",
      dAdvice: "",
      diet: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/patientHistories/${this.props.match.params.id}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ patientHistory: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    // copy state patientHistory object to local variable patientHistory
    const patientHistory = { ...this.state.patientHistory };

    // update local patientHistory object with values entered by user
    patientHistory[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ patientHistory: patientHistory });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    axios
      .put(
        `http://localhost:8080/patientHistories/${this.props.match.params.id}`,
        this.state.patientHistory
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated patientHistory " +
            this.state.patientHistory.id +
            " successfully!"
        );
        this.props.history.push("/patientHistories");
      })
      .catch((err) => console.log(err));
  };
  render() {
    // Object Destructuring
    const { disease, dAdvice, diet } = this.state.patientHistory;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="disease" className="form-label">
              Disease
            </label>
            <input
              type="text"
              className="form-control"
              id="disease"
              aria-describedby="emailHelp"
              value={disease}
              name="disease"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="specialization" className="form-label">
              Doctor Advice
            </label>
            <input
              type="text"
              className="form-control"
              id="dAdvice"
              aria-describedby="emailHelp"
              value={dAdvice}
              name="dAdvice"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="qualification" className="form-label">
              Diet
            </label>
            <input
              type="text"
              className="form-control"
              id="diet"
              aria-describedby="emailHelp"
              value={diet}
              name="diet"
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

export default UpdatePatientHistory;
