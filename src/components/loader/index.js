import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './styles.css';

const Loader = ({ type = '' }) => (
  <div
    className={`loader ${type !== 'inline' ? 'fixed-loader' : 'inline-loader'}`}
  >
    <LoadingOutlined size='64' />
  </div>
);

export default Loader;
