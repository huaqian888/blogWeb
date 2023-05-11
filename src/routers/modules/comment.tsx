import { RouteObject } from '@/routers/interface';
import Comment from '@/views/comment';

const commentRouter: Array<RouteObject> = [
	{
		path: '/comment/index',
		element: <Comment />,
		meta: {
			title: '评论',
			requiresAuth: true,
			key: 'comment',
		},
	},
];

export default commentRouter;
