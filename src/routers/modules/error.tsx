import NotAuth from '@/components/ErrorMessage/403';
import NotFound from '@/components/ErrorMessage/404';
import NotNetwork from '@/components/ErrorMessage/500';
import { RouteObject } from '@/routers/interface';

// 错误页面模块
const errorRouter: Array<RouteObject> = [
	{
		path: '/403',
		element: <NotAuth />,
		meta: {
			requiresAuth: true,
			title: '403页面',
			key: '403',
		},
	},
	{
		path: '/404',
		element: <NotFound />,
		meta: {
			requiresAuth: false,
			title: '404页面',
			key: '404',
		},
	},
	{
		path: '/500',
		element: <NotNetwork />,
		meta: {
			requiresAuth: false,
			title: '500页面',
			key: '500',
		},
	},
];

export default errorRouter;
