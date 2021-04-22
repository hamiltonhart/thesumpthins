import { ContactForm } from "../components/contact/ContactForm";
import { PageHeadingText } from "../components/styles/Typography";

export default function ContactPage() {
  return (
    <>
      <PageHeadingText>What's on your mind?</PageHeadingText>
      <ContactForm />
    </>
  );
}
