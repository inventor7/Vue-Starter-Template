import Axios from 'axios';
// Create an instance of Axios with default settings
const axios = Axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    // withXSRFToken: true,
    //if it doesn't work,add this
    //xsrfCookieName: 'XSRF-TOKEN',
    //xsrfHeaderName: 'X-XSRF-TOKEN',

    timeout: 60000,
    headers: {
        Accept: 'application/json',
    },
});

// Add an interceptor to handle authentication or other common logic
// axios.interceptors.request.use(
//     (config) => {
//         // Add any common headers or logic here
//         // For example, you can add an authentication token
//         // config.headers.Authorization = `Bearer ${token}`;

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// Add an interceptor to handle responses or other common logic
axios.interceptors.response.use(null, (err) => {

    // Handle any errors here 
    const error = {
        status: err.response.status,
        message: null,
        validation: {},
        original: err,
    }

    if (err.response?.status === 422) {
        error.message = 'Validation error';
        for (const key in err.response.data.errors) {
            error.validation[key] = err.response.data.errors[key][0];
        }
    } else if (err.response?.status === 401) {
        error.message = 'Unauthorized';
    } else if (err.response?.status === 403) {
        error.message = 'Forbidden';
    }
    else if (err.response?.status === 404) {
        error.message = 'Not found';
    }
    else if (err.response?.status === 500) {
        error.message = 'Server error';
    }
    else {
        error.message = 'Unknown error';
    }
    return Promise.reject(error);
}



);

export default axios;