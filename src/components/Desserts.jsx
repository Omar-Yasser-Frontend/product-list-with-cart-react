import { useDesserts } from "../hooks/useDesserts";
import Dessert from "./Dessert";

function Desserts() {
  const { data, isPending, error } = useDesserts();

  if (isPending) return <p>Loading Desserts</p>;

  if (error)
    return (
      <div className="col-start-1 col-end-5">
        <p className="mb-4">Something went wrong please</p>
        <button
          className="px-6 py-2 bg-red rounded-md text-white cursor-pointer"
          onClick={() => location.reload()}
        >
          try again
        </button>
      </div>
    );

  return (
    <div className="col-start-1 col-end-7 sm:col-end-5">
      <h1 className="text-3xl font-bold mb-8">Desserts</h1>

      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-6">
        {data.map((dessert) => (
          <Dessert key={dessert.name} dessert={dessert} />
        ))}
      </div>
    </div>
  );
}

export default Desserts;
