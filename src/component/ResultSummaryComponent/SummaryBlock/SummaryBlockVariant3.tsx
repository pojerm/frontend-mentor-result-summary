import "./sumarry.scss";

interface Props {
  text: string;
  iconSrc: string;
  currentValue: number;
  maxValue: number;
}

const SummaryBlockVariant1 = ({
  text,
  iconSrc,
  currentValue,
  maxValue,
}: Props) => {
  return (
    <div className="summary">
      <div className="summary-row variant-3">
        <div className="summary-left">
          <img className="summary-icon" src={iconSrc} alt="" />
          <span className="summary-text">{text}</span>
        </div>
        <div className="summary-right">
          <div className="summary-fraction">
            <span className="summary-fraction-first">{currentValue}</span>
            <span className="summary-fraction-second"> / {maxValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryBlockVariant1;
