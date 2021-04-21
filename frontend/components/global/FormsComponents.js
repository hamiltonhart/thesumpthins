import { LabelStyle, TextAreaStyle, TextInputStyle } from "../styles/Forms";

export function TextInput({
  htmlFor,
  labelText,
  labelDisplay,
  placeholder,
  value,
  setValue,
  textarea,
  rows = 10,
}) {
  return (
    <div>
      <LabelStyle htmlFor={htmlFor} display={labelDisplay || null}>
        {labelText}
      </LabelStyle>
      {textarea ? (
        <TextAreaStyle
          id={htmlFor}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          rows={rows}
        />
      ) : (
        <TextInputStyle
          type="text"
          id={htmlFor}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
}
