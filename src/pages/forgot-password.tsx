import styles from "./pages-styles.module.css";
import { Link, Redirect } from "react-router-dom";
// import { passwordResetRequest } from "../services/actions/login";
import { useState, useCallback, FormEvent } from "react";

import { useDispatch } from "../utils/hooks";

function ForgotPassword() {
  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState("");


  function resetPassword(
    inputValue: string,
    event: FormEvent<HTMLFormElement>
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      {/* {isLoading && <Spinner />} */}

      <form
        className={`${styles.main}`}
        onSubmit={(event) => resetPassword(inputValue, event)}
      >
        <p className="text text_type_main-medium">Восстановление пароля</p>

        <div className="ml-0 mr-0 mb-0 mt-6"></div>

        <div className="ml-0 mr-0 mb-0 mt-10"></div>
        <div className={`${styles.registredBox} ml-0 mr-0 mb-0 mt-20`}>
          <p
            className={`${styles.textDownlogin} text text_type_main-default ml-0 mr-2 mb-0 mt-0`}
          >
            Вспомнили пароль?
          </p>
          <Link className={`${styles.linkDownlogin}`} to="/register">
            Войти!
          </Link>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
