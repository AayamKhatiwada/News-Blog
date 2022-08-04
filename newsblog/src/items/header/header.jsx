import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitlesOne">React app</span>
            <span className="headerTitlesTwo">Node app</span>
        </div>
        <img src="https://images.pexels.com/photos/8947692/pexels-photo-8947692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="headerImage" />
    </div>
  )
}
