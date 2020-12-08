import React from 'react';
import { Modal, Form } from 'antd';
import { AddExperienceForm } from '../../../../components/forms';

const ExperienceModal = ({
	handleExperienceModal,
	initialValues,
	onAddExperience,
}) => {
	const [form] = Form.useForm();

	const onOk = async () => {
		try {
			const values = await form.validateFields();
			await onAddExperience({ ...values, id: initialValues?.id });
			handleExperienceModal();
		} catch (error) {
			console.error('Validate Failed:', error);
		}
	};

	const onRemoveExperience = () => {};
	return (
		<Modal
			visible
			title="Experiencia"
			okText="Guardar"
			cancelText="Cancelar"
			onCancel={handleExperienceModal}
			onOk={onOk}
		>
			<AddExperienceForm form={form} initialValues={initialValues} />
		</Modal>
	);
};

export default ExperienceModal;
