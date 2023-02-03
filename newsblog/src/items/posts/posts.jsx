import Post from '../post/post'
import './posts.css'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {
        posts.map(post => {
          return <Post key={post._id} post={post}/>
        })
      }
    </div>
  )
}
