import { IconStyle } from "../styles/Icons";
import MenuIconSVG from "../../public/svg/icon-menu.svg";
import CloseIconSVG from "../../public/svg/icon-close.svg";

export const MenuIcon = (props) => {
  return (
    <IconStyle onClick={props.onClick} {...props}>
      <img src={MenuIconSVG} alt="Open Menu" />
    </IconStyle>
  );
};

export const CloseIcon = (props) => {
  return (
    <IconStyle onClick={props.onClick} {...props}>
      <img src={CloseIconSVG} alt="Close Menu" />
    </IconStyle>
  );
};
