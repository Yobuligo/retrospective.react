import { useId, useRef } from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import { ILoginSectionProps } from "./ILoginSectionProps";
import styles from "./LoginSection.module.css";

export const LoginSection: React.FC<ILoginSectionProps> = (props) => {
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
        <div className={styles.loginSectionLabelInput}>
          <label htmlFor={usernameId}>{t.username}</label>
          <input type="text" id={usernameId} ref={username} />
        </div>
        <div className={styles.loginSectionLabelInput}>
          <label htmlFor={passwordId}>{t.password}</label>
          <input type="password" id={passwordId} ref={password} />
        </div>
        <div className={styles.loginSectionButton}>
          <button>{t.login}</button>
        </div>
      </form>
    </>
  );
};
