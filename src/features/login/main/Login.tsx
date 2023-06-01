import { useId, useRef } from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { ILoginProps } from "./ILoginProps";
import styles from "./Login.module.css";

export const Login: React.FC<ILoginProps> = (props) => {
  const { t } = useTranslation();
  const usernameId = useId();
  const passwordId = useId();
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  const onLogin = () => {
    if (username.current && password.current) {
      props.onLogin?.(username.current.value, password.current.value);
    }
  };

  return (
    <>
      <form action="submit" onSubmit={onSubmit}>
        <div className={styles.loginLabelInput}>
          <label htmlFor={usernameId}>{t.username}</label>
          <input type="text" id={usernameId} ref={username} />
        </div>
        <div className={styles.loginLabelInput}>
          <label htmlFor={passwordId}>{t.password}</label>
          <input type="password" id={passwordId} ref={password} />
        </div>
        <div className={styles.loginButton}>
          <button>{t.login}</button>
        </div>
      </form>
    </>
  );
};
