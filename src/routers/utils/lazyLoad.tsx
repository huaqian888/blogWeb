import React, { Suspense } from 'react';
import { Spin } from 'antd';

const lazyLoad = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Comp: React.LazyExoticComponent<any>,
): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<Spin
					size="large"
					className="flex flex-justify-center flex-items-center h-full"
				></Spin>
			}
		>
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
