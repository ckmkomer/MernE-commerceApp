import './Brand.css'
import BrandItem from './BrandItem';

function Brand() {
    return ( <>
    
  <section className="brands">
    <div className="container">
      <ul className="brand-list">
        <BrandItem/>
      </ul>
    </div>
  </section>

    </> );
}

export default Brand;