import React from 'react';
import { DatePicker, Form, Input } from 'antd';
import dayjs from 'dayjs';

const addEducationForm = ({ form, initialValues = null }) => (
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
			name="Curso"
			label="Nombre del Curso"
			rules={[
				{
					required: true,
					message: 'Ingrese un nombre del curso',
				},
			]}
		>
			<Input />
		</Form.Item>
		<Form.Item
			name="Instituto"
			label="Instituto"
			rules={[
				{
					required: true,
					message: 'Ingrese una instituto',
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

export default addEducationForm;
