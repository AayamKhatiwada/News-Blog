import Sidebar from "../../items/sidebar/Sidebar"
import SinglePost from "../../items/SinglePost/SinglePost"
import "./single.css"

export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar />
        </div>
    )
}
