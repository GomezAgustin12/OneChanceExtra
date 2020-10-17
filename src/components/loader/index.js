import React from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import './styles.css';

const Loader = ({ type = '' }) => (
	<div
		className={`loader ${type !== 'inline' ? 'fixed-loader' : 'inline-loader'}`}
	>
		<Loading3QuartersOutlined />
	</div>
);

export default Loader;
