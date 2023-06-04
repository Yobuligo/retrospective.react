import { BoardAdd } from "../features/board/boardAdd/BoardAdd";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <BoardAdd />
    </div>
  );
};

export default HomePage;
