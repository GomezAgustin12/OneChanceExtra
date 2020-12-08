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
import { postStudent, postUser } from '../../api';
import { Loader } from '../../components';
import { InboxOutlined } from '@ant-design/icons';
import { provincias, universities } from '../../const';
import { Option } from 'antd/lib/mentions';
import Axios from 'axios';

const { Content } = Layout;
const { OptGroup } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RegisterStudent = () => {
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

        AppRole: 'student',
      });
      uploadFoto(user.id);
      await postStudent({
        Facultad: values.university,
        Carrera: values.Carrera,
        FechaInicio: values.FechaInicio,
        FechaFin: values.FechaFin,
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
            label='Password'
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
            label='Universidad'
            name='university'
            rules={[{ required: true, message: 'Ingrese facultad' }]}
          >
            <Select placeholder='Elegir Universidad'>
              {universities.map(e => (
                <OptGroup label={e.provincia}>
                  {e.universidades.map(university => (
                    <>
                      <Option value={university}>{university}</Option>
                    </>
                  ))}
                </OptGroup>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label='Carrera'
            name='Carrera'
            rules={[{ required: true, message: 'Ingrese una carrera' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Fecha Inico'
            name='FechaInicio'
            extra='Ingrese la fecha en la que comenzo el cursado'
            rules={[{ required: true, message: 'Ingrese Fecha de Inicio' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label='Fecha Fin'
            name='FechaFin'
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
              Registrarse
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
