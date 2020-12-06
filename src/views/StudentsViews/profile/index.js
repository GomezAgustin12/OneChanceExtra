import React, { useState } from 'react';
import { Button, Card, Divider, Input, Form, DatePicker, Upload } from 'antd';
import './style.css';
import { PlusCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Modal from 'antd/lib/modal/Modal';
import { putStudent } from '../../../api';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import {
  AddExperienceForm,
  AddEducationForm,
  UpdateResumeForm,
} from '../../../components/forms';

const Profile = () => {
  const { user } = useSelector(state => state.user);
  console.log(user);

  const [experienceModal, setExperienceModal] = useState(false);
  const [educacionModal, setEducacionModal] = useState(false);
  const [resumeModal, setResumeModal] = useState(false);
  const handleExperienceModal = () => setExperienceModal(!experienceModal);
  const handleEducacionModal = () => setEducacionModal(!educacionModal);
  const [form] = Form.useForm();
  const handleResumeModal = () => setResumeModal(!resumeModal);

  //---------------------------UPDATE SECTION--------------------------
  const updateResume = e => {
    putStudent(user._id, e);
  };

  const addExperience = values => {
    if (!user.Experiencias) {
      putStudent(user._id, {
        Experiencias: {
          array: [values],
        },
      });
      return;
    }
    putStudent(user._id, {
      Experiencias: {
        array: [...user.Experiencias?.array, values],
      },
    });
  };

  const addEdu = values => {
    console.log('User', user);
    if (!user.Educacion) {
      putStudent(user._id, {
        Educacion: {
          array: [values],
        },
      });
      return;
    }
    putStudent(user._id, {
      Educacion: {
        array: [...user.Educacion?.array, values],
      },
    });
  };

  const onUpload = value => {
    console.log(value);
  };
  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      {/* ------------------DATOS PERSONALES--------------------- */}
      <Card size='small' className='profile-data'>
        <img
          className='profile-image'
          width={200}
          src='https://i.ytimg.com/vi/03Tu8DOMDnU/maxresdefault.jpg'
          alt='profile'
        />
        <div className='profile-personal'>
          <h1>{`${user.user.nombre} ${user.user.apellido}`}</h1>

          <p>{user.Facultad}</p>
          <p>Corrientes, Argentina</p>
        </div>
      </Card>
      {/* ---------------------------RESUMEN--------------------------- */}
      <Card className='profile-resume'>
        <h1>RESUMEN</h1>
        <Divider />
        <p>{user.Resumen}</p>
        <Divider />
        <Button onClick={handleResumeModal} icon={<PlusCircleOutlined />}>
          Editar Resumen
        </Button>
      </Card>
      {/* ---------------------EXPERIENCIAS---------------------------- */}
      <Card className='profile-resume'>
        <h1>Experiencias</h1>
        {user.Experiencias?.array.map(experiencia => (
          <>
            <Divider />
            <p className='profile-role'>{experiencia.Puesto}</p>
            <p className='profile-company'>{experiencia.Empresa}</p>
            <p className='profile-period'>{`${dayjs(
              experiencia.FechaInicio,
              'MMMM YY'
            )
              .locale('es')
              .format('MMMM YY')} - ${dayjs(experiencia.FechaFin, 'MMMM YY')
              .locale('es')
              .format('MMMM YY')} `}</p>
          </>
        ))}
        <Divider />
        <Button onClick={handleExperienceModal} icon={<PlusCircleOutlined />}>
          Agregar Experiencia
        </Button>
      </Card>
      {/* ----------------------------EDUCACION------------------------- */}
      <Card size='small' className='profile-resume'>
        <h1>Educacion</h1>
        {user.Educacion?.array.map(edu => (
          <>
            <Divider />
            <p className='profile-role'>{edu.NombreCurso}</p>
            <p className='profile-company'>{edu.Instituto}</p>
            <p className='profile-period'>{`${dayjs(edu.FechaInicio, 'MMMM YY')
              .locale('es')
              .format('MMMM YY')} - ${dayjs(edu.FechaFin, 'MMMM YY')
              .locale('es')
              .format('MMMM YY')} `}</p>
          </>
        ))}
        <Divider />
        <Button onClick={handleEducacionModal} icon={<PlusCircleOutlined />}>
          Agregar Educacion
        </Button>
      </Card>

      {/* ------------------------MODAL RESUMEN-------------------- */}
      <Modal
        visible={resumeModal}
        title='Resumen'
        okText='Guardar'
        cancelText='Cancelar'
        onCancel={handleResumeModal}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              updateResume(values);
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <UpdateResumeForm form={form} />
      </Modal>
      {/* ----------------------MODAL DE EXPERIENCIA ...................... */}
      <Modal
        visible={experienceModal}
        title='Experiencia'
        okText='Guardar'
        cancelText='Cancelar'
        onCancel={handleExperienceModal}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              addExperience(values);
              handleExperienceModal();
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <AddExperienceForm form={form} />
      </Modal>
      {/* ----------------------MODAL DE EDUCACION...................... */}
      <Modal
        visible={educacionModal}
        title='Educacion'
        okText='Guardar'
        cancelText='Cancelar'
        onCancel={handleEducacionModal}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              addEdu(values);
              handleEducacionModal();
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <AddEducationForm form={form} />
      </Modal>
      {/* <Form onFinish={onUpload}>
        <Form.Item
          name='upload'
          label='Upload'
          valuePropName='fileList'
          getValueFromEvent={normFile}
        >
          <Upload
            name='logo'
            method='POST'
            action='http://18.230.70.184:3000/aws'
            listType='picture'
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form> */}
    </>
  );
};

export default Profile;
