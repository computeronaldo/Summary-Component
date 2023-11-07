import "./App.css";
import info from "./data.json";
import LeftComp from "./components/LeftComp";
import RightComp from "./components/RightComp";

type Data = {
  category: string;
  score: number;
  icon: string;
}[];

const data = info as Data;

function App() {
  return (
    <div className="main">
      <LeftComp scoresInfo={data} />
      <RightComp />
    </div>
  );
}

export default App;
