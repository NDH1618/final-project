import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Admifoder from "./Adminfoder";
import './AdminUp.css'

class AdminUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            urlImg: ''
        }
    }

  handleFileChange = e => {
    this.setState({ file: e.target.files[0] });
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  upload = () => {
    if (this.state.file) {
      let data = new FormData();
      data.append("file", this.state.file);
      data.set("data", this.state.text);

      axios
        .post("http://contabo.foxcode.site:8085/api/v1/files", data)
        .then(response => 
          {
            console.log(response.data)
            alert(response.data.fileDownloadUri)
            this.setState({
                urlImg: response.data.fileDownloadUri
            })
          })
        .catch(error => console.log(error));
    }
  };

  render() {
    return (
      <>
        <div>
          <div  className="AdminUp-up">
            <input type="text" onChange={this.handleChange} />
            <input type="file" onChange={this.handleFileChange} />
            <input type="button" onClick={this.upload} value="Upload" />
          </div>
          <Admifoder Urlmage={this.state.urlImg} />
        </div>
      </>
    );
  }
}
export default AdminUp;






