import { Button, Card, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { provincias, tipoEmpleo } from '../../../const';
import { fetchOneRecruiter, postOferta } from '../../../api';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsersSuccess,
  fetchUsersRequest,
  fetchUsersFailure,
} from '../../../redux';
import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const MyPosts = () => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const { user } = useSelector(state => state.user);
  console.log(user);

  const [updatePage, setUpdatePage] = useState(false);
  const handleUpdatePage = () => setUpdatePage(!updatePage);

  useEffect(() => {
    dispatch(fetchUsersRequest());
    fetchOneRecruiter(user.id)
      .then(res => {
        const recruiter = {
          ...res,
          ofertas: (() =>
            res.ofertas.sort(
              (a, b) =>
                new Date(b.FechaPublicacion) - new Date(a.FechaPublicacion)
            ))(),
        };

        dispatch(fetchUsersSuccess(recruiter));
      })
      .catch(e => fetchUsersFailure(e));
  }, [updatePage]);

  const onPost = values => {
    postOferta({
      ...values,
      recluter: user.id,
      FechaPublicacion: new Date(),
    });
    form.resetFields();
    handleUpdatePage();
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <div className='student-container'>
        <Card title='NUEVA OFERTA LABORAL'>
          <Form onFinish={onPost} form={form}>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Form.Item name='Titulo'>
                <Input placeholder='Titulo' />
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
            <Form.Item name='Descripcion'>
              <Input.TextArea placeholder='Descripcion' />
            </Form.Item>

            <Form.Item name='Requisitos'>
              <Input.TextArea placeholder='Requisitos' />
            </Form.Item>

            <Form.Item>
              <Button htmlType='submit'>Publicar</Button>
              <Button htmlType='button' onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      {user.ofertas.map(oferta => (
        <div className='student-container'>
          <Card className='student-card'>
            <p>
              <strong>{oferta.Titulo}</strong>
            </p>
            <p>{oferta.Modalidad}</p>
            <p>{oferta.Lugar}</p>
            <p>
              <strong>Fecha de Publicacion: </strong>
              {dayjs(oferta.FechaPublicacion).locale('es').fromNow()}
            </p>

            <p>
              <strong>Descripcion</strong>
            </p>
            <p>{oferta.Descripcion}</p>
            <p>
              <strong>Requisitos</strong>
            </p>
            <p>{oferta.Requisitos}</p>
          </Card>
        </div>
      ))}
    </>
  );
};

export default MyPosts;
