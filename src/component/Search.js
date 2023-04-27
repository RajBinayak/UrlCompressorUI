// import React, { useState } from "react";
// import { searchUrl } from "../servces/url-service";

// function Search() {
//   const data = {
//     shortUrl: "",
//     reasult: "",
//   };
//   const [inputData, setInputData] = useState(data);
//   function handleData(e) {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//     console.log(inputData);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(inputData);
//     if (!inputData.shortUrl) {
//       alert("please enter your desired URL");
//     }
//     searchUrl(inputData)
//       .then((resp) => {
//         console.log(resp);
//         console.log("success");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   return (
//     <form className="container" method="post" onSubmit={handleSubmit}>
//       <div>
//         <h1> Search URL</h1>
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter your url"
//           name="shortUrl"
//           value={inputData.shortUrl}
//           onChange={handleData}
//         ></input>
//       </div>

//       <div>
//         <button type="submit">Search</button>
//       </div>
//     </form>
//   );
// }

// export default Search;
