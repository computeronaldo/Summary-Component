import "./LeftComp.css";

type Data = {
  category: string;
  score: number;
  icon: string;
}[];

type Props = {
  scoresInfo: Data;
};

const LeftComp = ({ scoresInfo }: Props) => {
  const totalScore = scoresInfo.reduce((acc, curr) => {
    return acc + curr.score;
  }, 0);

  const maxScore = scoresInfo.length * 100;
  const scoreToDisplay = Math.floor((totalScore / maxScore) * 100);

  return (
    <section className="container">
      <h3 className="heading">Your Result</h3>
      <div className="score-container">
        <span className="actual-score">{scoreToDisplay}</span>
        <p>of 100</p>
      </div>
      <span className="heading v2">Great</span>
      <p className="info">
        You scored higher than 65% of people who have taken these tests.
      </p>
    </section>
  );
};

export default LeftComp;
