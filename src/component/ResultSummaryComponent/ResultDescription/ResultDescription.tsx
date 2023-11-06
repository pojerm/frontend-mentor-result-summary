import "./resultDescription.scss";

interface Props {
  title: string;
  text: string;
}
const ResultDescription = ({ title, text }: Props) => {
  return (
    <div className="result-description">
      <h1 className="result-description__title">{title}</h1>
      <p className="result-description__text">{text}</p>
    </div>
  );
};

export default ResultDescription;
