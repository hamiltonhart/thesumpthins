import { MottoStyle } from "../styles/MottoStyle";
import SumpthinsMotto from "../../public/svg/SumpthinsMotto.svg";

export const Motto = () => {
  return (
    <MottoStyle
      src={SumpthinsMotto}
      alt={"You're not nothin', you're somethin'!"}
    />
  );
};
