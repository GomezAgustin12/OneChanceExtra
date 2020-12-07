import React, { useState } from 'react';
import { Button, Card, Divider, Form } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import Modal from 'antd/lib/modal/Modal';
import { putStudent } from '../../../api';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { Loader } from '../../../components';
import { AddEducationForm, UpdateResumeForm } from '../../../components/forms';

// Local components
import { ExperienceCard, ExperienceModal } from './components';

// Sideeffects
import { addExperience, resetView, removeExperience } from './sideeffects';

const Profile = () => {
	const dispatch = useDispatch();
	const { user, loading } = useSelector((state) => state.user);

	const [experienceModal, setExperienceModal] = useState(false);
	const [educacionModal, setEducacionModal] = useState(false);
	const [resumeModal, setResumeModal] = useState(false);
	const [form] = Form.useForm();

	// Modals initial values for edit
	const [experienceInitialValues, setExperienceInitialValues] = useState(null);

	const handleExperienceModal = (initialValues = null) => {
		setExperienceInitialValues(initialValues);
		setExperienceModal(!experienceModal);
	};
	const handleEducacionModal = () => setEducacionModal(!educacionModal);
	const handleResumeModal = () => setResumeModal(!resumeModal);

	//---------------------------UPDATE SECTION--------------------------
	const updateResume = (e) => {
		putStudent(user._id, e);
	};

	const onAddExperience = async (values) => {
		const response = await addExperience(user, values);
		if (response.statusText === 'OK') {
			resetView(user._id, dispatch);
		}
	};

	const onRemoveExperience = async (id) => {
		const response = await removeExperience(id);
		if (response?.statusText === 'OK') {
			resetView(user._id, dispatch);
		}
	};

	const addEdu = (values) => {
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

	const onUpload = (value) => {
		console.log(value);
	};
	const normFile = (e) => {
		console.log('Upload event:', e);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	return (
		<>
			{loading && <Loader />}
			{/* ------------------DATOS PERSONALES--------------------- */}
			<Card size="small" className="profile-data">
				<img
					className="profile-image"
					width={200}
					src="https://i.ytimg.com/vi/03Tu8DOMDnU/maxresdefault.jpg"
					alt="profile"
				/>
				<div className="profile-personal">
					<h1>{`${user.user.nombre} ${user.user.apellido}`}</h1>

					<p>{user.Facultad}</p>
					<p>Corrientes, Argentina</p>
				</div>
			</Card>
			{/* ---------------------------RESUMEN--------------------------- */}
			<Card className="profile-resume">
				<h1>RESUMEN</h1>
				<Divider />
				<p>{user.Resumen}</p>
				<Divider />
				<Button onClick={handleResumeModal} icon={<PlusCircleOutlined />}>
					Editar Resumen
				</Button>
			</Card>
			{/* ---------------------EXPERIENCIAS---------------------------- */}
			<Card className="profile-resume">
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
			<Card size="small" className="profile-resume">
				<h1>Educacion</h1>
				{user.Educacion?.array.map((edu) => (
					<>
						<Divider />
						<p className="profile-role">{edu.NombreCurso}</p>
						<p className="profile-company">{edu.Instituto}</p>
						<p className="profile-period">{`${dayjs(edu.FechaInicio, 'MMMM YY')
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
				title="Resumen"
				okText="Guardar"
				cancelText="Cancelar"
				onCancel={handleResumeModal}
				onOk={() => {
					form
						.validateFields()
						.then((values) => {
							form.resetFields();
							updateResume(values);
						})
						.catch((info) => {
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
			<Modal
				visible={educacionModal}
				title="Educacion"
				okText="Guardar"
				cancelText="Cancelar"
				onCancel={handleEducacionModal}
				onOk={() => {
					form
						.validateFields()
						.then((values) => {
							form.resetFields();
							addEdu(values);
							handleEducacionModal();
						})
						.catch((info) => {
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
