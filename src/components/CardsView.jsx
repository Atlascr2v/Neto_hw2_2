import ShopCard from "./ShopCard"
import './CardsView.css';
function CardsView({cards}) {
  console.log("CardItem:", cards); 
  return (
    <ul className="cards-view">
      {cards.map((card, index) => (
        <ShopCard key={index} data={card}/>
      ))}
    </ul>
  );
}

export default CardsView;
