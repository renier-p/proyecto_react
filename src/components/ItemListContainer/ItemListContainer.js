import "./ItemListContainer.css";
import RhcpImg from "../../img/rhcp.png";
import TestCard from "../TestCard/TestCard";

function ItemListContainer() {
  return (
    <div className="container item-margin">
      <h1>Bienvenidos a mi tienda</h1>
      <div />
      <div className="container card-margin">
        <div className="columns">
          <div className="column is-full">
            <TestCard titulo="Logo Red Hot Chili Peppers" img={RhcpImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
