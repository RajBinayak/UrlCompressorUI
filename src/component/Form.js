import React, { useState } from "react";
import { generateUrl } from "../servces/url-service";

function Form() {
  const data = {
    fullUrlName: "",
    shortUrlName: "",
  };
  const [inputData, setInputData] = useState(data);
  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputData);
    if (!inputData.fullUrlName) {
      alert("please enter your desired URL");
    }
    generateUrl(inputData)
      .then((resp) => {
        console.log(resp);
        if (
          resp.data.shortUrlName != null ||
          resp.data.shortUrlName != undefined
        ) {
          alert("Please copy the short url : " + resp.data.shortUrlName);
        }
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form className="container" method="post" onSubmit={handleSubmit}>
      <div>
        <h1> Create URL</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your url"
          name="fullUrlName"
          value={inputData.fullUrlName}
          onChange={handleData}
        ></input>
      </div>

      {/* <div>
        <input
          type="text"
          placeholder="Get short url"
          name="shortUrlName"
          value={inputData.shortUrlName}
          onChange={handleData}
        ></input>
      </div> */}

      <div>
        <button type="submit">Create</button>
      </div>
      {/* <a href="http://localhost:3000/Search">Search</a> */}
    </form>
  );
}

export default Form;
