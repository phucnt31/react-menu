import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {
  const [menus, setMenus] = useState(menu);
  const [categories, setCategories] = useState([
    "all",
    ...new Set(menu.map((item) => item.category)),
  ]);

  return (
    <main className="menu">
      <Title text="our menu" />
      <Menu menus={menus} />
      <Categories categories={categories} />
    </main>
  );
};
export default App;
