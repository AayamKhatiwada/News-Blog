import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"

export default function SinglePost() {

    const location = useLocation();
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
        }
        getPost();
    })

    return (
        <div className="singlePost">
            <div className="singlePostRapper">
                {
                    post.photo &&
                    (
                        <img src={post.photo} alt="" className="singlePostImg" />
                    )
                }
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                        <Link to={`/?user=${post.userName}`} className="link">
                            <b>{post.userName}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDescription">{post.description}</p>
            </div>
        </div>
    )
}
