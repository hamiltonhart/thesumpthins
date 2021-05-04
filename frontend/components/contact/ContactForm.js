import { useState } from "react";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { TextInput } from "../global/FormsComponents";
import { PrimaryButton } from "../styles/Buttons";
import { FlexContainer } from "../styles/Containers";
import { FormStyle } from "../styles/Forms";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mobile = useMediaQuery(900);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, subject, message };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    });
  };
  return (
    <FlexContainer padding="var(--smSpacing) var(--smSpacing)">
      <FormStyle onSubmit={(e) => handleSubmit(e)}>
        <FlexContainer
          flexDirection={mobile ? "column" : "row"}
          fullWidth
          padding="0px var(--smSpacing)"
        >
          <TextInput
            htmlFor="name"
            labelText="Name"
            placeholder="What's your name?"
            value={name}
            setValue={setName}
            required
            fullWidth
          />
          <TextInput
            type="email"
            htmlFor="email"
            labelText="Email"
            placeholder="So we can get back to you!"
            value={email}
            setValue={setEmail}
            required
            fullWidth
          />
        </FlexContainer>
        <FlexContainer padding="0px var(--smSpacing)">
          <TextInput
            type="text"
            htmlFor="subject"
            labelText="Subject"
            placeholder="What are we talking about?"
            value={subject}
            setValue={setSubject}
            required
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
            required
            fullWidth
          />
        </FlexContainer>
        <FlexContainer
          flexDirection="row"
          justifyContent="flex-end"
          padding="var(--smSpacing) var(--lgSpacing)"
        >
          <PrimaryButton
            as="input"
            type="submit"
            value="Send Message"
            disabled={!!!name || !!!email || !!!subject || !!!message}
          />
        </FlexContainer>
      </FormStyle>
    </FlexContainer>
  );
};
