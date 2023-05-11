import { RouteObject } from '@/routers/interface';
import TwitterEditor from '@/views/twiiter/editor';
import TwitterManage from '@/views/twiiter/manage';

const twitterRouter: Array<RouteObject> = [
	{
		element: <div></div>,
		children: [
			{
				path: '/twitter/manage',
				element: <TwitterManage />,
				meta: {
					title: '说说管理',
					requiresAuth: true,
					key: 'twitter-manage',
				},
			},
			{
				path: '/twitter/editor',
				element: <TwitterEditor />,
				meta: {
					title: '说说发布/编辑',
					requiresAuth: true,
					key: 'twitter-editor',
				},
			},
		],
	},
];

export default twitterRouter;
