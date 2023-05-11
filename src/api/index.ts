import { message } from 'antd';
import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

import { AxiosCanceler } from '@/api/helper/axiosCancel';
import { checkStatus } from '@/api/helper/checkStatus';
import { ResultData } from '@/api/interface';
import NProgress from '@/config/nprogress';
import {
	hideFullScreenLoading,
	showFullScreenLoading,
} from '@/config/serviceLoading';

const axiosCanceler = new AxiosCanceler();

const config = {
	baseURL: import.meta.env.VITE_APP_URL,
	timeout: 10000,
	withCredentials: true,
};

class RequestHttp {
	service: AxiosInstance;

	constructor(config: AxiosRequestConfig) {
		this.service = axios.create(config);

		this.service.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				NProgress.start();
				axiosCanceler.addPending(config);
				showFullScreenLoading();
				return config;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			},
		);

		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data, config } = response;
				NProgress.done();
				hideFullScreenLoading();
				axiosCanceler.removePending(config);
				if (data.code && data.code !== 200) {
					message.error(data.message);
					return Promise.reject(data);
				}
				return data.data;
			},
			async (err: AxiosError) => {
				const { response } = err;
				NProgress.done();
				hideFullScreenLoading();
				if (err.code === 'ERR_CANCELED') {
					return Promise.resolve({ status: 499 });
				}
				if (err.message.indexOf('timeout') !== -1)
					message.error('请求超时，请稍后再试');
				if (response) checkStatus(response.status);
				if (!window.navigator.onLine) window.location.hash = '/500';
				return Promise.reject(err);
			},
		);
	}

	// * 常用请求方法封装
	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(
		url: string,
		params?: object,
		_object = {},
	): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
}

export default new RequestHttp(config);
