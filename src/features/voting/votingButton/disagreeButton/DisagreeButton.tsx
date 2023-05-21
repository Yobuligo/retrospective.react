import { IconType } from "../../../../components/icon/IconType";
import VotingButton from "../components/VotingButton";
import styles from "./DisagreeButton.module.css";
import { IDisagreeButtonProps } from "./IDisagreeButtonProps";

const DisagreeButton: React.FC<IDisagreeButtonProps> = (props) => {
  return (
    <VotingButton
      {...props}
      className={styles.disagreeButton}
      icon={IconType.ThumpDown}
    />
  );
};

export default DisagreeButton;
