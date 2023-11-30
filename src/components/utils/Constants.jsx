import axios from "axios";

export const API_URL = "http://localhost:5000/";

export const api = axios.create({
  baseURL: API_URL,
});

export const formatRupiah = (angka) => {
  let number_string = angka.toString().replace(/[^,\d]/g, ""),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    let separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
  return rupiah;
};

export const formatDate = (date) => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    // Handle the case where the date is not valid
    return "Invalid Date";
  }

  const ye = new Intl.DateTimeFormat("id-ID", { year: "numeric" }).format(
    parsedDate
  );
  const mo = new Intl.DateTimeFormat("id-ID", { month: "short" }).format(
    parsedDate
  );
  const da = new Intl.DateTimeFormat("id-ID", { day: "2-digit" }).format(
    parsedDate
  );

  return `${da} ${mo} ${ye}`;
};

export const formatDateWithDays = (date) => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    // Handle the case where the date is not valid
    return "Invalid Date";
  }

  const ye = new Intl.DateTimeFormat("id-ID", { year: "numeric" }).format(
    parsedDate
  );
  const mo = new Intl.DateTimeFormat("id-ID", { month: "long" }).format(
    parsedDate
  );
  const da = new Intl.DateTimeFormat("id-ID", { day: "numeric" }).format(
    parsedDate
  );
  const hr = new Intl.DateTimeFormat("id-ID", { hour: "numeric" }).format(
    parsedDate
  );
  const min = new Intl.DateTimeFormat("id-ID", { minute: "numeric" }).format(
    parsedDate
  );
  const day = new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(
    parsedDate
  );

  return `${day} ${da} ${mo} ${ye}, ${hr}.${min}`;
};

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
      role_id: 2,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

//register user from google auth
export const registerGoogle = async (
  email,
  nama_depan,
  nama_belakang,
  password
) => {
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
    return false;
  }
};

// checkUserEmail
export const checkUserExists = async (email) => {
  axios({
    method: "get",
    url: `http://localhost:5000/api/user/check?email=${email}`,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchServices = async () => {
  try {
    const response = await api.get("/api/product?product_status=true");

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

//fetch detail service
export const fetchDetailService = async (id) => {
  try {
    const response = await api.get(`/api/product/${id}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

//create detail service
export const addDetailService = async (
  product_id,
  mentor_id,
  tentang,
  topik
) => {
  try {
    const authToken = sessionStorage.getItem("token");

    if (!authToken) {
      // Handle case where auth token is not available
      console.log("Auth token not found");
      return;
    }

    const response = await api.post(
      `/api/detail-product/${product_id}`,
      {
        product_id,
        mentor_id,
        tentang,
        topik,
      },
      {
        headers: {
          "auth-token": authToken,
        },
      }
    );
    return response.data;
  } catch (error) {
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

//fetch mentors
export const fetchMentor = async () => {
  try {
    const response = await api.get("/api/mentor");

    return response.data;
  } catch (error) {
    throw error;
  }
};

// get all transactions
export const fetchTransactions = async () => {
  try {
    const authToken = sessionStorage.getItem("token");

    if (!authToken) {
      // Handle case where auth token is not available
      console.log("Auth token not found");
      return;
    }

    const response = await api.get("/api/transaction", {
      headers: {
        "auth-token": authToken,
        // Add other headers if needed
      },
    });

    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTransactionByUserId = async (user_id, kategori_id) => {
  try {
    const authToken = sessionStorage.getItem("token");

    if (!authToken) {
      // Handle case where auth token is not available
      console.log("Auth token not found");
      return;
    }

    const response = await api.get(`/api/transaction?user_id=${user_id}`, {
      headers: {
        "auth-token": authToken,
        // Add other headers if needed
      },
    });

    // Filter data based on kategori_id = 2
    const filteredData = response.data.data.filter(
      (item) => item.product.kategori_id === kategori_id
    );

    return filteredData;
  } catch (error) {
    throw error;
  }
};

//get transaction by id_user && product_id
export const checkTransaction = async (user_id, product_id) => {
  try {
    const authToken = sessionStorage.getItem("token");

    if (!authToken) {
      // Handle case where auth token is not available
      console.log("Auth token not found");
      return;
    }

    const response = await api.get(
      `/api/transaction?user_id=${user_id}&product_id=${product_id}`,
      {
        headers: {
          "auth-token": authToken,
          // Add other headers if needed
        },
      }
    );

    return response.data.isTransaksiExist;
  } catch (error) {
    throw error;
  }
};

// post transaction
export const postTransaction = async (product_id, user_id) => {
  try {
    const authToken = sessionStorage.getItem("token");

    if (!authToken) {
      // Handle case where auth token is not available
      console.log("Auth token not found");
      return;
    }

    const response = await api.post(
      "/api/transaction",
      {
        product_id,
        user_id,
        status: "done",
      },
      {
        headers: {
          "auth-token": authToken,
          // Add other headers if needed
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
