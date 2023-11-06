import "./scoreCircle.scss";
const ScoreCircle = () => {
  return (
    <div className="score-circle">
      <div className="circle">
        <p className="circle__label">76</p>
        <p className="circle__score">of 100</p>
      </div>
    </div>
  );
};

export default ScoreCircle;
