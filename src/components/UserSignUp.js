import { InfoCircleOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";

import { Form, Input, Radio } from "antd";
import { useState } from "react";

const FormStyles = {
  maxWidth: "100vw",
  width: "80%",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "20vh auto",
  padding: 0,
};

const RadioStyles = {
  marginRight: "25px",
  lineHeight: "2.5",
};

const UserSignUp = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("Please select one.");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <Form
      style={FormStyles}
      form={form}
      layout="vertical"
      initialValues={{
        requiredMarkValue: requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <Form.Item
        style={{ fontSize: "16px", fontWeight: 700 }}
        label="Account Type"
        name="Account Type"
      >
        <Radio.Group>
          <Radio.Button style={RadioStyles} value>
            Rider
          </Radio.Button>
          <Radio.Button style={RadioStyles} value="optional">
            Driver
          </Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        style={{ fontSize: "12px", fontWeight: 700 }}
        label="First Name"
      >
        <Input
          style={{ width: "25vw", height: "3vh", margin: "15px auto" }}
          placeholder="Please enter your first name."
        />
      </Form.Item>
      <Form.Item
        style={{ fontSize: "12px", fontWeight: 700 }}
        label="Last Name"
      >
        <Input
          style={{ width: "25vw", height: "3vh", margin: "15px auto" }}
          placeholder="Please enter your last name."
        />
      </Form.Item>
      <Form.Item style={{ fontSize: "12px", fontWeight: 700 }} label="Email">
        <Input
          style={{ width: "25vw", height: "3vh", margin: "15px auto" }}
          placeholder="Please enter a valid email address."
        />
      </Form.Item>
      <Form.Item
        style={{ fontSize: "12px", fontWeight: 700 }}
        label="Confirm Email"
      >
        <Input
          style={{ width: "25vw", height: "3vh", margin: "15px auto" }}
          placeholder="Please confirm your email address."
        />
      </Form.Item>
      <Form.Item
        style={{ fontSize: "12px", fontWeight: 700 }}
        label="Screen Name"
        tooltip={{
          title: "Please no hate language.",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input
          style={{ width: "25vw", height: "3vh", margin: "15px auto" }}
          placeholder="Please enter a screen name."
        />
      </Form.Item>
      <Form.Item style={{ fontSize: "12px", fontWeight: 700 }} label="Password">
        <Input
          style={{ width: "25vw", height: "3vh", margin: "15px auto" }}
          placeholder="Please enter your last name."
        />
      </Form.Item>
      <Form.Item
        style={{ fontSize: "12px", fontWeight: 700 }}
        label="Confirm Password"
      >
        <Input
          style={{ width: "25vw", height: "3vh", margin: "15px auto" }}
          placeholder="Please enter your last name."
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default UserSignUp;
