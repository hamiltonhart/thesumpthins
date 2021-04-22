import { useState } from "react";
import { TextInput } from "../global/FormsComponents";
import { FormStyle } from "../styles/Forms";

export const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  return (
    <FormStyle>
      <TextInput
        htmlFor="name"
        labelText="Name"
        placeholder="Name"
        value={name}
        setValue={setName}
        fullWidth
      />
      <TextInput
        type="email"
        htmlFor="email"
        labelText="Email"
        placeholder="Email"
        value={email}
        setValue={setEmail}
        fullWidth
      />
      <TextInput
        htmlFor="message"
        labelText="Message"
        placeholder="Want to hear a story? Have a question for the Sumpthin's? Just want to say hi?"
        value={message}
        setValue={setMessage}
        textarea
        fullWidth
      />
    </FormStyle>
  );
};
