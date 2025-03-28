import { formatPrice } from "../utils/formatPrice";

function ConfirmDessert({ dessert }) {
  const {
    name,
    image: { desktop },
    price,
    totalPrice,
    quantity,
  } = dessert;
  return (
    <div className="flex items-center border-b-1 border-[#d3d3d3] mb-3 pb-3 gap-2">
      <img
        className="w-12 rounded-md"
        src={desktop}
        alt={`image of ${name} dessert`}
      />
      <div>
        <p className="font-semibold text-[14px]">{name}</p>
        <div className="flex">
          <span className="mr-1 block text-rose-600">{quantity}x</span>
          <span className="text-gray-500">@ {formatPrice(price)}</span>
        </div>
      </div>
      <span className="block ml-auto">{formatPrice(totalPrice)}</span>
    </div>
  );
}

export default ConfirmDessert;
