import React, { Component } from "react";
import axios from "axios";
import Joi, { errors } from "joi-browser";
class AddInsurance extends React.Component {
  state = {
    insurances: {
      pName: "",
      pTerm: 1,
    },
    errors: {},
    errMsg: "",
  };
  schema = {
    pName: Joi.string().min(3).max(9).required(),
    pTerm: Joi.number().min(1).max(50).required(),
  };
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.insurances, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
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
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    axios
      .post("http://localhost:8080/api/addPolicy", this.state.insurances)
      .then((res) => {
        console.log(res.data);
        alert("Added policy " + this.state.insurances.pName + " successfully");
        this.props.history.push("/insurance");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };
  render() {
    const { pName, pTerm } = this.state.insurances;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto">
        <h3>Add Insurance Policy</h3>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form
          onSubmit={this.handleSubmit}
          className="shadow p-3 mb-5 bg-body rounded mt-3"
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
            {errors && <small>{errors.pName}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="pTerm" class="form-label">
              PolicyTerm
            </label>
            <input
              type="number"
              className="form-control"
              //aria-describedby="emailHelp"
              id="pTerm"
              aria-describedby="emailHelp"
              value={pTerm}
              name="pTerm"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.pTerm}</small>}
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

export default AddInsurance;