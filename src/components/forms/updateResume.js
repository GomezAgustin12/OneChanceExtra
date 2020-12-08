import { Form, Input } from 'antd';
import React from 'react';

const UpdateResumeForm = ({ form, resumen }) => (
  <Form
    form={form}
    layout='vertical'
    name='form_in_modal'
    initialValues={{ modifier: 'public' }}
  >
    {console.log(resumen)}
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
      <Input.TextArea defaultValue={resumen} />
    </Form.Item>
  </Form>
);

export default UpdateResumeForm;
