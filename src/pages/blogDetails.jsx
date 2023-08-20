import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

const BlogDetails = () => {

    const { id } = useParams()

    const [blog, setBlog] = useState(null)
    const [error, stError] = useState(null)

    useEffect(() => {

        const fetchSingleBlog = async () => {
            const { data, error} = await supabase
                .from('blogs')
                .select("*")
                .eq('id', id)
                .single()
            
            if (error) {
                stError(error)
                setBlog(null)
            }
            if(data) {
                stError(null)
                setBlog(data)
            }
        }
        fetchSingleBlog()
    }, [])


    return ( 
        <div className="blog-details">
            {error && <p>{error}</p>}
            {blog && (
                <div className="single-blog">
                    <h2>{blog.title}</h2>
                    <p className="blog-content">{blog.content}</p>
                    <p className="blog-author">created by: {blog.author}</p>
                    <div className="button-container">
                        <button className="button edit">Edit</button>
                        <button className="button delete">Dlete Blog</button>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;