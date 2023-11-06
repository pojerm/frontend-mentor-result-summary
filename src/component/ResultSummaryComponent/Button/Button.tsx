import "./button.scss";
interface Props {
  buttonText: string;
}

const Button = ({ buttonText }: Props) => {
  return (
    <div className="btn-block">
      <button className="btn">{buttonText}</button>
    </div>
  );
};

export default Button;
