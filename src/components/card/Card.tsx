import styles from "./Card.module.css";
import { ICardProps } from "./ICardProps";

const Card: React.FC<ICardProps> = (props) => {
  return (
    <div className={`${styles.card} ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
};

export default Card;
