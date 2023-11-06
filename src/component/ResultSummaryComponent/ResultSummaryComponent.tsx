import "./ResultSummaryComponent.scss";
import ScoreCircle from "./ScoreCirlcle/ScoreCircle";
import TitlePrimary from "./TitlePrimary/TitlePrimary";
import TitleSecondary from "./TitleSecondary/TitleSecondary";
import ResultDescription from "../ResultSummaryComponent/ResultDescription/ResultDescription";
import Button from "../ResultSummaryComponent/Button/Button";
import SummaryBlockVariant1 from "./SummaryBlock/SummaryBlockVariant1";
import SummaryBlockVariant2 from "./SummaryBlock/SummaryBlockVariant2";
import SummaryBlockVariant3 from "./SummaryBlock/SummaryBlockVariant3";
import SummaryBlockVariant4 from "./SummaryBlock/SummaryBlockVariant4";

const ResultSummaryComponent = () => {
  return (
    <div className="result-summary-component-block-mobile">
      <div className="result-summary">
        <TitlePrimary title="Your Result" />
        <ScoreCircle />
        <ResultDescription
          title="Great"
          text="You scored higher than 65% of the people who have taken these tests."
        />
      </div>
      <div className="summary-block">
        <TitleSecondary title="Summary" />
        <SummaryBlockVariant1
          text="Reaction"
          iconSrc="src/assets/icon-reaction.svg"
          currentValue={80}
          maxValue={100}
        />
        <SummaryBlockVariant2
          text="Memory"
          iconSrc="src/assets/icon-memory.svg"
          currentValue={92}
          maxValue={100}
        />
        <SummaryBlockVariant3
          text="Verbal"
          iconSrc="src/assets/icon-verbal.svg"
          currentValue={61}
          maxValue={100}
        />
        <SummaryBlockVariant4
          text="Visual"
          iconSrc="src/assets/icon-visual.svg"
          currentValue={72}
          maxValue={100}
        />
        <Button buttonText="Continue" />
      </div>
    </div>
  );
};

export default ResultSummaryComponent;
