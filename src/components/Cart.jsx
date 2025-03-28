import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalOrder from "./TotalOrder";
import ConfirmOrder from "./ConfirmOrder";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="col-start-1 -col-end-1 bg-white p-5 sm:col-start-5">
      <h2 className="text-2xl font-bold text-rose-700 mb-3">
        Your Cart ({cart.length})
      </h2>

      {cart.length ? (
        <>
          {cart.map((item) => (
            <CartItem key={item.name} dessert={item} />
          ))}
          <TotalOrder />
          <ConfirmOrder />
        </>
      ) : (
        <>
          <img
            className="mx-auto"
            src="/public/assets/images/illustration-empty-cart.svg"
            alt=""
          />
          <p className="text-center">Your added item will appear here</p>
        </>
      )}
    </div>
  );
}

export default Cart;
