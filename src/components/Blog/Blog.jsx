import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog,handleAddToBookmark,handleReadingTime}) => {

  const {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog;
  return (
    <div className="space-y-5 p-5 border-2 rounded-xl">
      <img className="rounded-xl lg:h-64 w-full" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <img className="w-14 h-14" src={author_img} alt="" />
          <div>
            <h2 className="text-color1 text-2xl font-bold leading-9">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className='flex justify-between items-center space-x-2'>
          <span className='text-xl'>{reading_time} min read</span>
          <button className='text-xl focus:text-color2 focus:text-2xl focus:font-extrabold' 
          onClick={() => handleAddToBookmark(blog)}> <FaRegBookmark /> </button>       
        </div>
      </div>
      <h1 className="text-color1 font-bold text-4xl ">{title}</h1>
      <div>
      {
        hashtags.map((hashtag,idx) => <span key={idx}>#{hashtag} </span>)
      }        
      </div>
      <button className='text-color2 underline' onClick={()=> handleReadingTime(reading_time)}>Mark as read      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired
}
export default Blog;
