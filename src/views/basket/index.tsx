import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";
import ItemQuantityCounter from "../../components/itemQuantityCounter";

export const formatPriceString = (price: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);

function Basket(props: any) {
  const items = useSelector((state: RootState) => state.items);
  const totalCost = items
    .map((item) => item.price * item.quantity)
    .reduce((total, currentValue) => total + currentValue, 0);

  return (
    <div>
      <h1>Your Basket:</h1>
      <ul className="py-16 w-full">
        {items.map((item) => (
          <li
            className="w-full text-md font-light flex justify-between items-center gap-32"
            key={item.id}
          >
            <div className="flex justify-between items-center">
              <span className="pr-4">{item.name}</span>
              <ItemQuantityCounter item={item} />
            </div>

            <span>{`${formatPriceString(item.price * item.quantity)}`}</span>
          </li>
        ))}
        <li className="w-full flex justify-between gap-20">
          <span>Total:</span>
          <span>{formatPriceString(totalCost)}</span>
        </li>
      </ul>
      <div className="flex justify-between">
        <Link to="/menu" className="flex">
          <button className="h-full px-4 py-1 text-lg text-center text-white border border-white rounded-md hover:bg-white hover:text-black">
            Back to Menu
          </button>
        </Link>
        <button className="h-full px-4 py-1 text-lg text-center text-white border border-white rounded-md hover:bg-white hover:text-black">
          Check Out
        </button>
      </div>
    </div>
  );
}

export default Basket;
