import { BsCartFill } from "react-icons/bs";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="field is-grouped">
      <p className="control margin-cart ">
        <BsCartFill />
        <p className="control"></p>
      </p>
    </div>
  );
}

export default CartWidget;
