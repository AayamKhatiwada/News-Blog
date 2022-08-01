import Header from "../../header/header"
import Posts from "../../posts/posts"
import Sidebar from "../../sidebar/sidebar"
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
