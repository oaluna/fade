import { useFieldArray, Controller } from "react-hook-form";
import { TextField, Autocomplete } from "@mui/material";

const NestedArray = ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `order[${nestIndex}].variation`
  });

  const options = [
    { label: "red", value: "red" },
    { label: "green", value: "green" },
    { label: "blue", value: "blue" }
  ];

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>{k + 1}</label>
            <label>Quantity:</label>
            <input
              type="number"
              {...register(`order[${nestIndex}].variation[${k}].qty`, {
                valueAsNumber: true
              })}
            />

            {/* <label>Color:</label>
            <select {...register(`order[${nestIndex}].variation[${k}].color`)}>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
            </select> */}

            <Controller
              control={control}
              name={`order[${nestIndex}].variation[${k}].color`}
              render={({ field: { onChange, value = "", ...rest } }) => (
                <Autocomplete
                  {...rest}
                  onInputChange={(e, newValue) => {
                    onChange(newValue);
                  }}
                  inputValue={value}
                  options={options}
                  isOptionEqualToValue={(option, value) =>
                    option?.value === value?.value
                  }
                  // getOptionLabel={(option) => option?.label ?? ""}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Color"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              )}
            />

            <button type="button" onClick={() => remove(k)}>
              Delete Colors
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => append({ qty: 0, color: "" })}>
        Add Colors
      </button>
      <hr />
    </div>
  );
};

export default NestedArray