import React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button to="/home" color="inherit" component={NavLink}>
             <h3>HSM</h3> 
            </Button>

     { /*      <Button
              color="inherit"
              to="/doctors"
              component={NavLink}
            >
              Doctors
            </Button> */}

            <Button
            color="inherit"
            to="/treatments"
            component={NavLink}
          >
            Treatment
          </Button>

          <Button
            color="inherit"
            to="/insurance"
            component={NavLink}
          >
            Policy
          </Button>
       {/*   <Button
            color="inherit"
            to="/patient"
            component={NavLink}
          >
            Patient-Details
       </Button> 
          <Button
            color="inherit"
            to="/finance"
            component={NavLink}
          >
            Finance
          </Button> */}

            <Button
            color="inherit"
            to="/patientHistories"
            component={NavLink}
            style={{ marginRight: "auto" }}
          >
            Patient_History
          </Button>


            <Button
              color="inherit"
              to="/admin"
              component={NavLink}
              
            >
              Admin
            </Button>
            <Button color="inherit" component={NavLink} to="/login">
              Login
            </Button>
       {/*   <Button color="inherit" component={NavLink} to="/register">
              Register
  </Button>  */}
            <Button to="/logout" component={NavLink} color="inherit">
              Logout
            </Button>
            
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Nav;