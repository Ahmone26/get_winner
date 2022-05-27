import Modal from "./Modal";

export default function ScoringModal({
  onSubmit,
  itemsScore,
  setItemsScore,
  setIsOpen,
  leftPair,
  rightPair,
}: any) {
  return (
    <Modal onSubmit={onSubmit} setIsOpen={setIsOpen}>
      <form onSubmit={onSubmit} className="form">
        <input
          className="input text-input"
          type={"text"}
          value={`Item - ${leftPair}`}
          readOnly
        />
        <input
          className="input number-input"
          type={"number"}
          value={itemsScore.left_item_score}
          onChange={(e: any) =>
            setItemsScore({
              ...itemsScore,
              left_item_score: +e.target.value,
            })
          }
        />
        <input
          className="input number-input"
          type={"number"}
          value={itemsScore.right_item_score}
          onChange={(e: any) =>
            setItemsScore({
              ...itemsScore,
              right_item_score: +e.target.value,
            })
          }
        />
        <input
          className="input text-input"
          type={"text"}
          value={`Item - ${rightPair}`}
          readOnly
        />
      </form>
    </Modal>
  );
}
