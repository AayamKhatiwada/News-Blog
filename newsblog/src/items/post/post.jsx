import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img src="https://images.pexels.com/photos/12978474/pexels-photo-12978474.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="postImg" />
      <div className="postInfo">

        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>

        <span className="postTitle">aaaasvhevbckwjb jhvsh bkja</span>

        <hr/>

        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem veniam ullam magni nostrum quod ipsa quaerat perferendis consectetur eius ratione eligendi eos saepe debitis quae dolore, eum numquam sed adipisci</p>
    </div>
  )
}
