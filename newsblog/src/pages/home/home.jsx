import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../../items/header/header"
import Posts from "../../items/posts/posts"
import Sidebar from "../../items/sidebar/sidebar"
import "./home.css"

export default function Home() {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>

        <Sidebar/>

      </div>
    </>
  )
}
