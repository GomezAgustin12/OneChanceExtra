import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Layout,
  Upload,
  DatePicker,
  TimePicker,
  Select,
} from 'antd';
import './styles.css';
import logo from '../../assets/OneChance.png';
import { useSelector, useDispatch } from 'react-redux';
import { postRecruiter, postUser } from '../../api';
import { Loader } from '../../components';
import { InboxOutlined } from '@ant-design/icons';
import Axios from 'axios';
import { provincias } from '../../const';

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const { Option } = Select;

const Registerrecruiter = () => {
  const [foto, setFoto] = useState();

  const onFinish = async values => {
    try {
      const { user } = await postUser({
        nombre: values.name,
        apellido: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password,
        Provincia: values.Provincia,
        AppRole: 'recruiter',
      });
      console.log(user);
      uploadFoto(user.id);
      await postRecruiter({ empresa: values.company, user: user.id });
    } catch (error) {
      console.log(error.message);
    }
  };

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.user);

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onChange = event => {
    console.log(event.target.files[0]);
    setFoto(event.target.files[0]);
  };

  const uploadFoto = async id => {
    console.log(id);
    try {
      const fd = new FormData();
      fd.append('formato', 'jpg');
      fd.append('id', id);
      fd.append('foto', foto);
      const res = await Axios.post('http://18.230.70.184:3000/upload', fd);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

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
            label='Contraseña'
            name='password'
            rules={[{ required: true, message: 'Ingrese Contraseña!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label='Correo'
            name='email'
            rules={[{ required: true, message: 'Ingrese correo' }]}
          >
            <Input type='email' />
          </Form.Item>
          <Form.Item
            label='Empresa'
            name='company'
            rules={[{ required: true, message: 'Ingrese empresa' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='Provincia'
            label='Provincia'
            hasFeedback
            rules={[{ required: true, message: 'Ingrese su provincia' }]}
          >
            <Select placeholder='Please select a country'>
              {provincias.map(e => (
                <Option value={e}>{e}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label='Foto de Perfil'>
            <div className='register-logo'>
              <label title='Seleccione foto de perfil' />
              <input
                type='file'
                placeholder='Foto de Perfil'
                onChange={onChange}
              />
            </div>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Registrarme
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

export default Registerrecruiter;
