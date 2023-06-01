import { useId } from "react";
import { useTranslation } from "../../../hooks/useTranslation";
import styles from "./LoginSection.module.css";

export const LoginSection: React.FC = () => {
  const { t } = useTranslation();
  const usernameId = useId();
  const passwordId = useId();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <>
      <form action="submit" onSubmit={onSubmit}>
        <div className={styles.loginSectionLabelInput}>
          <label htmlFor={usernameId}>{t.username}</label>
          <input type="text" id={usernameId} />
        </div>
        <div className={styles.loginSectionLabelInput}>
          <label htmlFor={passwordId}>{t.password}</label>
          <input type="password" id={passwordId} />
        </div>
        <div>
          <button>{t.login}</button>
        </div>
      </form>
    </>
  );
};
