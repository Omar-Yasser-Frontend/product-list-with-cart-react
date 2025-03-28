import { useDispatch } from "react-redux";
import { modal } from "../cartSlice";

function ConfirmOrder() {
  const dispatch = useDispatch();

  return (
    <div>
      <p className="mx-auto flex items-center w-fit py-2 px-4 bg-rose-50 rounded-full mb-4">
        <img src="/assets/images/icon-carbon-neutral.svg" alt="" /> this is a
        carbon neutral delivery
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(modal(true));
        }}
        className="text-white bg-red mx-auto py-2 px-4 rounded-full block w-full text-md cursor-pointer hover:grayscale-10 duration-300"
      >
        Confirm Order
      </button>
    </div>
  );
}

export default ConfirmOrder;
