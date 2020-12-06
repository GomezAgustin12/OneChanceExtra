import { DatePicker, Form, Input } from 'antd';
import React from 'react';

const addEducationForm = ({ form }) => (
  <Form
    form={form}
    layout='vertical'
    name='form_in_modal'
    initialValues={{ modifier: 'public' }}
  >
    <Form.Item
      name='NombreCurso'
      label='Nombre del Curso'
      rules={[
        {
          required: true,
          message: 'Ingrese un nombre del curso',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name='Instituto'
      label='Instituto'
      rules={[
        {
          required: true,
          message: 'Ingrese una instituto',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item name='FechaInicio' label='Fecha Inicio'>
      <DatePicker picker='month' />
    </Form.Item>
    <Form.Item name='FechaFin' label='Fecha Fin'>
      <DatePicker picker='month' />
    </Form.Item>
  </Form>
);

export default addEducationForm;
