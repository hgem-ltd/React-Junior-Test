import React, { useState } from "react";
import items from "./menu.json";
import MenuItem from "./menuItem";
import BasketButton from "../../components/basketButton";

function Menu(props: any) {
  const [menuItems] = useState(items);

  return (
    <div>
      <h1 className="py-16">Our Menu:</h1>
      <div className="grid grid-cols-2 gap-4">
        {menuItems.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </div>
      <BasketButton />
    </div>
  );
}

export default Menu;
