import { useState } from "react";
import { TextInput } from "../global/FormsComponents";
import { PrimaryButton } from "../styles/Buttons";
import { FlexContainer } from "../styles/Containers";
import { FormStyle } from "../styles/Forms";

export const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  return (
    <FlexContainer padding="var(--smSpacing) var(--xlSpacing)">
      <FormStyle>
        <FlexContainer
          flexDirection="row"
          fullWidth
          padding="0px var(--smSpacing)"
        >
          <TextInput
            htmlFor="name"
            labelText="Name"
            placeholder="What's your name?"
            value={name}
            setValue={setName}
            fullWidth
          />
          <TextInput
            type="email"
            htmlFor="email"
            labelText="Email"
            placeholder="What's your email?"
            value={email}
            setValue={setEmail}
            fullWidth
          />
        </FlexContainer>
        <FlexContainer padding="0 var(--smSpacing)">
          <TextInput
            htmlFor="message"
            labelText="Message"
            placeholder="Want to hear a story? Have a question for the Sumpthin's? Just want to say hi?"
            value={message}
            setValue={setMessage}
            textarea
            fullWidth
          />
        </FlexContainer>
        <FlexContainer
          flexDirection="row"
          justifyContent="flex-end"
          padding="var(--smSpacing) var(--lgSpacing)"
        >
          <PrimaryButton as="input" type="submit" value="Send to Mrs. Crow" />
        </FlexContainer>
      </FormStyle>
    </FlexContainer>
  );
};
