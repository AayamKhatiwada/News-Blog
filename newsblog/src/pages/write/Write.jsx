import './write.css'

export default function Write() {
  return (
    <div className="write">
        <img src="https://images.pexels.com/photos/7008379/pexels-photo-7008379.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="writeImg" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className='writeIcon fas fa-plus'></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea className='writeInput writeText' type="Text" placeholder='Tell your Story'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
