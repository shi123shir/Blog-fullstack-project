import React, { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css"

const Write = () => {
  const [value,setValue] = useState("")

  console.log(value)
  return (
    <div className='add'>
      <div className="content2">
        <input type="text"  placeholder='Title' className='conint'/>
        <div className="editorContainer">
          <ReactQuill  className = "editor" theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{display:"none"}} type="file"  id='file'/>
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button className='fbut1'>Save as a draft</button>
            <button className='lbut2'>update</button>
          </div>
        </div>
        <div className="item">
          <h1>Categroy</h1>
          <div className="cat">
          <input type="radio" name="cat" value="art" id="art"  />
          <label htmlFor='art'>Art</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="science" id="science" />
          <label htmlFor='science'>science</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" Value="technology" id="technology" />
          <label htmlFor='technology'>technology</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="cinema" id="cinema" />
          <label htmlFor='cinema'>cinema</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="desing" id="design" />
          <label htmlFor='design'>Design</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="food" id="food" />
          <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write