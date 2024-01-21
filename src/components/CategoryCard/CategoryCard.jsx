import "./CategoryCard.css";

export default function CategoryCard() {
  return (
    <div className="category_card">
      <div className="cat_name">Electronics</div>
      <div className="sub_cat">
        <div className="brands">
          <img src="./src/assets/adidas.png" alt="img" />
          <p>Brand Name</p>
        </div>
        <div className="brands">
          <img src="./src/assets/adidas.png" alt="img" />
          <p>Brand Name</p>
        </div>
        <div className="brands">
          <img src="./src/assets/adidas.png" alt="img" />
          <p>Brand Name</p>
        </div>
        <div className="brands">
          <img src="./src/assets/adidas.png" alt="img" />
          <p>Brand Name</p>
        </div>
      </div>
      <div className="explore">
        <a href="">Explore All</a>
      </div>
    </div>
  );
}
