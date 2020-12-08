import React, { useEffect } from 'react';
import { DatePicker, Input } from 'antd';
import dayjs from 'dayjs';
import { Form } from 'antd';

const AddExperienceForm = ({ form, initialValues = null }) => {
	useEffect(() => {
		return form.resetFields();
	});
	return (
		<Form
			form={form}
			layout="vertical"
			name="form_in_modal"
			initialValues={{
				modifier: 'public',
				...(initialValues && {
					...initialValues,
					FechaInicio: dayjs(initialValues.FechaInicio),
					FechaFin: dayjs(initialValues.FechaFin),
				}),
			}}
		>
			<Form.Item
				name="Puesto"
				label="Puesto"
				rules={[
					{
						required: true,
						message: 'Ingrese un Puesto',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="Empresa"
				label="Empresa"
				rules={[
					{
						required: true,
						message: 'Ingrese una Empresa',
					},
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item name="FechaInicio" label="Fecha Inicio">
				<DatePicker picker="month" />
			</Form.Item>
			<Form.Item name="FechaFin" label="Fecha Fin">
				<DatePicker picker="month" />
			</Form.Item>
		</Form>
	);
};

export default AddExperienceForm;
