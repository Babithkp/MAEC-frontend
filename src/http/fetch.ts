import axios from "axios";

const vercelUrl = "https://maec-backend.vercel.app/api/";
// const localUrl = "http://localhost:3000/api/"

export const uploadPostDoc = async (file: unknown) => {
    await axios.post(`${vercelUrl}fileupload`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
export const createUser = async (file: unknown) => {
  return await axios.post(`${vercelUrl}createUser`, file);
  };
export const userLogin = async (file: unknown) => {
  return await axios.post(`${vercelUrl}userLogin`, file);
  };
export const updateProfile = async (file: unknown) => {
  return await axios.post(`${vercelUrl}updateProfile`, file);
  };
export const getUserProfileById = async (file: unknown) => {
  return await axios.post(`${vercelUrl}getUserProfileById`, file);
  };