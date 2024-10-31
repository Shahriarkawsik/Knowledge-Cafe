import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from "prop-types";

const Blogs = ({handleAddToBookmark,handleReadingTime}) => {

  const [blogs,setBlogs] = useState([])

  useEffect(()=>{
    fetch('blogs.json')
    .then(response => response.json())
    .then(data => setBlogs(data))
  },[])
  
  return (
    <div className='col-span-2 space-y-5'>
      {
        blogs.map((blog) => <Blog 
        key={blog.id}
        blog={blog}
        handleAddToBookmark={handleAddToBookmark}
        handleReadingTime={handleReadingTime}
        ></Blog>)
      }
    </div>
  );
};
Blogs.propTypes ={
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired
}
export default Blogs;