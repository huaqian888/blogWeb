import http from '@/api';

export const test = () => {
	return http.post('/user/login', { userName: '1', passwd: '1' });
};
