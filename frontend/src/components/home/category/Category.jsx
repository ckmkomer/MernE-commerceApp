import CategoryItem from "./CategoryItem";
import "./Category.css"

function Category() {
  return (<>

    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Summer Collection New Modern Design</p>
        </div>
        <ul className="category-list">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ul>
      </div>
    </section>

  </>);
}

export default Category;