import { useDispatch } from "react-redux";
import CloseIcon from "/assets/images/icon-remove-item.svg";
import { removeDessert } from "../cartSlice";
import { formatPrice } from "../utils/formatPrice";

function CartItem({ dessert }) {
  const { name, price, totalPrice, quantity } = dessert;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between border-b-1 border-[#D3D3D3] mb-2 pb-2">
      <div>
        <p>{name}</p>
        <span className="text-rose-600">{quantity}x</span>{" "}
        <span className="text-gray-500">@{formatPrice(price)}</span>{" "}
        <span>{formatPrice(totalPrice)}</span>
      </div>{" "}
      <button onClick={() => dispatch(removeDessert(name))}>
        <img
          className="hover:invert-100 p-1 rounded-full border-2 border-[#caafa7] cursor-pointer"
          src={CloseIcon}
          alt="remove icon to remove dessert"
        />
      </button>
    </div>
  );
}

export default CartItem;
