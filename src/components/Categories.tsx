import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

 const Categories = ({categories, filterItems, activeCategory} : { categories: any; filterItems: any; activeCategory: any;}) => {
  return (
    <div className="btn-container">
      {categories.map((category: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined)=> {
        return (
            <>
              <button
              type="button"
              className={`${activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
            >
              {category}
            </button>
            </>
        )
      })}

    </div>
  );
}

export default Categories