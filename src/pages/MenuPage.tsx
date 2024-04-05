import { SetStateAction, useState } from 'react';
import items from '../components/Data'
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import '../style/_Menu.scss';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];


const MenuPage = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategery] = useState("");
  const [categories] = useState (allCategories);

  const filterItems = (category: SetStateAction<string>) => {
    setActiveCategery(category);
    if(category ==="all") {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item: { category: any; }) => item.category === category); 
    setMenuItems(newItems);
  }
  return (
    <>
      <main className='menu-page'>
        <section className="menu-section">
          <div className="menu-container">
             <h3 className='menu-title'>Menu List</h3>
             <div className="underline"></div>
          </div>
          <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
        </section>
        <Menu items={menuItems} />
      </main>
    </>
  );
}

export default MenuPage;