import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostRapper">
                <img src="https://images.pexels.com/photos/13008665/pexels-photo-13008665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet, consectetur.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Aayam</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae, eos, corporis alias error magni quod voluptatem eum ex est tempore velit? Laborum debitis, officia temporibus tempore illo commodi! Quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae, eos, corporis alias error magni quod voluptatem eum ex est tempore velit? Laborum debitis, officia temporibus tempore illo commodi! Quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae, eos, corporis alias error magni quod voluptatem eum ex est tempore velit? Laborum debitis, officia temporibus tempore illo commodi! Quaerat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae, eos, corporis alias error magni quod voluptatem eum ex est tempore velit? Laborum debitis, officia temporibus tempore illo commodi! Quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, beatae, eos, corporis alias error magni quod voluptatem eum ex est tempore velit? Laborum debitis, officia temporibus tempore illo commodi! Quaerat.
                </p>
            </div>
        </div>
    )
}
