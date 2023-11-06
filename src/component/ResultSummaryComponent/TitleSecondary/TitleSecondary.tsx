import "./titleSecondary.scss";

interface Props {
  title: string;
}

const TitleSecondary = ({ title }: Props) => {
  return (
    <div>
      <h2 className="title-secondary">{title}</h2>
    </div>
  );
};

export default TitleSecondary;
