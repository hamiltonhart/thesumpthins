import { useState } from "react";

import { TextInput } from "../components/global/FormsComponents";

export default function HomePage() {
  const [testInput, setTestInput] = useState("");
  return (
    <>
      <div>Home Page</div>
      <TextInput
        htmlFor="first-name"
        labelText="First Name"
        placeholder="First Name"
        value={testInput}
        setValue={setTestInput}
      />
    </>
  );
}
