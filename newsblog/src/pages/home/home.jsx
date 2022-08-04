import Header from "../../items/header/header"
import Posts from "../../items/posts/posts"
import Sidebar from "../../items/sidebar/sidebar"
import "./home.css"

export default function Home() {
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
