import axios from "axios";

export const API_URL = "http://localhost:5000/";

export const api = axios.create({
  baseURL: API_URL,
});

export const loginCheck = async (email, password) => {
  try {
    const response = await api.post("/api/login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, nama_depan, nama_belakang, password) => {
  try {
    const response = await api.post("/api/register", {
      email,
      nama_depan,
      nama_belakang,
      password,
      role_id: 1,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchServices = async () => {
  try {
    const authToken = sessionStorage.getItem("token");

    if (!authToken) {
      // Handle case where auth token is not available
      console.log("Auth token not found");
      return;
    }
    const response = await api.get("/api/product?product_status=true", {
      headers: {
        "auth-token": authToken,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

//fetch mentor
export const fetchMentors = async () => {
  try {
    const authToken = sessionStorage.getItem("token");

    if (!authToken) {
      // Handle case where auth token is not available
      console.log("Auth token not found");
      return;
    }
    const response = await api.get("/api/mentor", {
      headers: {
        "auth-token": authToken,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// add service
export const addService = async (
  judul,
  periode,
  kuota,
  ringkasan,
  pertemuan,
  harga,
  tempat,
  kategori_id,
  thumbnail_img,
  errMsg
) => {
  try {
    const authToken = sessionStorage.getItem("token");

    if (!authToken) {
      // Handle case where auth token is not available
      console.log("Auth token not found");
      return;
    }

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("periode", periode);
    formData.append("kuota", kuota);
    formData.append("ringkasan", ringkasan);
    formData.append("pertemuan", pertemuan);
    formData.append("harga", harga);
    formData.append("tempat", tempat);
    formData.append("thumbnail_img", thumbnail_img);
    formData.append("kategori_id", kategori_id);
    formData.append("product_status", true);

    const response = await api.post("/api/product", formData, {
      headers: {
        "auth-token": authToken,
        // Add other headers if needed
        "Content-Type": "multipart/form-data", // Make sure to set the content type
      },
    });

    return response.data;
  } catch (error) {
    errMsg = error.response?.data?.error || "An error occurred.";
    throw error;
  }
};

//add mentor
export const addMentor = async (
  nama_lengkap,
  position,
  linkedin,
  profile_pict
) => {
  try {
    const authToken = sessionStorage.getItem("token");

    if (!authToken) {
      // Handle case where auth token is not available
      console.log("Auth token not found");
      return;
    }

    const formData = new FormData();
    formData.append("nama_lengkap", nama_lengkap);
    formData.append("position", position);
    formData.append("linkedin", linkedin);
    formData.append("profile_pict", profile_pict);

    const response = await api.post("/api/mentor", formData, {
      headers: {
        "auth-token": authToken,
        // Add other headers if needed
        "Content-Type": "multipart/form-data", // Set the content type for form data
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
