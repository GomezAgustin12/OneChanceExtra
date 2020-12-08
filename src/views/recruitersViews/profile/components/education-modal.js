import React from 'react';
import { Modal, Form } from 'antd';
import { AddEducationForm } from '../../../../components/forms';

const EducationModal = ({
	handleEducationModal,
	initialValues,
	onAddEducation,
}) => {
	const [form] = Form.useForm();

	const onOk = async () => {
		try {
			const values = await form.validateFields();
			await onAddEducation({ ...values, id: initialValues?.id });
			handleEducationModal();
		} catch (error) {
			console.error('Validate Failed:', error);
		}
	};

	return (
		<Modal
			visible
			title="Educacion"
			okText="Guardar"
			cancelText="Cancelar"
			onCancel={handleEducationModal}
			onOk={onOk}
		>
			<AddEducationForm form={form} initialValues={initialValues} />
		</Modal>
	);
};

export default EducationModal;
