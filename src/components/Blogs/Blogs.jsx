import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

  const [blogs,setBlogs] = useState([])

  useEffect(()=>{
    fetch('blogs.json')
    .then(response => response.json())
    .then(data => setBlogs(data))
  },[])
  console.log(blogs);
  return (
    <div className='col-span-2 space-y-5'>
      {
        blogs.map((blog) => <Blog 
        key={blog.id}
        blog={blog}
        ></Blog>)
      }
    </div>
  );
};

export default Blogs;