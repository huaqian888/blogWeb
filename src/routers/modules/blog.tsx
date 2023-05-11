import { RouteObject } from '@/routers/interface';
import BlogEditor from '@/views/blog/editor';
import BlogManage from '@/views/blog/manage';

const blogRouter: Array<RouteObject> = [
	{
		element: <div />,
		children: [
			{
				path: '/blog/manage',
				element: <BlogManage />,
				meta: {
					title: '博客管理',
					requiresAuth: true,
					key: 'blog-manage',
				},
			},
			{
				path: '/blog/editor',
				element: <BlogEditor />,
				meta: {
					title: '博客发布/编辑',
					requiresAuth: true,
					key: 'blog-editor',
				},
			},
		],
	},
];

export default blogRouter;
