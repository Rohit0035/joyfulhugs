// export const API_BASE_URL = "http://127.0.0.1:8000/api";
// export const IMAGE_URL = "http://localhost:8000/storage";

export const API_BASE_URL = "https://joyfulhugs.com/admin/api";
export const IMAGE_URL = "https://joyfulhugs.com/admin/storage";

const getToken = ()=>{
  return localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
}

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
};

export const API_CONFIG_AUTH =()=> ({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`
  }
});

export const API_MULTIPART_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data"
  }
};


