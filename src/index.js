import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClientProvider,QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import axios from 'axios';

const queryClient = new QueryClient();

axios.interceptors.request.use(request => {
  // const token = localStorage.getItem('token');
  request.headers.channelName= 'Bikee'
  return request;
});
// axios.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      <ReactQueryDevtools initialIsOpen/>
    </QueryClientProvider >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
