import axios from "axios";
const BASE_URL = "https://maec-backend.vercel.app/api/";
// const BASE_URL = "http://localhost:3000/api/"

export const uploadPostDoc = async (file: unknown) => {
  await axios.post(`${BASE_URL}fileupload`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const createUser = async (file: unknown) => {
  return await axios.post(`${BASE_URL}createUser`, file);
};
export const userLogin = async (file: unknown) => {
  return await axios.post(`${BASE_URL}userLogin`, file);
};
export const getUserEmailById = async (file: unknown) => {
  return await axios.post(`${BASE_URL}getUserEmailById`, file);
};
export const updateProfile = async (file: unknown) => {
  return await axios.post(`${BASE_URL}updateProfile`, file);
};
export const getUserProfileById = async (file: unknown) => {
  return await axios.post(`${BASE_URL}getUserProfileById`, file);
};
export const addEvalutions = async (file: unknown) => {
  return await axios.post(`${BASE_URL}addEvalutions`, file);
};

export const getUserEvalutionById = async (file: unknown) => {
  return await axios.post(`${BASE_URL}getUserEvalutionById`, file);
};
export const addDocuments = async (file: unknown) => {
  return await axios.post(`${BASE_URL}addDocuments`, file);
};
export const getDocumentByUserId = async (file: unknown) => {
  return await axios.post(`${BASE_URL}getDocumentByUserId`, file);
};
export const getAllUserDetails = async (limit = 20, offset = 0,search = "") => {
  return await axios.get(`${BASE_URL}getAllUserDetails?limit=${limit}&offset=${offset}&search=${search}`);
};
export const makePaymentStripe = async (file:unknown) => {
  return await axios.post(`${BASE_URL}makePayment`,file);
}

export const makePaymentPaypal = async (file:unknown) => {
  return await axios.post(`${BASE_URL}makePaymentPaypal`,file);
};


export const addTotalAmt = async (file:unknown) => {
  return await axios.post(`${BASE_URL}addTotalAmt`,file);
};
export const compeltePayment = async (file:unknown) => {
  return await axios.post(`${BASE_URL}compeltePayment`,file);
};

export const getUserEvaluationDetailsById = async (file:unknown) => {
  return await axios.post(`${BASE_URL}getUserEvaluationDetailsById`,file);
};


