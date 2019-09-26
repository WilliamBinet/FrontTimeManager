import axios from 'axios'

const axiosApi = axios.create({
});

export const setAuthHeader = (token) => {
    axiosApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Set the initial header from storage or something (should surround with try catch in actual app)
setAuthHeader(localStorage.getItem('jwt'));

export default axiosApi;
