import { IconType } from "../../../../components/icon/IconType";
import VotingButton from "../components/VotingButton";
import styles from "./AgreeButton.module.css";
import { IAgreeButtonProps } from "./IAgreeButtonProps";

const AgreeButton: React.FC<IAgreeButtonProps> = (props) => {
  return (
    <VotingButton
      {...props}
      className={styles.agreeButton}
      icon={IconType.ThumpUp}
    />
  );
};

export default AgreeButton;
