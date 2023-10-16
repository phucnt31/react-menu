import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";

const App = () => {
  const [menus, setMenus] = useState(menu);

  return (
    <main className="menu">
      <Title text="our menu" />
      <Menu menus={menus} />
    </main>
  );
};
export default App;
