import React from 'react';
import { Form, Input, Button, Checkbox, Card, Layout } from 'antd';
import './styles.css';
import logo from "../../assets/OneChance.png";
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from "../../redux";
import { fetchUsers } from "../../api";

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };
  
  const dispatch = useDispatch()
  
  const { loading } = useSelector(state => state.user)



  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onSubmit = async () => {
    try {
      dispatch(fetchUsersRequest())
      const res = await fetchUsers()
      dispatch(fetchUsersSuccess(res))
    } catch (error) {
      dispatch(fetchUsersFailure())
    }
  }

  return (
    <Content className="login-page-container">
      {loading && <h1>CARGANDO</h1>}
      <Card className="login-form-container">
      <div className='login-logo'>
        <img src={logo} alt='logo'  />
      </div>
        <Form
          {...layout}
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Username'
            name='username'
            // rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            // rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit' onClick={onSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};

export default Login;
