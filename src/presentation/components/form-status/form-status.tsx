import Styles from "./form-status-styles.scss";
import React, { useContext } from "react";
import Spinner from "../spinner/spinner";
import Context from "@/presentation/contexts/form/form-context";
const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context);
  const { isLoading } = state;
  const { main } = errorState;
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {main.length > 0 && <span className={Styles.error}>errorMessage</span>}
    </div>
  );
};
export default FormStatus;
