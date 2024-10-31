
const Blog = ({blog}) => {

  const {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog;
  return (
    <div className="space-y-5 p-5 border-2 rounded-xl">
      <img className="rounded-xl h-fit w-full" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <img className="w-14 h-14" src={author_img} alt="" />
          <div>
            <h2 className="text-color1 text-2xl font-bold leading-9">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>          
        </div>
      </div>
      <h1 className="text-color1 font-bold text-4xl ">{title}</h1>
      <div>
      {
        hashtags.map(hashtag => <span key={hashtag.id}>#{hashtag} </span>)
      }        
      </div>
    </div>
  );
};

export default Blog;