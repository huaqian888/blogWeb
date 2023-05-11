import { Navigate, useRoutes } from 'react-router-dom';

import { RouteObject } from '@/routers/interface';
import Login from '@/views/login';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const metaRouters: Record<string, any> = import.meta.glob('./modules/*', {
	eager: true,
});

export const routerArray: RouteObject[] = [];

Object.keys(metaRouters).forEach((item) => {
	Object.keys(metaRouters[item]).forEach((key) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

export const rootRouter: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to="/login" />,
	},
	{
		path: '/login',
		element: <Login />,
		meta: {
			key: 'login',
			requiresAuth: false,
			title: '登录页',
		},
	},
	...routerArray,
	{
		path: '*',
		element: <Navigate to="/404" />,
	},
];

const Router = () => {
	const routers = useRoutes(rootRouter);
	return routers;
};

export default Router;
