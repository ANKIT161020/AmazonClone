import "./Card.css";

export default function Card() {
  return (
    <div className="item_card">
      <div className="item_img">
        <img src="./src/assets/adidas.png" alt="item_Img" />
      </div>
      <div className="item_content">
        <div className="item_name">
          Adidas Shoesashjdgasdhauisdfhauisdfhajksdhfuiawerfhasjkdfhawdg
        </div>
        <div className="ratings">5stars</div>
        <div className="item_price">5000Rs</div>
      </div>
    </div>
  );
}
