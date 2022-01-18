import Styles from "./input-styles.scss";
import React, { useContext } from "react";
import Context from "@/presentation/contexts/form/form-context";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context);
  const error = state[`${props.name}Error`];
  const getStatus = (): string => {
    return "🔴";
  };
  const getTitle = (): string => {
    return error;
  };
  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className={Styles.inputWrap}>
      <input onChange={handleChange} data-testid={props.name} {...props} />
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}
      >
        {getStatus()}
      </span>
    </div>
  );
};
export default Input;
