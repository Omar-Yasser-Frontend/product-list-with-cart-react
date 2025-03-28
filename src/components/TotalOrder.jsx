import { useSelector } from "react-redux";
import { formatPrice } from "../utils/formatPrice";

function TotalOrder() {
  const { cart } = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((acc, cur) => cur.totalPrice + acc, 0);
  return (
    <div className="flex justify-between items-center mb-4">
      <p>Order Total</p>
      <p className="font-bold text-xl">{formatPrice(totalPrice)}</p>
    </div>
  );
}

export default TotalOrder;
