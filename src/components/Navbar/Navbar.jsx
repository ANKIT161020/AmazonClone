import { MdOutlineSearch } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="src/assets/logo.png" alt="logo" />
        </div>
        <div className="search">
          <select name="search_cat" id="">
            <option value="All">All</option>
          </select>
          <input placeholder="Search EasyShop" type="text" name="" id="" />
          <button className="searchBtn">
            <MdOutlineSearch />
          </button>
        </div>
        <div className="nav_items">
          <div className="sign_in">Sign-in</div>
          <div className="cart">
            <BsCart2 className="cartIcon" /> <span className="cartNum">0</span>
            Cart
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
