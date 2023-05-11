import axios, { AxiosRequestConfig, Canceler } from 'axios';
import qs from 'qs';

import { isFunction } from '../../utils/is';

let pendingMap = new Map<string, Canceler>();

const getPendingUrl = (config: AxiosRequestConfig): string => {
	return [
		config.url,
		config.method,
		qs.stringify(config.data),
		qs.stringify(config.params),
	].join('&');
};

export class AxiosCanceler {
	/**
	 *
	 * @param config 请求参数
	 * @description 添加请求
	 */
	addPending(config: AxiosRequestConfig) {
		this.removePending(config);
		const url = getPendingUrl(config);
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken((cancel) => {
				if (!pendingMap.has(url)) {
					pendingMap.set(url, cancel);
				}
			});
	}
	/**
	 *
	 * @param config
	 * @description 取消请求
	 */
	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);
		if (pendingMap.has(url)) {
			const cancel = pendingMap.get(url);
			cancel && cancel();
			pendingMap.delete(url);
		}
	}

	/**
	 * @description 取消所有请求
	 */
	removeAllPending() {
		pendingMap.forEach((cancel) => {
			cancel && isFunction(cancel) && cancel();
		});
		pendingMap.clear();
	}

	/**
	 * @description 重置所有请求
	 */
	resetPending() {
		pendingMap = new Map<string, Canceler>();
	}
}
