import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className='col-span-1 space-y-4'>
      <div className="bg-color21 border border-color21 rounded-lg md:py-5">
        <h2 className="text-color2 font-bold text-2xl text-center">Spent time on read : {readingTime} min</h2>
       </div>
      <div className="bg-color105 rounded-lg p-7 space-y-4">
        <h1 className="text-color1 font-bold text-2xl">Bookmarked Blogs : {bookmarks.length}</h1>
        {
          bookmarks.map(bookmark => <Bookmark 
          key={bookmark.id}
          bookmark = {bookmark}          
          ></Bookmark>)
        }        
      </div>      
    </div>
  );
};

Bookmarks.propTypes={
  bookmarks: PropTypes.array.isRequired,
  handleWatchTime: PropTypes.func.isRequired,
  readingTime: PropTypes.number.isRequired
}
export default Bookmarks;