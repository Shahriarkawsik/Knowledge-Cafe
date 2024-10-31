import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmark]= useState([]);
  const [readingTime,setReadingTime]= useState(0);
  // console.log(readingTime);

  const handleAddToBookmark = (blog) => {
    setBookmark([...bookmarks,blog])
    // console.log(title);
  };

  const handleReadingTime = (reading_time) =>{
    setReadingTime((readingTime + reading_time));
  }

  return (
    <div className='font-Exo2'>
    <Header></Header>
    <main className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 justify-between items-start gap-2 '>
      <Blogs handleAddToBookmark={handleAddToBookmark}
      handleReadingTime={handleReadingTime}
      ></Blogs>
      <Bookmarks 
      key={bookmarks.id}
      bookmarks={bookmarks}
      readingTime={readingTime}      
      ></Bookmarks>
    </main>
    </div>
  )
}

export default App
