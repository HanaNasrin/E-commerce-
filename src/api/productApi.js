import axios from "axios";

const UserURL = "https://e-com-t29h.onrender.com/users";
const ProductURL = "https://e-com-t29h.onrender.com/products";

export const getAllProduct = () =>{
    return axios.get(ProductURL);
}

export const getProductbyId = (ProductId) =>{
    return axios.get(`${ProductURL}/${ProductId}`);
}

export const updateCart = async (userId,cartData) => {
    return axios.put(`${UserURL}/${userId}`,cartData);
}