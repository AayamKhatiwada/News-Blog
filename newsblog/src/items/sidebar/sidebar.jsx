import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/12906892/pexels-photo-12906892.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae, facilis fugiat dolor reiciendis</p>
            </div>

            <div className="sideBarItem">
                <span className="sideBarTitle">CATAGORIES</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Music</li>
                    <li className="sideBarListItem">Style</li>
                    <li className="sideBarListItem">Sports</li>
                    <li className="sideBarListItem">Tech</li>
                </ul>
            </div>

            <div className="sideBarItem">
                <span className="sideBarTitle">Social Media</span>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fa-brands fa-twitter-square"></i>
                    <i className="sideBarIcon fa-brands fa-facebook-square"></i>
                    <i className="sideBarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
