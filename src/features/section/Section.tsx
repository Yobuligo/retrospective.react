import Topic from "../topic/Topic";
import { ISectionProps } from "./ISectionProps";

const Section: React.FC<ISectionProps> = (props) => {
  const onAdd = () => {};
  return (
    <>
      <Topic hint={props.name} onAdd={(topic) => {}} />
    </>
  );
};

export default Section;
