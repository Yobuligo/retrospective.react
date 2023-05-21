import { useState } from "react";
import CommentList from "../commentList/CommentList";
import Topic from "../topic/Topic";
import { ISectionProps } from "./ISectionProps";

const Section: React.FC<ISectionProps> = (props) => {
  const [comments, setComments] = useState<string[]>([]);
  
  const onAdd = (comment: string): void =>  
    setComments((previous) => [...previous, comment]);

  return (
    <>
      <Topic hint={props.name} onAdd={onAdd} />
      <CommentList comments={comments} />
    </>
  );
};

export default Section;
