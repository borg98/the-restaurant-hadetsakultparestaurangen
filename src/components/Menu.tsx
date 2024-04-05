
function Menu({items} : { items: any;}) {
  return (
    <>
      <div className="section-center">
        {items.map((item: { id: any; title: any; desc: any; price: any; }) => {
          const { id, title, desc, price } = item;
          return (
            <article key={id} className="menu-item">
              <div className="item-info">
                <header>
                  <h4 className="item-title">{title}</h4>
                  <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Menu