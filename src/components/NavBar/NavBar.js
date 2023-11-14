import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar nav-shadow">
        <div className="navbar-brand">
          <div className="navbar-start menu">
            <p className="navbar-item navbar-font">E-COMMERCE</p>
          </div>

          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start menu">
            <p className="navbar-item navbar-font">INICIO</p>
            <div className="navbar-item has-dropdown is-hoverable menu">
              <p className=" navbar-item navbar-font ">PRODUCTOS</p>
              <div className="navbar-dropdown navbar-dropdown-margin is-boxed ">
                <p className="navbar-item">Camisas</p>
                <p className="navbar-item">Tazas</p>
                <p className="navbar-item">Llaveros</p>
              </div>
            </div>
            <p className="navbar-item navbar-font">CONTACTO</p>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <CartWidget />
                  <span>3</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
