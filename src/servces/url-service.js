import { myAxios } from "./halper";

export const generateUrl = (data) => {
  console.log(data);
  return myAxios.post("/create", data).then((response) => response);
};

// export const searchUrl = (data) => {
//   console.log(data);
//   return myAxios.post("/search", data).then((response) => response);
// };
