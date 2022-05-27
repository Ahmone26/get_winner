import _ from "lodash";

export function checkScoringResult({
  itemsScore,
  pairs,
  leftPair,
  rightPair,
  setPairs,
  setRightPair,
  setLeftPair,
}: any) {
  if (itemsScore.left_item_score > itemsScore.right_item_score) {
    let leftIndex = _.findIndex(pairs, { id: leftPair - 1 });
    setPairs((pairs[leftIndex].score += 1));
  } else if (itemsScore.left_item_score < itemsScore.right_item_score) {
    let rightIndex = _.findIndex(pairs, { id: rightPair - 1 });
    setPairs((pairs[rightIndex].score += 1));
  } else {
  }

  setPairs(_.orderBy(pairs, ["score"], ["desc"]));

  if (leftPair === 6 && rightPair + 1 === 6) {
    return;
  }

  if (rightPair < 6) {
    if (rightPair + 1 === leftPair && leftPair < 6) {
      setRightPair(rightPair + 2);
    } else if (rightPair < 6) {
      setRightPair(rightPair + 1);
    }

    if (leftPair === rightPair) {
      if (rightPair < 6) {
        setRightPair(rightPair + 1);
      }
    }
  }

  if (rightPair === 6) {
    if (leftPair < 6) {
      setLeftPair(leftPair + 1);
      setRightPair(1);
    }
  }
}
