import { Button, Card, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { provincias, tipoEmpleo } from '../../../const';
import { fetchOfertas, postOferta } from '../../../api';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const { Option } = Select;

const MyPosts = () => {
  const { user } = useSelector(state => state.user);
  console.log(user);
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    fetchOfertas().then(res => setOfertas(res));
  }, []);

  const onPost = values => {
    postOferta({ ...values, recluter: user.id, FechaPublicacion: dayjs() });
  };

  return (
    <>
      <div className='student-container'>
        <Card>
          <Form onFinish={onPost}>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Form.Item name='Titulo' label='Titulo'>
                <Input />
              </Form.Item>
              <Form.Item name='Modalidad'>
                <Select placeholder='Modalidad'>
                  {tipoEmpleo.map(e => (
                    <Option value={e}>{e}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name='Lugar'>
                <Select placeholder='Provincia'>
                  {provincias.map(e => (
                    <Option value={e}>{e}</Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <Form.Item name='Descripcion' label='Descripcion'>
              <Input.TextArea />
            </Form.Item>
            <Form.Item name='Requisitos' label='Requisitos'>
              <Input.TextArea />
            </Form.Item>

            <Form.Item>
              <Button htmlType='submit'>Publicar</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      {ofertas.map(oferta => (
        <div className='student-container'>
          <Card className='student-card'>
            <p>
              <strong>{oferta.Titulo}</strong>
            </p>
            <p>{oferta.Modalidad}</p>
            <p>{oferta.Lugar}</p>
            <p>{oferta.FechaPublicacion}</p>
            <p>{oferta.Requisitos}</p>
            <p>{oferta.Descripcion}</p>
          </Card>
        </div>
      ))}
    </>
  );
};

export default MyPosts;
