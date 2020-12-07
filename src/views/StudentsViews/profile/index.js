import React, { useState } from 'react';
import { Button, Card, Divider, Form } from 'antd';
import {
  CloseOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import Modal from 'antd/lib/modal/Modal';
import { putStudent } from '../../../api';
import 'dayjs/locale/es';
import { Loader } from '../../../components';
import { UpdateResumeForm } from '../../../components/forms';

// Local components
import {
  ExperienceCard,
  ExperienceModal,
  EducationCard,
  EducationModal,
} from './components';

// Sideeffects
import {
  addEducation,
  addExperience,
  removeExperience,
  removeEducation,
  resetView,
} from './sideeffects';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => state.user);

  const [experienceModal, setExperienceModal] = useState(false);
  const [educacionModal, setEducacionModal] = useState(false);
  const [resumeModal, setResumeModal] = useState(false);
  const [form] = Form.useForm();

  // Modals initial values for edit
  const [experienceInitialValues, setExperienceInitialValues] = useState(null);
  const [educationInitialValues, setEducationInitialValues] = useState(null);

  // Tambien se podria tener un solo modal en vez de varios y asi manejar todos con una sola func
  const handleExperienceModal = (initialValues = null) => {
    setExperienceInitialValues(initialValues);
    setExperienceModal(!experienceModal);
  };
  const handleEducacionModal = (initialValues = null) => {
    setEducationInitialValues(initialValues);
    setEducacionModal(!educacionModal);
  };
  const handleResumeModal = () => setResumeModal(!resumeModal);

  //---------------------------UPDATE SECTION--------------------------
  const updateResume = e => {
    putStudent(user._id, e);
  };

  // Se puede crear una clase que maneje todo esto en vez de tener uno para cada accion
  const onAddExperience = async values => {
    const response = await addExperience(user, values);
    if (response.statusText === 'OK') {
      resetView(user._id, dispatch);
    }
    // Handle error code here ...
  };

  const onRemoveExperience = async id => {
    const response = await removeExperience(id);
    if (response?.statusText === 'OK') {
      resetView(user._id, dispatch);
    }
    // Handle error code here ...
  };

  const onAddEducation = async values => {
    const response = await addEducation(user, values);
    if (response.statusText === 'OK') {
      return resetView(user._id, dispatch);
    }
    // Handle error code here ...
  };

  const onRemoveEducation = async id => {
    const response = await removeEducation(id);
    if (response?.statusText === 'OK') {
      return resetView(user._id, dispatch);
    }
    // Handle error code here ...
  };

  return (
    <>
      {loading && <Loader />}
      {/* ------------------DATOS PERSONALES--------------------- */}
      <Card size='small' className='profile-data'>
        <img
          className='profile-image'
          width={200}
          src='https://i.ytimg.com/vi/03Tu8DOMDnU/maxresdefault.jpg'
          alt='profile'
        />
        <div className='exp-card-actions'>
          <EditOutlined onClick={handleResumeModal} />
          <CloseOutlined />
        </div>
        <div className='profile-personal'>
          <h1>{`${user.user.nombre} ${user.user.apellido}`}</h1>

          <p>{user.Facultad}</p>
          <p>Corrientes, Argentina</p>
        </div>
      </Card>
      {/* ---------------------------RESUMEN--------------------------- */}
      <Card className='profile-resume'>
        <div className='exp-card-actions'>
          <h1>RESUMEN</h1>
          <EditOutlined />
          <CloseOutlined />
        </div>
        <Divider />
        <p>{user.Resumen}</p>
        <Divider />
        <Button icon={<PlusCircleOutlined />}>Editar Resumen</Button>
      </Card>
      {/* ---------------------EXPERIENCIAS---------------------------- */}
      <Card className='profile-resume'>
        <h1>Experiencias</h1>
        {user.experiencias?.map((experience, i) => (
          <ExperienceCard
            key={i}
            experience={experience}
            onEdit={handleExperienceModal}
            onRemove={onRemoveExperience}
          />
        ))}
        <Divider />
        <Button onClick={handleExperienceModal} icon={<PlusCircleOutlined />}>
          Agregar Experiencia
        </Button>
      </Card>
      {/* ----------------------------EDUCACION------------------------- */}
      <Card size='small' className='profile-resume'>
        <h1>Educacion</h1>
        {user.educacion?.map((edu, i) => (
          <EducationCard
            education={edu}
            key={i}
            onEdit={handleEducacionModal}
            onRemove={onRemoveEducation}
          />
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
      {experienceModal && (
        <ExperienceModal
          handleExperienceModal={handleExperienceModal}
          initialValues={experienceInitialValues}
          onAddExperience={onAddExperience}
        />
      )}
      {/* ----------------------MODAL DE EDUCACION...................... */}
      {educacionModal && (
        <EducationModal
          handleEducationModal={handleEducacionModal}
          initialValues={educationInitialValues}
          onAddEducation={onAddEducation}
        />
      )}
    </>
  );
};

export default Profile;
