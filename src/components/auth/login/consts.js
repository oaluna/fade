import {useStateMachine} from "little-state-machine"

export const products = [
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

export const options = products.map(
  (object) =>
    object.prodName +
    " - " +
    object.size +
    `${object.cat === "CM" || object.cat === "ML" ? "- " + object.cat : ""}` +
    " "
);

export const clearAction = (state, payload) => {
  return {
    data: {}
  };
}

export const data = [
  {
    product: "Tumbler - 500- ML ",
    variation: [{ qty: 12, color: "" }],
    id: "caa3639b-fb48-4943-8b61-8f3e18306205"
  }
];

export const updateAction = (state, payload) => {
  return {
    ...state,
    yourDetails: {
      ...state.yourDetails,
      ...payload
    }
  };
}

export const Result = props => {
  const { state } = useStateMachine(updateAction);

  return (
    <div className="container">
      <h2>Result</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};
