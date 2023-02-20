import mealImage from "./mealImage.bmp";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/basket";
import { RootState } from "../../store/store";
import ItemQuantityCounter from "../../components/itemQuantityCounter";

function MenuItem(props: any) {
  const dispatch = useDispatch();
  const inBasket = useSelector((state: RootState) =>
    state.items.some((item) => item.id === props.item.id)
  );
  const formattedPriceString = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(props.item.price);

  return (
    <div className="flex bg-black text-white rounded-lg drop-shadow-lg m-4 w-100 overflow-hidden">
      <div className="h-32 w-auto">
        <img
          className="object-cover object-center h-full w-full"
          src={mealImage}
          alt={props.item.name}
          loading="lazy"
        />
      </div>

      <div className="grid grid-rows-2 grid-cols-2 items-center font-semibold">
        <h1 className="text-xl">{props.item.name}</h1>
        {props.item.vegetarian && (
          <span className="flex items-center justify-center h-8 mx-2 text-xs font-bold rounded-full bg-green-900 text-green-200">
            Vegetarian
          </span>
        )}
        <div className="row-start-2 text-lg text-md text-gray-300">
          {formattedPriceString}
        </div>
        {inBasket ? (
          <ItemQuantityCounter item={props.item} />
        ) : (
          <button
            className="row-start-2 col-start-2 h-8 w-30 px-4 text-sm rounded-md bg-black text-white border border-white rounded-md hover:bg-white hover:text-black"
            onClick={() => dispatch(addItem(props.item))}
          >
            Add to Order
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
