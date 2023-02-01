import './settings.css'
import Sidebar from '../../items/sidebar/sidebar'

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsRapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your title</span>
                <span className="settingsDeleteTitle">Delete your title</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                <img src="https://images.pexels.com/photos/12502186/pexels-photo-12502186.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <label htmlFor="fileInput">
                    <i className='settingsPPIcon far fa-user-circle'></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Aayam'/>
                <label>Email</label>
                <input type="email" placeholder='aayamkhatiwada@gmial.com'/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
