import { RouteObject } from '@/routers/interface';
import Home from '@/views/home';

const homeRouter: Array<RouteObject> = [
	{
		path: '/home/index',
		element: <Home />,
		meta: {
			title: '主页',
			requiresAuth: false,
			key: 'home',
		},
	},
];

export default homeRouter;
