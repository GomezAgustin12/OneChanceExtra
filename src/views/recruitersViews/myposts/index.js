import { Card, Form, Input, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import React, { useEffect, useState } from 'react';
import { provincias } from '../../../const';

const MyPosts = () => {
  const onPost = values => {
    console.log(values);
  };

  return (
    <>
      <Card>
        <Form onFinish={onPost}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Form.Item label='Titulo'>
              <Input />
            </Form.Item>
            <Form.Item label='Modalidad'>
              <Input />
            </Form.Item>
            <Form.Item name='provincia' label='Provincia' hasFeedback>
              <Select placeholder='Provincia'>
                {provincias.map(e => (
                  <Option value={e}>{e}</Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <Form.Item label='Descripcion'>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label='Requisitos'>
            <Input />
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default MyPosts;
