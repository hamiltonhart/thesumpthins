import { IconStyle } from "../styles/Icons";
import MenuIconSVG from "../../public/svg/icon-menu.svg";
import CloseIconSVG from "../../public/svg/icon-close.svg";

export const MenuIcon = ({ onClick }) => {
  return (
    <IconStyle onClick={onClick}>
      <img src={MenuIconSVG} alt="Open Menu" />
    </IconStyle>
  );
};

export const CloseIcon = ({ onClick }) => {
  return (
    <IconStyle onClick={onClick}>
      <img src={CloseIconSVG} alt="Close Menu" />
    </IconStyle>
  );
};
