import { useEffect } from 'react';

import { test } from '@/api/modules/user';

const Login = () => {
	useEffect(() => {
		test();
	}, []);
	return <div>1</div>;
};

export default Login;
