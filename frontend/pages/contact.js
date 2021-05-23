import Head from "next/head";
import { ContactForm } from "../components/contact/ContactForm";
import { PageHeadingText } from "../components/styles/Typography";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>The Sumpthin's | Contact</title>
      </Head>
      {/* <PageHeadingText>Coming Soon</PageHeadingText> */}
      <ContactForm />
    </>
  );
}
