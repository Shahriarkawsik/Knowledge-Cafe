import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  return (
    <div className='font-Exo2'>
    <Header></Header>
    <main className='w-4/5 mx-auto grid grid-cols-3 justify-between items-start gap-2 border-2'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </main>
    </div>
  )
}

export default App
