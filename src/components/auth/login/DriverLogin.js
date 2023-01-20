import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import {updateAction, clearAction} from "./consts";

import { TextField } from "@mui/material";

const DriverLogin = (props) => {
  const navigate = useNavigate();
  const { state, actions } = useStateMachine({ updateAction, clearAction });
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.yourDetails
  });

  const onSubmit = (data) => {
    actions.updateAction(data);
    console.log(data);
    actions.updateAction();
    navigate("/result", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>

      <TextField
        fullWidth
        name="firstName"
        autoComplete="off"
        {...register("firstName", {
          required: "Required"
        })}
      />
      <label>Last Name:</label>
      <TextField
        fullWidth
        name="lastName"
        autoComplete="off"
        {...register("lastName", {
          required: "Required"
        })}
      />
      <label>Address:</label>
      <TextField
        fullWidth
        name="address"
        autoComplete="off"
        {...register("address", {
          required: "Required"
        })}
      />
      <label>Age:</label>
      <input
        type="number"
        {...register("age", {
          valueAsNumber: true
        })}
      />
      <input type="submit" />
    </form>
  );
};

export default DriverLogin;
