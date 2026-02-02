import ShopCard from "./ShopCard"
import "./ListView.css";
function ListView({cards}) {
  console.log("ListItem:", cards); 
return (
    <ul className="list-view">
      {cards.map((card, index) => (
        <ShopCard key={index} data={card} />
      ))}
    </ul>
  );
}


export default ListView;
