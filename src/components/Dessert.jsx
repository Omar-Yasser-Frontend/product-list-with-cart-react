import AddToCart from "./AddToCart";

function Dessert({ dessert }) {
  const price = String(dessert.price).split(".");

  return (
    <div>
      <div className="relative">
        <img
          className="rounded-md mb-8 w-full"
          src={dessert.image.desktop.slice(1)}
          srcSet={`${dessert.image.desktop.slice(
            1
          )} 1200w, ${dessert.image.tablet.slice(
            1
          )} 768w, ${dessert.image.mobile.slice(1)} 480w`}
          alt={`image of ${dessert.name} dissert dish`}
        />

        <AddToCart dessert={dessert} />
      </div>
      <span className="text-rose-400 mb-1">{dessert.category}</span>
      <p className="font-semibold">{dessert.name}</p>
      <span className="text-rose-800 font-semibold">
        $
        {price.length !== 2
          ? `${dessert.price}.00`
          : `${price[0]}.${price[1].padEnd(2, 0)}`}
      </span>
    </div>
  );
}

export default Dessert;
