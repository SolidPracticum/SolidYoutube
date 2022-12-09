import Video from '../components/video/Video'
import Comment from '../containers/Comments/Comment/Comment'

function HomePage() {
  return (
    <div className='page'>
      <h1>Home page</h1>
      <Video />
      <Comment />
    </div>
  )
}

export default HomePage
