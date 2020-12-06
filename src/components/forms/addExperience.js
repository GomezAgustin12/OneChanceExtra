import React from 'react';
import { DatePicker, Input } from 'antd';
import { Form } from 'antd';

const AddExperienceForm = ({ form }) => (
  <Form
    form={form}
    layout='vertical'
    name='form_in_modal'
    initialValues={{ modifier: 'public' }}
  >
    <Form.Item
      name='Puesto'
      label='Puesto'
      rules={[
        {
          required: true,
          message: 'Ingrese un Puesto',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name='Empresa'
      label='Empresa'
      rules={[
        {
          required: true,
          message: 'Ingrese una Empresa',
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

export default AddExperienceForm;
