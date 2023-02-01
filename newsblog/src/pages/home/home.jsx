import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../items/header/header"
import Posts from "../../items/posts/posts"
import Sidebar from "../../items/sidebar/sidebar"
import "./home.css"

export default function Home() {

  // const [posts, setPosts] = useState([]);

  // useEffect(()=>{
  //   const fetchPosts = async ()=>{
  //     const res = await axios.get("/posts")
  //     console.log(res)
  //   }
  //   fetchPosts()
  // },[])

  return (
    <>
      <Header />
      <div className="home">
        <Posts/>

        <Sidebar/>

      </div>
    </>
  )
}
