import { useState } from "react";
import ScoringModal from "./components/ScoringModal";
import ScoringTable from "./components/ScoringTable";
import { checkScoringResult } from "./utils/checkScoringResult";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemsScore, setItemsScore] = useState({
    left_item_score: 0,
    right_item_score: 0,
  });
  const [leftPair, setLeftPair] = useState(1);
  const [rightPair, setRightPair] = useState(leftPair + 1);

  const tableItems: Array<any> = [
    {
      id: 0,
      position: 1,
      name: "Item - 1",
      score: 0,
    },
    {
      id: 1,
      position: 2,
      name: "Item - 2",
      score: 0,
    },
    {
      id: 2,
      position: 3,
      name: "Item - 3",
      score: 0,
    },
    {
      id: 3,
      position: 4,
      name: "Item - 4",
      score: 0,
    },
    {
      id: 4,
      position: 5,
      name: "Item - 5",
      score: 0,
    },
    {
      id: 5,
      position: 6,
      name: "Item - 6",
      score: 0,
    },
  ];
  const [pairs, setPairs] = useState(tableItems);

  const onSubmit = (e: any) => {
    e.preventDefault();

    checkScoringResult({
      itemsScore,
      pairs,
      leftPair,
      rightPair,
      setPairs,
      setRightPair,
      setLeftPair,
    });

    setIsOpen(false);
  };

  return (
    <main className="container">
      <ScoringTable
        pairs={pairs}
        onClick={() => {
          setItemsScore({ left_item_score: 0, right_item_score: 0 });
          setIsOpen(true);
        }}
      />
      {isOpen && (
        <ScoringModal
          onSubmit={onSubmit}
          setIsOpen={setIsOpen}
          leftPair={leftPair}
          rightPair={rightPair}
          itemsScore={itemsScore}
          setItemsScore={setItemsScore}
        />
      )}
    </main>
  );
};

export default App;
