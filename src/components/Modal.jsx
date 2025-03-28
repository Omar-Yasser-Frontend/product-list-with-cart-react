import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDessert from "./ConfirmDessert";
import TotalOrder from "./TotalOrder";
import { reset } from "../cartSlice";

function Modal({ close }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(
    function () {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) close();
      };

      window.addEventListener("click", handleClick);

      return () => removeEventListener("click", handleClick);
    },
    [close]
  );

  return createPortal(
    <>
      <div className="fixed inset-0 z-50 bg-[hsl(0,0%,0%,10%)]">
        <div
          ref={ref}
          className="z-100 w-xl p-4 fixed top-1/2 left-1/2 -translate-1/2 opacity-100 bg-white rounded-md"
        >
          <img src="/assets/images/icon-order-confirmed.svg" alt="" />
          <h2 className="font-bold text-2xl">Order Confirmed</h2>
          <p className="mt-2 mb-6">We hope you enjoy your food</p>
          <div className="bg-rose-50 p-4">
            {cart.map((dessert) => (
              <ConfirmDessert key={dessert.name} dessert={dessert} />
            ))}
            <TotalOrder />
          </div>
          <button
            onClick={() => {
              close();
              dispatch(reset());
            }}
            className="text-white bg-red mx-auto py-2 px-4 rounded-full block w-full text-md cursor-pointer hover:grayscale-10 duration-300"
          >
            Start New Order
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}

export default Modal;
