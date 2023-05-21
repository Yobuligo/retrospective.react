import CommentList from "../commentList/CommentList";
import Topic from "../topic/Topic";
import { ISectionProps } from "./ISectionProps";

const Section: React.FC<ISectionProps> = (props) => {
  return (
    <>
      <Topic hint={props.name} onAdd={(topic) => {}} />
      <CommentList comments={["123", "123"]} />
    </>
  );
};

export default Section;
