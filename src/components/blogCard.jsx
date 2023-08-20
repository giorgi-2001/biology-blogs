import { NavLink } from "react-router-dom";

const BlogCard = ({blog}) => {

    return ( 
        <div className="blog-card">
            <p className="author">{blog.author}</p>
            <h2 className="blog-title">{blog.title}</h2>
            <span className="rating">rating: {blog.rating}</span>
            <NavLink to={`/${blog.id}`}>
                <button className="button blog-card__button">Open Blog</button>
            </NavLink>
            
        </div>
     );
}
 
export default BlogCard;