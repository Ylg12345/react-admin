import axios from 'axios'
import { message, Modal } from 'antd';
import { rm, get } from "../utils/storage";


const service = axios.create({
	baseURL: 'http://localhost:3001/api',
	timeout: 5000 
})

service.interceptors.request.use(
	(config: any) => {
		let token = get('token');
		config.headers.Authorization = `Bearer ${token}`;
		return config
	},
	error => {
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	response => {
		const { msg } = response.data;
		if ( msg === 'Unauthorized' ) {
			message.warning('认证失败，请退出后重新登录！');
			rm('token');
			window.location.href = '/login';
			return Promise.reject('认证失败');
		}
			return response;
	},
	error => {
		Modal.error({
			title: '网络请求错误',
		});
		return Promise.reject(error);
	}
);

export default service;
