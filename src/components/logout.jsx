import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/loginaction";

import Typography from "@mui/material/Typography";
const Logout = () => {
  // get login state from store
  const login = useSelector((state) => state.login);

  // Dispatch logout action at the of page loading
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutAction(login.email));
  }, []);

  return (
    <div
      className=" w-50 mx-auto"
      style={{
        marginTop: "10%",
        height: "150px",
        textAlign: "center",
        boxShadow:
          "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      }}
    >
      <Typography variant="h3">
        Logged out <br /> successfully!!
      </Typography>
    </div>
  );
};
export default Logout;
