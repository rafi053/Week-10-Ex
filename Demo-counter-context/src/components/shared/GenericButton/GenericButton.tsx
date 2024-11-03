import { FC } from "react";
import "./GenericButton.css";
import { ButtonType } from "../../../types/enums";

interface GenericButtonProps {
  btnText: string;
  btnStyle: ButtonType;
  onClickBtn: () => void;
}

const GenericButton: FC<GenericButtonProps> = ({
  btnText,
  onClickBtn,
  btnStyle,
}) => {
  return (
    <button className={`GenericButton ${btnStyle}`} onClick={onClickBtn}>
      {btnText}
    </button>
  );
};

export default GenericButton;
