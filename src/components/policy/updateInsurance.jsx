import React, { Component } from "react";
import axios from "axios";
class UpdatePolicy extends React.Component {
  state = {
    insurances: {
      pName: "",
      pTerm: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/api/getPolicy/${this.props.match.params.pNum}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ insurances: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    const insurances = { ...this.state.insurances };
    //console.log(insurance);
    //console.log(event.target.name);
    //console.log(event.target.value);
    insurances[event.target.name] = event.target.value;
    this.setState({ insurances: insurances });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .post("http://localhost:8080/api/addPolicy", this.state.insurances)
      .then((res) => {
        console.log(res.data);
        alert("Added policy " + this.state.insurances.pName + " successfully");
        this.props.history.push("/insurance");
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { pName, pTerm } = this.state.insurances;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="pName" class="form-label">
              PolicyName
            </label>
            <input
              type="text"
              className="form-control"
              id="pName"
              aria-describedby="emailHelp"
              value={pName}
              name="pName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pTerm" class="form-label">
              pTerm
            </label>
            <input
              type="text"
              className="form-control"
              //aria-describedby="emailHelp"
              id="pTerm"
              value={pTerm}
              name="pTerm"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdatePolicy;
