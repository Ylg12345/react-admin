import axios from 'axios'
import { Modal } from 'antd';
import NProgress from 'nprogress'
import { get } from "../utils/storage";

const service = axios.create({
	baseURL: 'http://localhost:3001/api', 
	timeout: 5000 
})

service.interceptors.request.use(
	(config: any) => {
		NProgress.start();
		let token = get('token');
		config.headers.Authorization = `Bearer ${token}`;
		return config
	},
	error => {
		NProgress.done();
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	response => {
		NProgress.done();
			return response;
	},
	error => {
		Modal.error({
			title: '网络请求错误',
		});
		NProgress.done();
		return Promise.reject(error);
	}
);

export default service;
