import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/basket";
import { RootState } from "../store/store";

function ItemQuantityCounter(props: any) {
  const dispatch = useDispatch();
  const quantityInBasket = useSelector(
    (state: RootState) =>
      state.items.find((item) => item.id === props.item.id)?.quantity
  );

  return (
    <div className="row-start-2 col-start-2 h-8 w-100 text-sm rounded-md text-white border border-white flex items-center overflow-hidden">
      <button
        className="h-full w-10 hover:bg-white hover:text-black"
        onClick={() => dispatch(removeItem(props.item))}
      >
        -
      </button>
      <span className="h-full w-9 flex justify-center items-center border-x border-white">
        {quantityInBasket}
      </span>
      <button
        className="h-full w-10 hover:bg-white hover:text-black"
        onClick={() => dispatch(addItem(props.item))}
      >
        +
      </button>
    </div>
  );
}
export default ItemQuantityCounter;
