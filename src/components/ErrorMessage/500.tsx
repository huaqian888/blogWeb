import './index.less';

import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import { HOME_PATH } from '@/config/config';

const NotNetwork = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate(HOME_PATH);
	};
	return (
		<Result
			status="500"
			title="500"
			subTitle="出现错误了，请重新尝试！"
			extra={
				<Button type="primary" onClick={goHome}>
					回到首页
				</Button>
			}
		/>
	);
};

export default NotNetwork;
