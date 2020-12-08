import React, { useEffect, useState } from 'react';
import { Button, Card, Divider, Form } from 'antd';
import {
  CloseOutlined,
  EditOutlined,
  InboxOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import Modal from 'antd/lib/modal/Modal';
import {
  fetchOneStudent,
  fetchOneUser,
  fetchOneUser2,
  putStudent,
} from '../../../api';
import 'dayjs/locale/es';
import { DatosPersonales, Loader } from '../../../components';
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
import Axios from 'axios';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  updateUserData,
} from '../../../redux/user/userActions';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(state => state.user);

  const [experienceModal, setExperienceModal] = useState(false);
  const [educacionModal, setEducacionModal] = useState(false);
  const [resumeModal, setResumeModal] = useState(false);
  const [experiencias, setExperiencias] = useState([]);
  const [educacion, setEducacion] = useState([]);
  const [fotoModal, setFotoModal] = useState();
  const [foto, setFoto] = useState();
  const [updatePage, setUpdatePage] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    console.log('ENTRE');
    fetchOneStudent(user.id).then(res => {
      dispatch(fetchUsersSuccess(res));
    });
    fetchOneUser(user.user.id).then(res => {
      setExperiencias(res.experiencias);
      setEducacion(res.educacion);
    });
  }, [updatePage, loading, dispatch]);

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
  const handleFotoModal = () => setFotoModal(!fotoModal);
  const handleUpdatePage = () => setUpdatePage(!updatePage);

  //---------------------------UPDATE SECTION--------------------------
  const updateResume = e => {
    putStudent(user._id, e);
    handleUpdatePage();
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

  const onChange = event => {
    console.log(event.target.files[0]);
    setFoto(event.target.files[0]);
  };

  const onSubmit = async () => {
    try {
      dispatch(updateUserData());
      const fd = new FormData();
      fd.append('formato', 'jpg');
      fd.append('id', user.user.id);
      fd.append('foto', foto);
      const res = await Axios.post('http://18.230.70.184:3000/upload', fd);
      handleUpdatePage();

      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {loading && <Loader />}
      {/* ------------------DATOS PERSONALES--------------------- */}
      <DatosPersonales user={user} handleFotoModal={handleFotoModal} />
      {/* ---------------------------RESUMEN--------------------------- */}
      <Card className='profile-resume'>
        <div className='exp-card-actions'>
          <h1>RESUMEN</h1>
          <EditOutlined onClick={handleResumeModal} />
        </div>
        <Divider />
        <p>{user.Resumen}</p>
      </Card>
      {/* ---------------------EXPERIENCIAS---------------------------- */}
      <Card className='profile-resume'>
        <h1>Experiencias</h1>
        {experiencias?.map((experience, i) => (
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
        {educacion?.map((edu, i) => (
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
              handleResumeModal();
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <UpdateResumeForm form={form} resumen={user.Resumen} />
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
      <Modal
        visible={fotoModal}
        title='Resumen'
        okText='Guardar'
        cancelText='Cancelar'
        onCancel={handleFotoModal}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onSubmit(values);
              handleFotoModal();
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form form={form}>
          <input type='file' placeholder='imagen' onChange={onChange} />
        </Form>
      </Modal>
    </>
  );
};

export default Profile;
