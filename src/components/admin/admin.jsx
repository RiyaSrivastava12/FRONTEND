import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { margin, textAlign } from "@mui/system";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <section class="key-features" style={{backgroundImage:"url('images/admin1.jpg')"}}>
        <div class="container">
          <div class="inner-title">
            <h2 style={{ textAlign: "center",color:"white" }}>ADMIN PAGE</h2>
            <p style={{ textAlign: "center" }}>
             
            </p>
          </div>

          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="single-key">
              <img src="images/doctor.jpg" class="card-img-top" alt="..." style={{height: "280px"}}/>
                <h5>Manage Doctor Details Here</h5>
                 
                <Button
                    color="inherit"
                    to="/doctors"
                    component={NavLink}
                    style={{ marginRight: "auto" }}
                  >
                  <h5 class="card-title bg-primary" style={{height: "30px", textAlign: "center", color: "white",margin:"auto"}}> Doctor</h5>
                  </Button>
              
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="single-key">
              <img src="images/bills.jpg" class="card-img-top" alt="..." style={{height: "280px"}}/>
               
                <h5>Manage Bills Details Here</h5>
                 
                <Button
                    color="inherit"
                    to="/finance"
                    component={NavLink}
                    style={{ marginRight: "auto" }}
                  >
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                    >
                    <h5 class="card-title bg-primary" style={{height: "30px", textAlign: "center", color: "white"}}> Bills </h5>
                    </Typography>
                  </Button>
                
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="single-key">
              <img src="images/patient.jpg" class="card-img-top" alt="..." style={{height: "280px"}}/>
              <h5>Manage Patients Details and Policy Details Here</h5>
                 
              <Button
                    color="inherit"
                    to="/adminPatient"
                    component={NavLink}
                    style={{ marginRight: "auto" }}
                  >
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                    >
                    <h5 class="card-title bg-primary" style={{height: "30px", textAlign: "center", color: "white"}}> Patient </h5>
                    </Typography>
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Admin;