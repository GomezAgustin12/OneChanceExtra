import React from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Layout,
  Upload,
  DatePicker,
  TimePicker,
} from 'antd';
import './styles.css';
import logo from '../../assets/OneChance.png';
import { useSelector, useDispatch } from 'react-redux';
import { postStudent, postUser } from '../../api';
import { Loader } from '../../components';
import { InboxOutlined } from '@ant-design/icons';

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RegisterStudent = () => {
  const onFinish = async values => {
    try {
      const { user } = await postUser({
        nombre: values.name,
        apellido: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password,
        AppRole: 'student',
      });
      await postStudent({
        Facultad: values.university,
        user: user.id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.user);

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  // const normFile = e => {
  //   console.log('Upload event:', e);
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e && e.fileList;
  // };

  return (
    <Content className='register-page-container'>
      {loading && <Loader />}
      <Card className='register-form-container'>
        <div className='register-logo'>
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
            label='Usuario'
            name='username'
            rules={[{ required: true, message: 'Ingrese usuario' }]}
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
            rules={[{ required: true, message: 'Ingrese facultad' }]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item
            label='Fecha Inico'
            name='fechaInicio'
            extra='Ingrese la fecha en la que comenzo el cursado'
            rules={[{ required: true, message: 'Ingrese Fecha de Inicio' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label='Fecha Fin'
            name='fechaFin'
            extra='Fecha estimada de finalizacion de la carrera'
            rules={[
              {
                type: 'object',
                required: true,
                message: 'Ingrese Fecha de Fin',
              },
            ]}
          >
            <DatePicker />
          </Form.Item> */}
          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Ingrese Contraseña!' }]}
          >
            <Input.Password />
          </Form.Item>
          {/* <Form.Item label='Foto de Perfil'>
            <Form.Item
              name='dragger'
              valuePropName='fileList'
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name='files' action='/upload.do'>
                <p className='ant-upload-drag-icon'>
                  <InboxOutlined />
                </p>
                <p className='ant-upload-text'>Click o arrastre una imagen</p>
                <p className='ant-upload-hint'>Soporta una sola imagen</p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item> */}
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

export default RegisterStudent;
