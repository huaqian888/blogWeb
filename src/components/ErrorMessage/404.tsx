import './index.less';

import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import { HOME_PATH } from '@/config/config';

const NotFound = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_PATH);
	};
	return (
		<Result
			status="404"
			title="404"
			subTitle="该资源不存在！"
			extra={
				<Button type="primary" onClick={goHome}>
					回到首页
				</Button>
			}
		/>
	);
};

export default NotFound;
