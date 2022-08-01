import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img src="https://images.pexels.com/photos/12978474/pexels-photo-12978474.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="postImg" />
      <div className="postInfo">

        <div className="postCats">
          <div className="postCat">Music</div>
          <div className="postCat">Life</div>
        </div>

        <span className="postTitle">aaaasvhevbckwjb jhvsh bkja</span>

        <hr/>

        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  )
}
