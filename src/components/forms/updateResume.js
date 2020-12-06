import { Form, Input } from 'antd';
import React from 'react';

const UpdateResumeForm = ({ form }) => (
  <Form
    form={form}
    layout='vertical'
    name='form_in_modal'
    initialValues={{ modifier: 'public' }}
  >
    <Form.Item
      name='Resumen'
      label='Resumen'
      rules={[
        {
          required: true,
          message: 'Ingrese un resumen',
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>
  </Form>
);

export default UpdateResumeForm;
