import axios from 'axios'

const secureInstance = axios.create({
    baseURL: 'https://api.hellobikee.com/api/v1',
    headers: {
        "Content-type" : "application/json",
        'Accept': 'application/json',
    }
})

const guestInstance = axios.create({
    baseURL: 'https://api.hellobikee.com/api/v1',
})

secureInstance.interceptors.request.use(
    config => {
        const accessToken = JSON.parse(localStorage.getItem('token'));
        if(accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;  
      },
      error => {
          return Promise.reject(error);
      }
);

secureInstance.interceptors.response.use(
    response => {
        //add filters to response
        // console.log(response);
        return response;
    },
    error => {
        console.log('view error')
        console.log(error)
        if (error.response.status === 401) {
            console.log('unauthorized '+error);
            return Promise.reject(error);
        }
        if (error.response.status === 422) {
            console.log('Can not process request');
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

const axiosInstance = {
    secureInstance,
    guestInstance
}

export default axiosInstance