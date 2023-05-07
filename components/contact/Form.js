import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
export default function Form() {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    orderNumber: "",
    message: "",
  });

  const changeHandler = ({ target: { name, value } }) => {
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = () => {};

  return (
    <Box
      component={"form"}
      sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <TextField
        required
        name="name"
        label="Name"
        value={formFields.name}
        onChange={changeHandler}
      ></TextField>
      <TextField
        required
        name="email"
        label="Email"
        type="email"
        value={formFields.email}
        onChange={changeHandler}
      ></TextField>
      <TextField
        name="orderNumber"
        label="Order #"
        value={formFields.orderNumber}
        onChange={changeHandler}
      ></TextField>
      <TextField
        required
        name="message"
        label="Message"
        multiline
        value={formFields.message}
        onChange={changeHandler}
      ></TextField>
      <Box>
        <Button onClick={submitHandler}>Submit</Button>
      </Box>
    </Box>
  );
}
