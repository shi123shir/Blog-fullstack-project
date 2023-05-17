import React, { useState,useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import axios from "axios";
import { useLocation , useNavigate} from "react-router-dom";
import moment from "moment";
import { AuthContext } from '../../context/authContext'
// import { Parser } from 'html-react-parser';

const Write = () => {
  const navigate = useNavigate()
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [ value, setValue] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  const {currentUser} = useContext(AuthContext)
    let curUser = currentUser.userId
 
  
    const upload = async () => {
      try {
        const formData = new FormData();
        formData.append("file", file)
        const res = await axios.post("http://localhost:8080/api/upload", formData);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
    

  const handleSummit = async (e) => {
    e.preventDefault();
    let Image = await upload()
    try {
      state? await axios.put(`http://localhost:8080/api/blog/${state.id}`, {
        title, desc:value, cat,image:Image? Image:""
      })
      :await axios.post(`http://localhost:8080/api/blog`, {
        title, desc:value, userId:curUser, cat,image:Image? Image:"",
        date:moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      })
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className="add">
      <div className="content2">
        <input
          type="text"
          placeholder="Title"
          className="conint"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
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
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button className="fbut1">Save as a draft</button>
            <button className="lbut2" onClick={handleSummit}>
              Publish
            </button>
          </div>
        </div>
        <div className="item">
          <h1>Categroy</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "art"}
              name="cat"
              value="art"
              id="art"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "science"}
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "technology"}
              name="cat"
              Value="technology"
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cinema"}
              name="cat"
              value="cinema"
              id="cinema"
            />
            <label htmlFor="cinema">cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "design"}
              name="cat"
              value="desing"
              id="design"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "food"}
              name="cat"
              value="food"
              id="food"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
