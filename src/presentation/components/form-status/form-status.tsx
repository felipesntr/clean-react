import Styles from "./form-status-styles.scss";
import React, { useContext } from "react";
import Spinner from "../spinner/spinner";
import Context from "@/presentation/contexts/form/form-context";
const FormStatus: React.FC = () => {
  const { state } = useContext(Context);
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {state.mainError && <span className={Styles.error}>errorMessage</span>}
    </div>
  );
};
export default FormStatus;
