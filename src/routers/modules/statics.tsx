import { RouteObject } from '@/routers/interface';
import Statics from '@/views/statics';

const staticsRouter: Array<RouteObject> = [
	{
		path: '/statics/index',
		element: <Statics />,
		meta: {
			title: '统计',
			requiresAuth: false,
			key: 'statics',
		},
	},
];

export default staticsRouter;
