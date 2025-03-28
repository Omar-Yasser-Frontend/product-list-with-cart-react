import { useDispatch, useSelector } from "react-redux";
import {
  createDessert,
  decrementDessert,
  incrementDessert,
} from "../cartSlice";

function AddToCart({ dessert }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const currDessert = cart.find((desserts) => desserts.name === dessert.name);

  if (currDessert)
    return (
      <div className="absolute bg-red top-full text-white flex justify-between items-center -translate-1/2 left-1/2 w-40 py-2 px-4 rounded-full duration-300">
        <button
          onClick={() => dispatch(decrementDessert(dessert.name))}
          className="relative w-6 aspect-square rounded-full border-1 cursor-pointer border-white hover:text-red hover:bg-white duration-300"
        >
          <span className="absolute top-1/2 left-1/2 -translate-1/2">-</span>
        </button>
        <span>{currDessert.quantity}</span>
        <button
          onClick={() => dispatch(incrementDessert(dessert.name))}
          className="relative w-6 aspect-square rounded-full border-1 cursor-pointer border-white hover:text-red hover:bg-white duration-300"
        >
          <span className="absolute top-1/2 left-1/2 -translate-1/2">+</span>
        </button>
      </div>
    );
  return (
    <button
      onClick={() => dispatch(createDessert({ ...dessert, quantity: 1 }))}
      className="absolute bg-white top-full flex justify-center items-center -translate-1/2 left-1/2 w-40 py-2 px-4 rounded-full border-1 border-gray-800 cursor-pointer hover:border-rose-700 hover:text-rose-700 duration-300"
    >
      <img src="/assets/images/icon-add-to-cart.svg" alt="Add to cart icon" />{" "}
      Add to Cart
    </button>
  );
}

export default AddToCart;
