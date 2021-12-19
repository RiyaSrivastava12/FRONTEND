import axios from "axios";
import React, { Component } from "react";
import Joi from "joi-browser";
class AddPatientPersonalDetails extends React.Component {
  state = {
    patientPersonalDetails: {
      pName: "",
      pAge: "",
      phoneNo: "",
      gender: "",
      address: "",
      symptoms: "",
    },
    errors: {},
    errMsg: "",
  };
  // define schema to validate input field values
  schema = {
    pName: Joi.string().min(3).max(20).required(),
    pAge: Joi.number()
      .integer()

      .required(),
    phoneNo: Joi.number().integer().min(9999999900).max(9999999999).required(),
    gender: Joi.string().min(3).max(20).required(),
    address: Joi.string().min(3).max(20).required(),
    symptoms: Joi.string().min(3).max(20).required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(
      this.state.patientPersonalDetails,
      this.schema,
      {
        abortEarly: false,
      }
    );

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
    //copying  patient state object to local variable
    const patientPersonalDetails = { ...this.state.patientPersonalDetails };
    console.log(patientPersonalDetails);
    console.log(event.target.name); //name of field-fullname
    console.log(event.target.value); //value entered in the field-a

    //update local  patient object with values entered by user
    patientPersonalDetails[event.target.name] = event.target.value;
    // patient[fullname]-a;-update value
    //patient.fullname=a;-update value

    //update state object using setstate method
    this.setState({ patientPersonalDetails: patientPersonalDetails });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handlesubmit");
    // send post request to rest api
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;

    axios
      .post(
        "http://localhost:8080/PatientPersonalDetails/add",
        this.state.patientPersonalDetails
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "added patient " +
            this.state.patientPersonalDetails.pName +
            "successfully!"
        );
        this.props.history.push("/patient");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };
  render() {
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto">
        <h3>Add Patient</h3>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form
          onSubmit={this.handleSubmit}
          className=" shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="pName" className="form-label">
              Patient Name
            </label>
            <input
              type="text"
              className="form-control"
              id="pName"
              aria-describedby="emailHelp"
              value={this.state.patientPersonalDetails.pName}
              name="pName"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.pName}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="pAge" className="form-label">
              Patient Age
            </label>
            <input
              type="text"
              className="form-control"
              id="page"
              aria-describedby="emailHelp"
              value={this.state.patientPersonalDetails.pAge}
              name="pAge"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.pAge}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNo" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNo"
              aria-describedby="emailHelp"
              value={this.state.patientPersonalDetails.phoneNo}
              name="phoneNo"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.phoneNo}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <input
              type="text"
              className="form-control"
              id="gender"
              aria-describedby="emailHelp"
              value={this.state.patientPersonalDetails.gender}
              name="gender"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.gender}</small>}
          </div>
          <div className="mb-3">
            <label fhtmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="emailHelp"
              value={this.state.patientPersonalDetails.address}
              name="address"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.address}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="symptoms" className="form-label">
              Symptoms
            </label>
            <input
              type="text"
              className="form-control"
              id="symptoms"
              aria-describedby="emailHelp"
              value={this.state.patientPersonalDetails.symptoms}
              name="symptoms"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.symptoms}</small>}
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

export default AddPatientPersonalDetails;
