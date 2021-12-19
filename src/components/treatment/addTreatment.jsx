import axios from "axios";
import React, { Component } from "react";
import Joi from "joi-browser";

class AddTreatments extends React.Component {
  state = {
    treatment: {
      reports: "",
      medicines: "",
      description: "",
    },
    errors: {},
    errMsg: "",
  };
  // define schema to validate input field values
  schema = {
    reports: Joi.string().min(3).max(20).required(),
    medicines: Joi.string().min(3).max(20).required(),
    description: Joi.string().min(1).max(20).required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.treatment, this.schema, {
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
    // copy state treatment object to local variable treatment
    const treatment = { ...this.state.treatment };

    // update local treatment object with values entered by user
    treatment[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ treatment: treatment });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    axios
      .post("http://localhost:8080/treatments", this.state.treatment)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added treatment with Id : " +
            this.state.treatment.id +
            " successfully!"
        );
        this.props.history.push("/treatments");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };

  render() {
    // Object Destructuring
    const { reports, medicines, description } = this.state.treatment;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto ">
        <h3 className="fw-bolder">Add Treatment</h3>
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
            {errors && <small>{errors.reports}</small>}
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
            {errors && <small>{errors.medicines}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
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
            {errors && <small>{errors.description}</small>}
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

export default AddTreatments;
