import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store({ products }) {

  const [view, setView] = useState("view_module");

  const handleSwitch = () => {
    setView((prev) => (prev === "view_module" ? "view_list" : "view_module"));
  };

  const switchIcon = view === "view_module" ? "view_list" : "view_module";
  console.log("products:", products);
  return (
    <div className="store">
      <div className="store-toolbar">
        <IconSwitch icon={switchIcon} onSwitch={handleSwitch} />
      </div>

      {view === "view_module" ? (
        <CardsView cards={products} />
      ) : (
        <ListView cards={products} />
      )}
    </div>
  );
}

export default Store;