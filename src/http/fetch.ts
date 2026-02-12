import axios from "axios";
const BASE_URL = "https://maec-backend.vercel.app";
// const BASE_URL = "http://localhost:3000"

export const uploadPostDoc = async (file: unknown) => {
  await axios.post(`${BASE_URL}fileupload`, file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const createUser = async (file: unknown) => {
  return await axios.post(`${BASE_URL}/api/createUser`, file);
};
export const userLogin = async (file: unknown) => {
  return await axios.post(`${BASE_URL}/api/userLogin`, file);
};
export const getUserEmailById = async (file: unknown) => {
  return await axios.post(`${BASE_URL}/api/getUserEmailById`, file);
};
export const updateProfile = async (file: unknown) => {
  return await axios.post(`${BASE_URL}/api/updateProfile`, file);
};
export const getUserProfileById = async (file: unknown) => {
  return await axios.post(`${BASE_URL}/api/getUserProfileById`, file);
};
export const addEvalutions = async (file: unknown) => {
  return await axios.post(`${BASE_URL}/api/addEvalutions`, file);
};

export const getUserEvalutionById = async (file: unknown) => {
  return await axios.post(`${BASE_URL}/api/getUserEvalutionById`, file);
};
export const addDocuments = async (file: unknown) => {
  return await axios.post(`${BASE_URL}/api/addDocuments`, file);
};
export const getDocumentByUserId = async (file: unknown) => {
  return await axios.post(`${BASE_URL}/api/getDocumentByUserId`, file);
};
export const getAllUserDetails = async (limit = 20, offset = 0,search = "") => {
  return await axios.get(`${BASE_URL}/api/getAllUserDetails?limit=${limit}&offset=${offset}&search=${search}`);
};
export const makePaymentStripe = async (file:unknown) => {
  return await axios.post(`${BASE_URL}/api/makePayment`,file);
}

export const makePaymentPaypal = async (file:unknown) => {
  return await axios.post(`${BASE_URL}/api/makePaymentPaypal`,file);
};


export const addTotalAmt = async (file:unknown) => {
  return await axios.post(`${BASE_URL}/api/addTotalAmt`,file);
};
export const compeltePayment = async (file:unknown) => {
  return await axios.post(`${BASE_URL}/api/compeltePayment`,file);
};

export const getUserEvaluationDetailsById = async (file:unknown) => {
  return await axios.post(`${BASE_URL}/api/getUserEvaluationDetailsById`,file);
};


