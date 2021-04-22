import { LabelStyle, TextAreaStyle, TextInputStyle } from "../styles/Forms";

export function TextInput({
  htmlFor,
  labelText,
  labelDisplay,
  placeholder,
  value,
  setValue,
  textarea,
  fullWidth,
  rows = 10,
  type = "text",
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
          fullWidth={fullWidth ? true : false}
        />
      ) : (
        <TextInputStyle
          type={type}
          id={htmlFor}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          fullWidth={fullWidth ? true : false}
        />
      )}
    </div>
  );
}
