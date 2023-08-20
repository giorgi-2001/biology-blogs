import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import BlogCard from "../components/blogCard";

const Home = () => {

    const [blogs, setBlogs] =  useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchBlogs = async () => {
            const { data, error} = await supabase
                .from('blogs')
                .select()
            
            if (error) {
                setError(error)
                setBlogs(null)
            }
            if (data) {
                setError(null)
                setBlogs(data)
            }
        }
        fetchBlogs()        
    }, [])

    return ( 
        <div className="home">
            {error && (<p>{error}</p>)}
            {blogs && blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog}/>
            ))}
        </div>
     );
}
 
export default Home;