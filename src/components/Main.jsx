import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { modal } from "../cartSlice";

function Main({ children }) {
  const { showModal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const close = () => dispatch(modal(false));
  return (
    <div className="container mx-auto px-4 pt-8 grid grid-cols-6 gap-5">
      {children}
      {showModal && <Modal close={close} />}
    </div>
  );
}

export default Main;
