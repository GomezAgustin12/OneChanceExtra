import React from 'react';
import { Form, Input, Button, Card, Layout } from 'antd';
import './styles.css';
import logo from '../../assets/OneChance.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from '../../redux';
import { login } from '../../api';
import { Loader } from '../../components';

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Register = () => {
  const onFinish = async values => {
    try {
      dispatch(fetchUsersRequest());
      const res = await login(values);
      dispatch(fetchUsersSuccess(res));
    } catch (error) {
      dispatch(fetchUsersFailure());
    }
  };

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.user);

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Content className='login-page-container'>
      {loading && <Loader />}
      <Card className='login-form-container'>
        <div className='login-logo'>
          <img src={logo} alt='logo' />
        </div>
        <Form
          {...layout}
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Nombre'
            name='name'
            rules={[{ required: true, message: 'Ingrese nombre' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Apellido'
            name='lastName'
            rules={[{ required: true, message: 'Ingrese apellido' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Correo'
            name='email'
            rules={[{ required: true, message: 'Ingrese correo' }]}
          >
            <Input type='email' />
          </Form.Item>
          <Form.Item
            label='Universidad'
            name='university'
            rules={[{ required: true, message: 'Ingrese universidad' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Ingrese username' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Ingrese password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <a href='/' style={{ marginLeft: '15px' }}>
              Atras
            </a>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};

export default Register;
