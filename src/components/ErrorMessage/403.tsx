import './index.less';

import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import { HOME_PATH } from '@/config/config';

const NotAuth = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_PATH);
	};
	return (
		<Result
			status="403"
			title="403"
			subTitle="暂无权限访问！"
			extra={
				<Button type="primary" onClick={goHome}>
					回到首页
				</Button>
			}
		/>
	);
};

export default NotAuth;
