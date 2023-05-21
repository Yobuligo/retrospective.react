import { useId, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ITopicProps } from "./ITopicProps";
import styles from "./Topic.module.css";

const Topic: React.FC<ITopicProps> = (props) => {
  const topicId = useId();
  const topic = useRef<HTMLInputElement>(null);
  const onAdd = () => {
    props.onAdd?.(topic.current?.value ?? "");
  };

  return (
    <div className={styles.topic}>
      <input id={topicId} type="text" placeholder={props.hint} ref={topic} />
      <button onClick={onAdd}>
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
};

export default Topic;
