import "./title.scss";

interface Props {
  title: string;
}
const TitlePrimary = ({ title }: Props) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default TitlePrimary;
