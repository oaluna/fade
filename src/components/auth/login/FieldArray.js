import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useFieldArray, Controller } from "react-hook-form";
import NestedArray from "./NestedArray";
import { Select, Sample, ControlledAutocomplete} from "./consts"

let renderCount = 0;

const products = [
  {
    prodName: "Tumbler",
    size: "500",
    colorMap: { Black: 20, Pink: 10, Green: 5 },
    id: "aRLMZkiSU7T0lcsPCSsV"
  },
  {
    prodName: "Shirt",
    size: "L",
    colorMap: { Blue: 10, Black: 10 },
    id: "uTHIR6OQFRuqP9Drft0e"
  },
  {
    size: "200",
    colorMap: { Green: 50, Red: 19, Black: 20 },
    prodName: "Notebook",
    id: "y9ECyZBKp2OBekmWym4M"
  }
];

const options = products.map(
  (object) =>
    object.prodName +
    " - " +
    object.size +
    `${object.cat === "CM" || object.cat === "ML" ? "- " + object.cat : ""}` +
    " "
);

console.log(options, "options");

const FieldArray = ({ control, register, setValue, getValues }) => {
  const { fields, append, remove, prepends } = useFieldArray({
    control,
    name: "order"
  });

  console.log(fields, "fields");

  renderCount++;

  return (
    <div>
      <ul>
        {fields.map((item, index) => {
          console.log(item);
          return (
            <li key={item.id}>
              {/* <Controller
                control={control}
                name={`order.${index}`}
                render={({ field: { onChange, ...rest } }) => (
                  <Autocomplete
                    {...rest}
                    onChange={(e, newValue) => {
                      onChange(newValue);
                    }}
                    options={productItems}
                    isOptionEqualToValue={(option, value) =>
                      option?.value === value?.value
                    }
                    getOptionLabel={(option) => option?.label ?? ""}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Product"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                )}
              /> */}
              <Controller
                control={control}
                name={`order.${index}.product`}
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
                        label="Product"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                )}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
              <NestedArray nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            // append({ name: "append" });
            append({ product: "" });
          }}
        >
          Add product
        </button>
      </section>
      <span className="counter">Render Count: {renderCount}</span>
    </div>
  );
};

export default FieldArray;
