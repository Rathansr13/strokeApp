import React, { useRef, useState } from "react";
import "../css/FileUpload.css";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from 'axios'
const Upload = () => {
  const inputRef = useRef();
  const[submitted ,setSubmitted] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    id: ''
  });
  const [imageUrl, setImageUrl] = useState(null); 

  // Handle the change event when a file is selected
  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onChooseFile = (event) => {
    event.preventDefault()
   inputRef.current.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]: value
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const imgFile = setSelectedFile;
    console.log('Submitted Patient Data:', patientData);
    axios.post('/your-backend-endpoint', patientData)
    .then(response => {
      console.log('Response from server:', response.data);
    })
    .catch(error => {
      console.error('Error sending data to server:', error);
    });
  };




  
  return (
    <div className="main-class">

    {!submitted ? (
      <div className="form-container">
      <form onSubmit={handleSubmit}>
      <div className="container-upload">
      <input
      type="file"
      style={{display:"none"}}
      ref={inputRef}
      onChange={handleOnChange}
    />
    {/* Button to trigger the file input dialog */}
    <button   className="file-btn" onClick={onChooseFile}>
      <span class="material-symbols-rounded"><FiUpload /></span>
    </button>
      {selectedFile && (
        <div className="selected-file">
          <p>{selectedFile.name}</p>
          <button onClick={removeFile}>
            <span class="material-symbols-rounded">delete</span>
          </button>
        </div>
    
      )}
      </div>
        <div>
          <label>
            Patient Name:
            <input
              type="text"
              name="name"
              value={patientData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={patientData.age}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Patient ID:
            <input
              type="text"
              name="id"
              value={patientData.id}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit"  className="btn-upload">Submit</button>
      </form>
    </div>
    ) : 
    
    (
      <div>
      <div className="info-container">
        <div className="model-container-information">
        <h1>PATIENT DATA</h1>
        <div className="p-lable-container">
              <p className="p-lable">PATIENT NAME :{patientData.name}</p>
              <p className="p-lable">PATIENT ID: {patientData.id}</p>
              <p className="p-lable">PATIENT AGE: {patientData.age}</p>
        </div>
        </div>  
        <div className="model-container-image">
        <h1>IMAGE</h1>
        <div className="image-container">
        {imageUrl && <img src={imageUrl} alt="Selected File" style={{ maxWidth: "100%", maxHeight: "200px" }} />}
        </div>
        </div>
      </div>  
      <Link to='/results'><button className="btn-result">Generate Result</button></Link>
      </div>
      )

    }

    </div>
  );
};

export default Upload;