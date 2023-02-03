import { Link } from 'react-router-dom'
import './post.css'

export default function Post({ post }) {
  console.log(post)
  return (
    <div className="post">
      {
        post.photo && (
          <img src={post.photo} alt="" className="postImg" />
        )
      }
      <div className="postInfo">

        <div className="postCats">
          {
            post.catagories.map((category) => {
              return (
                <span className="postCat">{category}</span>
              )
            })
          }
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />

        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDescription">{post.description}</p>
    </div>
  )
}
