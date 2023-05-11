import { RouteObject } from '@/routers/interface';
import User from '@/views/user';

const userRouter: Array<RouteObject> = [
	{
		path: '/user/index',
		element: <User />,
		meta: {
			title: '用户',
			requiresAuth: true,
			key: 'user',
		},
	},
];

export default userRouter;
