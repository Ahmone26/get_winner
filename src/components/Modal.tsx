import { Fragment } from "react";
import { RiCloseLine } from "react-icons/ri";
import { modalText } from "../utils/constants";

const Modal = ({ onSubmit, setIsOpen, children }: any) => {
  return (
    <Fragment>
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered"}>
        <div className={"modal"}>
          <div className={"modalHeader"}>
            <h3 className={"heading"}>{modalText.title}</h3>
          </div>
          <span className={"modalMessage"}>{modalText.message}</span>
          <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={"modalContent"}>{children}</div>
          <div className={"modalActions"}>
            <div className={"actionsContainer"}>
              <button className={"primaryBtn"} onClick={onSubmit}>
                {modalText.submit_button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
