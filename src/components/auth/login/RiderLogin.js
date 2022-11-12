import React from "react";
import { useForm, ErrorMessage, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "./consts";
import { Button } from "@mui/material";

import FieldArray from "./FieldArray";

const defaultValues = {
  order: [
    {
      product: "",
      qty: 0,
      color: "",
      // nestedArray: [{ size: "", color: "", design: "" }]
    },
  ],
};

const RiderLogin = () => {
  const navigate = useNavigate();
  const { state, actions } = useStateMachine({ updateAction });
  const { control, register, handleSubmit, getValues, errors, setValue } =
    useForm({
      defaultValues: state.yourDetails,
    });

  const onSubmit = (data) => {
    // action(data);
    console.log(data, "d");
    const newOrder = [];
    data.order.forEach(({ product, variation }) => {
      const newVariantion = [];
      variation.forEach(({ qty, color }) => {
        newVariantion.push({ qty: parseInt(qty), color });
      });
      newOrder.push({ product, variation: newVariantion });
    });

    actions.updateAction(data);
    console.log(newOrder);
    navigate("/step2", newOrder);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Step 1</h2>

        <FieldArray
          {...{ control, register, defaultValues, getValues, setValue, errors }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default RiderLogin;
