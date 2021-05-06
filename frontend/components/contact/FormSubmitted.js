import { FlexContainer } from "../styles/Containers";
import { TextStyle } from "../styles/Typography";

export const FormSubmitted = ({ message, center, size, uppercase, color }) => {
  return (
    <FlexContainer>
      <TextStyle
        as="h4"
        fontSize={size ? size : "inherit"}
        textAlign={center ? "center" : "left"}
        textTransform={uppercase ? "uppercase" : "inherit"}
        color={color ? color : "inherit"}
      >
        {message}
      </TextStyle>
    </FlexContainer>
  );
};
