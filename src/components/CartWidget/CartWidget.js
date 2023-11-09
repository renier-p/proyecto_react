import { BsCartFill } from "react-icons/bs";

function CartWidget() {
  return (
    <div className="field is-grouped">
      <p className="control">
        <BsCartFill />
        <p className="control"></p>
      </p>
    </div>
  );
}

export default CartWidget;
