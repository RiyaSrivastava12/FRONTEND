import axios from "axios";
import React, { Component } from "react";
import Joi from "joi-browser";

class AddPatientHistory extends React.Component {
  state = {
    patientHistory: {
        disease: "",
        dAdvice: "",
        diet: "",
        
      },
    errors: {},
    errMsg: "",
  };
  // define schema to validate input field values
  schema = {
    disease: Joi.string().min(3).max(20).required(),
    dAdvice: Joi.string().min(3).max(20).required(),
    diet: Joi.string().min(1).max(20).required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.patientHistory, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = (event) => {
    //logic to update state object
    // console.log(student);
    // console.log(event.target.name); // name of field - fullName
    // console.log(event.target.value); // value entered in the field -a
    // student[fullName] = a;
    // student.fullName = a;

    // copy state student object to local variable student
    const patientHistory = { ...this.state.patientHistory };

    // update local student object with values entered by user
    patientHistory[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ patientHistory: patientHistory });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    axios
      .post("http://localhost:8080/patientHistories", this.state.patientHistory)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added Patient History " + this.state.patientHistory.dname + " successfully!"
        );
        this.props.history.push("/patientHistories");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };

  render() {
    // Object Destructuring
    const { disease, dAdvice, diet} = this.state.patientHistory;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto ">
        <h3 className="fw-bolder">Add Patient History</h3>
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
        {errors && <small>{errors.disease}</small>}
      </div>
            
          
      <div className="mb-3">
      <label htmlFor="dAdvice" className="form-label">
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
      {errors && <small>{errors.dAdvice}</small>}
    </div>
            
         
    <div className="mb-3">
    <label htmlFor="diet" className="form-label">
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
    {errors && <small>{errors.diet}</small>}
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

export default AddPatientHistory;