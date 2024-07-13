import axios from "axios";

// const vercelUrl = import.meta.env.VITE_BACKEND_URL;
const localUrl = "http://localhost:3000/api/"

export const uploadPostDoc = async (file: unknown) => {
    await axios.post(`${localUrl}fileupload`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };