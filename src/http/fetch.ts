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
export const getUserEmailById = async (file: unknown) => {
  return await axios.post(`${vercelUrl}getUserEmailById`, file);
};
export const updateProfile = async (file: unknown) => {
  return await axios.post(`${vercelUrl}updateProfile`, file);
};
export const getUserProfileById = async (file: unknown) => {
  return await axios.post(`${vercelUrl}getUserProfileById`, file);
};
export const addEvalutions = async (file: unknown) => {
  return await axios.post(`${vercelUrl}addEvalutions`, file);
};

export const getUserEvalutionById = async (file: unknown) => {
  return await axios.post(`${vercelUrl}getUserEvalutionById`, file);
};
export const addDocuments = async (file: unknown) => {
  return await axios.post(`${vercelUrl}addDocuments`, file);
};
export const getDocumentByUserId = async (file: unknown) => {
  return await axios.post(`${vercelUrl}getDocumentByUserId`, file);
};
export const getAllUserDetails = async (limit = 20, offset = 0,search = "") => {
  return await axios.get(`${vercelUrl}getAllUserDetails?limit=${limit}&offset=${offset}&search=${search}`);
};
export const makePaymentStripe = async (file:unknown) => {
  return await axios.post(`${vercelUrl}makePayment`,file);
}

export const makePaymentPaypal = async (file:unknown) => {
  return await axios.post(`${vercelUrl}makePaymentPaypal`,file);
};


export const addTotalAmt = async (file:unknown) => {
  return await axios.post(`${vercelUrl}addTotalAmt`,file);
};
export const compeltePayment = async (file:unknown) => {
  return await axios.post(`${vercelUrl}compeltePayment`,file);
};

export const getUserEvaluationDetailsById = async (file:unknown) => {
  return await axios.post(`${vercelUrl}getUserEvaluationDetailsById`,file);
};


