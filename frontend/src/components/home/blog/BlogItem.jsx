import { Link } from 'react-router-dom';
import './BlogItem.css'

function BlogItem() {
    return ( <>
    <li className="blog-item">
          <Link to={`blog ${BlogItem.id}`} className="blog-image">
            <img src="/img/blogs/blog1.jpg" alt="" />
          </Link>
          <div className="blog-info">
            <div className="blog-info-top">
              <span>25 Feb, 2021 </span>-<span>0 Comments</span>
            </div>
            <div className="blog-info-center">
              <a href="#">Aliquam hendrerit mi metus</a>
            </div>
            <div className="blog-info-bottom">
              <Link  to={`blog ${BlogItem.id}`}>Read More</Link>
            </div>
          </div>
        </li>
      
    
    </> );
}

export default BlogItem;