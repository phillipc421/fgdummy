import { useState } from "react";
import { Box, TextField, Button, Snackbar } from "@mui/material";
const defaults = { name: "", email: "", orderNumber: "", message: "" };
export default function Form() {
  const [formFields, setFormFields] = useState({ ...defaults });
  const [message, setMessage] = useState(["", false]);

  const changeHandler = ({ target: { name, value } }) => {
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const clearHandler = () => {
    setFormFields({ ...defaults });
  };
  const submitHandler = () => {
    console.log(formFields);
    setMessage(["Message Sent", true]);
    clearHandler();
  };

  const valid = () => {
    const { name, email, message } = formFields;
    return name && email && message ? false : true;
  };

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
        <Button onClick={clearHandler}>Reset</Button>
        <Button onClick={submitHandler} disabled={valid()}>
          Submit
        </Button>
      </Box>
      <Snackbar
        open={message[1]}
        message={message[0]}
        autoHideDuration={5000}
        onClose={() => setMessage(["", false])}
      ></Snackbar>
    </Box>
  );
}
