import './index.less';

import { Spin } from 'antd';

const Loading = ({ tip = 'Loading' }: { tip?: string }) => {
	return <Spin tip={tip} size="large" className="loading " />;
};

export default Loading;
